import { Testimonial, QuizQuestion } from '../types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'davis-c',
    name: 'Davis C.',
    role: 'Especialista DBA & Gestión de Base de Datos',
    previousRole: 'Administrador de BD Operativo (Guardias 24/7)',
    achievement: 'Transición a perfil Senior y nuevas oportunidades corporativas',
    metricHighlight: '-60% guardias reactivas · Ascenso a rol estratégico',
    quote:
      'Pasé de estar saturado por guardias pasivas e incidentes operativos a reestructurar mi perfil profesional con métricas de valor. Aprendí a traducir la disponibilidad y estabilidad técnica en gobierno de datos y ahorro para el negocio. Al presentarme con un discurso ejecutivo, de inmediato recibí convocatorias para roles senior y el reconocimiento de mi jefatura.',
    videoDuration: '3:45 min',
    avatarInitials: 'DC',
    tags: ['Bases de Datos', 'Gobierno de Datos', 'Ascenso Senior'],
  },
  {
    id: 'elena-r',
    name: 'Elena R.',
    role: 'Lead DevOps & SRE a VP de Infraestructura',
    previousRole: 'Ingeniera de Plataforma Senior',
    achievement: 'Aprobación de presupuesto de $380K en modernización Cloud',
    metricHighlight: '+52% incremento de compensación · Liderazgo de 18 ingenieros',
    quote:
      'Antes presentaba solicitudes de infraestructura hablando de Terraform y clusters de Kubernetes; finanzas siempre las frenaba. Con MentorTech aprendí a justificar la inversión en reducción de riesgo de caída y velocidad de despliegue para el equipo comercial. En menos de dos meses me nombraron VP de Infraestructura.',
    videoDuration: '4:10 min',
    avatarInitials: 'ER',
    tags: ['DevOps & Cloud', 'Aprobación Capex', 'C-Level Pitch'],
  },
  {
    id: 'marco-v',
    name: 'Marco V.',
    role: 'Staff Software Architect & Consejero de Negocio',
    previousRole: 'Tech Lead Backend Senior',
    achievement: 'Salto de ejecutor de tickets a definición de roadmap de producto',
    metricHighlight: 'De 6 certificaciones archivadas a reporte directo a Gerencia General',
    quote:
      'Creía que sacando la certificación de Solutions Architect Professional me iban a promover. La realidad es que el CEO ni sabía qué era eso. MentorTech me enseñó el marco de 1 sola página: dolor de negocio, solución técnica y retorno estimado. Hoy soy consultado en cada decisión clave de la empresa.',
    videoDuration: '2:50 min',
    avatarInitials: 'MV',
    tags: ['Arquitectura de Software', 'Relación con CEO', 'Estrategia TI'],
  },
];

export const MISTAKES = [
  {
    id: '01',
    title: 'La trampa de más certificaciones',
    subtitle: 'El sesgo del acumulador técnico',
    trap: 'Creer que acumulando certificaciones AWS, Azure, Cisco o CISSP la gerencia deducirá automáticamente tu capacidad de liderazgo o te otorgará un aumento salarial.',
    perception: 'El Directorio asume que te apasiona la ejecución pura y te mantendrá resolviendo tickets y configurando sistemas donde eres insustituible operativamente.',
    solution: 'Auditoría de Influencia: Sustituir insignias técnicas por un dossier ejecutivo que demuestre control presupuestario y alineación con objetivos del negocio.',
  },
  {
    id: '02',
    title: 'Comunicar con jerga operativa',
    subtitle: 'La barrera del lenguaje técnico',
    trap: 'Hablar de bases de datos, scripts, latencias de milisegundos y parches ante perfiles de finanzas, ventas y dirección general.',
    perception: 'La gerencia solo percibe un centro de costos costoso y difícil de entender, postergando tus proyectos o recortando presupuestos.',
    solution: 'Traducción Técnica a Negocio: Estructurar cada propuesta bajo 3 vectores que cualquier CEO entiende: Ahorro de Costos, Crecimiento de Ingresos o Mitigación de Riesgos.',
  },
  {
    id: '03',
    title: 'Sobretiempos en silencio',
    subtitle: 'La ilusión del esfuerzo invisible',
    trap: 'Regalar horas extras, guardias pasivas nocturnas y fines de semana esperando que tu jefatura "adivine" tu compromiso y te premie sin pedirlo.',
    perception: 'Te vuelves el bombero indispensable del equipo. Promoverte implicaría un dolor de cabeza operacional para tu jefe, por lo que te dejan donde estás.',
    solution: 'Temple y Presencia Ejecutiva: Aprender a gobernar expectativas, delegar con procesos y negociar plazos con autoridad sin desgastar tu calidad de vida.',
  },
];

export const PILLARS = [
  {
    id: '01',
    number: '01',
    title: 'Diagnóstico de Influencia y Marca',
    description:
      'Identificamos con precisión qué competencias personales, sesgos de comunicación y percepciones directivas están bloqueando tu crecimiento en la organización.',
    deliverables: [
      'Matriz de Stakeholders internos y mapa de poder informal',
      'Auditoría 360° de percepción directiva sobre tu rol actual',
      'Plan de transición de bombero operativo a consultor interno',
    ],
    outcome: 'Eliminas la etiqueta de "solo técnico" en las primeras 2 semanas.',
  },
  {
    id: '02',
    number: '02',
    title: 'Traducción Técnica a Negocio',
    description:
      'Aprende a estructurar propuestas ejecutivas de 1 página conectando tu tecnología con ahorro de costos, aumento de ingresos y control de riesgos corporativos.',
    deliverables: [
      'Plantilla "Executive One-Pager" aprobada por directores ejecutivos',
      'Fórmulas financieras aplicadas a TI (TCO, ROI, Payback de infraestructura)',
      'Técnicas de síntesis para presentar ante comités de inversión sin slides aburridos',
    ],
    outcome: 'Tus proyectos reciben aprobación presupuestaria en la primera reunión.',
  },
  {
    id: '03',
    number: '03',
    title: 'Simulación y Temple C-Level',
    description:
      'Entrenamiento y role-play con feedback directo para responder preguntas difíciles, negociar plazos, defender tus ideas y acordar tu nuevo paquete de compensación.',
    deliverables: [
      'Simulaciones en vivo con directivos reales actuando como CEO / CFO',
      'Entrenamiento para desarmar objeciones de costo ("¿por qué cuesta tanto?")',
      'Protocolo de negociación salarial y títulos ejecutivos sin ultimátums',
    ],
    outcome: 'Defiendes tus posturas con serenidad ejecutiva y autoridad natural.',
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: '¿Cómo sueles defender la necesidad de renovar o modernizar un sistema ante la gerencia?',
    subtitle: 'Selecciona la opción que más se acerque a tu práctica habitual',
    options: [
      {
        text: 'Detallo la arquitectura técnica, la deuda tecnológica y los riesgos de soporte del fabricante.',
        description: 'Enfoque técnico tradicional (alta probabilidad de rechazo presupuestario).',
        score: 1,
      },
      {
        text: 'Menciono que mejorará la velocidad y preparará al equipo para futuras integraciones.',
        description: 'Enfoque intermedio (beneficios operativos sin métrica cuantitativa de negocio).',
        score: 2,
      },
      {
        text: 'Presento una propuesta en 1 página cuantificando horas de productividad salvadas, reducción de riesgo de compliance y ROI en 12 meses.',
        description: 'Enfoque ejecutivo estratégico de alto impacto.',
        score: 3,
      },
    ],
  },
  {
    id: 2,
    question: '¿Qué ocurre cuando la empresa necesita recortar gastos o congelar proyectos?',
    subtitle: 'Tu postura frente a las presiones presupuestarias',
    options: [
      {
        text: 'Siento frustración porque la gerencia "no entiende" que la tecnología es crítica para la operación.',
        description: 'Postura reactiva desconectada del contexto financiero de la compañía.',
        score: 1,
      },
      {
        text: 'Acepto el recorte y hago malabares con horas extra para mantener los servidores funcionando.',
        description: 'Postura de sobreesfuerzo silencioso (riesgo alto de burnout e invisibilidad).',
        score: 2,
      },
      {
        text: 'Facilito un análisis de riesgo por niveles: "Si recortamos X, asumimos riesgo Y en las ventas de Navidad; propongo optimizar Z".',
        description: 'Postura de socio de negocio que asesora al Directorio.',
        score: 3,
      },
    ],
  },
  {
    id: 3,
    question: '¿Cómo percibe tu jefatura directa tu trabajo en el día a día?',
    subtitle: 'Diagnóstico de tu marca profesional actual',
    options: [
      {
        text: 'Como el especialista indispensable que resuelve incendios y sabe dónde está cada configuración.',
        description: 'Esclavo de la operación: demasiado valioso apagando fuegos para ser promovido.',
        score: 1,
      },
      {
        text: 'Como un ingeniero eficiente y cumplidor que entrega sus tareas y tickets a tiempo.',
        description: 'Excelente ejecutor individual, pero aún sin visibilidad estratégica superior.',
        score: 2,
      },
      {
        text: 'Como un líder proactivo que previene problemas, traduce prioridades comerciales y propone mejoras de negocio.',
        description: 'Candidato natural a roles de dirección, gerencia o VP.',
        score: 3,
      },
    ],
  },
  {
    id: 4,
    question: '¿Cuál es tu estrategia actual para lograr tu próximo ascenso o aumento salarial?',
    subtitle: 'Ruta de crecimiento profesional',
    options: [
      {
        text: 'Obtener nuevas certificaciones oficiales de nube, seguridad o metodologías ágiles.',
        description: 'La trampa del 90%: invertir tiempo en títulos que la gerencia no valora comercialmente.',
        score: 1,
      },
      {
        text: 'Esperar a la evaluación anual de desempeño para destacar mi asistencia y horas invertidas.',
        description: 'Dependencia pasiva del criterio arbitrario de tu evaluador.',
        score: 2,
      },
      {
        text: 'Documentar el valor financiero generado por mis proyectos y abrir una conversación ejecutiva con métricas claras.',
        description: 'Negociación estratégica basada en evidencia y apalancamiento.',
        score: 3,
      },
    ],
  },
];

export const COMPARISON_ROWS = [
  {
    factor: 'Tiempo de dedicación',
    traditional: '18 a 24 meses de clases nocturnas teóricas',
    mentorTech: '8 semanas de aceleración ejecutiva práctica',
  },
  {
    factor: 'Inversión económica',
    traditional: '$12,000 a $25,000 USD en maestrías o MBAs generales',
    mentorTech: 'Una fracción accesible con retorno de inversión en el primer semestre',
  },
  {
    factor: 'Enfoque del contenido',
    traditional: 'Estudios de caso de empresas de manufactura de 1995',
    mentorTech: 'Tus proyectos actuales de TI transformados en casos de negocio reales',
  },
  {
    factor: 'Mentores y feedback',
    traditional: 'Profesores académicos sin experiencia reciente en tecnología',
    mentorTech: 'Directores TI, CTOs y líderes C-Level activos en el mercado corporativo',
  },
  {
    factor: 'Resultado tangible',
    traditional: 'Un diploma en la pared mientras sigues en el mismo puesto y salario',
    mentorTech: 'Discurso ejecutivo, caso de 1 página y propuesta formal de ascenso en tu empresa',
  },
];

export const FAQS = [
  {
    question: '¿MentorTech reemplaza una maestría o un MBA?',
    answer:
      'Un MBA te da teoría general de contabilidad y marketing, pero no te enseña cómo un ingeniero debe presentar un caso de bases de datos o infraestructura cloud ante un Directorio escéptico. MentorTech es un acelerador táctico enfocado 100% en el puente entre tecnología y dirección ejecutiva.',
  },
  {
    question: 'Tengo muchas guardias y poco tiempo libre, ¿cómo podré cursarlo?',
    answer:
      'El programa está diseñado específicamente para ingenieros con agendas apretadas. No hay tareas teóricas de relleno: cada ejercicio se aplica directamente sobre los proyectos y reuniones que ya tienes en tu trabajo actual, permitiéndote resolver tu carga operativa más rápido.',
  },
  {
    question: '¿Qué pasa si en mi empresa actual no hay vacantes de gerencia inmediatas?',
    answer:
      'Aprenderás a crear la necesidad del rol o, en su defecto, a posicionarte con un perfil senior de alto valor para el mercado laboral externo, como lo experimentó Davis C., recibiendo convocatorias espontáneas de reclutadores ejecutivos.',
  },
  {
    question: '¿Por qué la sesión de diagnóstico inicial de 30 minutos es sin costo?',
    answer:
      'Porque solo aceptamos a 8 profesionales por cohorte. Necesitamos conocer tu situación real, entender si estás en el punto de inflexión adecuado y confirmar si nuestro método puede generar un salto en tu carrera antes de ofrecerte un lugar.',
  },
  {
    question: '¿Qué requisitos necesito para postular?',
    answer:
      'Tener al menos 3 años de experiencia en roles técnicos de TI (desarrollo, bases de datos, redes, ciberseguridad, DevOps, QA o soporte avanzado) y tener la firme aspiración de asumir roles de liderazgo, coordinación o dirección.',
  },
];
