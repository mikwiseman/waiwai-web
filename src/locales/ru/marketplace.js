export const hero = {
  badge: 'AI-маркетплейс',
  title: 'Агенты для продаж, найма, поиска знаний и контента',
  description: 'Выбирайте готового агента или подключайте DeepWai и ботов WaiWai, чтобы запустить поисковые и коммуникационные сценарии без разработки.'
}

export const buttons = {
  presentation: 'Презентация'
}

export const stats = {
  salesFunnelGrowth: 'Рост воронки продаж',
  demosPerWeek: 'Демо в неделю',
  timeToHireReduction: 'Сокращение time-to-hire',
  candidatesInPipeline: 'Кандидатов в прогреве',
  launchTime: 'Время запуска',
  autoScenariosLaunched: 'Автосценариев запущено',
  workshopsConducted: 'Проведено воркшопов',
  teamsTrainedInAI: 'Команд обучили AI'
}

export const agents = [
  {
    key: 'sales',
    title: 'WaiSales',
    description: 'Автоматизирует и повышает продажи. Находит потенциальных клиентов, устанавливает контакт и ведет диалог до сделки. Повышает конверсию, обучаясь на успешных переговорах.',
    presentationLink: 'https://www.waiconnect.io/',
    stats: [
      { value: '46%', label: 'Рост воронки продаж', id: 'sales-stat-0' },
      { value: '12', label: 'Демо в неделю', id: 'sales-stat-1' }
    ]
  },
  {
    key: 'hr',
    title: 'WaiHR',
    description: 'По заданному портрету подбирает кандидатов, общается с ними и проводит отбор. Также сортирует и обрабатывает входящие запросы. Рекрутерам остается выбрать лучших.',
    presentationLink: 'https://www.waiconnect.io/',
    stats: [
      { value: '45%', label: 'Сокращение time-to-hire', id: 'hr-stat-0' },
      { value: '180', label: 'Кандидатов в прогреве', id: 'hr-stat-1' }
    ]
  },
  {
    key: 'custom',
    title: 'WaiCustom',
    description: 'Разрабатываем AI-агентов под задачи корпораций. Безопасно интегрируем решения в бизнес-процессы. Определяем KPI, постоянно совершенствуем агентов и отвечаем за рост их эффективности.',
    stats: [
      { value: '10 дней', label: 'Время запуска', id: 'custom-stat-0' },
      { value: '9', label: 'Автосценариев запущено', id: 'custom-stat-1' }
    ]
  },
  {
    key: 'training',
    title: 'WaiUni',
    description: 'Обучаем корпоративные команды работе с AI: от основ до внедрения умных помощников в бизнес-процессы.',
    presentationLink: 'https://pitch.waiwai.diy/v/wowuni-8aptzr',
    stats: [
      { value: '6', label: 'Проведено воркшопов', id: 'training-stat-0' },
      { value: '4', label: 'Команд обучили AI', id: 'training-stat-1' }
    ]
  },
  {
    key: 'deepSearch',
    title: 'DeepWai',
    description: 'Глубокий поиск по Confluence, Notion и архивам компании. Находит ответы на сложные вопросы и прикладывает проверенные источники.',
    presentationLink: 'https://deepwai.xyz/',
    stats: []
  },
  {
    key: 'summarizer',
    title: 'WaiSummarizer',
    description: 'Телеграм-бот для саммаризации звонков, переписок и документов. Возвращает инсайты и список next steps в одном сообщении.',
    presentationLink: 'https://t.me/wairocks_bot',
    stats: []
  }
]
