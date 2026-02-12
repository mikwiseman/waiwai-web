const express = require('express')
const path = require('path')
const { Pool } = require('pg')
const rateLimit = require('express-rate-limit')

const app = express()
const port = process.env.PORT || 3000

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

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
