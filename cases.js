// Project descriptions follow the owner-supplied two-page CIO resume.
const CASES = {
  SchoolOS: {
    summary:['ERP/SIS для школ Казахстана: учебные планы, нагрузка педагогов, расписание, журналы и аналитика с учётом требований РК.','Қазақстан мектептеріне арналған ERP/SIS: оқу жоспарлары, педагог жүктемесі, сабақ кестесі, журналдар және ҚР талаптарына сай аналитика.','ERP/SIS for schools in Kazakhstan: curricula, teacher workload, timetables, journals and analytics aligned with Kazakhstan’s requirements.'],
    challenge:['Объединить разрозненные школьные процессы в единой системе.','Мектептегі бөлек процестерді бірыңғай жүйеге біріктіру.','Bring fragmented school processes into a single system.'],
    approach:['Единая платформа управления учебными данными и аналитикой с учётом требований РК.','ҚР талаптарын ескеретін оқу деректері мен аналитиканы басқарудың бірыңғай платформасы.','A shared platform for academic data and analytics that considers Kazakhstan’s requirements.']
  },
  OpenProctorAI: {
    summary:['Интеллектуальный прокторинг дистанционных экзаменов с применением компьютерного зрения.','Компьютерлік көру арқылы қашықтан өткізілетін емтихандарға арналған интеллектуалды прокторинг.','Intelligent remote exam proctoring using computer vision.'],
    challenge:['Помочь организаторам замечать потенциальные нарушения во время онлайн-экзамена.','Ұйымдастырушыларға онлайн емтихандағы ықтимал бұзушылықтарды байқауға көмектесу.','Help exam organizers identify potential issues during online exams.'],
    approach:['Обнаружение лиц, анализ взгляда и регистрация потенциальных нарушений.','Беттерді анықтау, көзқарасты талдау және ықтимал бұзушылықтарды тіркеу.','Face detection, gaze analysis and logging of potential violations.']
  },
  Zafiro: {
    summary:['SaaS-платформа автоматизации компьютерных клубов.','Компьютерлік клубтарды автоматтандыруға арналған SaaS-платформа.','A SaaS platform for computer club operations.'],
    challenge:['Развивать платформу управления клубами и её программные интеграции.','Клубтарды басқару платформасын және бағдарламалық интеграцияларды дамыту.','Develop a club management platform and its software integrations.'],
    approach:['API, мультитенантная архитектура и развитие стека Laravel → Go / React.','API, мультитенантты архитектура және Laravel → Go / React стегін дамыту.','APIs, multitenant architecture and evolution from Laravel to Go / React.']
  },
  'KRK Monitoring': {
    summary:['Мониторинг качества образования: проверки, роли, отчётность и аналитические панели.','Білім сапасын бақылау: тексерулер, рөлдер, есептілік және аналитикалық панельдер.','Education quality monitoring: inspections, roles, reporting and analytical dashboards.'],
    challenge:['Систематизировать оценку учебных занятий и сбор результатов проверок.','Сабақтарды бағалау мен тексеру нәтижелерін жинауды жүйелеу.','Structure lesson evaluations and the collection of inspection results.'],
    approach:['Информационная система для проверок, отчётов и аналитических показателей.','Тексерулерге, есептерге және аналитикалық көрсеткіштерге арналған ақпараттық жүйе.','An information system for inspections, reports and analytical indicators.']
  }
};
const caseLabels={
  ru:{challenge:'Задача',approach:'Подход',source:'По предоставленному резюме. Роль: инициатор, системный архитектор, руководитель разработки и непосредственный участник реализации.'},
  kk:{challenge:'Міндет',approach:'Тәсіл',source:'Ұсынылған түйіндеме бойынша. Рөлі: бастамашы, жүйелік сәулетші, әзірлеу жетекшісі және іске асыруға тікелей қатысушы.'},
  en:{challenge:'Challenge',approach:'Approach',source:'Based on the supplied CV. Role: initiator, systems architect, development lead and direct contributor.'}
};

CASES.Zafirodiskless = {summary:['Архитектура мультиагентной AI-ассистированной разработки: MCP, Git worktree и инженерные процессы.','Көпагентті AI көмегімен әзірлеу архитектурасы: MCP, Git worktree және инженерлік процестер.','Architecture for multi-agent AI-assisted development: MCP, Git worktree and engineering workflows.'],challenge:['Организовать совместную работу AI-агентов в инженерных процессах.','Инженерлік процестерде AI-агенттердің бірлескен жұмысын ұйымдастыру.','Coordinate AI agents within engineering workflows.'],approach:['Мультиагентная архитектура, MCP и изолированные рабочие деревья Git.','Көпагентті архитектура, MCP және оқшауланған Git жұмыс ағаштары.','Multi-agent architecture, MCP and isolated Git worktrees.']};
