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
  | 'Organización'
  | 'Iteración'
  | 'Ajustes'
  | 'Robot 2.0';

export type EvidenceItem = {
  caption: string;
  src: string;
};

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
  evidence?: EvidenceItem[];
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

const baseEntries: Entry[] = [
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
      'Se revisó el video oficial del reto, los planos del campo, las dimensiones de porterías, bloques y zonas de estacionamiento, así como el sistema de puntuación y bonificaciones. PUSH BACK, bases del juego: El campo de juego de PUSH BACK es 12 ft x 12 ft. Está compuesto por cuatro porterías, dos largas y dos centrales, cuatro cargadores, dos por alianza y uno por equipo, y dos espacios de estacionamiento. El juego utiliza 88 bloques de plástico, 44 bloques de cada alianza, contando las precargas. Objetivo del juego: El objetivo de PUSH BACK es trabajar en equipo con la alianza y hacer más puntos que la alianza contraria en dos minutos. El partido se divide en 15 segundos de autónomo y 1 minuto con 45 segundos de pilotaje. Sistema de puntuación: El puntaje se obtiene según la cantidad de bloques anotados, la posición en la que se encuentren y si el robot logra estacionarse. Por cada bloque se obtienen 3 puntos, aunque existen bonificaciones especiales. Bonus por control: En las porterías largas, el bonus es válido solo si los bloques se encuentran en la zona central delimitada por una marca a cada lado. En las porterías centrales, el bonus es válido siempre que se tengan más bloques anotados que la alianza opuesta. Bonus por estacionarse: La parte más importante para que un estacionado sea válido es que el robot no tenga contacto con la pista fuera del área de estacionamiento. La puntuación bonus depende de si se estaciona uno o si se estacionan los dos robots de la alianza.',
    observations:
      'Para hacer puntos bonus es importante que los bloques queden completamente dentro de las líneas marcadas en la portería. El bloque más a la izquierda, de color rojo, no está completamente dentro de las líneas de cinta que marcan los límites de la Zona de Control y, por lo tanto, no se consideraría al determinar qué alianza tiene el control del objetivo. Los otros tres bloques, de color verde, están completamente dentro de las líneas de cinta y sí se considerarían. El bloque verde a la derecha está completamente dentro de los límites de la cinta y se consideraría puntuado. Los planos de los elementos del reto serán una parte esencial en el desarrollo del robot, ya que no se tendrá acceso continuo al campo de juego con los elementos oficiales. Por ello, todo el robot será construido con base en estos planos y se desarrollará de la manera más competitiva posible, realizando únicamente ajustes posteriores durante las competencias de prueba, en las que se podrán identificar las mejoras necesarias para que el robot se adapte de forma óptima a la pista. Esto permitirá llegar a los torneos con un robot capaz de afrontar el reto de manera más eficaz.',
    results: 'Comprensión general del reto y definición de requerimientos técnicos iniciales.',
    details:
      'Retos del juego: El robot debe ser capaz de acoplarse a dos alturas: la de las porterías largas y la de la portería alta central, aproximadamente 32 cm y 20 cm. Debe tener fuerza suficiente para anotar los bloques, empujar y expulsar bloques de la alianza opuesta. Debe poder sacar los bloques del recargador. Debe contar con una buena estructura para lograr un estacionamiento fácil y rápido, obteniendo el puntaje bonus. Debe contar con una buena programación para la parte autónoma y una adaptación del control que facilite el manejo del piloto.',
    imageRefs: [
      'Imagen 1.1 Vista general del campo de juego.',
      'Imagen 1.7 Puntuación por bloque.',
      'Imagen 1.8 Bonus por control de las porterías largas.',
      'Imagen 1.9 Bonus en las porterías centrales.',
      'Imagen 1.10 Bonus porque uno se estacione.',
      'Imagen 1.11 Bonus porque se estacionen los dos.',
      'Imagen 1.12 Regla de bloques dentro de líneas.',
      'Imagen 1.13 Bloque puntuado.',
      'Imagen 1.2 Dimensiones de las porterías largas.',
      'Imagen 1.3 Dimensiones de la portería central.',
      'Imagen 1.4 Medidas del área de estacionamiento.',
      'Imagen 1.5 Medidas del cargador.',
      'Imagen 1.6 Medidas del bloque.',
      'Imagen 1.7 Medidas y distribución del campo de juego.',
      'Imagen 2.1 Altura de las porterías largas.',
      'Imagen 2.2 Altura de la portería central alta.',
      'Imagen 2.3 Recargador.'
    ],
    sourcePages: ['PDF sección septiembre 2025 / análisis del reto PUSH BACK'],
    imageFile: 'entry-2025-09-08.svg'
  },
  {
    dateISO: '2025-09-09',
    dateLabel: 'Martes 09 de septiembre del 2025',
    place: 'Laboratorio de Robótica',
    time: '12:30-14:10',
    stage: 'Construcción',
    title: 'Desarmado del robot anterior y organización de equipos',
    objective: 'Acelerar el trabajo inicial y analizar mecanismos útiles del robot anterior.',
    activities: [
      'Comenzar el desarmado del robot del reto pasado.',
      'Analizar el robot anterior para saber si algún mecanismo podría ser útil para el reto PUSH BACK.',
      'Realizar el prototipo guiado de la temporada debido a la poca experiencia en la categoría VEX V5.',
      'Dividirse en equipos para poder hacer distintas cosas a la vez y trabajar de manera más eficaz.'
    ],
    technicalDevelopment:
      'Se dividió al equipo en tres grupos. El equipo 1 armó del paso 1 al paso 9 del prototipo guiado. El equipo 2 armó del paso 10 al paso 14. El equipo 3 desarmó el prototipo anterior y revisó su funcionamiento para identificar mecanismos útiles.',
    observations:
      'Esta división de los pasos fue pensada para que las tareas no fueran interdependientes y se pudiera trabajar de manera más rápida. Se concluyó que el sistema de elevación del robot anterior se podía implementar de una manera similar. Se decidió continuar armando el prototipo guiado debido a la poca experiencia armando robots para VEX Robotics.',
    results: 'Se avanzó en la organización interna del equipo y se tomó la decisión de usar el prototipo guiado como base de aprendizaje.',
    details:
      'La jornada combinó análisis del robot anterior, recuperación de ideas mecánicas y armado del prototipo guiado.',
    imageRefs: [
      'Imagen 3.1 Paso 9.',
      'Imagen 3.2 Paso 13.',
      'Imagen 3.3 Paso 14.',
      'Imagen 3.2 El robot siendo desarmado.',
      'Imagen 3.1 El robot siendo desarmado.'
    ],
    sourcePages: sourceSept,
    imageFile: 'entry-2025-09-09.svg'
  },
  {
    dateISO: '2025-09-10',
    dateLabel: 'Miércoles 10 de septiembre del 2025',
    place: 'Laboratorio de Robótica',
    time: '12:30-14:10',
    stage: 'Gestión',
    title: 'Prototipo anterior desarmado y avance del prototipo guiado',
    objective:
      'Cerrar el desarmado del robot anterior, continuar el prototipo guiado y gestionar un bloque oficial.',
    activities: [
      'Terminar de desarmar el prototipo del reto pasado.',
      'Continuar con el armado del prototipo guiado hasta el paso 36c.',
      'Hacer la solicitud de un bloque de la pista oficial a Dirección General de CECyTE Michoacán.'
    ],
    technicalDevelopment:
      'Se observó el mecanismo utilizado en el tren motriz del robot anterior, que consistía en piñón-cadena.',
    observations:
      'Se tenía poco material y estaba dañado debido a que es el mismo desde hace casi cinco años. Por ello se planteó la posibilidad de solicitar recurso a algunos servidores públicos.',
    results:
      'Se terminó de desarmar el prototipo anterior, se avanzó hasta el paso 36c y se inició la gestión de un bloque oficial.',
    details:
      'La falta de material y el desgaste del equipo existente comenzaron a influir en la planeación del proyecto.',
    imageRefs: ['Imagen 4.1 Prototipo completamente desarmado.', 'Imagen 4.2 Paso 19.', 'Imagen 4.3 Paso 25.', 'Imagen 4.4 Paso 36c.'],
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
    objective: 'Continuar el prototipo guiado y alcanzar la base del sistema de elevación.',
    activities: ['Continuar con el armado del prototipo guiado hasta el paso 68c.'],
    technicalDevelopment: 'Se avanzó hasta el paso 68c, correspondiente a la base para el sistema de elevación.',
    observations:
      'La bitácora registra esta jornada principalmente mediante avances de armado y evidencia visual de pasos.',
    results: 'Se alcanzó una estructura base útil para estudiar el sistema de elevación.',
    details: 'Entrada centrada en continuidad de armado y documentación del avance por pasos.',
    imageRefs: ['Imagen 5.1 Paso 44c.', 'Imagen 5.2 Paso 53c.', 'Imagen 5.3 Paso 54.', 'Imagen 5.4 Paso 61.', 'Imagen 5.5 Paso 68.'],
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
    objective: 'Continuar el avance del prototipo guiado.',
    activities: ['Seguir con el armado del prototipo guiado hasta el paso 98c.'],
    technicalDevelopment: 'Se avanzó en la integración del prototipo guiado hasta el paso 98c.',
    observations:
      'La jornada se documenta principalmente mediante evidencia visual de pasos de armado.',
    results: 'Se alcanzó el paso 98c del prototipo guiado.',
    details: 'Entrada de seguimiento del proceso de construcción inicial.',
    imageRefs: ['Imagen 6.1 Paso 70.', 'Imagen 6.2 Paso 87.', 'Imagen 6.3 Paso 98.'],
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
    objective: 'Continuar con la construcción del prototipo guiado.',
    activities: ['Avanzar en el prototipo guiado hasta el paso 113c.'],
    technicalDevelopment:
      'Se continuó el ensamble del prototipo guiado, documentando pasos intermedios del proceso.',
    observations: 'La entrada se respalda mediante evidencia visual de armado.',
    results: 'Se alcanzó el paso 113c.',
    details: 'Continuidad de armado y registro visual del avance.',
    imageRefs: ['Imagen 6.4 Paso 100.', 'Imagen 6.5 Paso 101.', 'Imagen 6.6 Paso 102.', 'Imagen 6.7 Paso 104.', 'Imagen 6.8 Paso 112.', 'Imagen 6.9 Paso 113.'],
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
    objective: 'Continuar con el armado del prototipo guiado.',
    activities: ['Avanzar en el prototipo guiado hasta el paso 132c.'],
    technicalDevelopment: 'Se avanzó hasta el paso 132c del prototipo guiado.',
    observations: 'La entrada se documenta mediante evidencia visual de pasos.',
    results: 'Se mantuvo el progreso del prototipo guiado.',
    details: 'Seguimiento del armado inicial.',
    imageRefs: ['Imagen 7.1 Paso 116.', 'Imagen 7.2 Paso 116c.', 'Imagen 7.3 Paso 132.'],
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
    objective: 'Iniciar el trabajo de diseño digital 3D y continuar el avance del prototipo guiado.',
    activities: [
      'Instalar en las laptops de los integrantes del equipo el programa Inventor Profesional.',
      'Continuar el armado del prototipo guiado hasta el paso 162c.',
      'Realizar oficios para la solicitud de recurso a servidores públicos.'
    ],
    technicalDevelopment:
      'Inventor Profesional se utilizará para el desarrollo del diseño digital 3D del robot. La jornada combinó instalación de software, avance físico del prototipo y preparación de oficios de gestión.',
    observations:
      'Se comenzó a integrar el diseño CAD como parte formal del proceso de ingeniería del equipo.',
    results:
      'Se avanzó hasta el paso 162c y se inició la preparación administrativa para solicitar recursos.',
    details: 'Subsección: Instalación de Inventor Profesional.',
    imageRefs: [
      'Imagen 7.5 Paso 137.',
      'Imagen 7.6 Paso 140.',
      'Imagen 7.7 Paso 141.',
      'Imagen 7.8 Paso 143.',
      'Imagen 7.9 Paso 148.',
      'Imagen 8.0 Paso 154.',
      'Imagen 8.1 Paso 155.',
      'Imagen 8.2 Paso 162.',
      'Imagen 8.3 Trabajando en el armado del prototipo guiado.',
      'Imagen 8.4 Trabajando en el armado.',
      'Imagen 8.5 Trabajando en el armado.'
    ],
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
    objective: 'Mejorar la organización operativa del equipo por áreas de trabajo.',
    activities: [
      'Seguir trabajando en el prototipo guiado.',
      'Entregar el oficio dirigido a la Diputada Local Teresita de Jesús.',
      'Designar encargados y subencargados de área con base en el desempeño visto hasta la fecha.'
    ],
    technicalDevelopment:
      'Se designaron encargados y subencargados de área para avanzar más rápido y tener mejor organización. Construcción: Roberto y Juan Diego. Ellos se encargan de toda la parte física y trabajan en conjunto con los de diseño para buscar hacer el mejor prototipo posible. Su trabajo lo realizarán con las piezas de material VEX. Diseño: Javier y Rogelio. Ellos se encargan de buscar diseños o desarrollarlos para pasárselos a los de construcción y ver la manera de que sean posibles, así como de hacer el robot en diseño 3D. Utilizarán herramientas como Autodesk Inventor, que es un software de diseño asistido por computadora CAD para el modelado mecánico en 3D. Programación: Emmanuel y Joshua. Ellos se encargan de adecuar el control con las necesidades del driver, así como del desarrollo del código para la parte autónoma del robot, usando la app de VEX para programación de los cerebros. Bitácora: Estefanía y Rafael. Ellos se encargan de documentar todo el proceso del desarrollo del prototipo en todas las áreas, por medios físicos como dibujos a mano, y digitales como procesador de textos y fotografías.',
    observations:
      'El resto de los integrantes seguirá como equipo de apoyo. En el caso de Cristian y Alexis, durante los torneos de prueba se verá su desempeño y con base en ello se designará a uno de ellos como driver.',
    results: 'Se estableció la estructura organizativa del equipo y se armó el robot guiado hasta el paso 170c.',
    details:
      'Esta entrada debe conservar claramente la asignación de roles, ya que muestra la organización interna del equipo.',
    imageRefs: ['Imagen 9.0 Paso 164c.', 'Imagen 9.1 Paso 165.', 'Imagen 9.2 Paso 170c.'],
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
    objective:
      'Mantener avance técnico, instalar herramientas de programación y gestionar recursos económicos.',
    activities: [
      'Avanzar hasta el paso 195c del prototipo guiado.',
      'Realizar reuniones con algunos funcionarios públicos.',
      'Presentar el proyecto y solicitar apoyo económico.',
      'Instalar VEXcode V5 por parte de los encargados del área de programación.'
    ],
    technicalDevelopment:
      'Se avanzó en el prototipo guiado hasta el paso 195c y se instaló VEXcode V5, herramienta que utilizarán los encargados de programación para desarrollar el código del robot. Reuniones con servidores públicos: Mtr. Juan Pablo Herrera Maldonado, secretario del H. Ayuntamiento de Hidalgo. Ing. Marco Alfonso Figueroa Medina, síndico del H. Ayuntamiento de Hidalgo. MVZ Francisco Pérez Pérez, regidor del H. Ayuntamiento de Hidalgo.',
    observations:
      'Debido a que no teníamos todas las piezas para armar el prototipo guiado, detuvimos su armado y comenzamos a buscar hacer un diseño propio.',
    results:
      'De las reuniones se recibió una respuesta favorable, reuniendo la cantidad de $8,900.00. Tabla de apoyos: Secretario: $2,000.00. Entrega total el 06/10. Síndico: $1,900.00. Entrega total el 06/10. Regidor: $5,000.00. Entrega de $3,000.00 el 06/10 y $2,000.00 el 24/10.',
    details:
      'Esta entrada combina avance técnico, instalación de software y gestión de recursos para poder continuar el proyecto.',
    imageRefs: ['Imagen 10.1 Reunión con el Mtr. Juan Pablo Herrera.', 'Imagen 10.2 Reunión con MVZ Francisco Pérez.'],
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
    objective: 'Plantear un diseño propio para presentarlo en el primer torneo regional de prueba.',
    activities: [
      'Comenzar a hacer los diagramas del nuevo diseño.',
      'Preparar el diseño que será presentado en el primer torneo regional de prueba en el CECyTEM 24 de Lagunillas.',
      'Realizar pruebas de programación.'
    ],
    technicalDevelopment:
      'Se comenzaron a hacer los diagramas del diseño nuevo, el cual consistía en mantener la base y la rampa igual que en el prototipo guiado, debido a que quedaba poco tiempo para el primer torneo regional de prueba en el CECyTEM 24 de Lagunillas. Solo se cambiaba el sistema de elevación y agarre de los bloques.',
    observations:
      'El mecanismo usa rodillos de ligas para la recolección y elevación de los bloques. Usa una transmisión de movimiento de piñón-cadena con una relación 1:1, con un solo motor, y las cadenas van intercalando de lado.',
    results: 'Se obtuvo un diseño preliminar para continuar con la construcción y pruebas antes del regional.',
    details:
      'Esta entrada debe conservar la explicación gráfica del mecanismo y el razonamiento de conservar base/rampa por falta de tiempo.',
    imageRefs: [
      'Imagen 11.1 Todos trabajando.',
      'Imagen 11.2 Pruebas de programación.',
      'Imagen 11.3 Dibujando el boceto del robot.',
      'Imagen 11.4 Vista general del robot.',
      'Imagen 11.5 Explicación gráfica del mecanismo.'
    ],
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
    objective:
      'Avanzar en el diseño 3D, impresión de piezas y comienzo de construcción del diseño propuesto.',
    activities: [
      'Hacer el diseño en 3D en SOLIDWORKS del bloque que se usa en el reto con base en los planos, así como otras piezas.',
      'Imprimir las piezas diseñadas.',
      'Hacer pruebas del diseño 3D del robot en Inventor.',
      'Armar la pista base para poder calcular distancias.',
      'Comenzar a armar el diseño propuesto.'
    ],
    technicalDevelopment:
      'Se trabajó en el diseño 3D del bloque y otras piezas. También se hicieron pruebas del diseño del robot en Inventor y se inició la construcción del mecanismo propuesto. El trabajo integró el uso de SOLIDWORKS para el modelado del bloque con base en los planos del reto, impresión 3D de piezas y pruebas del diseño del robot en Autodesk Inventor.',
    observations:
      'No se contaba con los ejes suficientes, por lo que se detuvo la construcción del mecanismo propuesto.',
    results:
      'Se avanzó en CAD, impresión 3D y pruebas preliminares, pero la construcción física quedó limitada por falta de ejes.',
    details:
      'La jornada integra SolidWorks, Inventor, impresión 3D y preparación de pista base para cálculos de distancia.',
    imageRefs: [
      'Imagen 12.1 Diseño de piezas.',
      'Imagen 12.2 Comienzo del diseño del bloque.',
      'Imagen 12.3 Diseño completo del bloque.',
      'Imagen 12.7 Impresión 3D.',
      'Imagen 12.6 Diseño 3D en Inventor.',
      'Imagen 12.4 Construcción del mecanismo.',
      'Imagen 12.5 Pruebas de cómo quedará el mecanismo.'
    ],
    sourcePages: sourceOct,
    imageFile: 'entry-2025-10-01.svg'
  },
  {
    dateISO: '2025-10-02',
    dateLabel: 'Jueves 02 de octubre del 2025',
    place: 'Laboratorio de Robótica',
    time: '12:30-15:30',
    stage: 'Iteración',
    title: 'Cambio de diseño, bloque oficial y mecanismo Tank Tread',
    objective: 'Resolver contratiempos del diseño anterior y validar un nuevo mecanismo.',
    activities: [
      'Cambiar el diseño, ya que se presentaron contratiempos con el diseño anterior.',
      'Armar el diseño nuevo.',
      'Recibir el bloque oficial del reto.',
      'Hacer pruebas con el nuevo diseño.',
      'Continuar con las pruebas del diseño en 3D en Inventor.'
    ],
    technicalDevelopment:
      'Este diseño toma la base del prototipo guiado nuevamente. Se utiliza un mecanismo de elevación con cadena de Tank Tread y uno de recolección de bloques con un rodillo de ligas que se armó a base de dos engranes de 24 dientes, un eje, separadores, ligas y opresores. Para la transmisión del movimiento del motor al inicio de la banda, a la parte superior y al rodillo recolector, se utilizó cadena-piñón. Todo esto se mueve a la par con ayuda de un solo motor.',
    observations:
      'Las pruebas que se realizaron al mecanismo de elevación tuvieron resultados satisfactorios.',
    results:
      'Se logró validar un diseño nuevo con mecanismo de elevación por Tank Tread y rodillo de ligas.',
    details:
      'Esta entrada debe conservar la descripción del mecanismo, la recepción del bloque oficial y el cambio de diseño provocado por contratiempos del diseño anterior.',
    imageRefs: [
      'Imagen 13.1 Diseño nuevo.',
      'Imagen 13.2 Explicación.',
      'Imagen 13.3 Pruebas de funcionamiento del mecanismo de elevación por cadena de Tank Tread.'
    ],
    sourcePages: sourceOct,
    imageFile: 'entry-2025-10-02.svg'
  },
  {
    dateISO: '2025-10-03',
    dateLabel: 'Viernes 03 de octubre del 2025',
    place: 'Laboratorio de Robótica',
    time: '13:20-15:30',
    stage: 'Pruebas',
    title: 'Pruebas separadas de mecanismos y diseño 3D',
    objective: 'Probar los mecanismos por separado antes de integrarlos completamente al robot.',
    activities: ['Armar el diseño nuevo.', 'Continuar con las pruebas del diseño en 3D en Inventor.'],
    technicalDevelopment:
      'Se probó el mecanismo de recolección y se continuó con las pruebas de diseño 3D.',
    observations:
      'Ninguno de los mecanismos se fijó al robot, por lo que se pusieron por separado y se probaron por separado.',
    results:
      'Se obtuvo información preliminar sobre el funcionamiento de los mecanismos antes de su integración.',
    details: 'La jornada se centró en prueba aislada de mecanismos y validación CAD.',
    imageRefs: ['Imagen 14.0 Armado y prueba del mecanismo de recolección.', 'Imagen 14.1 Se siguió con las pruebas de diseño 3D.'],
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
    objective: 'Armar el diseño nuevo, probar mecanismos e integrar sensor giroscópico.',
    activities: ['Armar el diseño nuevo.', 'Hacer pruebas del diseño nuevo.'],
    technicalDevelopment:
      'Gyroscope Sensor V1.0 mejora el movimiento autónomo y la retroalimentación de un robot VEX al detectar la rotación de un robot desde su origen en un solo eje. Este sensor se puso en el robot para ser usado en el desarrollo de los programas autónomos de los MATCHS HEAD-TO-HEAD y en los AUTONOMOUS CODING SKILLS MATCH.',
    observations:
      'La conexión del sensor giroscópico se documentó como parte del desarrollo de programas autónomos.',
    results:
      'El robot quedó preparado para integrar el giroscopio en rutinas autónomas y de skills.',
    details:
      'La jornada incluyó armado de mecanismos, armado de la banda, conexión de giroscopio y pruebas.',
    imageRefs: [
      'Imagen 15.0 Armado de los mecanismos.',
      'Imagen 15.1 Armado de la banda.',
      'Imagen 15.2 Conexión del sensor giroscópico.',
      'Imagen 15.3 Pruebas de los mecanismos.'
    ],
    sourcePages: sourceOct,
    imageFile: 'entry-2025-10-04.svg'
  },
  {
    dateISO: '2025-10-06',
    dateLabel: 'Lunes 06 de octubre del 2025',
    place: 'Laboratorio de Robótica',
    time: '12:30-15:30',
    stage: 'Pruebas',
    title: 'Diseño 3D, porterías simuladas y ajustes en base',
    objective: 'Simular condiciones del campo y ajustar la base del robot.',
    activities: [
      'Comenzar el armado del diseño en 3D.',
      'Simular pruebas de las porterías recreando altura y forma de las porterías.'
    ],
    technicalDevelopment:
      'Se realizaron pruebas finales del robot con porterías simuladas y se aplicaron ajustes en la base.',
    observations:
      'Se hicieron ajustes en la base y junto a las llantas para mejorar el comportamiento del robot.',
    results: 'El robot quedó mejor alineado a condiciones aproximadas del campo.',
    details: 'La entrada documenta diseño 3D, simulación de porterías y ajustes físicos.',
    imageRefs: [
      'Imagen 16.0 Diseño 3D.',
      'Imagen 16.1 Pruebas finales del robot con porterías simuladas.',
      'Imagen 16.2 Ajustes en la base.',
      'Imagen 16.3 Ajustes en la base junto a las llantas.'
    ],
    sourcePages: sourceOct,
    imageFile: 'entry-2025-10-06.svg'
  },
  {
    dateISO: '2025-10-07',
    dateLabel: 'Martes 07 de octubre del 2025',
    place: 'Laboratorio de Robótica',
    time: '12:30-16:30',
    stage: 'Ajustes',
    title: 'Últimos ajustes antes del regional en Lagunillas',
    objective: 'Realizar últimos ajustes antes del regional en el CECyTEM 24 Lagunillas.',
    activities: [
      'Hacer últimos ajustes antes del regional.',
      'Realizar pruebas en la cancha con simulaciones de alturas.'
    ],
    technicalDevelopment: 'Se colocó un soporte de separación.',
    observations:
      'Este soporte de separación se puso ya que, al ser una estructura alta, presentaba una inestabilidad y una inclinación hacia el centro. Por ello se decidió colocar un separador, que con ayuda de los ejes separadores y opresores mantendrá una separación uniforme.',
    results: 'El robot quedó con mejor estabilidad antes del torneo regional.',
    details: 'La entrada documenta el ajuste estructural previo al primer regional de prueba.',
    imageRefs: ['Imagen 17.0 Colocación de un separador.', 'Imagen 17.1 Pruebas en cancha.'],
    sourcePages: sourceOct,
    imageFile: 'entry-2025-10-07.svg'
  },

  {
    dateISO: '2025-10-08',
    dateLabel: 'Miércoles 08 de octubre del 2025',
    place: 'CECyTEM 24 Lagunillas',
    time: '05:30-18:00',
    stage: 'Torneo',
    title: 'Regional de prueba en Lagunillas',
    objective: 'Validar el desempeño del robot y definir driver en competencia real.',
    activities: [
      'Participar en el regional de prueba en CECyTEM 24 Lagunillas.',
      'Evaluar el desempeño de Alexis y Cristian como posibles drivers.',
      'Observar fallas mecánicas, autónomas y de transmisión.',
      'Registrar resultados de los matches.'
    ],
    technicalDevelopment:
      'Se eligió a quien sería portador de la capitanía del equipo, que habría de ser Roberto Durán. Se realizaron diversas pruebas de manejo para llevar a cabo la designación del conductor, driver, para lo cual había dos contendientes a esta posición: Alexis y Cristian. Durante el proceso del regional y al observar el desempeño del robot durante los encuentros, hubo diversas anotaciones principalmente acerca de la funcionalidad de la transmisión, fallos físicos en el autónomo, además de sobreesfuerzo en los motores.',
    observations:
      'Se realizaron tres matches. En el primero resultamos victoriosos con un marcador de 60–11, teniendo como conductor a Alexis. En el segundo encuentro fue una muy cerrada derrota con marcador de 23–25, teniendo como conductor a Cristian. En el último encuentro nos reencontramos con la victoria con un marcador de 70–25, teniendo como conductor a Alexis.',
    results: 'Por su desempeño, Alexis fue designado como conductor del equipo.',
    details:
      'Esta entrada debe conservar la narrativa del torneo, la elección de capitán y la selección de driver.',
    imageRefs: ['Imagen 17.1 Llegada del equipo al torneo.', 'Imagen 17.2 Tercer match.'],
    sourcePages: ['PDF sección octubre 2025 / Regional Lagunillas'],
    imageFile: 'entry-2025-10-08.svg'
  },
  {
    dateISO: '2025-10-08',
    dateLabel: 'Miércoles 08 de octubre del 2025',
    place: 'CECyTEM 24 Lagunillas',
    time: 'Durante el regional',
    stage: 'Programación',
    title: 'Primer código autónomo realizado durante el regional',
    objective: 'Documentar el primer código autónomo realizado durante el regional.',
    activities: [
      'Programar y documentar el primer código con autónomo.',
      'Explicar las líneas principales del programa.',
      'Registrar configuración del cerebro, control, torque, velocidad, giroscopio y movimientos.'
    ],
    technicalDevelopment:
      'Primer código con autónomo que fue realizado durante el regional. En las líneas 157 y 158 se define el cerebro y el control. Luego, en las líneas 160 y 161, se define el torque máximo del motor al 100 por ciento y también la velocidad máxima igual al 100 por ciento. Después, en la línea 163, se calibra el giroscopio. En la línea 164 se comienza a definir el autónomo. En la línea 165 se traen las variables velocidad y distancia, y en la línea 166 se define la velocidad del robot con la variable velocidad. En las líneas 167 a la 169 se define la velocidad del robot en velocidad -15, que el robot se tiene que mover 900 mm hacia delante y luego girar 90 grados a la izquierda. Por último, en las líneas 170 a 177, se define que el motor 5 se activa hacia delante, luego el robot se mueve 400 mm hacia delante, espera 3 segundos y después apaga el motor 5. Por último, el robot se mueve 900 mm en reversa, se vuelve a activar el motor 5 hacia delante, espera 3 segundos y finalmente se detiene el motor 5.',
    observations:
      'El código quedó documentado por secciones y líneas para explicar su funcionamiento.',
    results: 'Se registró la primera base de autónomo del equipo durante el regional.',
    details: 'La explicación debe mantenerse en texto largo, no resumida.',
    imageRefs: ['Imagen 17.3 Parte 1 del primer código con autónomo.', 'Imagen 17.4 Parte 2 primer autónomo.'],
    sourcePages: ['PDF sección octubre 2025 / Programación regional'],
    imageFile: 'entry-2025-10-08.svg'
  },
  {
    dateISO: '2025-10-08',
    dateLabel: 'Miércoles 08 de octubre del 2025',
    place: 'CECyTEM 24 Lagunillas',
    time: 'Durante el regional',
    stage: 'Programación',
    title: 'Control por driver',
    objective: 'Documentar la configuración del control manual del robot.',
    activities: [
      'Definir variables de control.',
      'Configurar joysticks.',
      'Configurar botones R1 y R2 para el motor 5.',
      'Adaptar el control a las necesidades del driver.'
    ],
    technicalDevelopment:
      'En las líneas 179 a 189 se define el control manual, las variables axis3 y axis1, también la velocidad izquierda del robot y la velocidad derecha del robot, y por último se define la acción de los joystick izquierdo y derecho. Luego, en las líneas 191 a 198, se define lo que tienen que hacer los joysticks al moverse. En la línea 202 se configura que al momento de presionar el botón R1 se debe activar el motor 5 al 100 por ciento de velocidad. En la línea 205, al presionar el botón R2, se activa el motor 5 pero en reversa. Si ya no se presiona nada más, el motor se detiene y espera 20 milisegundos.',
    observations:
      'El control fue adaptado a las necesidades del driver para facilitar el manejo.',
    results: 'Se documentó la configuración inicial de control manual.',
    details: 'Conservar explicación de líneas de código, botones y joysticks.',
    imageRefs: ['Imagen 17.5 Parte 3 control por driver.'],
    sourcePages: ['PDF sección octubre 2025 / Control driver'],
    imageFile: 'entry-2025-10-08.svg'
  },
  {
    dateISO: '2025-10-13',
    dateLabel: 'Lunes 13 de octubre del 2025',
    place: 'Laboratorio de Robótica',
    time: '12:30-15:00',
    stage: 'Mejora',
    title: 'Mejoras posteriores al regional',
    objective: 'Implementar mejoras posteriores al regional.',
    activities: [
      'Revisar observaciones del regional.',
      'Mejorar sistema de elevación.',
      'Diseñar rodillos con ligas en 3D.',
      'Modificar programación para dos motores nuevos.',
      'Plantear una nueva base cuadrada.'
    ],
    technicalDevelopment:
      'Se comenzó a implementar mejoras de acuerdo con las últimas observaciones del robot, tales como la parte de la elevación de pelotas, la cual se reutilizó de un prototipo anterior, cuyo funcionamiento fue mejor. Se inició el diseño de los rodillos con ligas en 3D. La programación tuvo que ser modificada para dar cabida a los dos motores nuevos.',
    observations:
      'Coincidimos en que un sensor ultrasónico sería óptimo para un mejor desempeño. Se busca mayor estabilidad y poder poner cuatro motores para evitar que se sobrecalienten y esfuercen los motores debido al peso de la estructura del robot, y para mayor eficiencia en la competencia, evitando que los motores dejen de responder debido al corto tiempo que hay entre partidos.',
    results: 'Se planteó una nueva base cuadrada y un mecanismo ajustable a dos alturas.',
    details:
      'En esta ocasión se pensó en utilizar el mismo mecanismo, solo que la diferencia con el diseño anterior sería que este se ajustaría a dos alturas distintas: la portería central alta y las porterías largas, con ayuda de un pistón neumático.',
    imageRefs: ['Imagen 18.0 Armado de la estructura de las llantas para una nueva base cuadrada.', 'Imagen 18.1 Presentación del mecanismo de recolección y elevación.'],
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
    objective: 'Construir una pista simulada, terminar base cuadrada e iniciar simulaciones 3D.',
    activities: ['Construir la pista simulada.', 'Terminar la base cuadrada del robot.', 'Comenzar las simulaciones en 3D.'],
    technicalDevelopment:
      'La decisión de simular una cancha fue para poder hacer pruebas que, si bien no serán precisas, podrán ayudar a llegar a hacer el mejor trabajo en las condiciones en las que nos encontramos. También será de gran ayuda para que el driver pueda familiarizarse con los movimientos y las dimensiones de giro y de la cancha en general. En este acomodo detectamos una falla en el diseño: no se contempló el espacio en la parte delantera del robot para el rodillo recolector, por lo que recurrimos a un mecanismo de transmisión de movimiento por piñón-cadena con una relación de 1:1.',
    observations:
      'Se instruyó al encargado sobre la creación de una cadena 3D, pero no fue suficiente, por lo que terminó recurriendo a un tutorial de YouTube de hace cuatro años. La finalización de la cadena de prueba tomó un día y medio.',
    results: 'Se obtuvo una base cuadrada con transmisión piñón-cadena y una pista simulada para pruebas.',
    details:
      'Conservar la explicación sobre la falla de espacio frontal y la solución piñón-cadena.',
    imageRefs: [
      'Imagen 19.0 Corte de madera que servirá como soporte de las porterías.',
      'Imagen 19.1 Construcción de la cancha.',
      'Imagen 19.2 Construcción de la cancha.',
      'Imagen 19.3 Base cuadrada con motores directos a las llantas.',
      'Imagen 19.4 Mecanismo piñón-cadena 1:1 con piñones de 18 dientes.',
      'Imagen 19.5 Mecanismo ejecutado en la base.',
      'Imagen 19.6.'
    ],
    sourcePages: sourceOct,
    imageFile: 'entry-2025-10-14.svg'
  },
  {
    dateISO: '2025-10-15',
    dateLabel: 'Miércoles 15 de octubre del 2025',
    place: 'Laboratorio de Robótica',
    time: '12:30-15:00',
    stage: 'Pruebas',
    title: 'Cadena de prueba, estacionamiento, rodillo y neumática',
    objective: 'Probar cadena, base, estacionamiento, rodillo y neumática.',
    activities: [
      'Completar la cadena prueba.',
      'Realizar pruebas del robot en la pista.',
      'Probar el rodillo de ligas.',
      'Revisar el calentamiento de motores.',
      'Ajustar control por inversión de dirección.'
    ],
    technicalDevelopment:
      'Se completó la cadena de prueba, lo cual tomó un día y medio. Se probó la base en pista, confirmando que podía estacionarse exitosamente. Se verificó el calentamiento de los motores, prueba que también resultó satisfactoria. El piloto detectó que los controles estaban invertidos, y el problema se solucionó mediante reprogramación.',
    observations:
      'El rodillo se ajustó y se decidió utilizar neumática para las recargas, ya que no se encontró otra solución. Se presentaron problemas con el motor del rodillo inferior, que tuvo que retirarse en cinco ocasiones.',
    results:
      'Se validó el estacionamiento, se corrigieron controles invertidos y se tomó la decisión de usar neumática para recargas.',
    details: 'Conservar la mención del motor del rodillo inferior retirado cinco veces.',
    imageRefs: [
      'Imagen 20.0 Cadena de mecanismo de elevación.',
      'Imagen 20.1.',
      'Imagen 20.2.',
      'Imagen 20.3 Rodillo con engrane de 30 dientes.',
      'Imagen 20.4 Guía del armado de los circuitos neumáticos.'
    ],
    sourcePages: sourceOct,
    imageFile: 'entry-2025-10-15.svg'
  },
  {
    dateISO: '2025-10-16',
    dateLabel: 'Jueves 16 de octubre del 2025',
    place: 'Laboratorio de Robótica',
    time: '12:30-15:00',
    stage: 'Robot 2.0',
    title: 'Desarrollo y construcción del diseño 2.0',
    objective: 'Desarrollar y construir el diseño 2.0.',
    activities: ['Desarrollo de diseño 2.0.', 'Construcción del diseño 2.0.', 'Instalación del mecanismo de variación de altura.'],
    technicalDevelopment:
      'Se trabajó en el diseño 2.0 y en el mecanismo de variación de altura.',
    observations:
      'La entrada se respalda principalmente con evidencia visual del diseño y montaje.',
    results:
      'Se inició la construcción del diseño 2.0 y se instaló el mecanismo de variación de altura.',
    details: 'Conservar referencias visuales del diseño 2.0.',
    imageRefs: [
      'Imagen 21.0 Vista lateral del Diseño 2.0.',
      'Imagen 21.1 Mecanismo de variación de altura Diseño 2.0.',
      'Imagen 21.2 Instalación del mecanismo de variación de altura.',
      'Imagen 21.3.',
      'Imagen 21.4.'
    ],
    sourcePages: sourceOct,
    imageFile: 'entry-2025-10-16.svg'
  },
  {
    dateISO: '2025-10-20',
    dateLabel: 'Lunes 20 de octubre del 2025',
    place: 'Laboratorio de Robótica',
    time: '12:30-15:00',
    stage: 'Robot 2.0',
    title: 'Detalles finales del diseño 2.0 y mecanismo de recarga',
    objective: 'Completar detalles finales del diseño 2.0 e implementar mecanismo de recarga.',
    activities: [
      'Completar detalles finales sobre el diseño 2.0.',
      'Implementar el diseño 2.0.',
      'Probar mecanismo para recargas de los tubos.',
      'Reajustar el mecanismo de recarga.',
      'Construir mecanismo de elevación.'
    ],
    technicalDevelopment:
      'Se trabajó en el mecanismo para poder hacer recargas de los tubos. El primer diseño del mecanismo falló, por lo cual se modificó. Al nuevo diseño se le detectó falta de longitud, por lo que se volvió a modificar.',
    observations:
      'La entrada muestra varias iteraciones del mecanismo de recarga.',
    results:
      'Se avanzó en reajustes del mecanismo de recarga y en la construcción del mecanismo de elevación.',
    details: 'Conservar la idea de fallo, reajuste y segundo reajuste.',
    imageRefs: [
      'Imagen 22.0 Mecanismo para poder hacer recargas de los tubos.',
      'Imagen 22.1 Pruebas del primer mecanismo de recarga.',
      'Imagen 22.2 Reajustes del mecanismo de recarga.',
      'Imagen 22.3 Segundo reajuste del mecanismo de recarga.',
      'Imagen 22.4 Construcción de mecanismo de la imagen 22.3.',
      'Imagen 22.5 Mecanismo de elevación.',
      'Imagen 22.6 Construcción del mecanismo de elevación.'
    ],
    sourcePages: sourceOct,
    imageFile: 'entry-2025-10-20.svg'
  },
  {
    dateISO: '2025-10-21',
    dateLabel: 'Martes 21 de octubre del 2025',
    place: 'CEMSaD 04 Agostitlán',
    time: '07:30-15:00',
    stage: 'Torneo',
    title: 'Torneo de prueba Agostitlán',
    objective: 'Participar en el torneo de prueba de Agostitlán y evaluar el robot en condiciones de competencia.',
    activities: ['Participación en torneo de prueba.', 'Realización de ajustes entre partidos.', 'Observación del desempeño del robot.'],
    technicalDevelopment: 'Torneo de prueba Agostitlán.',
    observations:
      'La bitácora registra llegada del equipo, ajustes entre partidos, participación en partido, salida de Agostitlán y resultados del torneo.',
    results: 'En todos se obtuvieron resultados excelentes.',
    details: 'Entrada principalmente respaldada por evidencia visual de torneo.',
    imageRefs: [
      'Imagen 23.0 Llegada del equipo a Agostitlán.',
      'Imagen 23.1 Ajustes entre partidos al robot.',
      'Imagen 23.2 Partido.',
      'Imagen 23.3 Salida de Agostitlán.',
      'Imagen 23.4 Resultados del torneo. En todos se obtuvieron resultados excelentes.'
    ],
    sourcePages: ['PDF sección octubre 2025 / Torneo Agostitlán'],
    imageFile: 'entry-2025-10-21.svg'
  },
  {
    dateISO: '2025-10-22',
    dateLabel: 'Miércoles 22 de octubre del 2025',
    place: 'Laboratorio de Robótica',
    time: 'No especificado en la entrada',
    stage: 'Mejora',
    title: 'Análisis posterior al torneo de Agostitlán',
    objective: 'Analizar observaciones del torneo en Agostitlán y definir mejoras.',
    activities: [
      'Analizar observaciones del torneo.',
      'Buscar soluciones.',
      'Desarmar el robot dejando solo la base.',
      'Hacer lista de materiales faltantes.'
    ],
    technicalDevelopment:
      'Analizamos las observaciones del torneo en Agostitlán y buscamos soluciones. Desarmamos el robot, dejando solo la base para futuras mejoras. Hicimos una lista de materiales faltantes, que se recibirían el viernes 24 de octubre.',
    observations:
      'La jornada se enfocó en análisis post-torneo y búsqueda de soluciones.',
    results:
      'Se documentó el primer diseño contemplado para la mejora posterior al análisis del torneo de Agostitlán.',
    details: 'Conservar como transición entre torneo y rediseño.',
    imageRefs: ['Imagen 24.0 Primer diseño que se contempló para la mejora posterior al análisis del torneo de Agostitlán.'],
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
    objective: 'Revisar nuevo diseño e identificar materiales faltantes.',
    activities: [
      'Revisar el nuevo diseño.',
      'Identificar mejoras para aumentar la velocidad.',
      'Registrar materiales faltantes.'
    ],
    technicalDevelopment:
      'Se revisó el nuevo diseño, se identificaron mejoras para aumentar la velocidad. Materiales faltantes incluían malla para la zona de almacenamiento, más ejes y piñones para los rodillos, y opresores para los ejes.',
    observations:
      'La entrada se centra en revisión y planeación de materiales.',
    results:
      'Se documentó el segundo diseño contemplado para la mejora posterior al análisis del torneo de Agostitlán.',
    details: 'Conservar lista de materiales faltantes.',
    imageRefs: ['Imagen 25.0 Segundo diseño que se contempló para la mejora posterior al análisis del torneo de Agostitlán.'],
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
    objective: 'Validar el mecanismo para sacar bloques del tubo de recargas.',
    activities: ['Pruebas del mecanismo sin instalarlo en el robot.', 'Pruebas del mecanismo con el robot.'],
    technicalDevelopment:
      'Se realizaron pruebas del mecanismo para poder sacar bloques del tubo de recargas.',
    observations:
      'La entrada se respalda por evidencia visual de primeras pruebas y pruebas integradas al robot.',
    results: 'Se probó el mecanismo tanto sin instalarlo como con el robot.',
    details: 'Conservar referencias a pruebas de recarga.',
    imageRefs: ['Imagen 26.0 Primeras pruebas sin instalarlo en el robot.', 'Imagen 26.1.', 'Imagen 26.2 Pruebas con el robot.'],
    sourcePages: ['PDF sección noviembre 2025'],
    imageFile: 'entry-2025-11-04.svg'
  },
  {
    dateISO: '2025-11-05',
    dateLabel: 'Miércoles 05 de noviembre del 2025',
    place: 'Laboratorio de Robótica',
    time: '12:30-15:00',
    stage: 'Evidencia visual',
    title: 'Evidencia visual del desarrollo del robot',
    objective: 'Conservar evidencia visual del avance del robot.',
    activities: ['Registro visual del desarrollo del robot.', 'Seguimiento documental de la jornada.'],
    technicalDevelopment:
      'La bitácora física registra esta jornada principalmente mediante evidencia visual. Esta entrada se conserva como prueba de continuidad del trabajo, seguimiento del desarrollo del robot y documentación del proceso previo a las siguientes etapas de competencia.',
    observations:
      'No se agregan detalles técnicos adicionales porque el registro original se apoya principalmente en imágenes.',
    results: 'Se conserva la jornada como evidencia visual del proceso.',
    details: 'Entrada de seguimiento visual.',
    imageRefs: ['Imagen 27.0.', 'Imagen 27.1.', 'Imagen 27.2.', 'Imagen 27.3.'],
    sourcePages: ['PDF sección noviembre 2025'],
    imageFile: 'entry-2025-11-05.svg'
  },
  {
    dateISO: '2025-11-06',
    dateLabel: 'Jueves 06 de noviembre del 2025',
    place: 'Laboratorio de Robótica',
    time: '12:30-15:00',
    stage: 'Evidencia visual',
    title: 'Evidencia visual de ajustes y avances',
    objective: 'Registrar visualmente ajustes y avances del robot.',
    activities: ['Registro visual de avances.', 'Seguimiento de ajustes del robot.'],
    technicalDevelopment:
      'La bitácora registra esta jornada mediante imágenes de avance y ajustes. Se conserva como evidencia de seguimiento del desarrollo del robot y continuidad del trabajo técnico.',
    observations:
      'No se agregan detalles técnicos adicionales no documentados en el registro original.',
    results: 'Se mantiene evidencia visual de ajustes y avances.',
    details: 'Entrada de evidencia visual.',
    imageRefs: ['Imagen 28.0.', 'Imagen 28.1.', 'Imagen 28.2.'],
    sourcePages: ['PDF sección noviembre 2025'],
    imageFile: 'entry-2025-11-06.svg'
  },
  {
    dateISO: '2025-11-07',
    dateLabel: 'Viernes 07 de noviembre del 2025',
    place: 'Laboratorio de Robótica',
    time: '12:30-15:00',
    stage: 'Evidencia visual',
    title: 'Evidencia visual de pruebas y preparación',
    objective: 'Conservar evidencia visual de pruebas y preparación.',
    activities: [
      'Registro visual de pruebas.',
      'Registro visual de preparación.',
      'Seguimiento documental del desarrollo del robot.'
    ],
    technicalDevelopment:
      'La jornada se conserva como evidencia visual de pruebas, ajustes y preparación. No se agregan detalles técnicos adicionales porque el registro original se apoya principalmente en imágenes.',
    observations:
      'La información textual de esta fecha es limitada, por lo que se mantiene como registro de continuidad.',
    results: 'Se conserva evidencia visual del proceso de preparación.',
    details: 'Entrada basada principalmente en imágenes.',
    imageRefs: ['Imagen 29.0.', 'Imagen 29.1.', 'Imagen 29.2.', 'Imagen 29.3.', 'Imagen 29.4.', 'Imagen 29.5.'],
    sourcePages: ['PDF sección noviembre 2025'],
    imageFile: 'entry-2025-11-07.svg'
  },
  {
    dateISO: '2025-11-08',
    dateLabel: 'Sábado 08 de noviembre del 2025',
    place: 'Laboratorio de Robótica',
    time: '08:30-12:30',
    stage: 'Preparación',
    title: 'Jornada sabatina de preparación',
    objective: 'Registrar una sesión de preparación fuera del horario regular.',
    activities: ['Jornada sabatina de preparación.', 'Seguimiento del desarrollo del robot.'],
    technicalDevelopment:
      'La bitácora física registra esta jornada como una sesión de preparación realizada fuera del horario regular. Se conserva como evidencia de compromiso, continuidad y seguimiento del desarrollo del robot.',
    observations: 'No se agregan detalles técnicos no documentados.',
    results: 'Se mantiene registro de preparación sabatina.',
    details: 'Entrada de preparación y continuidad.',
    imageRefs: ['Evidencia visual de jornada sabatina.'],
    sourcePages: ['PDF sección noviembre 2025'],
    imageFile: 'entry-2025-11-08.svg'
  },
  {
    dateISO: '2025-11-09',
    dateLabel: 'Domingo 09 de noviembre del 2025',
    place: 'Laboratorio de Robótica',
    time: '08:30-12:30',
    stage: 'Preparación',
    title: 'Jornada dominical de preparación',
    objective: 'Registrar una jornada dominical de preparación.',
    activities: ['Jornada dominical de preparación.', 'Seguimiento del trabajo del equipo.'],
    technicalDevelopment:
      'La entrada documenta una jornada dominical de preparación. Se conserva como evidencia de continuidad del trabajo del equipo durante el periodo previo a competencia.',
    observations: 'No se agregan detalles técnicos no documentados.',
    results: 'Se conserva la jornada como evidencia de continuidad.',
    details: 'Entrada de preparación fuera de horario regular.',
    imageRefs: ['Evidencia visual de jornada dominical.'],
    sourcePages: ['PDF sección noviembre 2025'],
    imageFile: 'entry-2025-11-09.svg'
  },
  {
    dateISO: '2025-11-10',
    dateLabel: 'Lunes 10 de noviembre del 2025',
    place: 'Laboratorio de Robótica',
    time: '08:30-12:30',
    stage: 'Preparación',
    title: 'Preparación previa a competencia',
    objective: 'Registrar preparación previa a competencia.',
    activities: ['Preparación previa a competencia.', 'Seguimiento del proceso de desarrollo.', 'Organización del equipo.'],
    technicalDevelopment:
      'La bitácora registra esta jornada como parte de la preparación previa a competencia. Se mantiene como evidencia de seguimiento del proceso de desarrollo y organización del equipo.',
    observations: 'La información textual de esta fecha es limitada.',
    results: 'Se conserva evidencia de preparación previa a competencia.',
    details: 'Entrada de seguimiento previo a competencia.',
    imageRefs: ['Evidencia visual de preparación previa.'],
    sourcePages: ['PDF sección noviembre 2025'],
    imageFile: 'entry-2025-11-10.svg'
  },
  {
    dateISO: '2025-11-11',
    dateLabel: 'Martes 11 de noviembre del 2025',
    place: 'Laboratorio de Robótica',
    time: '08:30-12:30',
    stage: 'Preparación',
    title: 'Seguimiento de preparación del robot',
    objective: 'Registrar seguimiento de preparación del robot.',
    activities: ['Seguimiento de preparación.', 'Registro de continuidad del trabajo.'],
    technicalDevelopment:
      'La jornada se conserva como evidencia de seguimiento de preparación. No se agregan detalles técnicos no documentados en el registro original.',
    observations: 'Registro de continuidad previo a competencia.',
    results: 'Se conserva seguimiento documental de preparación.',
    details: 'Entrada de preparación.',
    imageRefs: ['Evidencia visual de seguimiento de preparación.'],
    sourcePages: ['PDF sección noviembre 2025'],
    imageFile: 'entry-2025-11-11.svg'
  },
  {
    dateISO: '2025-11-12',
    dateLabel: 'Miércoles 12 de noviembre del 2025',
    place: 'Laboratorio de Robótica',
    time: '08:30-12:30',
    stage: 'Preparación',
    title: 'Seguimiento de preparación del robot',
    objective: 'Registrar continuidad de preparación previa al Torneo Estatal.',
    activities: ['Seguimiento de preparación.', 'Registro de continuidad del trabajo previo al Torneo Estatal.'],
    technicalDevelopment:
      'La bitácora conserva esta fecha como parte de la preparación previa al Torneo Estatal inter CECyTE Michoacán. La información textual es limitada, por lo que se mantiene como evidencia de continuidad.',
    observations: 'No se agregan detalles técnicos no documentados.',
    results: 'Se conserva la fecha como parte de la preparación previa al Torneo Estatal.',
    details: 'Entrada de preparación previa al torneo.',
    imageRefs: ['Evidencia visual de preparación previa al Torneo Estatal.'],
    sourcePages: ['PDF sección noviembre 2025'],
    imageFile: 'entry-2025-11-12.svg'
  },
  {
    dateISO: '2025-11-13',
    dateLabel: 'Jueves 13 de noviembre del 2025',
    place: 'Torneo Estatal inter CECyTE Michoacán',
    time: 'Jornada de competencia',
    stage: 'Torneo',
    title: 'Torneo Estatal inter CECyTE Michoacán — Día 1',
    objective:
      'Participar en el Torneo Estatal inter CECyTE Michoacán, etapa contemplada dentro del alcance del proyecto.',
    activities: [
      'Participación en el Torneo Estatal inter CECyTE Michoacán.',
      'Evaluación del robot en condiciones reales de competencia.',
      'Observación del desempeño del diseño, programación, manejo y organización del equipo.'
    ],
    technicalDevelopment:
      'La participación en el Torneo Estatal inter CECyTE Michoacán forma parte del alcance del proyecto documentado en la bitácora. Esta etapa representa una evaluación del robot en condiciones reales de competencia, así como una oportunidad para analizar el desempeño del diseño, la programación, el manejo y la organización del equipo.',
    observations:
      'No agregar resultados específicos si no están documentados textualmente. Usar la evidencia visual registrada como respaldo del evento.',
    results: 'Se conserva esta fecha como parte del proceso competitivo del equipo.',
    details:
      'No inventar premios, marcadores ni resultados si no aparecen en la fuente textual proporcionada.',
    imageRefs: ['Evidencia visual del Torneo Estatal inter CECyTE Michoacán.'],
    sourcePages: ['PDF sección noviembre 2025 / Torneo Estatal inter CECyTE Michoacán'],
    imageFile: 'entry-2025-11-13.svg'
  },
  {
    dateISO: '2025-11-14',
    dateLabel: 'Viernes 14 de noviembre del 2025',
    place: 'Torneo Estatal inter CECyTE Michoacán',
    time: 'Jornada de competencia',
    stage: 'Torneo',
    title: 'Torneo Estatal inter CECyTE Michoacán — Día 2',
    objective: 'Registrar la segunda jornada del Torneo Estatal inter CECyTE Michoacán.',
    activities: [
      'Participación en la segunda jornada del Torneo Estatal.',
      'Seguimiento de competencia.',
      'Registro de evidencia visual del evento.'
    ],
    technicalDevelopment:
      'Segunda jornada del Torneo Estatal inter CECyTE Michoacán, contemplado dentro del alcance del proyecto. La entrada se conserva como evidencia de participación en competencia y seguimiento del proceso del equipo.',
    observations:
      'No inventar resultados, marcadores o premios si no están documentados textualmente.',
    results: 'Se conserva registro de la segunda jornada del Torneo Estatal.',
    details: 'Entrada de competencia estatal basada en evidencia visual.',
    imageRefs: ['Evidencia visual del Torneo Estatal inter CECyTE Michoacán.'],
    sourcePages: ['PDF sección noviembre 2025 / Torneo Estatal inter CECyTE Michoacán'],
    imageFile: 'entry-2025-11-14.svg'
  },
  {
    dateISO: '2025-11-18',
    dateLabel: 'Martes 18 de noviembre del 2025',
    place: 'Laboratorio de Robótica',
    time: '08:30-12:30',
    stage: 'Evidencia visual',
    title: 'Jornada registrada en bitácora física',
    objective: 'Conservar evidencia de continuidad posterior a competencia.',
    activities: ['Registro visual de continuidad.', 'Seguimiento del proyecto posterior a competencia.'],
    technicalDevelopment:
      'La bitácora física conserva esta fecha mediante evidencia visual. Se mantiene como parte de la trazabilidad del trabajo posterior a competencia.',
    observations: 'No se agregan detalles técnicos no documentados.',
    results: 'Se conserva evidencia visual de continuidad.',
    details: 'Entrada visual posterior a competencia.',
    imageRefs: ['Evidencia visual registrada en bitácora física.'],
    sourcePages: ['PDF sección noviembre 2025'],
    imageFile: 'entry-2025-11-18.svg'
  },
  {
    dateISO: '2025-11-19',
    dateLabel: 'Miércoles 19 de noviembre del 2025',
    place: 'Laboratorio de Robótica',
    time: '08:30-12:30',
    stage: 'Evidencia visual',
    title: 'Jornada registrada en bitácora física',
    objective: 'Mantener evidencia de continuidad del proyecto.',
    activities: ['Registro visual de continuidad.', 'Seguimiento documental del trabajo.'],
    technicalDevelopment:
      'La entrada se conserva como evidencia visual de continuidad del proyecto. No se agregan detalles técnicos que no estén documentados.',
    observations: 'Registro basado principalmente en evidencia visual.',
    results: 'Se conserva la trazabilidad de la jornada.',
    details: 'Entrada de seguimiento visual.',
    imageRefs: ['Evidencia visual registrada en bitácora física.'],
    sourcePages: ['PDF sección noviembre 2025'],
    imageFile: 'entry-2025-11-19.svg'
  },
  {
    dateISO: '2025-11-21',
    dateLabel: 'Viernes 21 de noviembre del 2025',
    place: 'Laboratorio de Robótica',
    time: '08:30-12:30',
    stage: 'Evidencia visual',
    title: 'Jornada registrada en bitácora física',
    objective: 'Registrar seguimiento visual del proceso de desarrollo del robot.',
    activities: ['Seguimiento visual del proceso.', 'Documentación de continuidad.'],
    technicalDevelopment:
      'La bitácora física registra esta jornada como parte del seguimiento visual del proceso de desarrollo del robot.',
    observations: 'No se agregan actividades técnicas no documentadas.',
    results: 'Se conserva evidencia visual de seguimiento.',
    details: 'Entrada de evidencia visual.',
    imageRefs: ['Evidencia visual registrada en bitácora física.'],
    sourcePages: ['PDF sección noviembre 2025'],
    imageFile: 'entry-2025-11-21.svg'
  },
  {
    dateISO: '2025-11-24',
    dateLabel: 'Lunes 24 de noviembre del 2025',
    place: 'Laboratorio de Robótica',
    time: '08:30-12:30',
    stage: 'Evidencia visual',
    title: 'Jornada registrada en bitácora física',
    objective: 'Conservar evidencia de continuidad del trabajo y mejora.',
    activities: ['Seguimiento del trabajo.', 'Documentación del proceso de mejora.'],
    technicalDevelopment:
      'La jornada se conserva como evidencia de continuidad del trabajo y documentación del proceso de mejora.',
    observations: 'La información textual es limitada y se mantiene como evidencia visual.',
    results: 'Se conserva registro de continuidad.',
    details: 'Entrada de seguimiento del proceso.',
    imageRefs: ['Evidencia visual registrada en bitácora física.'],
    sourcePages: ['PDF sección noviembre 2025'],
    imageFile: 'entry-2025-11-24.svg'
  },
  {
    dateISO: '2025-12-01',
    dateLabel: 'Lunes 01 de diciembre del 2025',
    place: 'Laboratorio de Robótica',
    time: '08:30-12:30',
    stage: 'Evidencia visual',
    title: 'Jornada registrada en bitácora física',
    objective: 'Registrar seguimiento del trabajo durante diciembre.',
    activities: ['Registro visual del trabajo.', 'Seguimiento documental del equipo.'],
    technicalDevelopment:
      'La bitácora física registra esta jornada principalmente mediante evidencia visual. Se conserva como seguimiento del trabajo del equipo durante diciembre.',
    observations: 'No se agregan detalles técnicos no documentados.',
    results: 'Se conserva evidencia visual del trabajo durante diciembre.',
    details: 'Entrada de seguimiento visual.',
    imageRefs: ['Evidencia visual registrada en bitácora física.'],
    sourcePages: ['PDF sección diciembre 2025'],
    imageFile: 'entry-2025-12-01.svg'
  },
  {
    dateISO: '2025-12-03',
    dateLabel: 'Miércoles 03 de diciembre del 2025',
    place: 'Laboratorio de Robótica',
    time: '08:30-12:30',
    stage: 'Evidencia visual',
    title: 'Jornada registrada en bitácora física',
    objective: 'Registrar continuidad del proceso durante diciembre.',
    activities: ['Registro visual de continuidad.', 'Seguimiento del proceso durante diciembre.'],
    technicalDevelopment:
      'La entrada documenta continuidad del proceso durante diciembre mediante evidencia visual.',
    observations: 'No se agregan detalles técnicos no documentados.',
    results: 'Se mantiene evidencia del seguimiento del proceso.',
    details: 'Entrada visual de diciembre.',
    imageRefs: ['Evidencia visual registrada en bitácora física.'],
    sourcePages: ['PDF sección diciembre 2025'],
    imageFile: 'entry-2025-12-03.svg'
  },
  {
    dateISO: '2025-12-11',
    dateLabel: 'Jueves 11 de diciembre del 2025',
    place: 'Laboratorio de Robótica',
    time: '08:30-12:30',
    stage: 'Evidencia visual',
    title: 'Jornada registrada en bitácora física',
    objective: 'Conservar evidencia de seguimiento durante diciembre.',
    activities: ['Registro visual de seguimiento.', 'Documentación del robot durante diciembre.'],
    technicalDevelopment:
      'La jornada se conserva como evidencia de seguimiento y documentación del robot durante diciembre.',
    observations: 'No se agregan detalles técnicos no documentados.',
    results: 'Se mantiene registro documental de diciembre.',
    details: 'Entrada de evidencia visual.',
    imageRefs: ['Evidencia visual registrada en bitácora física.'],
    sourcePages: ['PDF sección diciembre 2025'],
    imageFile: 'entry-2025-12-11.svg'
  },
  {
    dateISO: '2026-01-09',
    dateLabel: 'Viernes 09 de enero del 2026',
    place: 'Laboratorio de Robótica',
    time: '08:30-12:30',
    stage: 'Evidencia visual',
    title: 'Jornada registrada en bitácora física',
    objective: 'Registrar seguimiento del trabajo al inicio de enero.',
    activities: ['Registro visual del trabajo.', 'Seguimiento del equipo al inicio de enero.'],
    technicalDevelopment:
      'La bitácora física registra esta jornada como parte del seguimiento del trabajo del equipo al inicio de enero.',
    observations: 'No se agregan detalles técnicos no documentados.',
    results: 'Se conserva evidencia visual de seguimiento.',
    details: 'Entrada visual de enero.',
    imageRefs: ['Evidencia visual registrada en bitácora física.'],
    sourcePages: ['PDF sección enero 2026'],
    imageFile: 'entry-2026-01-09.svg'
  },
  {
    dateISO: '2026-01-12',
    dateLabel: 'Lunes 12 de enero del 2026',
    place: 'Laboratorio de Robótica',
    time: '08:30-12:30',
    stage: 'Evidencia visual',
    title: 'Jornada registrada en bitácora física',
    objective: 'Registrar continuidad del desarrollo del robot durante enero.',
    activities: ['Seguimiento del desarrollo del robot.', 'Registro documental de enero.'],
    technicalDevelopment:
      'La entrada se conserva como evidencia de continuidad del desarrollo del robot durante enero.',
    observations: 'No se agregan detalles técnicos no documentados.',
    results: 'Se mantiene evidencia de continuidad.',
    details: 'Entrada de seguimiento visual.',
    imageRefs: ['Evidencia visual registrada en bitácora física.'],
    sourcePages: ['PDF sección enero 2026'],
    imageFile: 'entry-2026-01-12.svg'
  },
  {
    dateISO: '2026-01-13',
    dateLabel: 'Martes 13 de enero del 2026',
    place: 'Laboratorio de Robótica',
    time: '08:30-12:30',
    stage: 'Evidencia visual',
    title: 'Registro de orientación izquierda y derecha',
    objective: 'Conservar registro de orientación o comparación de lados del robot.',
    activities: ['Registro de referencias “Izquierda” y “Derecha”.', 'Seguimiento visual de orientación, acomodo o comparación.'],
    technicalDevelopment:
      'La bitácora física registra esta jornada con referencias a “Izquierda” y “Derecha”. Se conserva como evidencia de revisión de orientación, acomodo o comparación de lados del robot, sin agregar detalles técnicos no presentes en el registro original.',
    observations: 'No se agregan detalles técnicos adicionales.',
    results: 'Se conserva el registro de orientación izquierda y derecha.',
    details: 'Entrada basada en referencias visuales.',
    imageRefs: ['Evidencia visual con referencias a “Izquierda” y “Derecha”.'],
    sourcePages: ['PDF sección enero 2026'],
    imageFile: 'entry-2026-01-13.svg'
  },
  {
    dateISO: '2026-01-14',
    dateLabel: 'Miércoles 14 de enero del 2026',
    place: 'Laboratorio de Robótica',
    time: '08:30-12:30',
    stage: 'Mejora',
    title: 'Refuerzo de estructura',
    objective: 'Registrar ajuste de refuerzo estructural.',
    activities: ['Refuerzo de estructura.'],
    technicalDevelopment: 'Se quitó para reforzar la estructura.',
    observations:
      'No se agregan detalles técnicos adicionales porque el registro textual disponible es breve.',
    results: 'Se conserva evidencia de refuerzo estructural.',
    details: 'Entrada breve basada en texto original.',
    imageRefs: ['Evidencia visual de refuerzo de estructura.'],
    sourcePages: ['PDF sección enero 2026'],
    imageFile: 'entry-2026-01-14.svg'
  },
  {
    dateISO: '2026-01-19',
    dateLabel: 'Lunes 19 de enero del 2026',
    place: 'Laboratorio de Robótica',
    time: '08:30-12:30',
    stage: 'Evidencia visual',
    title: 'Jornada registrada en bitácora física',
    objective: 'Conservar evidencia de continuidad del trabajo durante enero.',
    activities: ['Seguimiento del trabajo.', 'Registro visual de continuidad.'],
    technicalDevelopment:
      'La bitácora física conserva esta fecha como evidencia de continuidad del trabajo durante enero.',
    observations: 'No se agregan detalles técnicos no documentados.',
    results: 'Se mantiene evidencia visual del seguimiento.',
    details: 'Entrada visual de enero.',
    imageRefs: ['Evidencia visual registrada en bitácora física.'],
    sourcePages: ['PDF sección enero 2026'],
    imageFile: 'entry-2026-01-19.svg'
  },
  {
    dateISO: '2026-01-22',
    dateLabel: 'Jueves 22 de enero del 2026',
    place: 'Laboratorio de Robótica',
    time: '08:30-12:30',
    stage: 'Evidencia visual',
    title: 'Jornada registrada en bitácora física',
    objective: 'Mantener evidencia visual de seguimiento del robot y del proceso de trabajo.',
    activities: ['Seguimiento del robot.', 'Registro visual del proceso de trabajo.'],
    technicalDevelopment:
      'La entrada se mantiene como evidencia visual de seguimiento del robot y del proceso de trabajo.',
    observations: 'No se agregan detalles técnicos no documentados.',
    results: 'Se conserva evidencia de seguimiento.',
    details: 'Entrada de evidencia visual.',
    imageRefs: ['Evidencia visual registrada en bitácora física.'],
    sourcePages: ['PDF sección enero 2026'],
    imageFile: 'entry-2026-01-22.svg'
  },
  {
    dateISO: '2026-01-23',
    dateLabel: 'Viernes 23 de enero del 2026',
    place: 'Laboratorio de Robótica',
    time: '08:30-12:30',
    stage: 'Evidencia visual',
    title: 'Jornada registrada en bitácora física',
    objective: 'Registrar seguimiento documental de enero.',
    activities: ['Seguimiento documental.', 'Registro visual de continuidad.'],
    technicalDevelopment:
      'La bitácora física registra esta jornada como parte del seguimiento documental de enero.',
    observations: 'No se agregan detalles técnicos no documentados.',
    results: 'Se conserva registro de continuidad.',
    details: 'Entrada visual de enero.',
    imageRefs: ['Evidencia visual registrada en bitácora física.'],
    sourcePages: ['PDF sección enero 2026'],
    imageFile: 'entry-2026-01-23.svg'
  },
  {
    dateISO: '2026-01-26',
    dateLabel: 'Lunes 26 de enero del 2026',
    place: 'Laboratorio de Robótica',
    time: '08:30-12:30',
    stage: 'Autónomo',
    title: 'Prueba del autónomo',
    objective: 'Registrar prueba del autónomo.',
    activities: ['Prueba del autónomo.'],
    technicalDevelopment: 'Prueba del autónomo.',
    observations:
      'No agregar detalles técnicos adicionales si no están documentados textualmente.',
    results: 'Se conserva la entrada como evidencia de prueba del autónomo.',
    details: 'Entrada final registrada en enero.',
    imageRefs: ['Evidencia visual de prueba del autónomo.'],
    sourcePages: ['PDF sección enero 2026'],
    imageFile: 'entry-2026-01-26.svg'
  }
];


const evidenceByEntry: Record<string, EvidenceItem[]> = {
  "2025-09-08::An\u00e1lisis inicial del reto VEX Robotics 2025-2026 PUSH BACK": [
    { caption: "Imagen 1.1 Vista general del campo de juego", src: "assets/svg/evidence/imagen-1-1-vista-general-del-campo-de-juego-p010.svg" },
    { caption: "Imagen 1.7 Puntuaci\u00f3n por bloque", src: "assets/svg/evidence/imagen-1-7-puntuacion-por-bloque-p011.svg" },
    { caption: "Imagen 1.8 Bonus por control de las porter\u00edas largas", src: "assets/svg/evidence/imagen-1-8-bonus-por-control-de-las-porterias-largas-p012.svg" },
    { caption: "Imagen 1.9 Bonus en las porter\u00edas centrales", src: "assets/svg/evidence/imagen-1-9-bonus-en-las-porterias-centrales-p012.svg" },
    { caption: "Imagen 1.10 Bonus porque uno se estacione", src: "assets/svg/evidence/imagen-1-10-bonus-porque-uno-se-estacione-p012.svg" },
    { caption: "Imagen 1.11 Bonus porque se estacionen los dos", src: "assets/svg/evidence/imagen-1-11-bonus-porque-se-estacionen-los-p012.svg" },
    { caption: "Imagen 1.12 Regla de bloques dentro de l\u00edneas", src: "assets/svg/evidence/imagen-1-12-el-bloque-mas-a-la-izquierda-rojo-no-esta-com-p013.svg" },
    { caption: "Imagen 1.13 Bloque puntuado", src: "assets/svg/evidence/imagen-1-13-el-bloque-verde-a-la-derecha-esta-completamen-p013.svg" },
    { caption: "Imagen 1.2 Dimensiones de las porter\u00edas largas", src: "assets/svg/evidence/imagen-1-2-dimensiones-de-las-porterias-largas-p014.svg" },
    { caption: "Imagen 1.3 Dimensiones de la porter\u00eda central", src: "assets/svg/evidence/imagen-1-3-dimensiones-de-la-p014.svg" },
    { caption: "Imagen 1.4 Medidas del \u00e1rea de estacionamiento", src: "assets/svg/evidence/imagen-4-evidencia-p014.svg" },
    { caption: "Imagen 1.5 Medidas del cargador", src: "assets/svg/evidence/imagen-1-5-medidas-del-cargador-p014.svg" },
    { caption: "Imagen 1.6 Medidas del bloque", src: "assets/svg/evidence/imagen-2-evidencia-p015.svg" },
    { caption: "Imagen 1.7 Medidas y distribuci\u00f3n del campo de juego", src: "assets/svg/evidence/imagen-1-7-medidas-y-distribucion-del-p015.svg" },
    { caption: "Imagen 2.1 Altura de las porter\u00edas largas", src: "assets/svg/evidence/imagen-2-1-altura-de-las-porterias-largas-p016.svg" },
    { caption: "Imagen 2.2 Altura de la porter\u00eda central alta", src: "assets/svg/evidence/imagen-2-2-altura-de-la-porteria-central-alta-p016.svg" },
    { caption: "Imagen 2.3 Recargador", src: "assets/svg/evidence/imagen-2-3-recargador-p016.svg" },
  ],
  "2025-09-09::Desarmado del robot anterior y organizaci\u00f3n de equipos": [
    { caption: "Imagen 3.1 Paso 9", src: "assets/svg/evidence/imagen-3-1-paso-9-p018.svg" },
    { caption: "Imagen 3.2 Paso 13", src: "assets/svg/evidence/imagen-3-2-paso-13-p018.svg" },
    { caption: "Imagen 3.3 Paso 14", src: "assets/svg/evidence/imagen-3-3-paso-14-p018.svg" },
    { caption: "Imagen 3.2 El robot siendo desarmado", src: "assets/svg/evidence/imagen-3-2-el-robot-siendo-desarmado-p019.svg" },
    { caption: "Imagen 3.1 El robot siendo desarmado", src: "assets/svg/evidence/imagen-3-1-el-robot-siendo-p019.svg" },
  ],
  "2025-09-10::Prototipo anterior desarmado y avance del prototipo guiado": [
    { caption: "Imagen 4.1 Prototipo completamente desarmado", src: "assets/svg/evidence/imagen-4-1-prototipo-completamente-desarmado-p020.svg" },
    { caption: "Imagen 4.2 Paso 19", src: "assets/svg/evidence/imagen-4-2-paso-19-p020.svg" },
    { caption: "Imagen 4.3 Paso 25", src: "assets/svg/evidence/imagen-4-3-paso-25-p020.svg" },
    { caption: "Imagen 4.4 Paso 36c", src: "assets/svg/evidence/imagen-4-4-paso-36c-p020.svg" },
  ],
  "2025-09-15::Avance del prototipo guiado hasta base de elevaci\u00f3n": [
    { caption: "Imagen 5.1 Paso 44c", src: "assets/svg/evidence/imagen-5-1-paso-44c-p022.svg" },
    { caption: "Imagen 5.2 Paso 53c", src: "assets/svg/evidence/imagen-5-2-paso-53c-p022.svg" },
    { caption: "Imagen 5.3 Paso 54", src: "assets/svg/evidence/imagen-5-3-paso-54-p022.svg" },
    { caption: "Imagen 5.4 Paso 61", src: "assets/svg/evidence/imagen-5-4-paso-61-p022.svg" },
    { caption: "Imagen 5.5 Paso 68", src: "assets/svg/evidence/imagen-5-5-paso-68-p022.svg" },
  ],
  "2025-09-16::Armado del prototipo guiado hasta el paso 98c": [
    { caption: "Imagen 6.1 Paso 70", src: "assets/svg/evidence/imagen-6-1-paso-70-p023.svg" },
    { caption: "Imagen 6.2 Paso 87", src: "assets/svg/evidence/imagen-6-2-paso-87-p023.svg" },
    { caption: "Imagen 6.3 Paso 98", src: "assets/svg/evidence/imagen-6-3-paso-98-p023.svg" },
  ],
  "2025-09-17::Armado del prototipo guiado hasta el paso 113c": [
    { caption: "Imagen 6.4 Paso 100", src: "assets/svg/evidence/imagen-6-4-paso-100-p024.svg" },
    { caption: "Imagen 6.5 Paso 101", src: "assets/svg/evidence/imagen-6-5-paso-101-p024.svg" },
    { caption: "Imagen 6.6 Paso 102", src: "assets/svg/evidence/imagen-6-6-paso-102-p024.svg" },
    { caption: "Imagen 6.7 Paso 104", src: "assets/svg/evidence/imagen-6-7-paso-104-p024.svg" },
    { caption: "Imagen 6.8 Paso 112", src: "assets/svg/evidence/imagen-6-8-paso-112-p024.svg" },
    { caption: "Imagen 6.9 Paso 113", src: "assets/svg/evidence/imagen-6-9-paso-113-p024.svg" },
  ],
  "2025-09-23::Armado del prototipo guiado hasta el paso 132c": [
    { caption: "Imagen 7.1 Paso 116", src: "assets/svg/evidence/imagen-7-1-paso-116-p025.svg" },
    { caption: "Imagen 7.2 Paso 116c", src: "assets/svg/evidence/imagen-7-2-paso-116-c-p025.svg" },
    { caption: "Imagen 7.3 Paso 132", src: "assets/svg/evidence/imagen-7-3-paso-132-p025.svg" },
  ],
  "2025-09-24::Instalaci\u00f3n de Inventor y avance del prototipo guiado": [
    { caption: "Imagen 7.4 Instalaci\u00f3n de Inventor", src: "assets/svg/evidence/imagen-7-4-instalacion-de-inventor-p026.svg" },
    { caption: "Imagen 7.5 Paso 137", src: "assets/svg/evidence/imagen-7-5-paso-137-p026.svg" },
    { caption: "Imagen 7.6 Paso 140", src: "assets/svg/evidence/imagen-7-6-paso-140-p027.svg" },
    { caption: "Imagen 7.7 Paso 141", src: "assets/svg/evidence/imagen-7-7-paso-141-p027.svg" },
    { caption: "Imagen 7.8 Paso 143", src: "assets/svg/evidence/imagen-7-8-paso-143-p027.svg" },
    { caption: "Imagen 7.9 Paso 148", src: "assets/svg/evidence/imagen-7-9-paso-148-p027.svg" },
    { caption: "Imagen 8.0 Paso 154", src: "assets/svg/evidence/imagen-8-0-paso-154-p027.svg" },
    { caption: "Imagen 8.1 Paso 155", src: "assets/svg/evidence/imagen-8-1-paso-155-p027.svg" },
    { caption: "Imagen 8.2 Paso 162", src: "assets/svg/evidence/imagen-8-2-paso-162-p028.svg" },
    { caption: "Imagen 8.3 Trabajando en el armado del prototipo guiado", src: "assets/svg/evidence/imagen-8-3-trabajando-en-el-armado-del-prototipo-guiado-p028.svg" },
    { caption: "Imagen 8.4 Trabajando en el armado", src: "assets/svg/evidence/imagen-8-4-evidencia-p028.svg" },
    { caption: "Imagen 8.5 Trabajando en el armado", src: "assets/svg/evidence/imagen-8-5-trabajando-en-el-armado-p028.svg" },
  ],
  "2025-09-25::Designaci\u00f3n de encargados y subencargados": [
    { caption: "Imagen 9.0 Paso 164c", src: "assets/svg/evidence/imagen-9-0-paso-164c-p030.svg" },
    { caption: "Imagen 9.1 Paso 165", src: "assets/svg/evidence/imagen-9-1-paso-165-p030.svg" },
    { caption: "Imagen 9.2 Paso 170c", src: "assets/svg/evidence/imagen-9-2-paso-170c-p030.svg" },
  ],
  "2025-09-29::Avance del prototipo guiado, VEXcode V5 y gesti\u00f3n de apoyos": [
    { caption: "Imagen 10.1 Reuni\u00f3n con el Mtr. Juan Pablo Herrera", src: "assets/svg/evidence/imagen-10-1-reunion-con-el-mtr-juan-pablo-herrera-p031.svg" },
    { caption: "Imagen 10.2 Reuni\u00f3n con MVZ Francisco P\u00e9rez", src: "assets/svg/evidence/imagen-10-2-reunion-con-mvz-francisco-perez-p032.svg" },
  ],
  "2025-09-30::Diagramas del nuevo dise\u00f1o para el regional de Lagunillas": [
    { caption: "Imagen 11.1 Todos trabajando", src: "assets/svg/evidence/imagen-11-1-todos-trabajando-p034.svg" },
    { caption: "Imagen 11.2 Pruebas de programaci\u00f3n", src: "assets/svg/evidence/imagen-11-2-pruebas-de-programacion-p034.svg" },
    { caption: "Imagen 11.3 Dibujando el boceto del robot", src: "assets/svg/evidence/imagen-11-3-dibujando-el-boceto-del-robot-p033.svg" },
    { caption: "Imagen 11.4 Vista general del robot", src: "assets/svg/evidence/imagen-11-4-vista-general-del-robot-p033.svg" },
    { caption: "Imagen 11.5 Explicaci\u00f3n gr\u00e1fica del mecanismo", src: "assets/svg/evidence/imagen-11-5-explicacion-grafica-del-mecanismo-p033.svg" },
  ],
  "2025-10-01::Dise\u00f1o 3D, impresi\u00f3n de piezas y comienzo del dise\u00f1o propuesto": [
    { caption: "Imagen 12.1 Dise\u00f1o de piezas", src: "assets/svg/evidence/imagen-12-1-diseno-de-piezas-p035.svg" },
    { caption: "Imagen 12.2 Comienzo del dise\u00f1o del bloque", src: "assets/svg/evidence/imagen-12-2-comienzo-del-diseno-del-p035.svg" },
    { caption: "Imagen 12.3 Dise\u00f1o completo del bloque", src: "assets/svg/evidence/imagen-12-3-diseno-completo-del-bloque-p035.svg" },
    { caption: "Imagen 12.7 Impresi\u00f3n 3D", src: "assets/svg/evidence/imagen-12-7-impresion-3d-p035.svg" },
    { caption: "Imagen 12.6 Dise\u00f1o 3D en Inventor", src: "assets/svg/evidence/imagen-12-6-diseno-3d-en-inventor-p036.svg" },
    { caption: "Imagen 12.4 Construcci\u00f3n del mecanismo", src: "assets/svg/evidence/imagen-12-4-construccion-del-mecanismo-p036.svg" },
    { caption: "Imagen 12.5 Pruebas de c\u00f3mo quedar\u00e1 el mecanismo", src: "assets/svg/evidence/imagen-12-5-pruebas-de-como-quedara-el-p036.svg" },
  ],
  "2025-10-02::Cambio de dise\u00f1o, bloque oficial y mecanismo Tank Tread": [
    { caption: "Imagen 13.1 Dise\u00f1o nuevo", src: "assets/svg/evidence/imagen-13-1-diseno-nuevo-p037.svg" },
    { caption: "Imagen 13.2 Explicaci\u00f3n", src: "assets/svg/evidence/imagen-13-2-explicacion-p037.svg" },
    { caption: "Imagen 13.3 Pruebas de funcionamiento del mecanismo de elevaci\u00f3n por cadena de Tank Tread", src: "assets/svg/evidence/imagen-13-3-pruebas-de-funcionamiento-del-mecanismo-de-el-p038.svg" },
  ],
  "2025-10-03::Pruebas separadas de mecanismos y dise\u00f1o 3D": [
    { caption: "Imagen 14.0 Armado y prueba del mecanismo de recolecci\u00f3n", src: "assets/svg/evidence/imagen-14-0-armado-y-prueba-del-mecanismo-de-recoleccion-p039.svg" },
    { caption: "Imagen 14.1 Pruebas de dise\u00f1o 3D", src: "assets/svg/evidence/imagen-2-evidencia-p039.svg" },
  ],
  "2025-10-04::Armado del dise\u00f1o nuevo y sensor girosc\u00f3pico": [
    { caption: "Imagen 15.0 Armado de los mecanismos", src: "assets/svg/evidence/imagen-15-0-armado-de-los-mecanismos-p040.svg" },
    { caption: "Imagen 15.1 Armado de la banda", src: "assets/svg/evidence/imagen-15-1-armado-de-la-banda-p040.svg" },
    { caption: "Imagen 15.2 Conexi\u00f3n del sensor girosc\u00f3pico", src: "assets/svg/evidence/imagen-15-2-conexion-del-sensor-giroscopico-p040.svg" },
    { caption: "Imagen 15.3 Gyroscope Sensor V1.0", src: "assets/svg/evidence/imagen-15-3-gyroscope-sensor-v1-0-mejora-el-movimiento-au-p040.svg" },
    { caption: "Imagen 15.3 Pruebas de los mecanismos", src: "assets/svg/evidence/imagen-15-3-pruebas-de-los-mecanismos-p041.svg" },
  ],
  "2025-10-06::Dise\u00f1o 3D, porter\u00edas simuladas y ajustes en base": [
    { caption: "Imagen 16.0 Dise\u00f1o 3D", src: "assets/svg/evidence/imagen-16-0-diseno-3d-p042.svg" },
    { caption: "Imagen 16.1 Pruebas finales", src: "assets/svg/evidence/imagen-16-1-pruebas-finales-p042.svg" },
    { caption: "Imagen 16.2 Ajustes en la base", src: "assets/svg/evidence/imagen-16-2-ajustes-en-la-base-p042.svg" },
    { caption: "Imagen 16.3 Ajustes en la base junto a las llantas", src: "assets/svg/evidence/imagen-16-3-ajustes-en-la-base-junto-a-las-llantas-p042.svg" },
  ],
  "2025-10-07::\u00daltimos ajustes antes del regional en Lagunillas": [
    { caption: "Imagen 17.0 Colocaci\u00f3n de un separador", src: "assets/svg/evidence/imagen-17-0-colocacion-de-un-separador-p043.svg" },
    { caption: "Imagen 17.1 Pruebas en cancha", src: "assets/svg/evidence/imagen-17-1-pruebas-en-cancha-p043.svg" },
  ],
  "2025-10-08::Regional de prueba en Lagunillas": [
    { caption: "Imagen 17.1 Llegada del equipo al torneo", src: "assets/svg/evidence/imagen-17-1-llegada-del-equipo-al-torneo-p044.svg" },
    { caption: "Imagen 17.2 Tercer match", src: "assets/svg/evidence/imagen-17-2-3ro-mache-p044.svg" },
  ],
  "2025-10-08::Primer c\u00f3digo aut\u00f3nomo realizado durante el regional": [
    { caption: "Imagen 17.3 Parte 1 del primer c\u00f3digo con aut\u00f3nomo", src: "assets/svg/evidence/imagen-17-3-parte-1-del-primer-codigo-con-autonomo-p045.svg" },
    { caption: "Imagen 17.4 Parte 2 primer aut\u00f3nomo", src: "assets/svg/evidence/imagen-17-4-parte-2-primer-autonomo-p045.svg" },
  ],
  "2025-10-08::Control por driver": [
    { caption: "Imagen 17.5 Parte 3 control por driver", src: "assets/svg/evidence/imagen-17-5-parte-3-control-por-driver-p046.svg" },
  ],
  "2025-10-13::Mejoras posteriores al regional": [
    { caption: "Imagen 18.0 Armado de la estructura de las llantas para una nueva base cuadrada", src: "assets/svg/evidence/imagen-18-0-armado-de-la-estructura-de-las-llantas-para-u-p047.svg" },
    { caption: "Imagen 18.1 Presentaci\u00f3n del mecanismo de recolecci\u00f3n y elevaci\u00f3n", src: "assets/svg/evidence/imagen-18-1-presentacion-del-mecanismo-de-recoleccion-y-e-p047.svg" },
  ],
  "2025-10-14::Pista simulada, base cuadrada y pi\u00f1\u00f3n-cadena": [
    { caption: "Imagen 19.0 Corte de madera que servir\u00e1 como soporte de las porter\u00edas", src: "assets/svg/evidence/imagen-19-0-corte-de-madera-que-servira-como-soporte-de-l-p048.svg" },
    { caption: "Imagen 19.1 Construcci\u00f3n de la cancha", src: "assets/svg/evidence/imagen-19-1-construccion-de-la-cancha-p048.svg" },
    { caption: "Imagen 19.2 Construcci\u00f3n de la cancha", src: "assets/svg/evidence/imagen-19-2-construccion-de-la-cancha-p048.svg" },
    { caption: "Imagen 19.3 Base cuadrada con motores directos a las llantas", src: "assets/svg/evidence/imagen-19-3-base-cuadrada-con-motores-directos-a-las-llan-p049.svg" },
    { caption: "Imagen 19.4 Mecanismo pi\u00f1\u00f3n-cadena 1:1 con pi\u00f1ones de 18 dientes", src: "assets/svg/evidence/imagen-19-4-mecanismo-pinon-cadena-1-1-con-pinones-de-18-p049.svg" },
    { caption: "Imagen 19.5 Mecanismo ejecutado en la base", src: "assets/svg/evidence/imagen-19-5-mecanismo-ejecutado-en-la-base-p049.svg" },
    { caption: "Imagen 19.6 Evidencia", src: "assets/svg/evidence/imagen-19-6-evidencia-p050.svg" },
  ],
  "2025-10-15::Cadena de prueba, estacionamiento, rodillo y neum\u00e1tica": [
    { caption: "Imagen 20.0 Cadena de mecanismo de elevaci\u00f3n", src: "assets/svg/evidence/imagen-20-0-cadena-de-mecanismo-de-elevacion-p051.svg" },
    { caption: "Imagen 20.1 Evidencia", src: "assets/svg/evidence/imagen-3-evidencia-p051.svg" },
    { caption: "Imagen 20.2 Evidencia", src: "assets/svg/evidence/imagen-20-2-evidencia-p051.svg" },
    { caption: "Imagen 20.3 Rodillo con engrane de 30 dientes", src: "assets/svg/evidence/imagen-20-3-rodillo-con-engrane-de-30-dientes-p052.svg" },
    { caption: "Imagen 20.4 Gu\u00eda del armado de los circuitos neum\u00e1ticos", src: "assets/svg/evidence/imagen-20-4-guia-del-armado-de-los-circuitos-neumaticos-p052.svg" },
  ],
  "2025-10-16::Desarrollo y construcci\u00f3n del dise\u00f1o 2.0": [
    { caption: "Imagen 21.0 Vista lateral del Dise\u00f1o 2.0", src: "assets/svg/evidence/imagen-21-0-vista-lateral-del-diseno-2-0-p053.svg" },
    { caption: "Imagen 21.1 Mecanismo de variaci\u00f3n de altura Dise\u00f1o 2.0", src: "assets/svg/evidence/imagen-21-1-mecanismo-de-variacion-de-altura-diseno-2-0-p053.svg" },
    { caption: "Imagen 21.2 Instalaci\u00f3n del mecanismo de variaci\u00f3n de altura", src: "assets/svg/evidence/imagen-21-2-instalacion-del-mecanismo-de-variacion-de-alt-p054.svg" },
    { caption: "Imagen 21.3 / 21.4 Evidencia", src: "assets/svg/evidence/imagen-21-3-imagen21-4-p054.svg" },
    { caption: "Imagen 21.4 Evidencia adicional", src: "assets/svg/evidence/imagen-3-evidencia-p054.svg" },
  ],
  "2025-10-20::Detalles finales del dise\u00f1o 2.0 y mecanismo de recarga": [
    { caption: "Imagen 22.0 Mecanismo para poder hacer recargas de los tubos", src: "assets/svg/evidence/imagen-22-0-mecanismo-para-poder-hacer-recargas-de-los-tu-p055.svg" },
    { caption: "Imagen 22.1 Pruebas del primer mecanismo de recarga", src: "assets/svg/evidence/imagen-22-1-pruebas-del-primer-mecanismo-de-recarga-p056.svg" },
    { caption: "Imagen 22.2 Reajustes del mecanismo de recarga", src: "assets/svg/evidence/imagen-22-2-reajustes-del-mecanismo-de-recarga-p056.svg" },
    { caption: "Imagen 22.3 Segundo reajuste del mecanismo de recarga", src: "assets/svg/evidence/imagen-22-3-segundo-reajuste-del-mecanismo-de-recarga-p057.svg" },
    { caption: "Imagen 22.4 Construcci\u00f3n de mecanismo", src: "assets/svg/evidence/imagen-22-4-construccion-de-mecanismo-de-la-p057.svg" },
    { caption: "Imagen 22.5 Mecanismo de elevaci\u00f3n", src: "assets/svg/evidence/imagen-22-5-mecanismo-de-elevacion-p058.svg" },
    { caption: "Imagen 22.6 Construcci\u00f3n del mecanismo de elevaci\u00f3n", src: "assets/svg/evidence/imagen-22-6-construccion-del-mecanismo-de-elevacion-p058.svg" },
  ],
  "2025-10-21::Torneo de prueba Agostitl\u00e1n": [
    { caption: "Imagen 23.0 Llegada del equipo a Agostitl\u00e1n", src: "assets/svg/evidence/imagen-23-0-llegada-del-equipo-a-agostitlan-p059.svg" },
    { caption: "Imagen 23.1 Ajustes entre partidos al robot", src: "assets/svg/evidence/imagen-23-1-ajustes-entre-partidos-al-robot-p059.svg" },
    { caption: "Imagen 23.2 Partido", src: "assets/svg/evidence/imagen-23-2-partido-p059.svg" },
    { caption: "Imagen 23.3 Salida de Agostitl\u00e1n", src: "assets/svg/evidence/imagen-23-3-salida-de-agosttitlan-p060.svg" },
    { caption: "Imagen 23.4 Resultados del torneo", src: "assets/svg/evidence/imagen-23-4-resultados-del-torneo-en-todos-se-obtuvieron-p060.svg" },
  ],
  "2025-10-22::An\u00e1lisis posterior al torneo de Agostitl\u00e1n": [
    { caption: "Imagen 24.0 Primer dise\u00f1o contemplado para mejora posterior a Agostitl\u00e1n", src: "assets/svg/evidence/imagen-24-0-primer-diseno-que-se-contemplo-para-las-mejor-p061.svg" },
  ],
  "2025-10-23::Revisi\u00f3n de nuevo dise\u00f1o y materiales faltantes": [
    { caption: "Imagen 25.0 Segundo dise\u00f1o contemplado para mejora posterior a Agostitl\u00e1n", src: "assets/svg/evidence/imagen-25-0-segundo-diseno-que-se-contemplo-para-las-mejo-p062.svg" },
  ],
  "2025-11-04::Pruebas del mecanismo para sacar bloques del tubo de recargas": [
    { caption: "Imagen 26.0 Primeras pruebas sin instalarlo en el robot", src: "assets/svg/evidence/imagen-26-0-primeras-pruebas-sin-intalarlo-en-el-robot-p063.svg" },
    { caption: "Imagen 26.1 Evidencia", src: "assets/svg/evidence/imagen-26-1-evidencia-p063.svg" },
    { caption: "Imagen 26.2 Pruebas con el robot", src: "assets/svg/evidence/imagen-26-2-pruebas-con-el-robot-p063.svg" },
  ],
  "2025-11-05::Evidencia visual del desarrollo del robot": [
    { caption: "Imagen 27.0 Evidencia", src: "assets/svg/evidence/imagen-27-0-evidencia-p064.svg" },
    { caption: "Imagen 27.1 Evidencia", src: "assets/svg/evidence/imagen-27-1-evidencia-p064.svg" },
    { caption: "Imagen 27.2 Evidencia", src: "assets/svg/evidence/imagen-27-2-evidencia-p064.svg" },
    { caption: "Imagen 27.3 Evidencia", src: "assets/svg/evidence/imagen-27-3-evidencia-p065.svg" },
  ],
  "2025-11-06::Evidencia visual de ajustes y avances": [
    { caption: "Imagen 28.0 Evidencia", src: "assets/svg/evidence/imagen-28-0-evidencia-p066.svg" },
    { caption: "Imagen 28.1 Evidencia", src: "assets/svg/evidence/imagen-28-1-evidencia-p066.svg" },
    { caption: "Imagen 28.2 Evidencia", src: "assets/svg/evidence/imagen-28-2-evidencia-p067.svg" },
  ],
  "2025-11-07::Evidencia visual de pruebas y preparaci\u00f3n": [
    { caption: "Imagen 29.0 Evidencia", src: "assets/svg/evidence/imagen-29-0-evidencia-p068.svg" },
    { caption: "Imagen 29.1 Evidencia", src: "assets/svg/evidence/imagen-29-1-evidencia-p068.svg" },
    { caption: "Imagen 29.2 Evidencia", src: "assets/svg/evidence/imagen-29-2-evidencia-p069.svg" },
    { caption: "Imagen 29.3 Evidencia", src: "assets/svg/evidence/imagen-29-3-evidencia-p069.svg" },
    { caption: "Imagen 29.4 Evidencia", src: "assets/svg/evidence/imagen-29-4-evidencia-p070.svg" },
    { caption: "Imagen 29.5 Evidencia", src: "assets/svg/evidence/imagen-29-5-evidencia-p070.svg" },
    { caption: "Imagen adicional p070", src: "assets/svg/evidence/imagen-3-evidencia-p070.svg" },
  ],
  "2025-11-08::Jornada sabatina de preparaci\u00f3n": [
    { caption: "Evidencia p071", src: "assets/svg/evidence/imagen-1-evidencia-p071.svg" },
    { caption: "Evidencia p072 imagen 1", src: "assets/svg/evidence/imagen-1-evidencia-p072.svg" },
    { caption: "Evidencia p072 imagen 2", src: "assets/svg/evidence/imagen-2-evidencia-p072.svg" },
    { caption: "Evidencia p072 imagen 3", src: "assets/svg/evidence/imagen-3-evidencia-p072.svg" },
    { caption: "Evidencia p073 imagen 1", src: "assets/svg/evidence/imagen-1-evidencia-p073.svg" },
    { caption: "Evidencia p073 imagen 2", src: "assets/svg/evidence/imagen-2-evidencia-p073.svg" },
  ],
  "2025-11-09::Jornada dominical de preparaci\u00f3n": [
    { caption: "Evidencia p074 imagen 1", src: "assets/svg/evidence/imagen-1-evidencia-p074.svg" },
    { caption: "Evidencia p074 imagen 2", src: "assets/svg/evidence/imagen-2-evidencia-p074.svg" },
    { caption: "Evidencia p074 imagen 3", src: "assets/svg/evidence/imagen-3-evidencia-p074.svg" },
    { caption: "Evidencia p074 imagen 4", src: "assets/svg/evidence/imagen-4-evidencia-p074.svg" },
    { caption: "Evidencia p074 imagen 5", src: "assets/svg/evidence/imagen-5-evidencia-p074.svg" },
    { caption: "Evidencia p075", src: "assets/svg/evidence/imagen-1-evidencia-p075.svg" },
  ],
  "2025-11-10::Preparaci\u00f3n previa a competencia": [
    { caption: "Evidencia p076 imagen 1", src: "assets/svg/evidence/imagen-1-evidencia-p076.svg" },
    { caption: "Evidencia p076 imagen 2", src: "assets/svg/evidence/imagen-2-evidencia-p076.svg" },
    { caption: "Evidencia p076 imagen 3", src: "assets/svg/evidence/imagen-3-evidencia-p076.svg" },
    { caption: "Evidencia p077 imagen 1", src: "assets/svg/evidence/imagen-1-evidencia-p077.svg" },
    { caption: "Evidencia p077 imagen 2", src: "assets/svg/evidence/imagen-2-evidencia-p077.svg" },
    { caption: "Evidencia p077 imagen 3", src: "assets/svg/evidence/imagen-3-evidencia-p077.svg" },
    { caption: "Evidencia p077 imagen 4", src: "assets/svg/evidence/imagen-4-evidencia-p077.svg" },
    { caption: "Evidencia p078", src: "assets/svg/evidence/imagen-1-evidencia-p078.svg" },
  ],
  "2025-11-11::Seguimiento de preparaci\u00f3n del robot": [
    { caption: "Evidencia p079 imagen 1", src: "assets/svg/evidence/imagen-1-evidencia-p079.svg" },
    { caption: "Evidencia p079 imagen 2", src: "assets/svg/evidence/imagen-2-evidencia-p079.svg" },
    { caption: "Evidencia p079 imagen 3", src: "assets/svg/evidence/imagen-3-evidencia-p079.svg" },
    { caption: "Evidencia p080", src: "assets/svg/evidence/imagen-1-evidencia-p080.svg" },
  ],
  "2025-11-12::Seguimiento de preparaci\u00f3n del robot": [
    { caption: "Evidencia p081 imagen 1", src: "assets/svg/evidence/imagen-1-evidencia-p081.svg" },
    { caption: "Evidencia p081 imagen 2", src: "assets/svg/evidence/imagen-2-evidencia-p081.svg" },
    { caption: "Evidencia p081 imagen 3", src: "assets/svg/evidence/imagen-3-evidencia-p081.svg" },
    { caption: "Evidencia p082 imagen 1", src: "assets/svg/evidence/imagen-1-evidencia-p082.svg" },
    { caption: "Evidencia p082 imagen 2", src: "assets/svg/evidence/imagen-2-evidencia-p082.svg" },
    { caption: "Evidencia p082 imagen 3", src: "assets/svg/evidence/imagen-3-evidencia-p082.svg" },
  ],
  "2025-11-13::Torneo Estatal inter CECyTE Michoac\u00e1n \u2014 D\u00eda 1": [
    { caption: "Evidencia p083 imagen 1", src: "assets/svg/evidence/imagen-1-evidencia-p083.svg" },
    { caption: "Evidencia p083 imagen 2", src: "assets/svg/evidence/imagen-2-evidencia-p083.svg" },
    { caption: "Evidencia p083 imagen 3", src: "assets/svg/evidence/imagen-3-evidencia-p083.svg" },
    { caption: "Evidencia p084 imagen 1", src: "assets/svg/evidence/imagen-1-evidencia-p084.svg" },
    { caption: "Evidencia p084 imagen 2", src: "assets/svg/evidence/imagen-2-evidencia-p084.svg" },
  ],
  "2025-11-14::Torneo Estatal inter CECyTE Michoac\u00e1n \u2014 D\u00eda 2": [
    { caption: "Evidencia p085 imagen 1", src: "assets/svg/evidence/imagen-1-evidencia-p085.svg" },
    { caption: "Evidencia p085 imagen 2", src: "assets/svg/evidence/imagen-2-evidencia-p085.svg" },
    { caption: "Evidencia p085 imagen 3", src: "assets/svg/evidence/imagen-3-evidencia-p085.svg" },
    { caption: "Evidencia p085 imagen 4", src: "assets/svg/evidence/imagen-4-evidencia-p085.svg" },
    { caption: "Evidencia p086 imagen 1", src: "assets/svg/evidence/imagen-1-evidencia-p086.svg" },
    { caption: "Evidencia p086 imagen 2", src: "assets/svg/evidence/imagen-2-evidencia-p086.svg" },
  ],
  "2025-11-18::Jornada registrada en bit\u00e1cora f\u00edsica": [
    { caption: "Evidencia p087 imagen 1", src: "assets/svg/evidence/imagen-1-evidencia-p087.svg" },
    { caption: "Evidencia p087 imagen 2", src: "assets/svg/evidence/imagen-2-evidencia-p087.svg" },
    { caption: "Evidencia p087 imagen 3", src: "assets/svg/evidence/imagen-3-evidencia-p087.svg" },
    { caption: "Evidencia p087 imagen 4", src: "assets/svg/evidence/imagen-4-evidencia-p087.svg" },
    { caption: "Evidencia p087 imagen 5", src: "assets/svg/evidence/imagen-5-evidencia-p087.svg" },
    { caption: "Evidencia p088 imagen 1", src: "assets/svg/evidence/imagen-1-evidencia-p088.svg" },
    { caption: "Evidencia p088 imagen 2", src: "assets/svg/evidence/imagen-2-evidencia-p088.svg" },
    { caption: "Evidencia p088 imagen 3", src: "assets/svg/evidence/imagen-3-evidencia-p088.svg" },
    { caption: "Evidencia p088 imagen 4", src: "assets/svg/evidence/imagen-4-evidencia-p088.svg" },
    { caption: "Evidencia p088 imagen 5", src: "assets/svg/evidence/imagen-5-evidencia-p088.svg" },
  ],
  "2025-11-19::Jornada registrada en bit\u00e1cora f\u00edsica": [
    { caption: "Evidencia p089 imagen 1", src: "assets/svg/evidence/imagen-1-evidencia-p089.svg" },
    { caption: "Evidencia p089 imagen 2", src: "assets/svg/evidence/imagen-2-evidencia-p089.svg" },
    { caption: "Evidencia p089 imagen 3", src: "assets/svg/evidence/imagen-3-evidencia-p089.svg" },
    { caption: "Evidencia p089 imagen 4", src: "assets/svg/evidence/imagen-4-evidencia-p089.svg" },
    { caption: "Evidencia p089 imagen 5", src: "assets/svg/evidence/imagen-5-evidencia-p089.svg" },
    { caption: "Evidencia p090 imagen 1", src: "assets/svg/evidence/imagen-1-evidencia-p090.svg" },
    { caption: "Evidencia p090 imagen 2", src: "assets/svg/evidence/imagen-2-evidencia-p090.svg" },
    { caption: "Evidencia p090 imagen 3", src: "assets/svg/evidence/imagen-3-evidencia-p090.svg" },
    { caption: "Evidencia p090 imagen 4", src: "assets/svg/evidence/imagen-4-evidencia-p090.svg" },
  ],
  "2025-11-21::Jornada registrada en bit\u00e1cora f\u00edsica": [
    { caption: "Evidencia p091 imagen 1", src: "assets/svg/evidence/imagen-1-evidencia-p091.svg" },
    { caption: "Evidencia p091 imagen 2", src: "assets/svg/evidence/imagen-2-evidencia-p091.svg" },
    { caption: "Evidencia p091 imagen 3", src: "assets/svg/evidence/imagen-3-evidencia-p091.svg" },
    { caption: "Evidencia p091 imagen 4", src: "assets/svg/evidence/imagen-4-evidencia-p091.svg" },
    { caption: "Evidencia p091 imagen 5", src: "assets/svg/evidence/imagen-5-evidencia-p091.svg" },
    { caption: "Evidencia p091 imagen 6", src: "assets/svg/evidence/imagen-6-evidencia-p091.svg" },
    { caption: "Evidencia p091 imagen 7", src: "assets/svg/evidence/imagen-7-evidencia-p091.svg" },
    { caption: "Evidencia p091 imagen 8", src: "assets/svg/evidence/imagen-8-evidencia-p091.svg" },
    { caption: "Evidencia p091 imagen 9", src: "assets/svg/evidence/imagen-9-evidencia-p091.svg" },
  ],
  "2025-11-24::Jornada registrada en bit\u00e1cora f\u00edsica": [
    { caption: "Evidencia p092 imagen 1", src: "assets/svg/evidence/imagen-1-evidencia-p092.svg" },
    { caption: "Evidencia p092 imagen 2", src: "assets/svg/evidence/imagen-2-evidencia-p092.svg" },
  ],
  "2025-12-01::Jornada registrada en bit\u00e1cora f\u00edsica": [
    { caption: "Evidencia p093 imagen 1", src: "assets/svg/evidence/imagen-1-evidencia-p093.svg" },
    { caption: "Evidencia p093 imagen 2", src: "assets/svg/evidence/imagen-2-evidencia-p093.svg" },
    { caption: "Evidencia p093 imagen 3", src: "assets/svg/evidence/imagen-3-evidencia-p093.svg" },
    { caption: "Evidencia p093 imagen 4", src: "assets/svg/evidence/imagen-4-evidencia-p093.svg" },
    { caption: "Evidencia p093 imagen 5", src: "assets/svg/evidence/imagen-5-evidencia-p093.svg" },
    { caption: "Evidencia p093 imagen 6", src: "assets/svg/evidence/imagen-6-evidencia-p093.svg" },
  ],
  "2025-12-03::Jornada registrada en bit\u00e1cora f\u00edsica": [
    { caption: "Evidencia p094 imagen 1", src: "assets/svg/evidence/imagen-1-evidencia-p094.svg" },
    { caption: "Evidencia p094 imagen 2", src: "assets/svg/evidence/imagen-2-evidencia-p094.svg" },
    { caption: "Evidencia p094 imagen 3", src: "assets/svg/evidence/imagen-3-evidencia-p094.svg" },
  ],
  "2025-12-11::Jornada registrada en bit\u00e1cora f\u00edsica": [
    { caption: "Evidencia p095 imagen 1", src: "assets/svg/evidence/imagen-1-evidencia-p095.svg" },
    { caption: "Evidencia p095 imagen 2", src: "assets/svg/evidence/imagen-2-evidencia-p095.svg" },
  ],
  "2026-01-09::Jornada registrada en bit\u00e1cora f\u00edsica": [
    { caption: "Evidencia p096 imagen 1", src: "assets/svg/evidence/imagen-1-evidencia-p096.svg" },
    { caption: "Evidencia p096 imagen 2", src: "assets/svg/evidence/imagen-2-evidencia-p096.svg" },
    { caption: "Evidencia p096 imagen 3", src: "assets/svg/evidence/imagen-3-evidencia-p096.svg" },
  ],
  "2026-01-12::Jornada registrada en bit\u00e1cora f\u00edsica": [
    { caption: "Evidencia p097 imagen 1", src: "assets/svg/evidence/imagen-1-evidencia-p097.svg" },
    { caption: "Evidencia p097 imagen 2", src: "assets/svg/evidence/imagen-2-evidencia-p097.svg" },
    { caption: "Evidencia p097 imagen 3", src: "assets/svg/evidence/imagen-3-evidencia-p097.svg" },
    { caption: "Evidencia p097 imagen 4", src: "assets/svg/evidence/imagen-4-evidencia-p097.svg" },
    { caption: "Evidencia p097 imagen 5", src: "assets/svg/evidence/imagen-5-evidencia-p097.svg" },
    { caption: "Evidencia p097 imagen 6", src: "assets/svg/evidence/imagen-6-evidencia-p097.svg" },
  ],
  "2026-01-13::Registro de orientaci\u00f3n izquierda y derecha": [
    { caption: "Evidencia p098 imagen 1", src: "assets/svg/evidence/imagen-1-evidencia-p098.svg" },
    { caption: "Evidencia p098 imagen 2", src: "assets/svg/evidence/imagen-2-evidencia-p098.svg" },
    { caption: "Evidencia p098 imagen 3", src: "assets/svg/evidence/imagen-3-evidencia-p098.svg" },
    { caption: "Evidencia p099 imagen 1", src: "assets/svg/evidence/imagen-1-evidencia-p099.svg" },
    { caption: "Evidencia p099 imagen 2", src: "assets/svg/evidence/imagen-2-evidencia-p099.svg" },
    { caption: "Evidencia p099 imagen 3", src: "assets/svg/evidence/imagen-3-evidencia-p099.svg" },
    { caption: "Evidencia p099 imagen 4", src: "assets/svg/evidence/imagen-4-evidencia-p099.svg" },
  ],
  "2026-01-14::Refuerzo de estructura": [
    { caption: "Evidencia p100 imagen 1", src: "assets/svg/evidence/imagen-1-evidencia-p100.svg" },
    { caption: "Evidencia p100 imagen 2", src: "assets/svg/evidence/imagen-2-evidencia-p100.svg" },
    { caption: "Evidencia p100 imagen 3", src: "assets/svg/evidence/imagen-3-evidencia-p100.svg" },
    { caption: "Evidencia p100 imagen 4", src: "assets/svg/evidence/imagen-4-evidencia-p100.svg" },
    { caption: "Evidencia p100 imagen 5", src: "assets/svg/evidence/imagen-5-evidencia-p100.svg" },
    { caption: "Evidencia p100 imagen 6", src: "assets/svg/evidence/imagen-6-evidencia-p100.svg" },
    { caption: "Evidencia p100 imagen 7", src: "assets/svg/evidence/imagen-7-evidencia-p100.svg" },
    { caption: "Evidencia p100 imagen 8", src: "assets/svg/evidence/imagen-8-evidencia-p100.svg" },
    { caption: "Evidencia p100 imagen 9", src: "assets/svg/evidence/imagen-9-evidencia-p100.svg" },
    { caption: "Evidencia p101 imagen 1", src: "assets/svg/evidence/imagen-1-evidencia-p101.svg" },
    { caption: "Evidencia p101 imagen 2", src: "assets/svg/evidence/imagen-2-evidencia-p101.svg" },
    { caption: "Evidencia p101 imagen 3", src: "assets/svg/evidence/imagen-3-evidencia-p101.svg" },
    { caption: "Evidencia p101 imagen 4", src: "assets/svg/evidence/imagen-4-evidencia-p101.svg" },
    { caption: "Evidencia p101 imagen 5", src: "assets/svg/evidence/imagen-5-evidencia-p101.svg" },
    { caption: "Evidencia p101 imagen 6", src: "assets/svg/evidence/imagen-6-evidencia-p101.svg" },
    { caption: "Evidencia p101 imagen 7", src: "assets/svg/evidence/imagen-7-evidencia-p101.svg" },
    { caption: "Evidencia p101 imagen 8", src: "assets/svg/evidence/imagen-8-evidencia-p101.svg" },
  ],
  "2026-01-19::Jornada registrada en bit\u00e1cora f\u00edsica": [
    { caption: "Evidencia p102 imagen 1", src: "assets/svg/evidence/imagen-1-evidencia-p102.svg" },
    { caption: "Evidencia p102 imagen 2", src: "assets/svg/evidence/imagen-2-evidencia-p102.svg" },
    { caption: "Evidencia p102 imagen 3", src: "assets/svg/evidence/imagen-3-evidencia-p102.svg" },
    { caption: "Evidencia p102 imagen 4", src: "assets/svg/evidence/imagen-4-evidencia-p102.svg" },
    { caption: "Evidencia p102 imagen 5", src: "assets/svg/evidence/imagen-5-evidencia-p102.svg" },
    { caption: "Evidencia p103 imagen 1", src: "assets/svg/evidence/imagen-1-evidencia-p103.svg" },
    { caption: "Evidencia p103 imagen 2", src: "assets/svg/evidence/imagen-2-evidencia-p103.svg" },
  ],
  "2026-01-22::Jornada registrada en bit\u00e1cora f\u00edsica": [
    { caption: "Evidencia p104 imagen 1", src: "assets/svg/evidence/imagen-1-evidencia-p104.svg" },
  ],
  "2026-01-23::Jornada registrada en bit\u00e1cora f\u00edsica": [
    { caption: "Evidencia p105 imagen 1", src: "assets/svg/evidence/imagen-1-evidencia-p105.svg" },
    { caption: "Evidencia p105 imagen 2", src: "assets/svg/evidence/imagen-2-evidencia-p105.svg" },
    { caption: "Evidencia p105 imagen 3", src: "assets/svg/evidence/imagen-3-evidencia-p105.svg" },
    { caption: "Evidencia p105 imagen 4", src: "assets/svg/evidence/imagen-4-evidencia-p105.svg" },
  ],
  "2026-01-26::Prueba del aut\u00f3nomo": [
    { caption: "Evidencia p106 imagen 1", src: "assets/svg/evidence/imagen-1-evidencia-p106.svg" },
    { caption: "Evidencia p106 imagen 2", src: "assets/svg/evidence/imagen-2-evidencia-p106.svg" },
    { caption: "Evidencia p106 imagen 3", src: "assets/svg/evidence/imagen-3-evidencia-p106.svg" },
    { caption: "Evidencia p106 imagen 4", src: "assets/svg/evidence/imagen-4-evidencia-p106.svg" },
  ],
};

export const entries: Entry[] = baseEntries.map((entry) => ({
  ...entry,
  evidence: evidenceByEntry[`${entry.dateISO}::${entry.title}`] ?? entry.evidence
}));

export const sectionSourceReferences = {
  initial: sourceInitial,
  september: sourceSept,
  october: sourceOct,
  november: sourceNov,
  december: sourceDec,
  january: sourceJan
} as const;
