import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  CalendarDays,
  ChevronRight,
  Code2,
  HandCoins,
  Image as ImageIcon,
  Layers3,
  NotebookPen,
  Rocket,
  Search,
  ShieldCheck,
  Target,
  Trophy,
  Users,
  Wrench
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { entries } from './data/entries';
import { coverInfo, sections } from './data/sections';

const asset = (fileName: string) => `${import.meta.env.BASE_URL}assets/svg/${fileName}`;

const notebookImages = {
  cecytemLogo: asset('cecytemLogo.svg'),
  lobexLogo: asset('lobexLogo.svg'),
  vexLogo: asset('vexLogo.svg'),
  robotLogo: asset('robotLogo.svg'),
  teamPhoto: asset('teamPhoto.svg')
} as const;

const stats = [
  { label: 'Temporada', value: coverInfo.season, icon: Rocket },
  { label: 'Equipo', value: coverInfo.teamNumber, icon: Users },
  { label: 'Entradas', value: entries.length, icon: NotebookPen },
  { label: 'Etapas', value: new Set(entries.map((entry) => entry.stage)).size, icon: Layers3 }
];

const stages = ['Todos', ...Array.from(new Set(entries.map((entry) => entry.stage)))];

const tagIcons: Record<string, LucideIcon> = {
  Análisis: Target,
  Construcción: Wrench,
  Programación: Code2,
  Torneo: Trophy,
  Gestión: HandCoins,
  Mejora: Layers3,
  Preparación: Users,
  'Evidencia visual': ImageIcon,
  'Diseño CAD': Layers3,
  Diseño: Layers3,
  Pruebas: ShieldCheck,
  Autónomo: Code2
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

function SectionTitle({ eyebrow, title, children }: { eyebrow: string; title: string; children?: string }) {
  return (
    <div className="mx-auto max-w-5xl text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-red-400">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">{title}</h2>
      {children && <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-zinc-300">{children}</p>}
    </div>
  );
}

function EvidenceImage({ imageFile, title }: { imageFile?: string; title: string }) {
  if (!imageFile) return null;
  return (
    <div className="mb-6 overflow-hidden rounded-3xl border border-white/10 bg-black/30">
      <img
        src={asset(imageFile)}
        alt={`Evidencia visual: ${title}`}
        className="h-56 w-full object-cover transition duration-500 hover:scale-[1.02] md:h-72"
      />
      <div className="flex items-center gap-2 border-t border-white/10 bg-black/30 px-4 py-3 text-xs text-zinc-400">
        <ImageIcon className="h-4 w-4 text-red-300" />
        Evidencia visual de la bitácora · {title}
      </div>
    </div>
  );
}

export default function LobexDigitalNotebook() {
  const [query, setQuery] = useState('');
  const [stage, setStage] = useState('Todos');

  const filteredEntries = useMemo(() => {
    const q = query.toLowerCase().trim();
    return entries.filter((entry) => {
      const matchesStage = stage === 'Todos' || entry.stage === stage;
      const blob = [
        entry.dateLabel,
        entry.place,
        entry.stage,
        entry.title,
        entry.objective,
        ...entry.activities,
        entry.technicalDevelopment,
        entry.observations,
        entry.results,
        entry.details,
        ...entry.imageRefs,
        ...entry.sourcePages
      ]
        .join(' ')
        .toLowerCase();
      return matchesStage && (!q || blob.includes(q));
    });
  }, [query, stage]);

  return (
    <main className="min-h-screen bg-[#080A0F] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.35),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(148,163,184,0.18),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-10 md:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_.8fr]">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 backdrop-blur">
                Digital Engineering Notebook · VEX V5RC PUSH BACK
              </div>
              <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">Bitácora Digital <span className="text-red-500">LOBEX</span></h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                Registro completo del proceso de ingeniería del equipo {coverInfo.teamNumber}.
              </p>
              <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-4">
                <img src={notebookImages.cecytemLogo} alt="CECyTEM" className="h-24 w-full rounded-2xl border border-white/10 bg-white/5 p-2 object-contain" />
                <img src={notebookImages.lobexLogo} alt="LOBEX" className="h-24 w-full rounded-2xl border border-white/10 bg-white/5 p-2 object-contain" />
                <img src={notebookImages.vexLogo} alt="VEX" className="h-24 w-full rounded-2xl border border-white/10 bg-white/5 p-2 object-contain" />
                <img src={notebookImages.robotLogo} alt="45881A" className="h-24 w-full rounded-2xl border border-white/10 bg-white/5 p-2 object-contain" />
              </div>
            </motion.div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/40 backdrop-blur">
              <img src={notebookImages.teamPhoto} alt="Equipo LOBEX" className="w-full rounded-2xl border border-white/10" />
            </div>
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

      <section id="secciones" className="mx-auto max-w-7xl px-5 py-20">
        <SectionTitle eyebrow="Contenido" title="Bitácora digital completa" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <article key={section.id} className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
              <h3 className="text-xl font-black">{section.title}</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
                {section.content.map((line, index) => (
                  <li key={`${section.id}-${index}`} className="leading-7">{line}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="bitacora" className="mx-auto max-w-7xl px-5 py-20">
        <SectionTitle eyebrow="Cronología" title="Bitácora interactiva por fecha">
          Incluye todas las jornadas documentadas de septiembre de 2025 a enero de 2026.
        </SectionTitle>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-[1fr_auto]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por fecha, etapa, título o contenido..."
              className="w-full rounded-2xl border border-white/10 bg-white/[0.055] py-4 pl-12 pr-4 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-red-500/60"
            />
          </div>
          <select value={stage} onChange={(e) => setStage(e.target.value)} className="rounded-2xl border border-white/10 bg-[#10131B] px-4 py-4 text-sm text-white outline-none focus:border-red-500/60">
            {stages.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="mt-10 grid gap-5">
          {filteredEntries.map((entry, index) => (
            <motion.article
              key={`${entry.dateISO}-${entry.title}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.35, delay: Math.min(index * 0.02, 0.2) }}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-xl shadow-black/20"
            >
              <div className="grid gap-0 lg:grid-cols-[280px_1fr]">
                <div className="border-b border-white/10 bg-gradient-to-br from-red-950/50 to-black/20 p-6 lg:border-b-0 lg:border-r">
                  <div className="mb-5 inline-flex rounded-full bg-red-600 px-3 py-1 text-xs font-black uppercase tracking-wider text-white">
                    {entry.stage}
                  </div>
                  <div className="space-y-3 text-sm text-zinc-300">
                    <p className="flex items-start gap-2"><CalendarDays className="mt-0.5 h-4 w-4 text-red-300" />{entry.dateLabel}</p>
                    <p className="flex items-start gap-2"><ImageIcon className="mt-0.5 h-4 w-4 text-red-300" />{entry.place}</p>
                    <p className="flex items-start gap-2"><ChevronRight className="mt-0.5 h-4 w-4 text-red-300" />{entry.time}</p>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <EvidenceImage imageFile={entry.imageFile} title={entry.title} />
                  <h3 className="text-2xl font-black text-white">{entry.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Tag>{entry.stage}</Tag>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="rounded-2xl bg-black/20 p-4">
                      <p className="mb-2 text-xs font-bold uppercase tracking-widest text-red-300">Objetivo</p>
                      <p className="text-sm leading-6 text-zinc-300">{entry.objective}</p>
                    </div>
                    <div className="rounded-2xl bg-black/20 p-4">
                      <p className="mb-2 text-xs font-bold uppercase tracking-widest text-red-300">Actividades</p>
                      <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-300">
                        {entry.activities.map((activity, activityIndex) => (
                          <li key={`${entry.dateISO}-activity-${activityIndex}`}>{activity}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-2xl bg-black/20 p-4">
                        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-red-300">Desarrollo técnico</p>
                        <p className="text-sm leading-6 text-zinc-300">{entry.technicalDevelopment}</p>
                      </div>
                      <div className="rounded-2xl bg-black/20 p-4">
                        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-red-300">Observaciones</p>
                        <p className="text-sm leading-6 text-zinc-300">{entry.observations}</p>
                      </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-2xl bg-black/20 p-4">
                        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-red-300">Resultados</p>
                        <p className="text-sm leading-6 text-zinc-300">{entry.results}</p>
                      </div>
                      <div className="rounded-2xl bg-black/20 p-4">
                        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-red-300">Detalles</p>
                        <p className="text-sm leading-6 text-zinc-300">{entry.details}</p>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-black/20 p-4">
                      <p className="mb-2 text-xs font-bold uppercase tracking-widest text-red-300">Referencias</p>
                      <p className="text-sm leading-6 text-zinc-300">
                        Imágenes: {entry.imageRefs.length ? entry.imageRefs.join(', ') : 'Sin referencia de imagen específica'}.
                      </p>
                      <p className="text-sm leading-6 text-zinc-300">Páginas fuente: {entry.sourcePages.join(', ')}.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
