export type Stage =
  | 'Análisis'
  | 'Construcción'
  | 'Diseño CAD'
  | 'Programación'
  | 'Torneo'
  | 'Gestión'
  | 'Mejora'
  | 'Evidencia visual'
  | 'Preparación'
  | 'Autónomo'
  | 'Diseño'
  | 'Pruebas'
  | 'Organización';

export type Entry = {
  dateISO: string;
  dateLabel: string;
  place: string;
  time: string;
  stage: Stage;
  title: string;
  objective: string;
  activities: string[];
  technicalDevelopment: string;
  observations: string;
  results: string;
  details: string;
  imageRefs: string[];
  sourcePages: string[];
  imageFile?: string;
};

const sourceInitial = ['PDF páginas iniciales: portada, impacto, objetivos y metodología'];
const sourceSept = ['PDF sección septiembre 2025'];
const sourceOct = ['PDF sección octubre 2025'];
const sourceNov = ['PDF sección noviembre 2025'];
const sourceDec = ['PDF sección diciembre 2025'];
const sourceJan = ['PDF sección enero 2026'];

const visualA =
  'La bitácora física registra esta jornada principalmente mediante evidencia visual. Esta entrada se conserva como prueba de continuidad del trabajo, seguimiento del desarrollo del robot y documentación del proceso previo a las siguientes etapas de competencia.';
const visualB =
  'En esta fecha, la bitácora física se apoya sobre todo en evidencias visuales. Se mantiene este registro como respaldo del avance continuo del equipo y del seguimiento del robot.';
const visualC =
  'La jornada quedó documentada principalmente con imágenes en la bitácora física. Se conserva para mantener trazabilidad del proceso y continuidad del trabajo técnico del equipo.';

function createVisualEntry({
  dateISO,
  dateLabel,
  title,
  stage,
  sourcePages,
  imageFile,
  text,
  place = 'Laboratorio de Robótica',
  time = '08:30-12:30'
}: {
  dateISO: string;
  dateLabel: string;
  title: string;
  stage: Stage;
  sourcePages: string[];
  imageFile: string;
  text: string;
  place?: string;
  time?: string;
}): Entry {
  return {
    dateISO,
    dateLabel,
    place,
    time,
    stage,
    title,
    objective: 'Conservar continuidad documental del proceso.',
    activities: [text],
    technicalDevelopment: text,
    observations: 'No se agregan actividades técnicas no presentes en el PDF.',
    results: 'Se conserva trazabilidad del trabajo del equipo.',
    details: text,
    imageRefs: [],
    sourcePages,
    imageFile
  };
}

export const entries: Entry[] = [
  {
    dateISO: '2025-09-08',
    dateLabel: 'Lunes 08 de septiembre del 2025',
    place: 'Laboratorio de Robótica',
    time: '12:30-14:10',
    stage: 'Análisis',
    title: 'Análisis inicial del reto VEX Robotics 2025-2026 PUSH BACK',
    objective: 'Comprender reglas, dimensiones y sistema de puntuación.',
    activities: ['Análisis del video de presentación del reto VEX Robotics 2025-2026.'],
    technicalDevelopment:
      'Se revisó el video oficial del reto, los planos del campo, las dimensiones de porterías, bloques y zonas de estacionamiento, así como el sistema de puntuación y bonificaciones. El campo PUSH BACK se documentó como 12 ft x 12 ft, con cuatro porterías, cuatro cargadores, dos espacios de estacionamiento y 88 bloques de plástico.',
    observations:
      'Se registraron reglas clave de bonus por control y por estacionamiento, además de la regla de validez de bloques dentro de líneas. También se identificaron retos técnicos: doble altura de anotación, fuerza de empuje, extracción del recargador, estacionamiento rápido y buen autónomo.',
    results: 'Comprensión general del reto y definición de requerimientos técnicos iniciales.',
    details:
      'Los planos del reto se tomaron como base de diseño por falta de acceso continuo al campo oficial, para construir un robot competitivo y ajustar en torneos de prueba.',
    imageRefs: [
      'Imagen 1.1',
      'Imagen 1.7',
      'Imagen 1.8',
      'Imagen 1.9',
      'Imagen 1.10',
      'Imagen 1.11',
      'Imagen 1.12',
      'Imagen 1.13',
      'Imagen 1.2',
      'Imagen 1.3',
      'Imagen 1.4',
      'Imagen 1.5',
      'Imagen 1.6',
      'Imagen 2.1',
      'Imagen 2.2',
      'Imagen 2.3'
    ],
    sourcePages: sourceSept,
    imageFile: 'entry-2025-09-08.svg'
  },
  {
    dateISO: '2025-09-09',
    dateLabel: 'Martes 09 de septiembre del 2025',
    place: 'Laboratorio de Robótica',
    time: '12:30-14:10',
    stage: 'Construcción',
    title: 'Desarmado del robot anterior y organización de equipos',
    objective: 'Acelerar avance y analizar mecanismos reutilizables.',
    activities: [
      'Comenzar el desarmado del robot del reto pasado.',
      'Analizar mecanismos del robot anterior para PUSH BACK.',
      'Realizar el prototipo guiado por la poca experiencia en VEX V5.',
      'Dividir el equipo para trabajar tareas paralelas.'
    ],
    technicalDevelopment:
      'La división por equipos se planteó en pasos no interdependientes: equipo 1 (pasos 1-9), equipo 2 (pasos 10-14), equipo 3 (desarmado y análisis del prototipo anterior).',
    observations:
      'Se concluyó que el sistema de elevación del robot anterior podía implementarse de forma similar, por lo que se continuó el armado guiado.',
    results: 'Organización de trabajo paralela y progreso más rápido del prototipo guiado.',
    details: 'La jornada consolidó la dinámica por áreas para mejorar eficiencia en tiempos de construcción.',
    imageRefs: ['Imagen 3.1', 'Imagen 3.2', 'Imagen 3.3'],
    sourcePages: sourceSept,
    imageFile: 'entry-2025-09-09.svg'
  },
  {
    dateISO: '2025-09-10',
    dateLabel: 'Miércoles 10 de septiembre del 2025',
    place: 'Laboratorio de Robótica',
    time: '12:30-14:10',
    stage: 'Construcción',
    title: 'Prototipo anterior desarmado y avance del prototipo guiado',
    objective: 'Cerrar desarmado y continuar avance del prototipo guiado.',
    activities: [
      'Terminar de desarmar el prototipo del reto pasado.',
      'Continuar con el armado del prototipo guiado hasta el paso 36c.',
      'Solicitar bloque oficial a Dirección General de CECyTE Michoacán.'
    ],
    technicalDevelopment:
      'Durante el análisis del robot anterior se identificó un tren motriz con mecanismo piñón-cadena como referencia para futuros diseños.',
    observations:
      'Se tenía poco material y parte de él estaba dañado por antigüedad de uso, por lo que se planteó gestión de recursos externos.',
    results: 'Se mantuvo el avance de armado y se inició gestión formal de insumos.',
    details: 'Entrada de transición entre desarmado, armado guiado y gestión.',
    imageRefs: ['Imagen 4.1', 'Imagen 4.2', 'Imagen 4.3', 'Imagen 4.4'],
    sourcePages: sourceSept,
    imageFile: 'entry-2025-09-10.svg'
  },
  {
    dateISO: '2025-09-15',
    dateLabel: 'Lunes 15 de septiembre del 2025',
    place: 'Laboratorio de Robótica',
    time: '12:30-14:10',
    stage: 'Construcción',
    title: 'Avance del prototipo guiado hasta base de elevación',
    objective: 'Alcanzar la base para el sistema de elevación.',
    activities: ['Continuar con el armado del prototipo guiado hasta el paso 68c.'],
    technicalDevelopment: 'La base del sistema de elevación quedó estructuralmente avanzada.',
    observations: 'Jornada concentrada en continuidad de ensamble.',
    results: 'Se llegó al paso 68c del prototipo guiado.',
    details: 'Registro centrado en evidencia visual del avance por pasos.',
    imageRefs: ['Imagen 5.1', 'Imagen 5.2', 'Imagen 5.3', 'Imagen 5.4', 'Imagen 5.5'],
    sourcePages: sourceSept,
    imageFile: 'entry-2025-09-15.svg'
  },
  {
    dateISO: '2025-09-16',
    dateLabel: 'Martes 16 de septiembre del 2025',
    place: 'Laboratorio de Robótica',
    time: '12:30-14:10',
    stage: 'Construcción',
    title: 'Armado del prototipo guiado hasta el paso 98c',
    objective: 'Continuar avance del prototipo guiado.',
    activities: ['Seguir con el armado del prototipo guiado hasta el paso 98c.'],
    technicalDevelopment: 'Se mantuvo el ensamble progresivo por secuencia de guía.',
    observations: 'No se registran incidencias técnicas adicionales en esta entrada.',
    results: 'Se alcanzó el paso 98c.',
    details: 'Entrada respaldada por evidencia visual del proceso.',
    imageRefs: ['Imagen 6.1', 'Imagen 6.2', 'Imagen 6.3'],
    sourcePages: sourceSept,
    imageFile: 'entry-2025-09-16.svg'
  },
  {
    dateISO: '2025-09-17',
    dateLabel: 'Miércoles 17 de septiembre del 2025',
    place: 'Laboratorio de Robótica',
    time: '12:30-14:10',
    stage: 'Construcción',
    title: 'Armado del prototipo guiado hasta el paso 113c',
    objective: 'Dar continuidad al ensamble guiado.',
    activities: ['Avanzar en el prototipo guiado hasta el paso 113c.'],
    technicalDevelopment: 'Se integraron más secciones de ensamble según guía de construcción.',
    observations: 'La entrada se centra en progresión de pasos.',
    results: 'Se alcanzó el paso 113c.',
    details: 'Evidencia visual de armado por etapas.',
    imageRefs: ['Imagen 6.4', 'Imagen 6.5', 'Imagen 6.6', 'Imagen 6.7', 'Imagen 6.8', 'Imagen 6.9'],
    sourcePages: sourceSept,
    imageFile: 'entry-2025-09-17.svg'
  },
  {
    dateISO: '2025-09-23',
    dateLabel: 'Miércoles 23 de septiembre del 2025',
    place: 'Laboratorio de Robótica',
    time: '12:30-14:10',
    stage: 'Construcción',
    title: 'Armado del prototipo guiado hasta el paso 132c',
    objective: 'Continuar secuencia del prototipo guiado.',
    activities: ['Avanzar en el prototipo guiado hasta el paso 132c.'],
    technicalDevelopment: 'Progreso de ensamble documentado por pasos intermedios y finales de la jornada.',
    observations: 'Sin cambios de diseño reportados en esta fecha.',
    results: 'Se alcanzó el paso 132c.',
    details: 'Entrada de continuidad técnica del armado guiado.',
    imageRefs: ['Imagen 7.1', 'Imagen 7.2', 'Imagen 7.3'],
    sourcePages: sourceSept,
    imageFile: 'entry-2025-09-23.svg'
  },
  {
    dateISO: '2025-09-24',
    dateLabel: 'Miércoles 24 de septiembre del 2025',
    place: 'Laboratorio de Robótica',
    time: '12:30-14:10',
    stage: 'Diseño CAD',
    title: 'Instalación de Inventor y avance del prototipo guiado',
    objective: 'Integrar diseño 3D al flujo del proyecto.',
    activities: [
      'Instalar Inventor Profesional en laptops del equipo.',
      'Continuar armado del prototipo guiado hasta el paso 162c.',
      'Realizar oficios de solicitud de recursos a servidores públicos.'
    ],
    technicalDevelopment:
      'Se incorporó Inventor como herramienta principal de modelado 3D y se mantuvo el armado físico en paralelo.',
    observations: 'La jornada integró tareas CAD, mecánicas y administrativas.',
    results: 'Avance simultáneo en armado, diseño digital y gestión de apoyos.',
    details: 'Sección específica de instalación de Inventor Profesional y progresión por pasos.',
    imageRefs: ['Imagen 7.5', 'Imagen 7.6', 'Imagen 7.7', 'Imagen 7.8', 'Imagen 7.9', 'Imagen 8.0', 'Imagen 8.1', 'Imagen 8.2', 'Imagen 8.3', 'Imagen 8.4', 'Imagen 8.5'],
    sourcePages: sourceSept,
    imageFile: 'entry-2025-09-24.svg'
  },
  {
    dateISO: '2025-09-25',
    dateLabel: 'Jueves 25 de septiembre del 2025',
    place: 'Laboratorio de Robótica',
    time: '12:30-14:10',
    stage: 'Organización',
    title: 'Designación de encargados y subencargados',
    objective: 'Fortalecer organización y roles por área.',
    activities: [
      'Seguir trabajando en el prototipo guiado.',
      'Entregar oficio dirigido a la Diputada Local Teresita de Jesús.',
      'Designar encargados y subencargados por desempeño.'
    ],
    technicalDevelopment:
      'Se formalizaron áreas de Construcción (Roberto, Juan Diego), Diseño (Javier, Rogelio), Programación (Emmanuel, Joshua) y Bitácora (Estefanía, Rafael).',
    observations:
      'Se indicó que Cristian y Alexis serían evaluados en torneos de prueba para designar driver.',
    results: 'Estructura organizativa definida y armado del robot guiado hasta paso 170c.',
    details: 'Distribución de responsabilidades para acelerar avance y mejorar coordinación.',
    imageRefs: ['Imagen 9.0', 'Imagen 9.1', 'Imagen 9.2'],
    sourcePages: sourceSept,
    imageFile: 'entry-2025-09-25.svg'
  },
  {
    dateISO: '2025-09-29',
    dateLabel: 'Lunes 29 de septiembre del 2025',
    place: 'Laboratorio de Robótica',
    time: '12:30-14:10',
    stage: 'Gestión',
    title: 'Avance del prototipo guiado, VEXcode V5 y gestión de apoyos',
    objective: 'Mantener avance técnico y obtener apoyos económicos.',
    activities: [
      'Avanzar hasta el paso 195c del prototipo guiado.',
      'Reuniones con funcionarios públicos para presentar el proyecto y solicitar apoyo.',
      'Instalar VEXcode V5 en el área de programación.'
    ],
    technicalDevelopment:
      'Se registraron reuniones con Mtr. Juan Pablo Herrera, Ing. Marco Alfonso Figueroa y MVZ Francisco Pérez; además de instalar entorno de programación VEXcode V5.',
    observations:
      'Por falta de piezas para completar el guiado, se detuvo su armado y se inició búsqueda de un diseño propio.',
    results: 'Se obtuvo respuesta favorable y un apoyo total de $8,900.00 para el proyecto.',
    details:
      'Tabla de apoyos registrada: Secretario $2,000; Síndico $1,900; Regidor $5,000 (entregas 06/10 y 24/10).',
    imageRefs: ['Imagen 10.1', 'Imagen 10.2'],
    sourcePages: sourceSept,
    imageFile: 'entry-2025-09-29.svg'
  },
  {
    dateISO: '2025-09-30',
    dateLabel: 'Martes 30 de septiembre del 2025',
    place: 'Laboratorio de Robótica',
    time: '12:30-15:00',
    stage: 'Diseño',
    title: 'Diagramas del nuevo diseño para el regional de Lagunillas',
    objective: 'Preparar diseño propio para torneo regional de prueba.',
    activities: [
      'Comenzar diagramas del nuevo diseño.',
      'Realizar pruebas de programación.'
    ],
    technicalDevelopment:
      'El diseño mantuvo base y rampa del prototipo guiado por tiempo disponible, modificando elevación y agarre de bloques con rodillos de ligas y transmisión piñón-cadena 1:1 con un motor.',
    observations: 'La propuesta se enfocó en una solución viable para competir en Lagunillas.',
    results: 'Se documentó boceto mecánico del nuevo enfoque de robot.',
    details: 'Se registró explicación gráfica del mecanismo para construcción posterior.',
    imageRefs: ['Imagen 11.1', 'Imagen 11.2', 'Imagen 11.3', 'Imagen 11.4', 'Imagen 11.5'],
    sourcePages: sourceSept,
    imageFile: 'entry-2025-09-30.svg'
  },

  {
    dateISO: '2025-10-01',
    dateLabel: 'Miércoles 01 de octubre del 2025',
    place: 'Laboratorio de Robótica',
    time: '12:30-14:10',
    stage: 'Diseño CAD',
    title: 'Diseño 3D, impresión de piezas y comienzo del diseño propuesto',
    objective: 'Validar diseño mecánico en CAD e iniciar construcción.',
    activities: [
      'Diseñar en 3D en SOLIDWORKS el bloque del reto y otras piezas.',
      'Imprimir piezas diseñadas.',
      'Probar diseño 3D del robot en Inventor.',
      'Armar pista base para cálculo de distancias.',
      'Comenzar armado del diseño propuesto.'
    ],
    technicalDevelopment:
      'La jornada integró CAD (SolidWorks e Inventor), impresión 3D y construcción física inicial del mecanismo.',
    observations: 'No se contaba con ejes suficientes y se detuvo la construcción del mecanismo propuesto.',
    results: 'Se conservó avance digital y de prototipado para iterar el diseño.',
    details: 'Evidencia de diseño de piezas, bloque y pruebas de cómo quedaría el mecanismo.',
    imageRefs: ['Imagen 12.1', 'Imagen 12.2', 'Imagen 12.3', 'Imagen 12.7', 'Imagen 12.6', 'Imagen 12.4', 'Imagen 12.5'],
    sourcePages: sourceOct,
    imageFile: 'entry-2025-10-01.svg'
  },
  {
    dateISO: '2025-10-02',
    dateLabel: 'Jueves 02 de octubre del 2025',
    place: 'Laboratorio de Robótica',
    time: '12:30-15:30',
    stage: 'Construcción',
    title: 'Cambio de diseño, bloque oficial y mecanismo Tank Tread',
    objective: 'Resolver contratiempos del diseño anterior.',
    activities: [
      'Cambiar el diseño por contratiempos previos.',
      'Armar diseño nuevo.',
      'Recibir bloque oficial del reto.',
      'Hacer pruebas con el diseño nuevo.',
      'Continuar pruebas CAD en Inventor.'
    ],
    technicalDevelopment:
      'Se tomó de nuevo la base del prototipo guiado, integrando elevación por Tank Tread y recolección por rodillo de ligas construido con engranes de 24 dientes, eje, separadores, ligas y opresores. La transmisión motor-banda-rodillo se resolvió con cadena-piñón usando un solo motor.',
    observations: 'Las pruebas del mecanismo de elevación fueron satisfactorias.',
    results: 'El diseño nuevo resultó funcional para continuar iteración.',
    details: 'Entrada centrada en explicación mecánica del cambio de diseño.',
    imageRefs: ['Imagen 13.1', 'Imagen 13.2', 'Imagen 13.3'],
    sourcePages: sourceOct,
    imageFile: 'entry-2025-10-02.svg'
  },
  {
    dateISO: '2025-10-03',
    dateLabel: 'Viernes 03 de octubre del 2025',
    place: 'Laboratorio de Robótica',
    time: '13:20-15:30',
    stage: 'Construcción',
    title: 'Pruebas separadas de mecanismos y diseño 3D',
    objective: 'Probar subsistemas antes de integración.',
    activities: ['Armar el diseño nuevo.', 'Continuar pruebas de diseño 3D en Inventor.'],
    technicalDevelopment:
      'Ninguno de los mecanismos se fijó al robot; se montaron y probaron por separado para validar funcionamiento parcial.',
    observations: 'Se priorizó validación aislada de recolección y elevación.',
    results: 'Evidencia útil para decisiones de integración posterior.',
    details: 'Bitácora con evidencia de armado y pruebas parciales.',
    imageRefs: ['Imagen 14.0', 'Imagen 14.1'],
    sourcePages: sourceOct,
    imageFile: 'entry-2025-10-03.svg'
  },
  {
    dateISO: '2025-10-04',
    dateLabel: 'Sábado 04 de octubre del 2025',
    place: 'Laboratorio de Robótica',
    time: '13:20-15:30',
    stage: 'Programación',
    title: 'Armado del diseño nuevo y sensor giroscópico',
    objective: 'Integrar sensor para mejorar autónomo.',
    activities: ['Armar diseño nuevo.', 'Hacer pruebas del diseño nuevo.'],
    technicalDevelopment:
      'Se incorporó Gyroscope Sensor V1.0 para mejorar movimiento autónomo y retroalimentación del robot en un eje de rotación.',
    observations:
      'El sensor se destinó al desarrollo de programas autónomos de MATCHS HEAD-TO-HEAD y AUTONOMOUS CODING SKILLS MATCH.',
    results: 'Diseño probado con integración de sensor giroscópico.',
    details: 'Se documentaron armado de banda, conexión del sensor y pruebas mecánicas.',
    imageRefs: ['Imagen 15.0', 'Imagen 15.1', 'Imagen 15.2', 'Imagen 15.3'],
    sourcePages: sourceOct,
    imageFile: 'entry-2025-10-04.svg'
  },
  {
    dateISO: '2025-10-06',
    dateLabel: 'Lunes 06 de octubre del 2025',
    place: 'Laboratorio de Robótica',
    time: '12:30-15:30',
    stage: 'Diseño CAD',
    title: 'Diseño 3D, porterías simuladas y ajustes en base',
    objective: 'Probar desempeño en condiciones simuladas.',
    activities: ['Comenzar armado del diseño en 3D.', 'Simular pruebas recreando altura y forma de porterías.'],
    technicalDevelopment: 'Se recrearon porterías para pruebas finales y se aplicaron ajustes en base y zona de llantas.',
    observations: 'Se enfocó la jornada en afinación previa al regional.',
    results: 'Robot mejor ajustado para condición de cancha.',
    details: 'Entrada de simulación, prueba y corrección de base.',
    imageRefs: ['Imagen 16.0', 'Imagen 16.1', 'Imagen 16.2', 'Imagen 16.3'],
    sourcePages: sourceOct,
    imageFile: 'entry-2025-10-06.svg'
  },
  {
    dateISO: '2025-10-07',
    dateLabel: 'Martes 07 de octubre del 2025',
    place: 'Laboratorio de Robótica',
    time: '12:30-16:30',
    stage: 'Mejora',
    title: 'Últimos ajustes antes del regional en Lagunillas',
    objective: 'Eliminar inestabilidad en estructura alta.',
    activities: ['Hacer últimos ajustes antes del regional.', 'Realizar pruebas en cancha con simulaciones de altura.'],
    technicalDevelopment:
      'Se colocó un separador porque la estructura alta presentaba inestabilidad e inclinación al centro; con ejes, separadores y opresores se buscó separación uniforme.',
    observations: 'La corrección se validó en pruebas previas al torneo.',
    results: 'Robot listo para regional de prueba.',
    details: 'Registro de ajuste crítico para estabilidad.',
    imageRefs: ['Imagen 17.0', 'Imagen 17.1'],
    sourcePages: sourceOct,
    imageFile: 'entry-2025-10-07.svg'
  },
  {
    dateISO: '2025-10-08-regional',
    dateLabel: 'Miércoles 08 de octubre del 2025',
    place: 'CECyTEM 24 Lagunillas',
    time: '5:30-18:00',
    stage: 'Torneo',
    title: 'Regional de prueba en Lagunillas',
    objective: 'Evaluar desempeño del robot y del driver en competencia real.',
    activities: ['Participación en tres matches.', 'Designación de driver por desempeño.'],
    technicalDevelopment:
      'Se eligió capitanía (Roberto Durán) y se evaluaron dos contendientes a driver (Alexis y Cristian). Se documentaron observaciones de transmisión, fallos físicos en autónomo y sobreesfuerzo de motores.',
    observations:
      'Resultados de matches: victoria 60–11 (Alexis), derrota 23–25 (Cristian), victoria 70–25 (Alexis). Alexis fue designado driver del equipo.',
    results: 'Jornada de validación competitiva y decisión operativa de manejo.',
    details: 'Se conserva evidencia del desempeño en cancha y toma de decisiones del equipo.',
    imageRefs: ['Imagen 17.1', 'Imagen 17.2'],
    sourcePages: sourceOct,
    imageFile: 'entry-2025-10-08.svg'
  },
  {
    dateISO: '2025-10-08-autonomo',
    dateLabel: 'Miércoles 08 de octubre del 2025',
    place: 'CECyTEM 24 Lagunillas',
    time: '5:30-18:00',
    stage: 'Autónomo',
    title: 'Primer código autónomo realizado durante el regional',
    objective: 'Registrar primera base de autónomo y control.',
    activities: ['Implementación del primer código autónomo durante el regional.'],
    technicalDevelopment:
      'Se documentó definición de cerebro y control, torque y velocidad al 100%, calibración de giroscopio, movimientos de avance/giro/reversa y secuencias del motor 5 con temporización.',
    observations:
      'También se documentó control por driver: variables axis3 y axis1, velocidades izquierda/derecha, joysticks y activación del motor 5 con botones R1/R2 y espera de 20 ms al detenerse.',
    results: 'Quedó registrada una base funcional de autónomo y control manual.',
    details: 'La explicación se conserva por bloques de líneas del programa según bitácora física.',
    imageRefs: ['Imagen 17.3', 'Imagen 17.4', 'Imagen 17.5'],
    sourcePages: sourceOct,
    imageFile: 'entry-2025-10-08.svg'
  },
  {
    dateISO: '2025-10-13',
    dateLabel: 'Lunes 13 de octubre del 2025',
    place: 'Laboratorio de Robótica',
    time: '12:30-15:00',
    stage: 'Mejora',
    title: 'Mejoras posteriores al regional',
    objective: 'Aplicar mejoras por observaciones del regional.',
    activities: ['Revisión de elevación.', 'Diseño 3D de rodillos con ligas.', 'Ajustes de programación por dos motores nuevos.'],
    technicalDevelopment:
      'Se reutilizó la elevación de un prototipo anterior por mejor funcionamiento y se planteó ajuste a dos alturas con pistón neumático.',
    observations:
      'Se consideró sensor ultrasónico y se buscó migrar a cuatro motores para mayor estabilidad y menor sobrecalentamiento entre partidos.',
    results: 'Se definió línea de mejora para base cuadrada y nueva arquitectura mecánica.',
    details: 'Entrada centrada en decisiones de iteración posterior al torneo.',
    imageRefs: ['Imagen 18.0', 'Imagen 18.1'],
    sourcePages: sourceOct,
    imageFile: 'entry-2025-10-13.svg'
  },
  {
    dateISO: '2025-10-14',
    dateLabel: 'Martes 14 de octubre del 2025',
    place: 'Laboratorio de Robótica',
    time: '12:30-15:00',
    stage: 'Construcción',
    title: 'Pista simulada, base cuadrada y piñón-cadena',
    objective: 'Construir entorno de pruebas y corregir transmisión.',
    activities: ['Construir pista simulada.', 'Terminar base cuadrada.', 'Comenzar simulaciones en 3D.'],
    technicalDevelopment:
      'Se detectó falta de espacio frontal para rodillo recolector y se adoptó transmisión piñón-cadena 1:1. La cancha simulada se usó para entrenamiento del driver y referencias de giro.',
    observations:
      'La cadena 3D de prueba requirió apoyo externo y tomó un día y medio para concluir.',
    results: 'Se consolidó base de pruebas y transmisión ejecutada en la plataforma.',
    details: 'Entrada documenta la decisión técnica de simulación y cambios mecánicos.',
    imageRefs: ['Imagen 19.0', 'Imagen 19.1', 'Imagen 19.2', 'Imagen 19.3', 'Imagen 19.4', 'Imagen 19.5', 'Imagen 19.6'],
    sourcePages: sourceOct,
    imageFile: 'entry-2025-10-14.svg'
  },
  {
    dateISO: '2025-10-15',
    dateLabel: 'Miércoles 15 de octubre del 2025',
    place: 'Laboratorio de Robótica',
    time: '12:30-15:00',
    stage: 'Mejora',
    title: 'Cadena de prueba, estacionamiento, rodillo y neumática',
    objective: 'Validar cadena, manejo y recarga.',
    activities: ['Completar cadena de prueba.', 'Pruebas del robot en pista.', 'Prueba del rodillo de ligas.'],
    technicalDevelopment:
      'Se confirmó estacionamiento en pista, se evaluó calentamiento de motores y se corrigieron controles invertidos mediante reprogramación.',
    observations:
      'Se ajustó rodillo y se decidió usar neumática para recargas. El motor del rodillo inferior presentó fallas y se retiró en cinco ocasiones.',
    results: 'Sistema funcional con ajuste de control y guía de armado neumático.',
    details: 'La cadena de prueba tomó un día y medio, según registro de la bitácora.',
    imageRefs: ['Imagen 20.0', 'Imagen 20.1', 'Imagen 20.2', 'Imagen 20.3', 'Imagen 20.4'],
    sourcePages: sourceOct,
    imageFile: 'entry-2025-10-15.svg'
  },
  {
    dateISO: '2025-10-16',
    dateLabel: 'Jueves 16 de octubre del 2025',
    place: 'Laboratorio de Robótica',
    time: '12:30-15:00',
    stage: 'Diseño',
    title: 'Desarrollo y construcción del diseño 2.0',
    objective: 'Implementar nueva iteración de robot.',
    activities: ['Desarrollo de diseño 2.0.', 'Construcción del diseño 2.0.'],
    technicalDevelopment: 'Se trabajó en diseño 2.0 con mecanismo de variación de altura y montaje físico.',
    observations: 'La evidencia de esta jornada es mayormente visual de diseño y construcción.',
    results: 'Diseño 2.0 instalado en estructura física.',
    details: 'Entrada respaldada por imágenes de vista lateral, mecanismo e instalación.',
    imageRefs: ['Imagen 21.0', 'Imagen 21.1', 'Imagen 21.2', 'Imagen 21.3', 'Imagen 21.4'],
    sourcePages: sourceOct,
    imageFile: 'entry-2025-10-16.svg'
  },
  {
    dateISO: '2025-10-20',
    dateLabel: 'Lunes 20 de octubre del 2025',
    place: 'Laboratorio de Robótica',
    time: '12:30-15:00',
    stage: 'Diseño',
    title: 'Detalles finales del diseño 2.0 y mecanismo de recarga',
    objective: 'Cerrar diseño 2.0 y resolver recarga.',
    activities: ['Completar detalles finales del diseño 2.0.', 'Implementar mecanismo de recarga.'],
    technicalDevelopment:
      'El primer mecanismo de recarga falló y se modificó. El segundo ajuste mostró falta de longitud y volvió a modificarse, con construcción paralela del mecanismo de elevación.',
    observations: 'La evolución se documentó como una iteración mecánica de varias etapas.',
    results: 'Se avanzó hacia una solución más funcional del sistema de recarga.',
    details: 'Registro detallado de reajustes y construcción de mecanismos.',
    imageRefs: ['Imagen 22.0', 'Imagen 22.1', 'Imagen 22.2', 'Imagen 22.3', 'Imagen 22.4', 'Imagen 22.5', 'Imagen 22.6'],
    sourcePages: sourceOct,
    imageFile: 'entry-2025-10-20.svg'
  },
  {
    dateISO: '2025-10-21',
    dateLabel: 'Martes 21 de octubre del 2025',
    place: 'CEMSaD 04 Agostitlán',
    time: '7:30-15:00',
    stage: 'Torneo',
    title: 'Torneo de prueba Agostitlán',
    objective: 'Participar y evaluar desempeño en torneo de prueba.',
    activities: ['Participación en torneo de prueba Agostitlán.'],
    technicalDevelopment: 'La jornada se registra como participación de torneo con ajustes entre partidos y seguimiento visual.',
    observations: 'No se agregan resultados numéricos adicionales fuera de lo documentado.',
    results: 'La bitácora reporta resultados excelentes en los encuentros del evento.',
    details: 'Entrada respaldada con evidencia de llegada, partido, ajustes y salida.',
    imageRefs: ['Imagen 23.0', 'Imagen 23.1', 'Imagen 23.2', 'Imagen 23.3', 'Imagen 23.4'],
    sourcePages: sourceOct,
    imageFile: 'entry-2025-10-21.svg'
  },
  {
    dateISO: '2025-10-22',
    dateLabel: 'Miércoles 22 de octubre del 2025',
    place: 'Laboratorio de Robótica',
    time: 'No especificado en la entrada',
    stage: 'Mejora',
    title: 'Análisis posterior al torneo de Agostitlán',
    objective: 'Definir mejoras posteriores al torneo.',
    activities: ['Analizar observaciones del torneo.', 'Desarmar robot y conservar base.', 'Listar materiales faltantes.'],
    technicalDevelopment:
      'Se buscaron soluciones a observaciones del torneo y se preparó nueva iteración mecánica con base en lista de materiales.',
    observations: 'Se indicó que los materiales faltantes se recibirían el viernes 24 de octubre.',
    results: 'Quedó documentado primer diseño para mejora posterior al análisis.',
    details: 'Entrada de diagnóstico y planificación de mejora.',
    imageRefs: ['Imagen 24.0'],
    sourcePages: sourceOct,
    imageFile: 'entry-2025-10-22.svg'
  },
  {
    dateISO: '2025-10-23',
    dateLabel: 'Jueves 23 de octubre del 2025',
    place: 'Laboratorio de Robótica',
    time: 'No especificado en la entrada',
    stage: 'Diseño',
    title: 'Revisión de nuevo diseño y materiales faltantes',
    objective: 'Actualizar diseño para mejorar velocidad.',
    activities: ['Revisar nuevo diseño.', 'Identificar materiales faltantes.'],
    technicalDevelopment:
      'Se identificaron necesidades: malla para almacenamiento, ejes y piñones para rodillos y opresores para ejes.',
    observations: 'La entrada se centra en revisión técnica y abastecimiento, sin pruebas adicionales detalladas.',
    results: 'Se consolidó segundo diseño contemplado para mejoras posteriores.',
    details: 'Registro de insumos técnicos para continuar iteración.',
    imageRefs: ['Imagen 25.0'],
    sourcePages: sourceOct,
    imageFile: 'entry-2025-10-23.svg'
  },

  {
    dateISO: '2025-11-04',
    dateLabel: 'Martes 04 de noviembre del 2025',
    place: 'Laboratorio de Robótica',
    time: '12:30-15:00',
    stage: 'Pruebas',
    title: 'Pruebas del mecanismo para sacar bloques del tubo de recargas',
    objective: 'Probar mecanismo de extracción de recargas.',
    activities: ['Pruebas del mecanismo sin instalar.', 'Pruebas del mecanismo con robot.'],
    technicalDevelopment: 'Se realizaron pruebas para sacar bloques del tubo de recargas en banco y en robot.',
    observations: 'La entrada se apoya en evidencia visual de la secuencia de pruebas.',
    results: 'Se obtuvo evidencia de funcionamiento inicial para ajustes posteriores.',
    details: 'Jornada de validación práctica del sistema de recarga.',
    imageRefs: ['Imagen 26.0', 'Imagen 26.1', 'Imagen 26.2'],
    sourcePages: sourceNov,
    imageFile: 'entry-2025-11-04.svg'
  },
  createVisualEntry({
    dateISO: '2025-11-05',
    dateLabel: 'Miércoles 05 de noviembre del 2025',
    title: 'Evidencia visual del desarrollo del robot',
    stage: 'Evidencia visual',
    sourcePages: sourceNov,
    imageFile: 'entry-2025-11-05.svg',
    text: visualA,
    time: '12:30-15:00'
  }),
  createVisualEntry({
    dateISO: '2025-11-06',
    dateLabel: 'Jueves 06 de noviembre del 2025',
    title: 'Evidencia visual de ajustes y avances',
    stage: 'Evidencia visual',
    sourcePages: sourceNov,
    imageFile: 'entry-2025-11-06.svg',
    text: visualB,
    time: '12:30-15:00'
  }),
  createVisualEntry({
    dateISO: '2025-11-07',
    dateLabel: 'Viernes 07 de noviembre del 2025',
    title: 'Evidencia visual de pruebas y preparación',
    stage: 'Evidencia visual',
    sourcePages: sourceNov,
    imageFile: 'entry-2025-11-07.svg',
    text: visualC,
    time: '12:30-15:00'
  }),
  createVisualEntry({
    dateISO: '2025-11-08',
    dateLabel: 'Sábado 08 de noviembre del 2025',
    title: 'Jornada sabatina de preparación',
    stage: 'Preparación',
    sourcePages: sourceNov,
    imageFile: 'entry-2025-11-08.svg',
    text: visualA
  }),
  createVisualEntry({
    dateISO: '2025-11-09',
    dateLabel: 'Domingo 09 de noviembre del 2025',
    title: 'Jornada dominical de preparación',
    stage: 'Preparación',
    sourcePages: sourceNov,
    imageFile: 'entry-2025-11-09.svg',
    text: visualB
  }),
  createVisualEntry({
    dateISO: '2025-11-10',
    dateLabel: 'Lunes 10 de noviembre del 2025',
    title: 'Preparación previa a competencia',
    stage: 'Preparación',
    sourcePages: sourceNov,
    imageFile: 'entry-2025-11-10.svg',
    text: visualC
  }),
  createVisualEntry({
    dateISO: '2025-11-11',
    dateLabel: 'Martes 11 de noviembre del 2025',
    title: 'Seguimiento de preparación del robot',
    stage: 'Preparación',
    sourcePages: sourceNov,
    imageFile: 'entry-2025-11-11.svg',
    text: visualA
  }),
  createVisualEntry({
    dateISO: '2025-11-12',
    dateLabel: 'Miércoles 12 de noviembre del 2025',
    title: 'Seguimiento de preparación del robot',
    stage: 'Preparación',
    sourcePages: sourceNov,
    imageFile: 'entry-2025-11-12.svg',
    text: visualB
  }),
  {
    dateISO: '2025-11-13',
    dateLabel: 'Jueves 13 de noviembre del 2025',
    place: 'Torneo Estatal inter CECyTE Michoacán',
    time: 'No especificado en la entrada',
    stage: 'Torneo',
    title: 'Torneo Estatal inter CECyTE Michoacán',
    objective: 'Participar en evaluación estatal del proyecto.',
    activities: ['Participación en jornada del Torneo Estatal inter CECyTE Michoacán.'],
    technicalDevelopment:
      'La participación en el Torneo Estatal inter CECyTE Michoacán forma parte del alcance del proyecto documentado en la bitácora. Esta etapa representa una evaluación del robot en condiciones reales de competencia, así como una oportunidad para analizar el desempeño del diseño, la programación, el manejo y la organización del equipo.',
    observations:
      'Si no hay resultados textuales específicos en el PDF para esta sección, no se inventan; se usa la evidencia visual registrada como respaldo del evento.',
    results: 'Se conserva registro de participación estatal dentro del proceso del proyecto.',
    details: 'Entrada de evento estatal correspondiente al primer día (13 de noviembre).',
    imageRefs: [],
    sourcePages: sourceNov,
    imageFile: 'entry-2025-11-13.svg'
  },
  {
    dateISO: '2025-11-14',
    dateLabel: 'Viernes 14 de noviembre del 2025',
    place: 'Torneo Estatal inter CECyTE Michoacán',
    time: 'No especificado en la entrada',
    stage: 'Torneo',
    title: 'Torneo Estatal inter CECyTE Michoacán / jornada registrada',
    objective: 'Mantener documentación de la segunda jornada estatal.',
    activities: [visualC],
    technicalDevelopment:
      'La bitácora conserva evidencia visual de la jornada del Torneo Estatal inter CECyTE Michoacán como parte del seguimiento del desempeño en competencia.',
    observations: 'No se agregan resultados no presentes textualmente en el PDF.',
    results: 'Se conserva trazabilidad de la participación en la fecha 14 de noviembre.',
    details: 'Entrada vinculada al alcance del proyecto en competencia estatal.',
    imageRefs: [],
    sourcePages: sourceNov,
    imageFile: 'entry-2025-11-14.svg'
  },
  createVisualEntry({
    dateISO: '2025-11-18',
    dateLabel: 'Martes 18 de noviembre del 2025',
    title: 'Jornada registrada en bitácora física',
    stage: 'Evidencia visual',
    sourcePages: sourceNov,
    imageFile: 'entry-2025-11-18.svg',
    text: visualA
  }),
  createVisualEntry({
    dateISO: '2025-11-19',
    dateLabel: 'Miércoles 19 de noviembre del 2025',
    title: 'Jornada registrada en bitácora física',
    stage: 'Evidencia visual',
    sourcePages: sourceNov,
    imageFile: 'entry-2025-11-19.svg',
    text: visualB
  }),
  createVisualEntry({
    dateISO: '2025-11-21',
    dateLabel: 'Viernes 21 de noviembre del 2025',
    title: 'Jornada registrada en bitácora física',
    stage: 'Evidencia visual',
    sourcePages: sourceNov,
    imageFile: 'entry-2025-11-21.svg',
    text: visualC
  }),
  createVisualEntry({
    dateISO: '2025-11-24',
    dateLabel: 'Lunes 24 de noviembre del 2025',
    title: 'Jornada registrada en bitácora física',
    stage: 'Evidencia visual',
    sourcePages: sourceNov,
    imageFile: 'entry-2025-11-24.svg',
    text: visualA
  }),

  createVisualEntry({
    dateISO: '2025-12-01',
    dateLabel: 'Lunes 01 de diciembre del 2025',
    title: 'Jornada registrada en bitácora física',
    stage: 'Evidencia visual',
    sourcePages: sourceDec,
    imageFile: 'entry-2025-12-01.svg',
    text: visualB
  }),
  createVisualEntry({
    dateISO: '2025-12-03',
    dateLabel: 'Miércoles 03 de diciembre del 2025',
    title: 'Jornada registrada en bitácora física',
    stage: 'Evidencia visual',
    sourcePages: sourceDec,
    imageFile: 'entry-2025-12-03.svg',
    text: visualC
  }),
  createVisualEntry({
    dateISO: '2025-12-11',
    dateLabel: 'Jueves 11 de diciembre del 2025',
    title: 'Jornada registrada en bitácora física',
    stage: 'Evidencia visual',
    sourcePages: sourceDec,
    imageFile: 'entry-2025-12-11.svg',
    text: visualA
  }),

  createVisualEntry({
    dateISO: '2026-01-09',
    dateLabel: 'Viernes 09 de enero del 2026',
    title: 'Jornada registrada en bitácora física',
    stage: 'Evidencia visual',
    sourcePages: sourceJan,
    imageFile: 'entry-2026-01-09.svg',
    text: visualB
  }),
  createVisualEntry({
    dateISO: '2026-01-12',
    dateLabel: 'Lunes 12 de enero del 2026',
    title: 'Jornada registrada en bitácora física',
    stage: 'Evidencia visual',
    sourcePages: sourceJan,
    imageFile: 'entry-2026-01-12.svg',
    text: visualC
  }),
  {
    dateISO: '2026-01-13',
    dateLabel: 'Martes 13 de enero del 2026',
    place: 'Laboratorio de Robótica',
    time: '08:30-12:30',
    stage: 'Evidencia visual',
    title: 'Registro de orientación izquierda y derecha',
    objective: 'Conservar evidencia del registro físico.',
    activities: ['La bitácora física registra referencias a “Izquierda” y “Derecha”.'],
    technicalDevelopment:
      'La bitácora física registra esta jornada con referencias a “Izquierda” y “Derecha”. Se conserva como evidencia de revisión de orientación, acomodo o comparación de lados del robot, sin agregar detalles técnicos no presentes en el PDF.',
    observations: 'No se incorporan supuestos técnicos adicionales.',
    results: 'Se preserva trazabilidad de la revisión de orientación.',
    details: 'Entrada breve de evidencia textual y visual.',
    imageRefs: [],
    sourcePages: sourceJan,
    imageFile: 'entry-2026-01-13.svg'
  },
  {
    dateISO: '2026-01-14',
    dateLabel: 'Miércoles 14 de enero del 2026',
    place: 'Laboratorio de Robótica',
    time: '08:30-12:30',
    stage: 'Mejora',
    title: 'Refuerzo de estructura',
    objective: 'Registrar ajuste estructural.',
    activities: ['Se quitó para reforzar la estructura.'],
    technicalDevelopment: 'Texto registrado en la bitácora física: “Se quitó para reforzar la estructura”.',
    observations: 'No hay detalle técnico adicional en el PDF.',
    results: 'Se conserva evidencia de refuerzo estructural.',
    details: 'Entrada textual breve según registro físico.',
    imageRefs: [],
    sourcePages: sourceJan,
    imageFile: 'entry-2026-01-14.svg'
  },
  createVisualEntry({
    dateISO: '2026-01-19',
    dateLabel: 'Lunes 19 de enero del 2026',
    title: 'Jornada registrada en bitácora física',
    stage: 'Evidencia visual',
    sourcePages: sourceJan,
    imageFile: 'entry-2026-01-19.svg',
    text: visualA
  }),
  createVisualEntry({
    dateISO: '2026-01-22',
    dateLabel: 'Jueves 22 de enero del 2026',
    title: 'Jornada registrada en bitácora física',
    stage: 'Evidencia visual',
    sourcePages: sourceJan,
    imageFile: 'entry-2026-01-22.svg',
    text: visualB
  }),
  createVisualEntry({
    dateISO: '2026-01-23',
    dateLabel: 'Lunes 23 de enero del 2026',
    title: 'Jornada registrada en bitácora física',
    stage: 'Evidencia visual',
    sourcePages: sourceJan,
    imageFile: 'entry-2026-01-23.svg',
    text: visualC
  }),
  {
    dateISO: '2026-01-26',
    dateLabel: 'Lunes 26 de enero del 2026',
    place: 'Laboratorio de Robótica',
    time: '08:30-12:30',
    stage: 'Autónomo',
    title: 'Prueba del autónomo',
    objective: 'Registrar prueba del autónomo.',
    activities: ['Prueba del autónomo.'],
    technicalDevelopment: 'La bitácora física registra esta jornada como prueba del autónomo.',
    observations: 'No hay detalle técnico adicional documentado en el PDF.',
    results: 'Se conserva evidencia de prueba de autonomía.',
    details: 'Entrada breve con el texto literal disponible.',
    imageRefs: [],
    sourcePages: sourceJan,
    imageFile: 'entry-2026-01-26.svg'
  }
];

export const sectionSourceReferences = {
  initial: sourceInitial,
  september: sourceSept,
  october: sourceOct,
  november: sourceNov,
  december: sourceDec,
  january: sourceJan
} as const;
