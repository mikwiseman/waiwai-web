const express = require('express')
const path = require('path')
const { Pool } = require('pg')
const rateLimit = require('express-rate-limit')

const app = express()
const port = process.env.PORT || 3000

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL environment variable is required')
  process.exit(1)
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

app.use(express.json())

app.set('trust proxy', 1)

const surveyLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: 'Too many submissions, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
})

const REQUIRED_FIELDS = [
  'q1_ai_creation',
  'q2_barrier',
  'q3_it_resistance',
  'q5_humanities',
  'q6_processes',
  'q7_team_size',
]

const STATS_QUESTIONS = [
  {
    column: 'q1_ai_creation',
    text: 'С AI продукты смогут создавать не айтишники, а профильные специалисты. Насколько вы согласны?',
  },
  {
    column: 'q2_barrier',
    text: 'Что является главным барьером для внедрения AI в вашей компании?',
  },
  {
    column: 'q3_it_resistance',
    text: 'Видите ли вы сопротивление внедрению AI со стороны IT-отдела?',
  },
  {
    column: 'q4_dev_budgets',
    text: 'Вырастут или упадут бюджеты на разработчиков из-за AI?',
  },
  {
    column: 'q5_humanities',
    text: 'Согласны ли вы, что гуманитарные навыки станут важнее в создании цифровых продуктов?',
  },
  {
    column: 'q6_processes',
    text: 'Нужно ли менять процессы создания продуктов под AI?',
  },
  {
    column: 'q7_team_size',
    text: 'Изменится ли численность вашей команды через 2-3 года из-за AI?',
  },
  {
    column: 'company_size',
    text: 'Размер компании',
  },
]

app.get('/api/survey/stats', async (req, res) => {
  const totalResult = await pool.query('SELECT COUNT(*) AS total FROM survey_responses')
  const total = parseInt(totalResult.rows[0].total, 10)

  if (total === 0) {
    return res.json({ total: 0, questions: {} })
  }

  const questions = {}

  const queries = STATS_QUESTIONS.map(async (q) => {
    const result = await pool.query(
      `SELECT ${q.column} AS value, COUNT(*) AS count FROM survey_responses WHERE ${q.column} IS NOT NULL AND ${q.column} != '' GROUP BY ${q.column} ORDER BY count DESC`
    )
    questions[q.column] = {
      text: q.text,
      options: result.rows.map((row) => ({
        label: row.value,
        count: parseInt(row.count, 10),
        percent: Math.round((parseInt(row.count, 10) / total) * 1000) / 10,
      })),
    }
  })

  await Promise.all(queries)

  res.json({ total, questions })
})

app.get('/api/survey/results', async (req, res) => {
  const totalResult = await pool.query('SELECT COUNT(*) AS total FROM survey_responses')
  const totalResponses = parseInt(totalResult.rows[0].total, 10)

  if (totalResponses === 0) {
    return res.set('Cache-Control', 'public, max-age=300').json({ totalResponses: 0, questions: [] })
  }

  const CHART_COLUMNS = [
    'q1_ai_creation', 'q2_barrier', 'q3_it_resistance', 'q4_dev_budgets',
    'q5_humanities', 'q6_processes', 'q7_team_size', 'company_size',
  ]

  const queries = CHART_COLUMNS.map(async (col) => {
    const result = await pool.query(
      `SELECT ${col} AS value, COUNT(*)::int AS count FROM survey_responses WHERE ${col} IS NOT NULL AND ${col} != '' GROUP BY ${col} ORDER BY count DESC`
    )
    const answeredCount = result.rows.reduce((sum, r) => sum + r.count, 0)
    return {
      id: col,
      answeredCount,
      options: result.rows.map((row) => ({
        value: row.value,
        count: row.count,
        percentage: answeredCount > 0 ? Math.round((row.count / answeredCount) * 1000) / 10 : 0,
      })),
    }
  })

  const questions = await Promise.all(queries)
  res.set('Cache-Control', 'public, max-age=300').json({ totalResponses, questions })
})

app.post('/api/survey', surveyLimiter, async (req, res) => {
  const body = req.body

  for (const field of REQUIRED_FIELDS) {
    if (!body[field]) {
      return res.status(400).json({ error: `Missing required field: ${field}` })
    }
  }

  const ip = req.ip
  const userAgent = req.get('User-Agent')

  const query = `
    INSERT INTO survey_responses (
      q1_ai_creation,
      q2_barrier, q2_barrier_other,
      q3_it_resistance, q3_it_resistance_other,
      q4_dev_budgets,
      q5_humanities, q5_humanities_other,
      q6_processes, q6_processes_other,
      q7_team_size,
      role_and_company,
      company_size,
      ip_address,
      user_agent
    ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)
    RETURNING id
  `

  const values = [
    body.q1_ai_creation,
    body.q2_barrier,
    body.q2_barrier_other || null,
    body.q3_it_resistance,
    body.q3_it_resistance_other || null,
    body.q4_dev_budgets || null,
    body.q5_humanities,
    body.q5_humanities_other || null,
    body.q6_processes,
    body.q6_processes_other || null,
    body.q7_team_size,
    body.role_and_company || null,
    body.company_size || null,
    ip,
    userAgent,
  ]

  const result = await pool.query(query, values)
  res.status(201).json({ id: result.rows[0].id })
})

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: 'Internal server error' })
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
