<template>
  <div class="smooth-scroll">
    <div
      id="home"
      class="hero-section"
    >
      <a
        href="https://calendly.com/mikwiseman/hi"
        target="_blank"
        class="contact-button down w-inline-block"
      >
        <div class="button-text">Обсудить проект</div>
      </a>
      <div class="header">
        <a
          href="https://calendly.com/mikwiseman/hi"
          class="contact-button top w-inline-block"
        >
          <div class="button-text">Обсудить проект</div>
        </a>
        <img
          src="@/assets/images/logo_01.svg"
          loading="lazy"
          height="92"
          alt=""
          class="hero-logo-horizontal"
        >
        <img
          src="@/assets/images/logo_01.svg"
          loading="lazy"
          height="92"
          alt=""
          class="hero-logo-vertical"
        >
      </div>
      <div class="mobile-buttons">
        <a
          href="https://calendly.com/mikwiseman/hi"
          target="_blank"
          class="contact-button mobile w-inline-block"
        >
          <div class="button-text">Обсудить проект</div>
        </a>
      </div>
      <div class="bottom-text">
        <h1 class="heading">
          <span class="alpha-50">AI-агенты с тонкой настройкой под ваш бизнес<br></span>
          <span>Измеряем эффективность заработанными деньгами и решенными задачами</span>
        </h1>
      </div>
    </div>
    
    <div class="sliding-content">
      <div
        id="agents"
        class="proj-section agents-section"
      >
        <div class="title-container">
          <div class="section-label">
            АГЕНТЫ
          </div>
        </div>
        <div class="cases-grid">
          <div
            v-for="agent in agentCards"
            :key="agent.key"
            class="case-card"
          >
            <div class="case-header case-header--agent">
              <div class="case-header-content">
                <h3 class="section-subtitle">
                  {{ agent.title }}
                </h3>
                <p>{{ agent.description }}</p>
              </div>
              <a
                v-if="agent.presentationLink"
                :href="agent.presentationLink"
                target="_blank"
                rel="noopener noreferrer"
                class="contact-button-card"
              >
                <span class="contact-button-card-text">
                  Презентация
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        id="faq"
        class="faq-section"
      >
        <div class="title-container">
          <div class="section-label">
            FAQ
          </div>
        </div>
        <div class="cases-grid faq-grid">
          <div
            v-for="item in faqItems"
            :key="item.key"
            class="case-card faq-card"
          >
            <div class="case-header">
              <h3 class="section-subtitle">
                {{ item.question }}
              </h3>
              <p class="faq-answer">
                {{ item.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="cases"
        class="proj-section cases-section"
      >
        <div class="title-container">
          <div class="section-label">
            КЕЙСЫ
          </div>
        </div>
        <div class="cases-grid">
          <div
            v-for="caseItem in caseCards"
            :key="caseItem.key"
            class="case-card"
          >
            <div class="case-header">
              <h3 class="section-subtitle">
                {{ caseItem.title }}
              </h3>
              <p>{{ caseItem.description }}</p>
            </div>
            <div class="case-tags">
              <span
                v-for="(tag, index) in caseItem.tags"
                :key="`tag-${caseItem.key}-${index}`"
                class="case-tag"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Team Section -->
    <div
      id="team"
      class="team-section"
    >
      <div class="title-container">
        <h2 class="title">
          Команда WaiWai
        </h2>
      </div>
      <div class="team-grid">
        <div
          v-for="member in teamMembers"
          :key="member.key"
          class="team-card"
        >
          <div class="team-photo-wrapper">
            <img
              v-if="member.image"
              :src="member.image"
              :alt="member.name"
              class="team-photo"
            >
            <div
              v-else
              class="team-avatar"
            >
              {{ member.initials }}
            </div>
          </div>
          <div class="team-name">
            {{ member.name }}
          </div>
          <div class="team-role">
            {{ member.role }}
          </div>
          <p class="team-description">
            {{ member.description }}
          </p>
        </div>
      </div>
    </div>

    <!-- Media Mentions Section -->
    <div
      id="media"
      class="media-mentions"
    >
      <h2 class="media-title">
        Упоминания в медиа
      </h2>
      <div
        v-for="item in mediaMentions"
        :key="item.key"
        class="media-container"
      >
        <div class="media-name">
          <div class="media-name-title">
            <img
              :src="item.logo"
              :alt="item.name"
              class="media-logo"
            >
          </div>
        </div>
        <div class="media-collection">
          <div class="media-entry">
            <div class="media-article">
              <a
                :href="item.url"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ item.articleTitle }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Awards section -->
    <div
      id="awards"
      class="awards"
    >
      <div class="dot-block">
        <div class="icon-container" />
      </div>
      <h1 class="heading-awards">
        Награды
      </h1>
      <div class="awards-container">
        <div class="award-name">
          <div class="awards-title">
            ETHglobal San Francisco
          </div>
        </div>
        <div class="award-collection">
          <div class="award-entry">
            <div class="medal-gold" />
            <div class="awards-subtitle">
              <a href="https://ethglobal.com/showcase/benderbite-331m7">1 место, номинация AI-collabs (2024)</a>
            </div>
          </div>
        </div>
      </div>
      <div class="awards-container">
        <div class="award-name">
          <div class="awards-title">
            ETHGlobal Brussels
          </div>
        </div>
        <div class="award-collection">
          <div class="award-entry">
            <div class="medal-gold" />
            <div class="awards-subtitle">
              <a href="https://ethglobal.com/showcase/llamarally-52jka">1 место, номинация AI-chat-bots (2024)</a>
            </div>
          </div>
        </div>
      </div>
      <div class="awards-container">
        <div class="award-name">
          <div class="awards-title">
            ETHGlobal Singapore
          </div>
        </div>
        <div class="award-collection">
          <div class="award-entry">
            <div class="medal-bronze" />
            <div class="awards-subtitle">
              <a href="https://ethglobal.com/showcase/veretha-pskzp">3 место, номинация «Web3 services» (2024)</a>
            </div>
          </div>
        </div>
      </div>
      <div class="awards-container">
        <div class="award-name">
          <div class="awards-title">
            AI Conversations 2025
          </div>
        </div>
        <div class="award-collection">
          <div class="award-entry">
            <div class="medal-gold" />
            <div class="awards-subtitle">
              Победитель в номинации «Лучший GenAI стартап» (2025)
            </div>
          </div>
        </div>
      </div>
      <div class="awards-container">
        <div class="award-name">
          <div class="awards-title">
            AI Digital Leaders
          </div>
        </div>
        <div class="award-collection">
          <div class="award-entry">
            <div class="medal-gold" />
            <div class="awards-subtitle">
              Лучший AI стартап (2025)
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Blog Section -->
    <div
      id="blog"
      class="blog"
    >
      <h2 class="blog-title">
        Блог
      </h2>
      <div
        v-if="blogLoading"
        class="blog-status"
      >
        Загружаем статьи...
      </div>
      <div
        v-else-if="blogLoadFailed"
        class="blog-status blog-status--error"
      >
        Не удалось загрузить статьи. Попробуйте позже.
      </div>
      <div
        v-else-if="blogInitialized && featuredBlogPosts.length === 0"
        class="blog-status"
      >
        Пока нет публикаций.
      </div>
      <div
        v-else
        class="blog-cards"
      >
        <article
          v-for="post in featuredBlogPosts"
          :key="post.path"
          class="blog-card"
        >
          <time class="blog-card-date">
            {{ post.formattedDate }}
          </time>
          <h3 class="blog-card-title">
            <a
              class="blog-card-link blog-card-title-link"
              :href="post.path"
            >
              {{ post.title }}
            </a>
          </h3>
          <p
            v-if="post.description"
            class="blog-card-description"
          >
            {{ post.description }}
          </p>
          <a
            class="blog-card-link blog-card-read-more"
            :href="post.path"
          >
            Читать далее
          </a>
        </article>
        <router-link
          class="blog-card-link blog-card-read-more blog-card-read-more--cta"
          :to="{ name: 'blog' }"
        >
          Читать блог
        </router-link>
      </div>
    </div>

    <div
      id="contact"
      class="contact-section"
    >
      <div class="contacts">
        <div class="contacts-container">
          <div class="form-title">
            Контакты
          </div>
          <div class="contacts-wrapper">
            <div class="contact-block">
              <div class="link-container">
                <div class="contact-text label">
                  email:
                </div>
                <a
                  href="mailto:hi@mikwiseman.com"
                  class="contact-text link"
                >hi@mikwiseman.com</a>
              </div>
              <div class="link-container">
                <div class="contact-text label">
                  Telegram:
                </div>
                <a
                  href="https://t.me/mikwiseman"
                  target="_blank"
                  class="contact-text link"
                >@MIKWISEMAN</a>
              </div>
            </div>
            <div class="divider" />
            <div class="address-block">
              <div class="link-container">
                <div class="contact-text label">
                  Телефон:
                </div>
                <p class="address-text">
                  +7 (936) 316-39-61 <br>
                </p>
              </div>
              <div class="link-container">
                <div class="contact-text label">
                  АДРЕС:
                </div>
                <p class="address-text">
                  г.Москва, ул. Большая Садовая, 5/1, 4 этаж
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-container">
        <div class="form-title white" />
        <div
          id="w-node-c93d6324-cde1-923f-b9c7-dece9dafa6f3-b9cd35b6"
          class="foot-logo-container"
        >
          <img
            src="@/assets/images/logo_02.svg"
            loading="lazy"
            width="246"
            alt=""
            class="image-2"
          >
          <div class="footer-bottom">
            <p class="footer-copyright">
              2025 ВСЕ ПРАВА ЗАЩИЩЕНЫ
            </p>
            <a
              href="https://docs.google.com/document/d/1Xh5HF6y-1nSrwcg6mxpdzgU_uz3Q9DNy"
              target="_blank"
              class="footer-copyright footer-link"
            >
              ДОГОВОР ОФЕРТЫ
            </a>
            <p class="footer-copyright">
              ООО "ВАЙВАЙ", ИНН 9714075304
            </p>
          </div>
        </div>
        <a
          href="https://calendly.com/mikwiseman/hi"
          target="_blank"
          class="contact-button-circle"
        >
          <div class="button-text-circle">Обсудить проект</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, ref } from 'vue'
import { fetchBlogPosts, formatBlogDate } from '@/utils/blogPosts'

export default defineComponent({
  name: 'HomePage',
  setup() {
    const blogPosts = ref([])
    const blogLoading = ref(false)
    const blogLoadFailed = ref(false)
    const blogInitialized = ref(false)

    const loadBlogPosts = async () => {
      if (blogLoading.value) {
        return
      }

      blogLoading.value = true
      blogLoadFailed.value = false

      try {
        blogPosts.value = await fetchBlogPosts()
      } catch (error) {
        console.error('Failed to load blog posts', error)
        blogLoadFailed.value = true
      } finally {
        blogLoading.value = false
        blogInitialized.value = true
      }
    }

    onMounted(() => {
      loadBlogPosts()
    })

    const featuredBlogPosts = computed(() =>
      blogPosts.value
        .slice(0, 5)
        .map((post) => ({
          ...post,
          formattedDate: formatBlogDate(post?.date)
        }))
    )

    const teamImages = [
      new URL('../assets/images/team/1.jpeg', import.meta.url).href,
      new URL('../assets/images/team/2.jpg', import.meta.url).href,
      new URL('../assets/images/team/3.jpg', import.meta.url).href,
      new URL('../assets/images/team/4.jpeg', import.meta.url).href,
      new URL('../assets/images/team/5.jpeg', import.meta.url).href,
      new URL('../assets/images/team/6.jpeg', import.meta.url).href,
      new URL('../assets/images/team/7.jpeg', import.meta.url).href,
      new URL('../assets/images/team/8.png', import.meta.url).href
    ]

    const teamMembers = [
      { key: 'mik', name: 'Мик Вайсман', role: 'CEO', description: 'Основатель WaiWai, выпускник ВМК МГУ, основатель и CTO студии разработки Trinity Monsters (клиенты Азбука Вкуса, ВТБ, Газпро Нефть) и победитель международных AI-хакатонов.', initials: 'МВ', image: teamImages[6] },
      { key: 'egor', name: 'Егор Лукин', role: 'Dev', description: 'Full-stack Software Engineer с 10 годами опыта разработки. Работал в компаниях Evil Martians, Aviasales, Dualboot и в небольших стартапах. Запускал свои SaaS продукты.', initials: 'ЕЛ', image: teamImages[0] },
      { key: 'pavel', name: 'Павел Калашников', role: 'Dev', description: '13 лет опыта коммерческой разработки, тимлид больших проектов в сфере LMS, HoReCa и медиа. OpenSource-энтузиаст.', initials: 'ПК', image: teamImages[1] },
      { key: 'anastasiaM', name: 'Анастасия Мошина', role: 'Dev', description: 'RoR developer, участвовала в создании крупных финтех-проектов. Более 5 лет опыта в разработке.', initials: 'АМ', image: teamImages[2] },
      { key: 'aleksey', name: 'Алексей Павлов', role: 'PR', description: 'Экс-главред Sostav, 12 лет опыта в журналистике и PR.', initials: 'АП', image: teamImages[3] },
      { key: 'vyacheslav', name: 'Вячеслав Ермоленко', role: 'Design', description: '8 лет в дизайне цифровых продуктов. Руководил командами, создавал дизайн-концепции и строил дизайн-системы для финтеха, Web3, бизнеса и культурных проектов.', initials: 'ВЕ', image: teamImages[4] },
      { key: 'anastasiaS', name: 'Анастасия Соболева', role: 'QA', description: 'Fullstack QA-инженер с 5+ лет опыта. Помогаю командам выпускать стабильные продукты, находя критичные ошибки до релиза.', initials: 'АС', image: teamImages[5] },
      { key: 'waiComputer', name: 'Wai Computer', role: 'AI', description: '12 лет непрерывной работы без отпусков и больничных. Владеет всеми языками программирования, иногда зависает на Zoom-встречах и мечтает о повышении до квантового компьютера.', initials: 'WC', image: teamImages[7] }
    ]

    const agentCards = [
      { key: 'sales', title: 'WaiSales', description: 'Автоматизирует и повышает продажи. Находит потенциальных клиентов, устанавливает контакт и ведет диалог до сделки. Повышает конверсию, обучаясь на успешных переговорах.', presentationLink: 'https://pitch.waiwai.diy/v/waiwai-ai-sales-qkjtuh' },
      { key: 'hr', title: 'WaiHR', description: 'По заданному портрету подбирает кандидатов, общается с ними и проводит отбор. Также сортирует и обрабатывает входящие запросы. Рекрутерам остается выбрать лучших.', presentationLink: 'https://pitch.waiwai.diy/v/waiwai-ai-hr-aeg87h' },
      { key: 'training', title: 'WaiUni', description: 'Обучаем корпоративные команды работе с AI: от основ до внедрения умных помощников в бизнес-процессы.', presentationLink: 'https://pitch.waiwai.diy/v/wowuni-8aptzr' },
      { key: 'custom', title: 'WaiCustom', description: 'Разрабатываем AI-агентов под задачи корпораций. Безопасно интегрируем решения в бизнес-процессы. Определяем KPI, постоянно совершенствуем агентов и отвечаем за рост их эффективности.', presentationLink: 'https://pitch.waiwai.diy/v/trinity-monsters-ai-gnjphp' },
      { key: 'store', title: 'WaiStore + WaiCode + WaiSDK', description: 'WaiWai - маркетплейс AI-агентов. Через маркетплейс компании легко внедряют искусственный интеллект в свою инфраструктуру', presentationLink: 'https://pitch.waiwai.diy/v/waiwai-ai-8gxm37' }
    ]

    const mediaMentions = [
      { key: 'tadviserMetrics', name: 'TAdviser', articleTitle: 'Прозрачные метрики вместо миллионных гаданий: зачем бизнесу маркетплейс AI-агентов', logo: new URL('../assets/images/tadviser.svg', import.meta.url).href, url: 'https://www.tadviser.ru/index.php/%D0%A1%D1%82%D0%B0%D1%82%D1%8C%D1%8F:%D0%9F%D1%80%D0%BE%D0%B7%D1%80%D0%B0%D1%87%D0%BD%D1%8B%D0%B5_%D0%BC%D0%B5%D1%82%D1%80%D0%B8%D0%BA%D0%B8_%D0%B2%D0%BC%D0%B5%D1%81%D1%82%D0%BE_%D0%BC%D0%B8%D0%BB%D0%BB%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D1%85_%D0%B3%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B9:_%D0%B7%D0%B0%D1%87%D0%B5%D0%BC_%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D1%83_%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%BF%D0%BB%D0%B5%D0%B9%D1%81_%D0%98%D0%98-%D0%B0%D0%B3%D0%B5%D0%BD%D1%82%D0%BE%D0%B2?erid=2W5zFJGSuQ4' },
      { key: 'bfm', name: 'BFM Казань', articleTitle: 'Российские разработчики интегрировали AI-агентов в рекрутинг Ак Барс Банка', logo: new URL('../assets/images/bfm.svg', import.meta.url).href, url: 'https://kzn.bfm.ru/news/15156' },
      { key: 'cnews', name: 'CNews', articleTitle: 'Мик Вайсман, WaiWai: ИИ-агенты ищут клиентов — менеджеры закрывают сделки', logo: new URL('../assets/images/cnews.svg', import.meta.url).href, url: 'https://www.cnews.ru/articles/2025-06-04_mik_vajsmanwaiwai_ii-agenty_ishchut_klientov?erid=2W5zFHaHT8t' },
      { key: 'tadviserMarketplace', name: 'TAdviser', articleTitle: 'Стартап WaiWai запускает тестирование маркетплейса AI-агентов', logo: new URL('../assets/images/tadviser.svg', import.meta.url).href, url: 'https://www.tadviser.ru/index.php/%D0%9F%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82:WaiWai_%D0%9C%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%BF%D0%BB%D0%B5%D0%B9%D1%81_AI-%D0%B0%D0%B3%D0%B5%D0%BD%D1%82%D0%BE%D0%B2' },
      { key: 'rbc', name: 'РБК Pro', articleTitle: 'ChatGPT сделал приложение с нуля: неоднозначный опыт российской компании', logo: new URL('../assets/images/rbc.svg', import.meta.url).href, url: 'https://pro.rbc.ru/demo/65df21019a79476a26d4cedb' },
      { key: 'itworld', name: 'IT-World', articleTitle: 'Российские ИТ-компании за рубежом: как установить культурные связи для успешного ведения бизнеса?', logo: new URL('../assets/images/itworld.svg', import.meta.url).href, url: 'https://www.it-world.ru/cionews/practice/214762.html' },
      { key: 'tbank', name: 'Бизнес Секреты', articleTitle: 'Стартапная элегия: как владельцу диджитал-агентства запустить продукт', logo: new URL('../assets/images/biznes-sekrety.svg', import.meta.url).href, url: 'https://secrets.tbank.ru/startapnaya-elegiya' },
      { key: 'aitoolz', name: 'AI Toolz', articleTitle: 'AI-агенты: от хайпа к реальным бизнес-инструментам стоимостью до $20 000 в месяц', logo: new URL('../assets/images/ai-toolz.svg', import.meta.url).href, url: 'https://aitoolz.ru/news/ai-agenty-ot-khajpa-k-realnym-biznes-instrumentam-stoimostyu-do-20-000-v-mesyats@215' },
      { key: 'rb', name: 'RB.RU', articleTitle: 'Айтишники теперь гуманитарии? Как ИИ изменил агентский рынок', logo: new URL('../assets/images/rb.svg', import.meta.url).href, url: 'https://rb.ru/opinion/it-gumanitarii/' },
      { key: 'secretmag', name: 'Секрет фирмы', articleTitle: 'Как работать с иностранными партнёрами. Лайфхаки российских бизнесменов', logo: new URL('../assets/images/sf.svg', import.meta.url).href, url: 'https://secretmag.ru/practice/kak-rabotat-s-inostrannymi-partnyorami-laifkhaki-rossiiskikh-biznesmenov.htm' },
      { key: 'hightech', name: 'Hightech.fm', articleTitle: 'Убивает ли ИИ программирование: все за и против', logo: new URL('../assets/images/hitech.svg', import.meta.url).href, url: 'https://hightech.fm/2024/01/23/ai-kills' }
    ]

    const caseCards = [
      { key: 'samolet', title: 'ГК «Самолет»', description: 'Провели обучение для ключевых разработчиков компании: погружение из шести лекций, хакатон и внутренняя AI-лаборатория. Сформировали ядро сотрудников, которое внедряет AI по всей корпорации. Курс масштабировали на всю организацию.', tags: ['Девелопмент', 'Обучение', 'AI', 'Хакатон'] },
      { key: 'falcone', title: 'Falcone', description: 'Запустили sales-агента для логистического сервиса: WaiWai собирает базу e-commerce магазинов, прогревает лидов рассылками и договаривается о демо для отдела продаж.', tags: ['Логистика', 'Продажи', 'Email', 'LinkedIn'] },
      { key: 'akBarsBank', title: 'Ак Барс Банк', description: 'Настроили HR-агента WaiWai для закрытия вакансий аналитиков. Агент обогащает профили на hh.ru и LinkedIn, ведет переписку, назначает интервью и передает теплых кандидатов HR-команде.', tags: ['Финансы', 'HR', 'hh.ru', 'LinkedIn'] },
      { key: 'alphaBank', title: 'Альфа Банк', description: 'Разработали программу обучения AI, учитывающую банковскую специфику и требования к безопасности. Запустили серию мастер-классов и воркшопов по автоматизации рутины.', tags: ['Финансы', 'Обучение', 'AI', 'Безопасность'] },
      { key: 'ontico', title: 'Ontico Conferences', description: 'Запустили sales-агента для конференции: WaiWai ищет технологические компании, ведет переговоры о партнерстве и фиксирует договоренности по стендам и билетам.', tags: ['IT', 'Продажи', 'Email', 'LinkedIn'] },
      { key: 'kodix', title: 'Kodix', description: 'Собрали гибридного агента для HR и продаж: WaiWai находит enterprise-клиентов, параллельно отбирает разработчиков, синхронизирует воронки и подтверждает встречи.', tags: ['Разработка', 'Продажи', 'HR', 'Email', 'LinkedIn'] }
    ]

    const faqItems = [
      { key: 'faq-0', question: 'Есть ли возможность развернуть LLM on-prem?', answer: 'Да, LLM можно развернуть в контуре компании, обеспечивая безопасную работу с данными.' },
      { key: 'faq-1', question: 'Какие LLM вы используете?', answer: 'Оркестрация различных LLM семейства Qwen и Gemma.' },
      { key: 'faq-2', question: 'Как происходит локализация в России?', answer: 'Наши модели зафайнтюнины работать в российском контексте с соблюдением таких законов, как 152-ФЗ.' },
      { key: 'faq-3', question: 'Есть ли уже готовые решения?', answer: 'Агенты для продаж и найма уже работают и приносят прибыль нашим клиентам.' }
    ]

    return {
      teamMembers,
      agentCards,
      mediaMentions,
      caseCards,
      faqItems,
      featuredBlogPosts,
      blogLoading,
      blogLoadFailed,
      blogInitialized
    }
  }
})
</script>

<style scoped>
.copyright-text {
  position: absolute;
  right: 24px;
  bottom: 24px;
  font-family: 'Courier', monospace;
  font-size: 14px;
  color: var(--deep-blue-bright, #8fb2ff);
  opacity: 0.8;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 400;
}

.contact-button-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: var(--wai-hero-gradient, linear-gradient(180deg, #000000 0%, #050f2f 55%, #0f5bff 100%));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.5s ease;
  box-shadow: 0 60px 140px rgba(6, 18, 59, 0.55);
  border: 1px solid rgba(15, 91, 255, 0.3);
}

.contact-button-circle:hover {
  transform: translate(-50%, -50%) scale(1.05);
}

.contact-button-circle:hover .button-text-circle {
  transform: rotate(5deg);
}

.button-text-circle {
  font-family: 'Courier', monospace;
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  transition: transform 0.5s ease;
  color: #fff;
}

.form-container {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #020202;
  overflow: hidden;
}

.foot-logo-container {
  position: absolute;
  left: 24px;
  bottom: 24px;
}

.offer-section {
  padding: 40px 0;
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
}

.offer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.offer-link {
  display: inline-block;
  padding: 16px 32px;
  background: #fff;
  color: #000;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.offer-link:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-2px);
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 10px;
  flex-wrap: wrap;
}

.footer-copyright {
  color: rgba(255, 255, 255, 0.65);
  font-size: 14px;
  margin: 0;
}

.footer-link {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: rgba(255, 255, 255, 1);
}

/* Blog styles */
.blog {
  padding: 4rem clamp(1rem, 3vw, 2.25rem);
  background-color: #fff;
}

.blog-title {
  font-family: Inter Tight, sans-serif;
  font-size: 2rem;
  font-weight: 400;
  line-height: 2rem;
  margin: 0 auto 2rem;
  max-width: 1520px;
  width: 100%;
  color: #000;
}

.blog-status {
  font-family: Inter Tight, sans-serif;
  font-size: 1rem;
  color: #475569;
}

.blog-status--error {
  color: #dc2626;
}

.blog-cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 1520px;
  width: 100%;
  margin: 0 auto;
}

.blog-card {
  background: #fff;
  border-radius: 1.75rem;
  padding: 2.25rem;
  box-shadow: 0 20px 40px rgba(8, 34, 120, 0.08);
  border: 1px solid rgba(4, 26, 82, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  font-family: 'Roboto Mono', monospace;
  color: #000;
}

.blog-card-date {
  font-size: 0.95rem;
  color: #000;
  opacity: 0.8;
}

.blog-card-title {
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  color: #000;
}

.blog-card-title-link {
  text-decoration: none;
  color: inherit;
}

.blog-card-title-link:hover {
  color: #2563eb;
}

.blog-card-description {
  margin: 0;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #000;
}

.blog-card-link {
  font-weight: 600;
  text-decoration: none;
  color: #000;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: inherit;
}

.blog-card-link::after {
  content: '→';
  font-size: 1rem;
}

.blog-card-link:hover {
  color: #2563eb;
}

.blog-card-read-more {
  font-size: 0.95rem;
}

.blog-card-read-more--cta {
  margin-top: 0.5rem;
  align-self: flex-start;
  padding: 0.85rem 1.6rem;
  border-radius: 999px;
  background: #000;
  color: #fff;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.blog-card-read-more--cta:hover {
  color: #fff;
  background: #2563eb;
}

@media screen and (max-width: 767px) {
  .blog {
    padding: 2rem 1rem;
  }
  
  .blog-title {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }

  .blog-card {
    padding: 1.75rem;
    gap: 1rem;
  }
 
  .blog-card-title {
    font-size: 1.4rem;
  }
}

.proj-section .title {
  color: #02102a;
}

.section-label {
  display: inline-block;
  margin-bottom: 0.75rem;
  padding: 0.4rem 1rem;
  border-radius: 999px;
  background: var(--wai-accent-gradient, linear-gradient(135deg, #041336 0%, #0f5bff 100%));
  color: #fff;
  border: 1px solid rgba(15, 91, 255, 0.4);
  box-shadow: 0 12px 24px rgba(5, 16, 59, 0.35);
  font-family: "Inter Tight", sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
}

@media screen and (min-width: 1024px) {
  .cases-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.section-subtitle {
  font-family: "Inter Tight", sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.5rem;
  margin: 0;
  color: #02102a;
}

.scenario-text p {
  font-family: Inter, sans-serif;
  font-size: 1rem;
  line-height: 1.65;
  color: rgba(0, 0, 0, 0.7);
  margin: 0;
}



.cases-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.25rem;
  margin-top: 2.25rem;
}

.agents-section {
  margin-bottom: 4rem;
}

.agents-section,
.agents-section * {
  font-family: 'Roboto Mono', monospace !important;
}

.faq-section,
.faq-section * {
  font-family: 'Roboto Mono', monospace !important;
}

.cases-section,
.cases-section * {
  font-family: 'Roboto Mono', monospace !important;
}

.team-section,
.team-section * {
  font-family: 'Roboto Mono', monospace !important;
}

.media-mentions,
.media-mentions * {
  font-family: 'Roboto Mono', monospace !important;
}

.faq-section {
  margin-top: 4rem;
  padding: 0 2rem;
}

.faq-grid {
  margin-top: 0;
}

@media screen and (max-width: 767px) {
  .faq-section {
    padding: 0 1.25rem;
  }
}

.faq-card .case-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-card .section-subtitle {
  font-size: 1.2rem;
}

.faq-answer {
  font-family: Inter, sans-serif;
  font-size: 1rem;
  line-height: 1.65;
  color: rgba(0, 0, 0, 0.7);
  margin: 0;
}

.case-card {
  background: #ffffff;
  border-radius: 1.75rem;
  border: 1px solid rgba(4, 26, 82, 0.08);
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  box-shadow: 0 20px 40px rgba(8, 34, 120, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.case-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 48px rgba(8, 34, 120, 0.12);
}

.case-header p {
  font-family: Inter, sans-serif;
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(4, 26, 82, 0.72);
  margin: 0;
}

.case-header--agent {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.case-header-content {
  flex: 1 1 55%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-button-card {
  flex: 0 0 auto;
  background: var(--wai-accent-gradient, linear-gradient(135deg, #041336 0%, #0f5bff 100%));
  border-radius: 999px;
  padding: 0.9rem 1.85rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 18px 32px rgba(4, 16, 59, 0.35);
  border: 1px solid rgba(15, 91, 255, 0.35);
}

.case-header--agent .contact-button-card {
  margin-top: 0.35rem;
}

.contact-button-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 24px 44px rgba(4, 16, 59, 0.45);
}

.contact-button-card-text {
  color: #fff;
  text-transform: uppercase;
  font-feature-settings: "dlig" on, "ss07" on, "ss04" on;
  font-family: Elmamono, sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 0.95rem;
}

@media screen and (max-width: 767px) {
  .case-header--agent {
    flex-direction: column;
    align-items: flex-start;
  }

  .contact-button-card {
    width: 100%;
    justify-content: center;
  }
}

.case-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.75rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(4, 26, 82, 0.08);
}

.case-tag {
  padding: 0.5rem 1rem;
  border-radius: 999px;
  background: var(--wai-accent-gradient, linear-gradient(135deg, #041336 0%, #0f5bff 100%));
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.4px;
  text-transform: uppercase;
}

.team-section {
  padding: 4rem 2rem 2.5rem;
  background-color: #fff;
}

.team-section .title {
  color: #02102a;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  margin-top: 2.5rem;
  justify-items: center;
}

.team-card {
  width: 100%;
  max-width: 360px;
  background: #ffffff;
  border-radius: 1.75rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid rgba(4, 26, 82, 0.06);
  box-shadow: 0 20px 40px rgba(8, 34, 120, 0.08);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.team-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 28px 60px rgba(8, 34, 120, 0.12);
}

.team-photo-wrapper {
  width: 100%;
  aspect-ratio: 3 / 4;
  border-radius: 1.25rem;
  overflow: hidden;
  background: #0f0428;
  display: flex;
  align-items: center;
  justify-content: center;
}

.team-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
}

.team-card:hover .team-photo {
  transform: scale(1.05);
}

.team-avatar {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: var(--wai-accent-gradient, linear-gradient(135deg, #041336 0%, #0f5bff 100%));
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inter Tight", sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 1px;
}

.team-name {
  font-family: "Inter Tight", sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  color: #02102a;
}

.team-role {
  font-family: Inter, sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(8, 12, 54, 0.65);
}

.team-description {
  font-family: Inter, sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.72);
  margin: 0;
}

@media screen and (max-width: 991px) {
  .scenarios-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .scenario-module {
    padding: 1.5rem 1.25rem;
  }

  .cases-grid {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }

  .case-card {
    padding: 1.75rem;
    gap: 1rem;
  }

  .faq-section {
    padding: 2.5rem 1.5rem;
  }

  .faq-grid {
    grid-template-columns: 1fr;
  }

  .team-section {
    padding: 3rem 1.5rem;
  }

  .team-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .team-card {
    padding: 1.75rem;
    max-width: 320px;
  }

  .team-photo-wrapper {
    aspect-ratio: 1 / 1;
  }

}

/* Media Mentions Section */
.media-mentions {
  padding: 2.25rem 2rem 2rem;
  background-color: #fff;
  border-bottom: 1px solid var(--border);
}

.media-title {
  font-family: "Inter Tight", sans-serif;
  font-size: 1.7rem;
  font-weight: 500;
  line-height: 1.9rem;
  color: #02102a;
  margin-bottom: 1.75rem;
}

.media-container {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid rgba(4, 26, 82, 0.12);
}

.media-container:last-of-type {
  border-bottom: none;
}

.media-name-title {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.media-name {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}

.media-logo {
  width: 84px;
  height: auto;
  filter: none;
  opacity: 1;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.media-collection {
  flex: 1;
}

.media-entry {
  display: flex;
  align-items: center;
}

.media-article a {
  font-family: "Inter Tight", sans-serif;
  font-size: 1.02rem;
  line-height: 1.55rem;
  color: #000;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: color 0.3s ease, border-color 0.3s ease;
}

.media-article a:hover {
  color: var(--primary);
  border-bottom-color: var(--primary);
}

.media-container:hover .media-logo {
  transform: scale(1.05);
}

@media screen and (max-width: 991px) {
  .media-container {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .media-name {
    flex: none;
  }

  .media-logo {
    width: 72px;
  }

  .media-article a {
    font-size: 0.96rem;
    line-height: 1.5rem;
  }
}

@media screen and (max-width: 767px) {
  .media-mentions {
    padding: 2rem 1.5rem 1.75rem;
  }

  .media-container {
    padding: 0.9rem 0;
  }

  .media-logo {
    width: 60px;
  }

  .media-article a {
    font-size: 0.9rem;
    line-height: 1.4rem;
  }
}

/* Mobile layout styles */
.mobile-buttons {
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.contact-button.mobile {
  background: var(--wai-accent-gradient, linear-gradient(135deg, #041336 0%, #0f5bff 100%));
  border: 1px solid rgba(15, 91, 255, 0.35);
  box-shadow: 0 16px 40px rgba(5, 16, 59, 0.4);
  position: static;
  margin: 0;
}

.contact-button.top,
.contact-button.down {
  background: var(--wai-accent-gradient, linear-gradient(135deg, #041336 0%, #0f5bff 100%));
  border: 1px solid rgba(15, 91, 255, 0.35);
  box-shadow: 0 16px 40px rgba(5, 16, 59, 0.4);
}

.contact-button .button-text,
.mobile-buttons .button-text {
  color: #fff;
}

.hero-logo-vertical {
  display: none;
  object-position: 50% 50%;
  flex: 1;
  height: auto;
  width: 100%;
  margin: 0 auto;
}

@media screen and (max-width: 991px) {
  .hero-logo-horizontal {
    display: none;
  }
  
  .hero-logo-vertical {
    display: block;
  }
  
  .header {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }
  
  .contact-button.top {
    display: none;
  }
  
  .contact-button.down {
    display: none;
  }
  
  .mobile-buttons {
    display: flex;
  }
  
  .mobile-buttons .contact-button.mobile {
    width: 16rem;
    height: 4rem;
    border-radius: 2rem;
    justify-content: center;
    align-items: center;
  }
  
  .mobile-buttons .button-text {
    font-size: 1rem;
    line-height: 1rem;
    position: static;
  }
}

@media screen and (max-width: 479px) {
  .hero-logo-vertical {
    width: 100%;
  }
  
  .mobile-buttons .contact-button.mobile {
    width: 14rem;
    height: 3.5rem;
  }
  
  .mobile-buttons .button-text {
    font-size: 0.875rem;
    line-height: 0.875rem;
  }
}
</style> 
