// Public-facing summaries from the portfolio draft in the referenced conversation.
// These are descriptions, not independently verified deployment outcomes.
const CASES = {
  SchoolOS: {
    summary:['ERP/SIS для школ Казахстана: учебные планы, нагрузка педагогов, расписание и академические процессы.','Қазақстан мектептеріне арналған ERP/SIS: оқу жоспарлары, педагог жүктемесі, сабақ кестесі және академиялық процестер.','ERP/SIS for schools in Kazakhstan: curricula, teacher workload, timetables and academic processes.'],
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
    approach:['API, мультитенантная архитектура и развитие стека Laravel → Go / React — по черновику портфолио.','API, мультитенантты архитектура және Laravel → Go / React стегін дамыту — портфолио жобасы бойынша.','APIs, multitenant architecture and evolution from Laravel to Go / React, as described in the portfolio draft.']
  },
  'KRK Monitoring': {
    summary:['Мониторинг качества образования: оценка занятий, проверки, отчётность и аналитика.','Білім сапасын бақылау: сабақтарды бағалау, тексерулер, есептілік және аналитика.','Education quality monitoring: lesson evaluation, inspections, reporting and analytics.'],
    challenge:['Систематизировать оценку учебных занятий и сбор результатов проверок.','Сабақтарды бағалау мен тексеру нәтижелерін жинауды жүйелеу.','Structure lesson evaluations and the collection of inspection results.'],
    approach:['Информационная система для проверок, отчётов и аналитических показателей.','Тексерулерге, есептерге және аналитикалық көрсеткіштерге арналған ақпараттық жүйе.','An information system for inspections, reports and analytical indicators.']
  }
};
const caseLabels={
  ru:{challenge:'Задача',approach:'Подход',source:'Описание по черновику портфолио из предыдущего чата. Статус внедрения, персональный вклад и результаты требуют подтверждения.'},
  kk:{challenge:'Міндет',approach:'Тәсіл',source:'Сипаттама алдыңғы чаттағы портфолио жобасына негізделген. Енгізу мәртебесі, жеке үлес пен нәтижелер растауды қажет етеді.'},
  en:{challenge:'Challenge',approach:'Approach',source:'Based on the portfolio draft in the previous chat. Deployment status, individual contribution and outcomes need confirmation.'}
};
