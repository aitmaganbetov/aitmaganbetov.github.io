/* Source: IT-директор (CIO).pdf, updated 30 October 2026.
   Dates and overlaps are preserved. Text is edited for readability and translated.
   The two newest roles have no usable description in the source. */
const CV = {
  updated: '2026-10-30', pdf: 'assets/resume.pdf',
  name: ['Асет Айтмаганбетов','Асет Айтмағанбетов','Asset Aitmaganbetov'],
  fullName: ['Айтмаганбетов Асет Лайыкович','Айтмағанбетов Асет Лайықұлы','Asset Laiykovich Aitmaganbetov'],
  orgs: {
    kaz: ['Казахский университет технологии и бизнеса имени К. Кулажанова','Қ. Құлажанов атындағы Қазақ технология және бизнес университеті','K. Kulazhanov Kazakh University of Technology and Business'],
    kazOld: ['Казахский университет технологии и бизнеса','Қазақ технология және бизнес университеті','Kazakh University of Technology and Business'],
    bai: ['Баишев Университет','Бәйішев университеті','Baishev University'],
    baiOld: ['Актюбинский университет имени Сактагана Баишева','Сақтаған Бәйішев атындағы Ақтөбе университеті','Saktagan Baishev Aktobe University'],
    auto: ['ТОО «Автопарк»','«Автопарк» ЖШС','Avtopark LLP']
  },
  jobs: [
    {start:'2026-03',end:null,org:'kaz',title:['Директор Центра искусственного интеллекта и аналитики данных','Жасанды интеллект және деректерді талдау орталығының директоры','Director, Center for Artificial Intelligence and Data Analytics'],bullets:[]},
    {start:'2025-01',end:'2026-03',org:'kaz',title:['Руководитель управления информационных технологий','Ақпараттық технологиялар басқармасының басшысы','Head of Information Technology Department'],bullets:[]},
    {start:'2023-06',end:'2025-03',org:'kazOld',title:['Руководитель отдела технического обеспечения и цифровизации','Техникалық қамтамасыз ету және цифрландыру бөлімінің басшысы','Head of Technical Support and Digitalization'],bullets:[
      ['Стратегическое управление IT и координация проектов цифровизации университета.','IT-ді стратегиялық басқару және университетті цифрландыру жобаларын үйлестіру.','IT strategy and coordination of university digitalization projects.'],
      ['Автоматизация административных, образовательных и управленческих процессов.','Әкімшілік, білім беру және басқару процестерін автоматтандыру.','Automation of administrative, educational and management processes.'],
      ['Развитие серверной и сетевой инфраструктуры, систем хранения и пользовательских сервисов.','Серверлік және желілік инфрақұрылымды, деректерді сақтау жүйелері мен пайдаланушы сервистерін дамыту.','Development of server and network infrastructure, storage and user services.'],
      ['Управление доступом, резервное копирование, техническая поддержка и мониторинг.','Қолжетімділікті басқару, резервтік көшіру, техникалық қолдау және мониторинг.','Access management, backup, technical support and monitoring.'],
      ['Технические требования, координация исполнителей, контроль сроков и качества; участие в бюджетировании и закупках.','Техникалық талаптар, орындаушыларды үйлестіру, мерзім мен сапаны бақылау; бюджеттеу мен сатып алуға қатысу.','Technical requirements, delivery coordination, quality and schedule control; participation in budgeting and procurement.']
    ]},
    {start:'2021-01',end:'2023-06',org:'bai',title:['Директор департамента дистанционного обучения','Қашықтан оқыту департаментінің директоры','Director of Distance Learning Department'],bullets:[
      ['Руководство департаментом и развитие цифровой образовательной среды.','Департаментті басқару және цифрлық білім беру ортасын дамыту.','Department leadership and development of the digital learning environment.'],
      ['Внедрение и эксплуатация платформ дистанционного обучения и электронного тестирования.','Қашықтан оқыту және электрондық тестілеу платформаларын енгізу және пайдалану.','Coordination of distance learning and online testing platform implementation and operations.'],
      ['Техническая и методическая поддержка преподавателей и студентов, обучение пользователей и подготовка инструкций.','Оқытушылар мен студенттерді техникалық және әдістемелік қолдау, пайдаланушыларды оқыту және нұсқаулықтар әзірлеу.','Technical and methodological support for staff and students, user training and guidance.']
    ]},
    {start:'2019-09',end:'2021-01',org:'bai',title:['Начальник отдела информационно-технического обеспечения и цифровизации','Ақпараттық-техникалық қамтамасыз ету және цифрландыру бөлімінің басшысы','Head of IT Support and Digitalization'],bullets:[
      ['Координация IT-подразделения, эксплуатация оборудования, серверов, сетей и ПО.','IT бөлімін үйлестіру, жабдықтарды, серверлерді, желілерді және БҚ-ны пайдалану.','IT team coordination and operation of hardware, servers, networks and software.'],
      ['Техническая поддержка, учёт IT-активов, планирование обновления инфраструктуры и взаимодействие с поставщиками.','Техникалық қолдау, IT-активтерді есепке алу, инфрақұрылымды жаңартуды жоспарлау және жеткізушілермен жұмыс.','Technical support, IT asset records, infrastructure renewal planning and vendor coordination.']
    ]},
    {start:'2017-09',end:'2019-09',org:'baiOld',title:['Начальник отдела информационно-программных решений','Ақпараттық-бағдарламалық шешімдер бөлімінің басшысы','Head of Information and Software Solutions'],bullets:[
      ['Сбор требований, технические задания и постановка задач разработчикам.','Талаптарды жинау, техникалық тапсырмалар және әзірлеушілерге міндеттер қою.','Requirements gathering, technical specifications and developer task planning.'],
      ['Планирование, тестирование, внедрение и сопровождение программных решений университета.','Университеттің бағдарламалық шешімдерін жоспарлау, тестілеу, енгізу және сүйемелдеу.','Planning, testing, implementation and maintenance of university software solutions.']
    ]},
    {start:'2015-09',end:'2017-09',org:'baiOld',title:['Начальник отдела «Офис регистратора и центр информатизации учебного процесса»','«Тіркеуші офисі және оқу процесін ақпараттандыру орталығы» бөлімінің басшысы','Head of Registrar Office and Academic Informatization Center'],bullets:[
      ['Автоматизация академических процессов, координация работы в Platonus и актуализация данных ЕСУВО.','Академиялық процестерді автоматтандыру, Platonus жұмысын үйлестіру және ЖБББЖ деректерін жаңарту.','Academic process automation, Platonus coordination and higher education management system data updates.'],
      ['Контроль академических данных, обучение сотрудников и участие в программе информатизации.','Академиялық деректерді бақылау, қызметкерлерді оқыту және ақпараттандыру бағдарламасына қатысу.','Academic data oversight, staff training and participation in the university informatization program.']
    ]},
    {start:'2014-09',end:'2015-08',org:'baiOld',title:['Начальник отдела автоматизации и контроля учебного процесса','Оқу процесін автоматтандыру және бақылау бөлімінің басшысы','Head of Academic Process Automation and Control'],bullets:[
      ['Администрирование Platonus, контроль данных об обучающихся и учебных планах; подготовка сведений для ЕСУВО.','Platonus әкімшілендіру, білім алушылар мен оқу жоспарларының деректерін бақылау; ЖБББЖ үшін мәліметтер дайындау.','Platonus administration, student and curriculum data control, preparation of higher education reporting.'],
      ['Анализ процессов учебного администрирования и обучение пользователей.','Оқу әкімшілігі процестерін талдау және пайдаланушыларды оқыту.','Academic administration process analysis and user training.']
    ]},
    {start:'2013-01',end:'2014-09',org:'baiOld',title:['Системный администратор','Жүйелік әкімші','System Administrator'],bullets:[
      ['Администрирование серверов, ОС и рабочих станций; управление доступом и сетевыми ресурсами.','Серверлерді, ОЖ және жұмыс станцияларын әкімшілендіру; қолжетімділік пен желілік ресурстарды басқару.','Server, OS and workstation administration; access and network resource management.'],
      ['Резервное копирование, восстановление, мониторинг сети, базовая сетевая безопасность и поддержка пользователей.','Резервтік көшіру, қалпына келтіру, желіні бақылау, негізгі желілік қауіпсіздік және пайдаланушыларды қолдау.','Backup, recovery, network monitoring, basic network security and user support.']
    ]},
    {start:'2011-09',end:'2013-01',org:'baiOld',title:['Программист','Бағдарламашы','Programmer'],bullets:[
      ['Сопровождение компьютерной инфраструктуры и ПО, настройка и диагностика операционных систем.','Компьютерлік инфрақұрылым мен БҚ-ны сүйемелдеу, операциялық жүйелерді баптау және диагностикалау.','Computer infrastructure and software support, OS configuration and diagnostics.'],
      ['Развёртывание и обслуживание локальных сетей, ремонт и учёт оборудования.','Жергілікті желілерді орналастыру және қызмет көрсету, жабдықтарды жөндеу және есепке алу.','Local network deployment and maintenance, equipment repair and asset records.']
    ]},
    {start:'2009-05',end:'2011-09',org:'auto',title:['Техник-программист','Техник-бағдарламашы','Programming Technician'],bullets:[
      ['Поддержка компьютерной техники и ПО, настройка ОС и периферии.','Компьютерлік техника мен БҚ-ны қолдау, ОЖ мен периферияны баптау.','Computer and software support, OS and peripheral configuration.'],
      ['Сетевые коммуникации, диагностика, профилактика, техническая поддержка и учёт оборудования.','Желілік коммуникациялар, диагностика, профилактика, техникалық қолдау және жабдықтарды есепке алу.','Network cabling, diagnostics, preventive maintenance, technical support and equipment records.']
    ]}
  ],
  education: [
    {year:2024, title:['Информатика · запись о докторантуре','Информатика · докторантура туралы жазба','Computer Science · doctoral study entry'],org:['Евразийский национальный университет имени Л. Н. Гумилёва, Астана','Л. Н. Гумилев атындағы Еуразия ұлттық университеті, Астана','L. N. Gumilyov Eurasian National University, Astana'],note:['В резюме указано «PhD докторант по информатике». Присуждение научной степени не подтверждено.','Түйіндемеде «Информатика бойынша PhD докторант» деп көрсетілген. Ғылыми дәреженің берілгені расталмаған.','The CV lists a PhD doctoral student entry. Award of a doctoral degree is not confirmed.']},
    {year:2018,title:['Бакалавр · Автоматизация и управление','Бакалавр · Автоматтандыру және басқару','Bachelor · Automation and Control'],org:['Актюбинский университет имени С. Баишева, Актобе','С. Бәйішев атындағы Ақтөбе университеті, Ақтөбе','S. Baishev Aktobe University, Aktobe']},
    {year:2015,title:['Магистр · Информационные системы','Магистр · Ақпараттық жүйелер','Master · Information Systems'],org:['Западно-Казахстанский инженерно-гуманитарный университет, Уральск','Батыс Қазақстан инженерлік-гуманитарлық университеті, Орал','West Kazakhstan Engineering and Humanities University, Uralsk']},
    {year:2011,title:['Магистр · Информационные системы','Магистр · Ақпараттық жүйелер','Master · Information Systems'],org:['Актюбинский государственный университет имени К. Жубанова, Актобе','Қ. Жұбанов атындағы Ақтөбе мемлекеттік университеті, Ақтөбе','K. Zhubanov Aktobe State University, Aktobe']}
  ],
  courses:[
    [2016,'Git',['Электронный сертификат','Электрондық сертификат','Electronic certificate']],
    [2015,'PLATONUS · ARTA Learning Solutions',['Офис регистратор','Тіркеуші офисі','Registrar office']],
    [2014,'Basic computer vision with MATLAB · Universiti Malaysia Pahang',['Краткосрочный курс · Faculty of Electrical & Electronics Engineering','Қысқа курс · Faculty of Electrical & Electronics Engineering','Short course · Faculty of Electrical & Electronics Engineering']],
    [2014,'Basic automation control technology · Universiti Malaysia Pahang',['Краткосрочный курс · Faculty of Electrical & Electronics Engineering','Қысқа курс · Faculty of Electrical & Electronics Engineering','Short course · Faculty of Electrical & Electronics Engineering']],
    [2014,'PLATONUS · ARTA Learning Solutions',['Преподаватель','Оқытушы','Instructor']],
    [2012,'PLATONUS · ARTA Learning Solutions',['Технический администратор','Техникалық әкімші','Technical administrator']],
    [2012,['ОАНО «Институт Мировой Экономики и Финансов»','«Әлемдік экономика және қаржы институты»','Institute of World Economy and Finance'],['Контент-менеджер в среде e-learning','E-learning ортасындағы контент-менеджер','E-learning content manager']],
    [2012,['ОАНО «Институт Мировой Экономики и Финансов»','«Әлемдік экономика және қаржы институты»','Institute of World Economy and Finance'],['Преподаватель в среде e-learning','E-learning ортасындағы оқытушы','E-learning instructor']]
  ],
  skillGroups:[
    {title:['IT-управление','IT басқару','IT leadership'],items:[['Стратегическое планирование','Стратегиялық жоспарлау','Strategic planning'],['Управление командой / Teamleading','Команданы басқару / Teamleading','Team management / Teamleading'],['Операционное управление','Операциялық басқару','Operations management'],['Управление затратами','Шығындарды басқару','Cost management'],['Разработка регламентов','Регламенттерді әзірлеу','Policy and procedure development'],['Руководство командой разработчиков','Әзірлеушілер тобын басқару','Development team leadership']]},
    {title:['Инфраструктура','Инфрақұрылым','Infrastructure'],items:['Linux','Windows Server','VMware','Proxmox','Virtualization',['Администрирование серверов','Серверлерді әкімшілендіру','Server administration'],['Сетевое оборудование','Желілік жабдықтар','Network administration'],['Почтовые серверы','Пошта серверлері','Mail servers']]},
    {title:['Безопасность и сервисы','Қауіпсіздік және сервистер','Security and services'],items:[['Информационная безопасность','Ақпараттық қауіпсіздік','Information security'],'SIEM','SOC','DLP','ISO 27001','ITIL','ITSM']},
    {title:['Системы и процессы','Жүйелер мен процестер','Systems and processes'],items:['Platonus','Git',['Веб-программирование','Веб-бағдарламалау','Web programming'],['СУБД','ДҚБЖ','Database management systems'],['Автоматизация документооборота','Құжат айналымын автоматтандыру','Document workflow automation'],['Оптимизация бизнес-процессов','Бизнес-процестерді оңтайландыру','Business process optimization'],['Администрирование','Әкімшілендіру','Administration']]}
  ],
  projects:[
    {id:'01',tag:'DIGITAL TRANSFORMATION',title:['Цифровизация университета','Университетті цифрландыру','University digitalization'],text:['Координация автоматизации административных, образовательных и управленческих процессов; развитие цифровых сервисов.','Әкімшілік, білім беру және басқару процестерін автоматтандыруды үйлестіру; цифрлық сервистерді дамыту.','Coordination of administrative, educational and management process automation and digital service development.'],scope:['Роль: руководитель отдела · 2023–2025','Рөлі: бөлім басшысы · 2023–2025','Role: department head · 2023–2025'],tags:['IT strategy','IT projects','Processes']},
    {id:'02',tag:'INFRASTRUCTURE & SECURITY',title:['Инфраструктура и IT-сервисы','Инфрақұрылым және IT-сервистер','Infrastructure and IT services'],text:['Координация эксплуатации и модернизации серверов, сетей и хранения данных; организация резервного копирования, поддержки и мониторинга.','Серверлерді, желілерді және деректер қоймаларын пайдалану мен жаңартуды үйлестіру; резервтік көшіруді, қолдау мен мониторингті ұйымдастыру.','Coordination of server, network and storage operations and modernization; organization of backup, support and monitoring.'],scope:['Направление работы · 2013–2025','Жұмыс бағыты · 2013–2025','Area of responsibility · 2013–2025'],tags:['Infrastructure','Backup','ITSM']},
    {id:'03',tag:'DIGITAL EDUCATION',title:['Цифровая образовательная среда','Цифрлық білім беру ортасы','Digital learning environment'],text:['Сопровождение Platonus, академических данных и отчётности ЕСУВО; координация платформ дистанционного обучения и поддержки пользователей.','Platonus, академиялық деректер мен ЖБББЖ есептілігін сүйемелдеу; қашықтан оқыту платформалары мен пайдаланушыларды қолдауды үйлестіру.','Platonus, academic data and higher education reporting support; coordination of distance learning platforms and user support.'],scope:['Направление работы · 2014–2023','Жұмыс бағыты · 2014–2023','Area of responsibility · 2014–2023'],tags:['Platonus','E-learning','Academic data']}
  ]
};
