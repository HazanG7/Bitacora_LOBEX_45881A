export type InfoSection = {
  id: string;
  title: string;
  content: string[];
};

export const coverInfo = {
  institution: 'Colegio de Estudios Científicos y Tecnológicos de Michoacán',
  campus: 'Plantel 17 Ciudad Hidalgo',
  prototype: 'Prototipo VEX Robotics 2025-2026',
  challenge: 'PUSH BACK',
  teamName: 'LOBEX',
  teamNumber: '45881A',
  season: 'VEX Robotics 2025–2026',
  startDate: '08 de septiembre del 2025'
};

export const sections: InfoSection[] = [
  {
    id: 'portada',
    title: 'Portada del proyecto',
    content: [
      'Colegio de Estudios Científicos y Tecnológicos de Michoacán.',
      'Plantel 17 Ciudad Hidalgo.',
      'Prototipo VEX Robotics 2025-2026 · PUSH BACK.',
      'Team name: LOBEX.',
      'Team number: 45881A.',
      'Season: VEX Robotics 2025–2026.',
      'Start date: 08 de septiembre del 2025.'
    ]
  },
  {
    id: 'impacto',
    title: 'Impacto LOBEX',
    content: [
      'Participar en VEX V5 representa un proceso de aprendizaje que deja huella en la formación académica y personal de todos los estudiantes. El impacto se refleja tanto en el desarrollo de habilidades técnicas como en el crecimiento de valores humanos que son fundamentales para enfrentar los retos del presente y del futuro.',
      'En primer lugar, la competencia impulsa a los estudiantes a interesarse más por las áreas de ciencia, matemáticas, tecnología e ingeniería. Al tener que diseñar, programar y mejorar un robot, los conocimientos que normalmente se aprenden en clase encuentran un uso práctico y emocionante. Este enfoque hace que los estudiantes comprendan mejor los conceptos y descubran nuevas formas de aplicarlos.',
      'De igual manera, el trabajo en equipo se convierte en uno de los aprendizajes más valiosos. Cada miembro tiene un rol importante dentro del grupo y, al colaborar, se aprende a escuchar, a respetar las ideas de los demás y a encontrar soluciones en conjunto. La experiencia también enseña a comunicarse con claridad y a organizar tareas, lo cual resulta útil no solo en la competencia, sino en cualquier ámbito de la vida.',
      'Otro impacto fundamental es el desarrollo de la perseverancia. Durante el proceso, los errores y fallas son inevitables. Sin embargo, cada intento fallido se convierte en una oportunidad para mejorar y avanzar. Los estudiantes descubren que equivocarse no significa fracasar, sino aprender, y esta mentalidad los fortalece para enfrentar cualquier reto con mayor confianza.',
      'Además, VEX V5 fomenta la creatividad. Los estudiantes no solo siguen instrucciones, sino que imaginan, prueban y construyen soluciones propias. Esa capacidad de innovar es la que les permitirá aportar ideas que marquen la diferencia en la escuela, en su comunidad y en su vida profesional.',
      'Todo esto les da confianza en sí mismos y los prepara para alcanzar metas académicas y personales, convirtiendo la competencia en una etapa de aprendizaje que va mucho más allá de la robótica.'
    ]
  },
  {
    id: 'objetivos-equipo',
    title: 'Objetivos del equipo',
    content: [
      'Objetivos de desempeño: clasificar a competencias nacionales e internacionales; mantener un robot competitivo durante la temporada con actualizaciones constantes; obtener reconocimientos como Innovación y Excelencia en Ingeniería.',
      'Objetivos estratégicos: desarrollar estrategias de juego avanzadas para distintos rivales; establecer alianzas sólidas con equipos de alto nivel; optimizar tiempos de construcción, ajuste y mantenimiento durante torneos.',
      'Objetivos de proyección: representar con excelencia a la institución; contribuir al desarrollo de la comunidad educativa promoviendo ciencia y tecnología; alcanzar la clasificación al VEX Robotics World Championship.'
    ]
  },
  {
    id: 'presentacion-equipo',
    title: 'Presentación del equipo LOBEX',
    content: [
      'Hola, nosotros somos el equipo de LOBEX del CECyTEM 17, esta es nuestra primera temporada participando en VEX, somos alumnos de último año de preparatoria: Emmanuel, Juan Diego, Kristofer, Estefanía, Alexis, David Rafael, Cristian, Roberto, Joshua, Ángel Rogelio y Francisco Javier.',
      'Somos un equipo grande, ya que quienes competirán serán seleccionados durante el desarrollo del proyecto de acuerdo con nuestro desempeño y relación con los demás. La selección se hará de acuerdo con la evaluación de nuestro asesor, Ing. Hazán Misael García Vílchez.',
      'Debido a que estudiamos carreras técnicas en Mecatrónica y Robótica, tenemos experiencia en programación, reportes de laboratorio, que son similares a una bitácora, también en diseño y en manejo. Sin embargo, la parte de construcción es algo nuevo para nosotros, ya que construir con material VEX es diferente a lo que habíamos trabajado anteriormente.'
    ]
  },
  {
    id: 'objetivos-proyecto',
    title: 'Objetivos del proyecto',
    content: [
      'Desarrollar, construir, documentar y presentar un robot competitivo para el reto PUSH BACK de VEX Robotics de la temporada 2025-2026, integrando conocimientos de diseño, mecánica, robótica, programación y trabajo en equipo, con el fin de participar exitosamente en torneos regionales, estatales y clasificatorios.',
      'Objetivos específicos: diseñar un robot funcional para PUSH BACK; optimizar desempeño mediante iteraciones; desarrollar un control intuitivo para el piloto; implementar un programa autónomo estable y eficiente; documentar formalmente cada etapa del proyecto.'
    ]
  },
  {
    id: 'alcance',
    title: 'Alcance del proyecto',
    content: [
      'Armado del prototipo guiado VEX como base de aprendizaje.',
      'Diseño y construcción de un robot propio.',
      'Desarrollo de mecanismos de elevación, recolección y anotación.',
      'Uso de herramientas de diseño CAD, como Autodesk Inventor.',
      'Pruebas, evaluación y mejora del sistema.',
      'Participación en el regional del 08 de octubre del 2025 en Lagunillas, Michoacán.',
      'Participación en el Torneo de preparación en el CEMSaD 04 Agostitlán.',
      'Participación en el Torneo Estatal inter CECyTE Michoacán del 13 y 14 de noviembre del 2025.',
      'Participación en el Campeonato Nacional de Robótica del 4, 5 y 6 de febrero del 2026.',
      'Documentación completa de todo el proceso y resultados.'
    ]
  },
  {
    id: 'metodologia',
    title: 'Metodología de trabajo',
    content: [
      'Se empleó un ciclo iterativo de análisis, diseño, construcción, prueba y mejora.',
      '1. Análisis del reto: revisión de reglas, puntuación y dimensionalidad.',
      '2. Desarrollo de prototipo inicial: armado del robot guiado VEX.',
      '3. Iteración de diseño: modificaciones basadas en pruebas físicas.',
      '4. Diseño CAD: modelado en Autodesk Inventor del robot.',
      '5. Construcción: ensamble físico basado en CAD y prototipos.',
      '6. Programación: adaptación del control, pruebas del piloto y desarrollo del autónomo.',
      '7. Evaluación: participación en torneos y análisis de desempeño.',
      '8. Mejoras: ajustes mecánicos y de programación posteriores a cada torneo.'
    ]
  }
];
