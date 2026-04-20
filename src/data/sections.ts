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
    id: 'impacto',
    title: 'Impacto LOBEX',
    content: [
      'Participar en VEX V5 representa un proceso de aprendizaje que deja huella en la formación académica y personal de los estudiantes. El impacto se refleja en habilidades técnicas y valores humanos para enfrentar retos presentes y futuros.',
      'La competencia impulsa interés por ciencia, matemáticas, tecnología e ingeniería. Diseñar, programar y mejorar un robot vuelve prácticos y significativos los conceptos vistos en clase.',
      'El trabajo en equipo es central: escuchar, respetar ideas, comunicar con claridad y organizar tareas. También se fortalece la perseverancia: cada falla se transforma en aprendizaje.',
      'VEX V5 también fomenta la creatividad e innovación. Esta experiencia fortalece la confianza y prepara al equipo para metas académicas y personales más allá de la robótica.'
    ]
  },
  {
    id: 'objetivos-equipo',
    title: 'Objetivos del equipo',
    content: [
      'Desempeño: clasificar a competencias nacionales e internacionales; mantener un robot competitivo con actualizaciones constantes; obtener reconocimientos como Innovación y Excelencia en Ingeniería.',
      'Estratégicos: desarrollar estrategias avanzadas adaptables; construir alianzas sólidas con equipos de alto nivel; optimizar tiempos de construcción, ajuste y mantenimiento durante eventos.',
      'Proyección: representar con excelencia al plantel; promover ciencia y tecnología en la comunidad; buscar clasificación al VEX Robotics World Championship.'
    ]
  },
  {
    id: 'presentacion-equipo',
    title: 'Presentación del equipo LOBEX',
    content: [
      'Equipo LOBEX del CECyTEM 17, primera temporada en VEX. Integrantes: Emmanuel, Juan Diego, Kristofer, Estefanía, Alexis, David Rafael, Cristian, Roberto, Joshua, Ángel Rogelio, Francisco Javier.',
      'Los competidores se seleccionan durante el proyecto según desempeño y trabajo en equipo, con evaluación del asesor ING. Hazan Misael García Vílchez.',
      'El equipo cuenta con experiencia en programación, diseño y documentación técnica por su formación en mecatrónica y robótica; la construcción VEX fue el reto más nuevo.'
    ]
  },
  {
    id: 'objetivos-proyecto',
    title: 'Objetivos del proyecto',
    content: [
      'Desarrollar, construir, documentar y presentar un robot competitivo para PUSH BACK 2025-2026, integrando diseño, mecánica, robótica, programación y trabajo en equipo.',
      'Objetivos específicos: diseñar robot funcional; optimizar desempeño mediante iteraciones; crear control intuitivo para piloto; implementar autónomo estable; documentar formalmente cada etapa.'
    ]
  },
  {
    id: 'alcance',
    title: 'Alcance del proyecto',
    content: [
      'Incluye prototipo guiado VEX, diseño y construcción de robot propio, mecanismos de elevación/recolección/anotación, uso de CAD (Inventor), pruebas y mejora continua.',
      'Incluye participación en regional Lagunillas (08/oct/2025), torneo de preparación en Agostitlán, estatal inter CECyTE Michoacán (13-14/nov/2025), nacional de robótica (4-6/feb/2026) y documentación completa del proceso.'
    ]
  },
  {
    id: 'metodologia',
    title: 'Metodología de trabajo',
    content: [
      'Ciclo iterativo: (1) análisis del reto, (2) prototipo inicial guiado, (3) iteración de diseño, (4) CAD en Inventor, (5) construcción física, (6) programación y piloto, (7) evaluación en torneos, (8) mejoras mecánicas y de software.'
    ]
  }
];
