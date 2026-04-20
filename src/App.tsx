import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  CalendarDays,
  ChevronRight,
  CircuitBoard,
  Code2,
  Cpu,
  Image as ImageIcon,
  Layers3,
  NotebookPen,
  Rocket,
  Search,
  Target,
  Trophy,
  Users,
  Wrench
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const asset = (fileName: string) => `${import.meta.env.BASE_URL}assets/svg/${fileName}`;

const notebookImages = {
  cecytemLogo: asset('cecytemLogo.svg'),
  lobexLogo: asset('lobexLogo.svg'),
  vexLogo: asset('vexLogo.svg'),
  robotLogo: asset('robotLogo.svg'),
  teamPhoto: asset('teamPhoto.svg'),
  methodology: asset('methodology.svg'),
  prototypeGuided: asset('prototypeGuided.svg'),
  fundraising: asset('fundraising.svg'),
  cadBlock: asset('cadBlock.svg'),
  designChange: asset('designChange.svg'),
  lagunillas: asset('lagunillas.svg'),
  improvements: asset('improvements.svg'),
  pneumatics: asset('pneumatics.svg'),
  agostitlan: asset('agostitlan.svg'),
  postAgostitlan: asset('postAgostitlan.svg'),
  rechargeTests: asset('rechargeTests.svg')
} as const;

type ImageKey = keyof typeof notebookImages;

type Entry = {
  date: string;
  imageKey?: ImageKey;
  place: string;
  time: string;
  stage: string;
  title: string;
  tags: string[];
  summary: string;
  evidence: string;
  result: string;
};

const entries: Entry[] = [
  {
    date: '08 septiembre 2025',
    imageKey: 'methodology',
    place: 'Laboratorio de Robótica',
    time: '12:30–14:10',
    stage: 'Análisis',
    title: 'Análisis inicial del reto PUSH BACK',
    tags: ['Análisis', 'Reglas', 'Estrategia'],
    summary:
      'Se revisó el video oficial del reto, las dimensiones del campo, el sistema de puntuación, las porterías, bloques, cargadores y zonas de estacionamiento.',
    evidence: 'Planos del campo, tabla de puntuación y requerimientos técnicos iniciales.',
    result: 'Comprensión general del reto y definición de los primeros requerimientos del robot.'
  },
  {
    date: '09 septiembre 2025',
    imageKey: 'prototypeGuided',
    place: 'Laboratorio de Robótica',
    time: '12:30–14:10',
    stage: 'Construcción',
    title: 'Desarmado del prototipo anterior y división de equipos',
    tags: ['Construcción', 'Organización', 'Prototipo guiado'],
    summary:
      'El equipo inició el desarmado del robot de la temporada anterior y se dividió en grupos para avanzar de forma paralela en el prototipo guiado.',
    evidence: 'Fotografías del robot desarmado y avances de armado por pasos.',
    result: 'Se identificó que el sistema de elevación anterior podía inspirar una posible solución para PUSH BACK.'
  },
  {
    date: '10 septiembre 2025',
    place: 'Laboratorio de Robótica',
    time: '12:30–14:10',
    stage: 'Construcción',
    title: 'Prototipo desarmado y solicitud de bloque oficial',
    tags: ['Construcción', 'Gestión', 'Prototipo guiado'],
    summary:
      'Se terminó de desarmar el prototipo anterior y se continuó el armado del prototipo guiado hasta el paso 36c.',
    evidence: 'Fotografías del prototipo desarmado y avances de los pasos 19, 25 y 36c.',
    result: 'Se detectó poco material disponible y algunas piezas dañadas, por lo que se planteó buscar apoyo externo.'
  },
  {
    date: '24 septiembre 2025',
    imageKey: 'prototypeGuided',
    place: 'Laboratorio de Robótica',
    time: '12:30–14:10',
    stage: 'Diseño CAD',
    title: 'Instalación de Inventor y avance del prototipo guiado',
    tags: ['CAD', 'Inventor', 'Construcción'],
    summary:
      'Los integrantes instalaron Autodesk Inventor para iniciar el desarrollo digital 3D del robot y continuar el armado del prototipo.',
    evidence: 'Capturas de instalación, imágenes de pasos de armado y documentación administrativa.',
    result: 'El equipo comenzó a integrar herramientas CAD al proceso de diseño y documentación.'
  },
  {
    date: '29 septiembre 2025',
    imageKey: 'fundraising',
    place: 'Laboratorio de Robótica / reuniones externas',
    time: '12:30–14:10',
    stage: 'Gestión',
    title: 'Reuniones con servidores públicos y avance del robot',
    tags: ['Gestión', 'Construcción', 'Recursos'],
    summary:
      'Se avanzó el prototipo guiado, se instaló VEXcode V5 y se realizaron reuniones con funcionarios para solicitar apoyo.',
    evidence: 'Fotografías de reuniones con autoridades y registro de apoyos recibidos.',
    result: 'Se obtuvo una respuesta favorable y recursos para continuar el desarrollo del proyecto.'
  },
  {
    date: '01 octubre 2025',
    imageKey: 'cadBlock',
    place: 'Laboratorio de Robótica',
    time: '12:30–14:10',
    stage: 'Diseño CAD',
    title: 'Modelado 3D del bloque y primeras pruebas de diseño',
    tags: ['CAD', 'SolidWorks', 'Inventor', 'Impresión 3D'],
    summary:
      'Se diseñó en 3D el bloque del reto con base en planos oficiales y se realizó impresión de piezas para pruebas.',
    evidence: 'Capturas de diseño del bloque, impresión 3D y pruebas de construcción del mecanismo.',
    result: 'Se detuvo temporalmente la construcción del mecanismo propuesto por falta de ejes suficientes.'
  },
  {
    date: '02 octubre 2025',
    imageKey: 'designChange',
    place: 'Laboratorio de Robótica',
    time: '12:30–15:30',
    stage: 'Iteración',
    title: 'Cambio de diseño y pruebas con bloque oficial',
    tags: ['Iteración', 'Pruebas', 'Mecanismo'],
    summary:
      'Se cambió la propuesta mecánica y se realizaron pruebas con elevación basada en Tank Tread.',
    evidence: 'Fotografías del nuevo diseño y pruebas del mecanismo de elevación.',
    result: 'Las pruebas del mecanismo de elevación fueron satisfactorias.'
  },
  {
    date: '08 octubre 2025',
    imageKey: 'lagunillas',
    place: 'CECyTEM 24 Lagunillas',
    time: '05:30–18:00',
    stage: 'Torneo',
    title: 'Regional de prueba en Lagunillas',
    tags: ['Torneo', 'Driver', 'Estrategia'],
    summary:
      'Se evaluó el desempeño de drivers y se observaron áreas de mejora en transmisión, autónomo y consumo de motores.',
    evidence: 'Fotografías del evento, resultados de matches y capturas del primer código autónomo.',
    result: 'Alexis fue designado como driver. El equipo obtuvo dos victorias en tres matches.'
  },
  {
    date: '13 octubre 2025',
    imageKey: 'improvements',
    place: 'Laboratorio de Robótica',
    time: '12:30–15:00',
    stage: 'Mejora',
    title: 'Mejoras posteriores al regional',
    tags: ['Mejora', 'Base', 'Motores', 'Diseño'],
    summary:
      'Se planteó nueva base cuadrada, ajustes de motores y rediseño de rodillos para aumentar estabilidad.',
    evidence: 'Fotografías de la nueva base y presentación del mecanismo de recolección/elevación.',
    result: 'Se buscó reducir sobrecalentamiento de motores y mejorar desempeño competitivo.'
  },
  {
    date: '15 octubre 2025',
    imageKey: 'pneumatics',
    place: 'Laboratorio de Robótica',
    time: '12:30–15:00',
    stage: 'Pruebas',
    title: 'Pruebas de base, estacionamiento y rodillo de ligas',
    tags: ['Pruebas', 'Driver', 'Rodillo', 'Neumática'],
    summary:
      'Se probó la base en pista, el estacionamiento y el comportamiento de la transmisión con cadena de prueba.',
    evidence: 'Fotografías de cadena, pruebas en pista, rodillo y guía neumática.',
    result: 'Se decidió utilizar neumática para recargas y corregir detalles del motor inferior del rodillo.'
  },
  {
    date: '21 octubre 2025',
    imageKey: 'agostitlan',
    place: 'CEMSaD 04 Agostitlán',
    time: '07:30–15:00',
    stage: 'Torneo',
    title: 'Torneo de prueba en Agostitlán',
    tags: ['Torneo', 'Pruebas', 'Resultados'],
    summary:
      'Participación en torneo de prueba con ajustes entre partidos y evaluación del robot en condiciones reales.',
    evidence: 'Fotografías de llegada, ajustes entre partidos, match y resultados.',
    result: 'Se obtuvieron resultados excelentes y nuevas observaciones para rediseño.'
  },
  {
    date: '22 octubre 2025',
    imageKey: 'postAgostitlan',
    place: 'Laboratorio de Robótica',
    time: 'No especificado',
    stage: 'Mejora',
    title: 'Análisis posterior al torneo de Agostitlán',
    tags: ['Mejora', 'Análisis', 'Materiales'],
    summary:
      'Se analizaron observaciones del torneo, se buscaron soluciones y se desarmó el robot para iterar.',
    evidence: 'Diseño contemplado para mejoras posteriores al torneo.',
    result: 'Se elaboró lista de materiales faltantes para continuar con la siguiente iteración.'
  },
  {
    date: '04 noviembre 2025',
    imageKey: 'rechargeTests',
    place: 'Laboratorio de Robótica',
    time: '12:30–15:00',
    stage: 'Pruebas',
    title: 'Pruebas del mecanismo para sacar bloques del tubo de recargas',
    tags: ['Pruebas', 'Recarga', 'Mecanismo'],
    summary:
      'Pruebas del mecanismo de extracción de bloques, primero fuera y luego integrado en el robot.',
    evidence: 'Fotografías de pruebas sin instalar e imágenes del mecanismo montado.',
    result: 'Se obtuvo información para ajustar el sistema de recarga antes de integración definitiva.'
  }
];

const stats = [
  { label: 'Temporada', value: '2025–2026', icon: Rocket },
  { label: 'Equipo', value: '45881A', icon: Users },
  { label: 'Entradas demo', value: entries.length, icon: NotebookPen },
  { label: 'Etapas', value: '12', icon: Layers3 }
];

const stages = [
  'Todos',
  'Análisis',
  'Construcción',
  'Diseño CAD',
  'Organización',
  'Diseño',
  'Iteración',
  'Torneo',
  'Robot 2.0',
  'Pruebas',
  'Preparación',
  'Gestión',
  'Mejora'
];

const galleryItems = [
  {
    title: 'Análisis del reto PUSH BACK',
    stage: 'Análisis',
    description: 'Estudio del campo, porterías, bloques, cargadores y reglas clave.',
    details: 'Video oficial, planos del campo, tabla de puntuación y requerimientos técnicos iniciales.',
    icon: Target
  },
  {
    title: 'Prototipo guiado',
    stage: 'Construcción',
    description: 'Proceso de armado para comprender estructura VEX V5, transmisión y elevación.',
    details: 'Avances por pasos, fotografías de armado y análisis de mecanismos.',
    icon: Wrench
  },
  {
    title: 'Diseño CAD y modelado 3D',
    stage: 'Diseño CAD',
    description: 'Uso de Inventor y SolidWorks para visualizar mecanismos antes de construir.',
    details: 'Modelos 3D, ensamble digital, diseño del bloque e impresión 3D.',
    icon: Cpu
  },
  {
    title: 'Programación y autónomo',
    stage: 'Programación',
    description: 'Desarrollo de control driver y rutinas autónomas con giroscopio.',
    details: 'Capturas de código, calibración de sensor y movimientos programados.',
    icon: Code2
  },
  {
    title: 'Torneos de prueba',
    stage: 'Torneo',
    description: 'Participaciones en Lagunillas y Agostitlán para validar robot y estrategia.',
    details: 'Fotos de matches, ajustes entre partidos, resultados y observaciones.',
    icon: Trophy
  },
  {
    title: 'Iteraciones del robot',
    stage: 'Robot 2.0',
    description: 'Cambios posteriores a pruebas: base, elevación, recarga y ajustes estructurales.',
    details: 'Comparación entre versiones, fallas detectadas y soluciones aplicadas.',
    icon: Layers3
  }
];

const finalGallery: Array<{ title: string; group: string; imageKey: ImageKey }> = [
  { title: 'Foto inicial del equipo', group: 'Equipo', imageKey: 'teamPhoto' },
  { title: 'Metodología de trabajo', group: 'Análisis', imageKey: 'methodology' },
  { title: 'Prototipo guiado VEX', group: 'Construcción', imageKey: 'prototypeGuided' },
  { title: 'Reuniones y gestión de apoyo', group: 'Gestión', imageKey: 'fundraising' },
  { title: 'Bloque modelado en 3D', group: 'Diseño CAD', imageKey: 'cadBlock' },
  { title: 'Cambio de diseño', group: 'Iteración', imageKey: 'designChange' },
  { title: 'Regional Lagunillas', group: 'Torneo', imageKey: 'lagunillas' },
  { title: 'Mejoras posteriores', group: 'Mejora', imageKey: 'improvements' },
  { title: 'Neumática y rodillos', group: 'Mecanismos', imageKey: 'pneumatics' },
  { title: 'Torneo Agostitlán', group: 'Torneo', imageKey: 'agostitlan' },
  { title: 'Análisis posterior a Agostitlán', group: 'Mejora', imageKey: 'postAgostitlan' },
  { title: 'Pruebas de recarga', group: 'Pruebas', imageKey: 'rechargeTests' }
];

const tagIcons: Record<string, LucideIcon> = {
  Análisis: Target,
  Construcción: Wrench,
  CAD: Cpu,
  Inventor: Cpu,
  Programación: Code2,
  Torneo: Trophy,
  Equipo: Users,
  Roles: Users,
  Diseño: CircuitBoard,
  Iteración: Layers3
};

function Tag({ children }: { children: string }) {
  const Icon = tagIcons[children] ?? ChevronRight;
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
      <Icon className="h-3 w-3" />
      {children}
    </span>
  );
}

function EvidenceImage({ imageKey, title }: { imageKey?: ImageKey; title: string }) {
  if (!imageKey) return null;
  return (
    <div className="mb-6 overflow-hidden rounded-3xl border border-white/10 bg-black/30">
      <img
        src={notebookImages[imageKey]}
        alt={`Evidencia visual: ${title}`}
        className="h-64 w-full object-cover transition duration-500 hover:scale-[1.02] md:h-80"
      />
      <div className="flex items-center gap-2 border-t border-white/10 bg-black/30 px-4 py-3 text-xs text-zinc-400">
        <ImageIcon className="h-4 w-4 text-red-300" />
        Evidencia visual de la bitácora física · {title}
      </div>
    </div>
  );
}

function LogoBadge({ imageKey, label }: { imageKey: ImageKey; label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.055] p-3 backdrop-blur">
      <img src={notebookImages[imageKey]} alt={label} className="h-12 w-12 rounded-xl bg-white p-1 object-contain" />
      <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">{label}</span>
    </div>
  );
}

function SectionTitle({ eyebrow, title, children }: { eyebrow: string; title: string; children?: string }) {
  return (
    <div className="mx-auto max-w-5xl text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-red-400">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">{title}</h2>
      {children && <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-zinc-300">{children}</p>}
    </div>
  );
}

const imageKeyByStage: Record<string, ImageKey> = {
  Análisis: 'methodology',
  Construcción: 'prototypeGuided',
  'Diseño CAD': 'cadBlock',
  Programación: 'lagunillas',
  Torneo: 'agostitlan',
  'Robot 2.0': 'improvements'
};

export default function LobexDigitalNotebook() {
  const [query, setQuery] = useState('');
  const [stage, setStage] = useState('Todos');

  const filteredEntries = useMemo(() => {
    const q = query.toLowerCase().trim();
    return entries.filter((entry) => {
      const matchesStage = stage === 'Todos' || entry.stage === stage;
      const blob = `${entry.date} ${entry.place} ${entry.stage} ${entry.title} ${entry.tags.join(' ')} ${entry.summary} ${entry.result}`.toLowerCase();
      return matchesStage && (!q || blob.includes(q));
    });
  }, [query, stage]);

  return (
    <main className="min-h-screen bg-[#080A0F] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.35),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(148,163,184,0.18),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-10 md:py-16">
          <nav className="mb-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-red-500/40 bg-red-500/10 shadow-lg shadow-red-500/10">
                <CircuitBoard className="h-6 w-6 text-red-300" />
              </div>
              <div>
                <p className="text-sm font-black tracking-[0.35em] text-white">LOBEX</p>
                <p className="text-xs text-zinc-400">CECyTEM 17 · Ciudad Hidalgo</p>
              </div>
            </div>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_.85fr]">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 backdrop-blur">
                Digital Engineering Notebook · VEX V5RC PUSH BACK
              </div>
              <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                Bitácora Digital <span className="text-red-500">LOBEX</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                Portafolio web del proceso de ingeniería del equipo 45881A.
              </p>
              <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-4">
                <LogoBadge imageKey="cecytemLogo" label="CECyTEM" />
                <LogoBadge imageKey="lobexLogo" label="LOBEX" />
                <LogoBadge imageKey="vexLogo" label="VEX" />
                <LogoBadge imageKey="robotLogo" label="45881A" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/40 backdrop-blur"
            >
              <div className="rounded-[1.5rem] border border-red-500/20 bg-black/30 p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={notebookImages.lobexLogo} alt="Logo LOBEX" className="h-14 w-14 rounded-2xl bg-white p-1 object-contain" />
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-red-300">Team profile</p>
                      <h3 className="mt-2 text-3xl font-black">45881A</h3>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-red-600/20 p-3 text-red-200">
                    <Trophy className="h-7 w-7" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur">
                  <Icon className="mb-3 h-6 w-6 text-red-300" />
                  <p className="text-3xl font-black">{item.value}</p>
                  <p className="text-sm text-zinc-400">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="bitacora" className="mx-auto max-w-7xl px-5 py-20">
        <SectionTitle eyebrow="Cronología" title="Bitácora interactiva">
          Entradas organizadas por fecha, etapa y evidencia.
        </SectionTitle>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-[1fr_auto]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por fecha, etapa, mecanismo, torneo..."
              className="w-full rounded-2xl border border-white/10 bg-white/[0.055] py-4 pl-12 pr-4 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-red-500/60"
            />
          </div>
          <select
            value={stage}
            onChange={(e) => setStage(e.target.value)}
            className="rounded-2xl border border-white/10 bg-[#10131B] px-4 py-4 text-sm text-white outline-none focus:border-red-500/60"
          >
            {stages.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="mt-10 grid gap-5">
          {filteredEntries.map((entry, index) => (
            <motion.article
              key={`${entry.date}-${entry.title}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.2) }}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-xl shadow-black/20"
            >
              <div className="grid gap-0 lg:grid-cols-[280px_1fr]">
                <div className="border-b border-white/10 bg-gradient-to-br from-red-950/50 to-black/20 p-6 lg:border-b-0 lg:border-r">
                  <div className="mb-5 inline-flex rounded-full bg-red-600 px-3 py-1 text-xs font-black uppercase tracking-wider text-white">
                    {entry.stage}
                  </div>
                  <div className="space-y-3 text-sm text-zinc-300">
                    <p className="flex items-start gap-2"><CalendarDays className="mt-0.5 h-4 w-4 text-red-300" />{entry.date}</p>
                    <p className="flex items-start gap-2"><ImageIcon className="mt-0.5 h-4 w-4 text-red-300" />{entry.place}</p>
                    <p className="flex items-start gap-2"><ChevronRight className="mt-0.5 h-4 w-4 text-red-300" />{entry.time}</p>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <EvidenceImage imageKey={entry.imageKey} title={entry.title} />
                  <h3 className="text-2xl font-black text-white">{entry.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {entry.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="galeria" className="border-t border-white/10 bg-white/[0.025] px-5 py-20">
        <SectionTitle eyebrow="Evidencias" title="Galería técnica por etapa" />
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => {
            const Icon = item.icon;
            const imageKey = imageKeyByStage[item.stage] ?? 'methodology';
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.35 }}
                className="group rounded-[2rem] border border-white/10 bg-[#0D1017] p-6 shadow-xl shadow-black/20"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600/15 text-red-200">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">{item.stage}</span>
                </div>
                <img src={notebookImages[imageKey]} alt={`Galería: ${item.title}`} className="h-40 w-full rounded-2xl border border-white/10 object-cover" />
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="galeria-final" className="border-t border-white/10 bg-[#080A0F] px-5 py-20">
        <SectionTitle eyebrow="Archivo visual" title="Galería final de evidencias" />
        <div className="mx-auto mt-10 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {finalGallery.map((item, index) => (
            <motion.figure
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.3, delay: Math.min(index * 0.025, 0.25) }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] shadow-xl shadow-black/20"
            >
              <img src={notebookImages[item.imageKey]} alt={item.title} className="h-52 w-full object-cover" />
              <figcaption className="border-t border-white/10 p-4">
                <span className="rounded-full bg-red-600/15 px-3 py-1 text-xs font-bold text-red-200">{item.group}</span>
                <h3 className="mt-3 text-base font-black text-white">{item.title}</h3>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <section id="robot" className="border-t border-white/10 bg-gradient-to-b from-white/[0.025] to-transparent px-5 py-20">
        <SectionTitle eyebrow="Evolución" title="Robot Evolution" />
        <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-3">
          {[
            ['Prototipo guiado', 'Base de aprendizaje para conocer el sistema VEX V5 y mecanismos iniciales.'],
            ['Diseño inicial', 'Rodillos de ligas, transmisión piñón-cadena y primeras pruebas para anotación.'],
            ['Diseño 2.0', 'Nueva estructura con variación de altura y mejoras posteriores a torneos.']
          ].map(([title, text]) => (
            <div key={title} className="rounded-[2rem] border border-white/10 bg-[#0D1017] p-6">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-red-600/15 text-red-200">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-zinc-300">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
