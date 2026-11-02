// Project summaries checked against current repositories and owner-supplied CV.
const CASES = {
  "OpenProctorAI": {
    "summary": [
      "Интеллектуальный прокторинг дистанционных экзаменов с применением компьютерного зрения.",
      "Компьютерлік көру арқылы қашықтан өткізілетін емтихандарға арналған интеллектуалды прокторинг.",
      "Intelligent remote exam proctoring using computer vision."
    ],
    "challenge": [
      "Помочь организаторам замечать потенциальные нарушения во время онлайн-экзамена.",
      "Ұйымдастырушыларға онлайн емтихандағы ықтимал бұзушылықтарды байқауға көмектесу.",
      "Help exam organizers identify potential issues during online exams."
    ],
    "approach": [
      "Обнаружение лиц, анализ взгляда и регистрация потенциальных нарушений.",
      "Беттерді анықтау, көзқарасты талдау және ықтимал бұзушылықтарды тіркеу.",
      "Face detection, gaze analysis and logging of potential violations."
    ]
  },
  "Zafiro": {
    "summary": [
      "SaaS-платформа автоматизации компьютерных клубов.",
      "Компьютерлік клубтарды автоматтандыруға арналған SaaS-платформа.",
      "A SaaS platform for computer club operations."
    ],
    "challenge": [
      "Развивать платформу управления клубами и её программные интеграции.",
      "Клубтарды басқару платформасын және бағдарламалық интеграцияларды дамыту.",
      "Develop a club management platform and its software integrations."
    ],
    "approach": [
      "API, мультитенантная архитектура и развитие стека Laravel → Go / React.",
      "API, мультитенантты архитектура және Laravel → Go / React стегін дамыту.",
      "APIs, multitenant architecture and evolution from Laravel to Go / React."
    ]
  },
  "Sapa Monitoring": {
    "summary": [
      "Система ректорского контроля качества занятий: Platonus, камеры аудиторий, ЭЦП и QR-посещаемость.",
      "Сабақ сапасын ректорлық бақылау жүйесі: Platonus, аудитория камералары, ЭЦҚ және QR-қатысу есебі.",
      "Rector-level teaching quality monitoring: Platonus, classroom cameras, digital signatures and QR attendance."
    ],
    "challenge": [
      "Объединить расписание, мониторинг учебных занятий и документирование проверок в едином рабочем процессе КазУТБ имени К. Кулажанова.",
      "Қ. Құлажанов атындағы ҚазТБУ-да сабақ кестесін, сабақ мониторингін және тексеру құжаттарын бірыңғай жұмыс процесіне біріктіру.",
      "Unify timetables, lesson monitoring and inspection documentation within one workflow at K. Kulazhanov KazUTB."
    ],
    "approach": [
      "Расписание из Platonus и ситуационный мониторинг с камерами; записи проверок, наблюдения по форме 16-02 с ЭЦП, взаимопосещения и комитет КРК. QR-отметка посещаемости и проверка подписанных документов. Вход через AD/LDAP или ЭЦП, роли и аудит. Интерфейс RU/KK/EN.",
      "Platonus кестесі және камералар арқылы ситуациялық мониторинг; тексеру жазбалары, ЭЦҚ қойылатын 16-02 нысанындағы бақылаулар, өзара сабаққа қатысу және КРК комитеті. QR арқылы қатысуды белгілеу және қол қойылған құжаттарды тексеру. AD/LDAP немесе ЭЦҚ арқылы кіру, рөлдер және аудит. RU/KK/EN интерфейсі.",
      "Platonus timetables and situational camera monitoring; inspection records, digitally signed form 16-02 observations, peer visits and the KRK committee. QR attendance and signed-document verification. AD/LDAP or digital-signature login, role-based access and audit. RU/KK/EN interface."
    ],
    "stack": [
      "Python / FastAPI",
      "React / Vite",
      "MySQL / SQLAlchemy",
      "Docker / Nginx",
      "Platonus",
      "AD / LDAP",
      "NCALayer / KalkanCrypt"
    ],
    "source": [
      "Описание сверено с README и кодом актуального репозитория krkdev. Роль автора — по резюме: инициатор, системный архитектор, руководитель разработки и участник реализации.",
      "Сипаттама krkdev репозиторийінің README және кодымен салыстырылды. Автордың рөлі түйіндемеге сәйкес: бастамашы, жүйелік сәулетші, әзірлеу жетекшісі және іске асыруға қатысушы.",
      "Description checked against the current krkdev README and code. Role from the CV: initiator, systems architect, development lead and contributor."
    ]
  },
  "Zafirodiskless": {
    "summary": [
      "Архитектура мультиагентной AI-ассистированной разработки: MCP, Git worktree и инженерные процессы.",
      "Көпагентті AI көмегімен әзірлеу архитектурасы: MCP, Git worktree және инженерлік процестер.",
      "Architecture for multi-agent AI-assisted development: MCP, Git worktree and engineering workflows."
    ],
    "challenge": [
      "Организовать совместную работу AI-агентов в инженерных процессах.",
      "Инженерлік процестерде AI-агенттердің бірлескен жұмысын ұйымдастыру.",
      "Coordinate AI agents within engineering workflows."
    ],
    "approach": [
      "Мультиагентная архитектура, MCP и изолированные рабочие деревья Git.",
      "Көпагентті архитектура, MCP және оқшауланған Git жұмыс ағаштары.",
      "Multi-agent architecture, MCP and isolated Git worktrees."
    ]
  },
  "synyp": {
    "summary": [
      "Школьная ERP/SIS-платформа Казахстана: от учебного плана и нагрузки до расписания, оценивания и онлайн-уроков. Ранее SchoolOS.",
      "Қазақстан мектептеріне арналған ERP/SIS-платформа: оқу жоспары мен жүктемеден сабақ кестесіне, бағалау мен онлайн сабақтарға дейін. Бұрынғы атауы — SchoolOS.",
      "ERP/SIS for schools in Kazakhstan: from curriculum and teacher workload to timetables, assessment and live lessons. Formerly SchoolOS."
    ],
    "challenge": [
      "Объединить учебную работу школы в цепочку от нормативных требований и планирования до урока, журнала и аналитики.",
      "Мектептің оқу жұмысын нормативтік талаптар мен жоспарлаудан сабаққа, журналға және аналитикаға дейін бір тізбекке біріктіру.",
      "Connect school workflows from regulatory requirements and planning through lessons, gradebooks and analytics."
    ],
    "approach": [
      "РУП/ТУП, нагрузка и тарификация, генерация расписания с объяснением конфликтов, КТП/КМЖ, журнал ФО/СОР/СОЧ. Банк тестов, онлайн-класс и видеоуроки LiveKit, AI-помощник. Модульный монолит FastAPI/SQLAlchemy; JavaScript SPA/PWA, PostgreSQL и SQLite. Изоляция данных школ на уровне ORM, роли, аудит и MFA/TOTP. Интерфейс KK/RU. Нормативные проверки помогают выявлять отклонения, без заявления о юридической сертификации.",
      "Оқу жұмыс және типтік жоспарлары, жүктеме мен тарификация, қайшылықтарды түсіндіретін сабақ кестесі генераторы, КТЖ/ҚМЖ, ҚБ/БЖБ/ТЖБ журналы. Тест банкі, онлайн сынып, LiveKit бейнесабақтары және AI-көмекші. FastAPI/SQLAlchemy модульдік монолиті; JavaScript SPA/PWA, PostgreSQL және SQLite. ORM деңгейінде мектеп деректерін оқшаулау, рөлдер, аудит, MFA/TOTP. KK/RU интерфейсі. Нормативтік тексерулер ауытқуларды анықтауға көмектеседі; заңдық сертификаттау мәлімделмейді.",
      "Curriculum and workload planning, tariff sheets, timetable generation with conflict explanations, lesson plans and formative/summative gradebooks. Question bank, online classroom, LiveKit lessons and AI assistant. FastAPI/SQLAlchemy modular monolith with JavaScript SPA/PWA, PostgreSQL and SQLite. ORM-level school isolation, roles, audit and MFA/TOTP. KK/RU interface. Regulatory checks flag deviations; legal certification is not claimed."
    ],
    "stack": [
      "Python / FastAPI",
      "SQLAlchemy",
      "JavaScript SPA / PWA",
      "PostgreSQL / SQLite",
      "LiveKit",
      "RBAC / MFA"
    ],
    "source": [
      "Название и функции сверены с текущими README и кодом закрытого репозитория schoolOS. Роль автора — по предоставленному резюме.",
      "Атауы мен функциялары schoolOS жабық репозиторийінің ағымдағы README және кодымен салыстырылды. Автордың рөлі ұсынылған түйіндемеге сәйкес.",
      "Name and features checked against the current README and code of the private schoolOS repository. Author role follows the supplied CV."
    ]
  }
};
const caseLabels={
  ru:{challenge:'Задача',approach:'Подход',source:'По предоставленному резюме. Роль: инициатор, системный архитектор, руководитель разработки и непосредственный участник реализации.'},
  kk:{challenge:'Міндет',approach:'Тәсіл',source:'Ұсынылған түйіндеме бойынша. Рөлі: бастамашы, жүйелік сәулетші, әзірлеу жетекшісі және іске асыруға тікелей қатысушы.'},
  en:{challenge:'Challenge',approach:'Approach',source:'Based on the supplied CV. Role: initiator, systems architect, development lead and direct contributor.'}
};
