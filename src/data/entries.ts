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
  | 'Ajustes';

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
