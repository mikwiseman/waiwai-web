CREATE TABLE IF NOT EXISTS survey_responses (
  id                     SERIAL PRIMARY KEY,
  q1_ai_creation         VARCHAR(100) NOT NULL,
  q2_barrier             VARCHAR(100) NOT NULL,
  q2_barrier_other       TEXT,
  q3_it_resistance       VARCHAR(100) NOT NULL,
  q3_it_resistance_other TEXT,
  q4_dev_budgets         VARCHAR(100),
  q5_humanities          VARCHAR(100) NOT NULL,
  q5_humanities_other    TEXT,
  q6_processes           VARCHAR(100) NOT NULL,
  q6_processes_other     TEXT,
  q7_team_size           VARCHAR(100) NOT NULL,
  role_and_company       TEXT,
  company_size           VARCHAR(50),
  created_at             TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  ip_address             INET,
  user_agent             TEXT
);
