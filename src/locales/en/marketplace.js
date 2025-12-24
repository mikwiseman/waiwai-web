export const hero = {
  badge: 'AI Marketplace',
  title: 'Agents for Sales, Hiring, Knowledge Search, and Content',
  description: 'Choose a ready-made agent or connect DeepWai and WaiWai bots to launch search and communication scenarios without development.'
}

export const buttons = {
  presentation: 'Presentation'
}

export const stats = {
  salesFunnelGrowth: 'Sales funnel growth',
  demosPerWeek: 'Demos per week',
  timeToHireReduction: 'Time-to-hire reduction',
  candidatesInPipeline: 'Candidates in pipeline',
  launchTime: 'Launch time',
  autoScenariosLaunched: 'Auto-scenarios launched',
  workshopsConducted: 'Workshops conducted',
  teamsTrainedInAI: 'Teams trained in AI'
}

export const agents = [
  {
    key: 'sales',
    title: 'WaiSales',
    description: 'Automates and boosts sales. Finds potential clients, initiates contact, and maintains dialogue until the deal closes. Improves conversion by learning from successful negotiations.',
    presentationLink: 'https://www.waiconnect.io/',
    stats: [
      { value: '46%', label: 'Sales funnel growth', id: 'sales-stat-0' },
      { value: '12', label: 'Demos per week', id: 'sales-stat-1' }
    ]
  },
  {
    key: 'hr',
    title: 'WaiHR',
    description: 'Based on a given profile, selects candidates, communicates with them, and conducts screening. Also sorts and processes incoming requests. Recruiters only need to choose the best.',
    presentationLink: 'https://www.waiconnect.io/',
    stats: [
      { value: '45%', label: 'Time-to-hire reduction', id: 'hr-stat-0' },
      { value: '180', label: 'Candidates in pipeline', id: 'hr-stat-1' }
    ]
  },
  {
    key: 'custom',
    title: 'WaiCustom',
    description: 'We develop AI agents tailored to corporate needs. We safely integrate solutions into business processes. We define KPIs, continuously improve agents, and take responsibility for their growing effectiveness.',
    stats: [
      { value: '10 days', label: 'Launch time', id: 'custom-stat-0' },
      { value: '9', label: 'Auto-scenarios launched', id: 'custom-stat-1' }
    ]
  },
  {
    key: 'training',
    title: 'WaiUni',
    description: 'We train corporate teams to work with AI: from basics to implementing smart assistants in business processes.',
    presentationLink: 'https://pitch.waiwai.diy/v/wowuni-8aptzr',
    stats: [
      { value: '6', label: 'Workshops conducted', id: 'training-stat-0' },
      { value: '4', label: 'Teams trained in AI', id: 'training-stat-1' }
    ]
  },
  {
    key: 'deepSearch',
    title: 'DeepWai',
    description: 'Deep search across Confluence, Notion, and company archives. Finds answers to complex questions and attaches verified sources.',
    presentationLink: 'https://deepwai.xyz/',
    stats: []
  },
  {
    key: 'summarizer',
    title: 'WaiSummarizer',
    description: 'Telegram bot for summarizing calls, chats, and documents. Returns insights and a list of next steps in a single message.',
    presentationLink: 'https://t.me/wairocks_bot',
    stats: []
  }
]
