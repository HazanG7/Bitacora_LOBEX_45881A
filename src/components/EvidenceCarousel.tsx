import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { evidenceAssets, genericPageEvidence } from "../data/evidenceAssets";

type EvidenceCarouselProps = {
  imageRefs?: string[];
  imageFile?: string;
  title: string;
};

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;
const placeholder = asset("assets/svg/evidence-placeholder.svg");

function normalizeRef(ref: string) {
  return ref
    .trim()
    .replace(/\.$/, "")
    .replace(/\s+/g, " ")
    .toLowerCase();
}

function findEvidenceAsset(ref: string) {
  const cleanRef = normalizeRef(ref);

  const exactKey = Object.keys(evidenceAssets).find(
    (key) => normalizeRef(key) === cleanRef
  );
  if (exactKey) return evidenceAssets[exactKey];

  const startsWithKey = Object.keys(evidenceAssets).find((key) => {
    const cleanKey = normalizeRef(key);
    return cleanKey.startsWith(cleanRef) || cleanRef.startsWith(cleanKey);
  });
  if (startsWithKey) return evidenceAssets[startsWithKey];

  const numberMatch = cleanRef.match(/imagen\s+\d+(?:\.\d+)?/i)?.[0];
  if (numberMatch) {
    const numberKey = Object.keys(evidenceAssets).find((key) =>
      normalizeRef(key).startsWith(numberMatch)
    );
    if (numberKey) return evidenceAssets[numberKey];
  }

  const pageMatch = cleanRef.match(/p\d{3}/i)?.[0]?.toLowerCase();
  if (pageMatch && genericPageEvidence[pageMatch]) {
    return genericPageEvidence[pageMatch];
  }

  return undefined;
}

function getEvidenceImage(ref: string, imageFile?: string) {
  const mapped = findEvidenceAsset(ref);

  if (mapped) {
    if (mapped.startsWith("http")) return mapped;
    if (mapped.startsWith("/")) return `${import.meta.env.BASE_URL}${mapped.slice(1)}`;
    return asset(mapped);
  }

  if (imageFile) {
    if (imageFile.startsWith("http")) return imageFile;
    if (imageFile.startsWith("/")) return `${import.meta.env.BASE_URL}${imageFile.slice(1)}`;
    if (imageFile.startsWith("assets/")) return asset(imageFile);
    return asset(`assets/svg/${imageFile}`);
  }

  return placeholder;
}

export default function EvidenceCarousel({ imageRefs, imageFile, title }: EvidenceCarouselProps) {
  const slides = useMemo(() => {
    if (!imageRefs || imageRefs.length === 0) return [];

    return imageRefs.map((ref) => ({
      ref,
      src: getEvidenceImage(ref, imageFile)
    }));
  }, [imageFile, imageRefs]);

  const [index, setIndex] = useState(0);

  if (!slides.length) return null;

  const current = slides[index] ?? slides[0];
  const hasMany = slides.length > 1;

  const prev = () => setIndex((value) => (value - 1 + slides.length) % slides.length);
  const next = () => setIndex((value) => (value + 1) % slides.length);

  return (
    <section className="rounded-3xl border border-white/10 bg-black/25 p-4 md:p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-300">
          <ImageIcon className="h-4 w-4" />
          Evidencias
        </p>
        <p className="text-xs text-zinc-300">
          Evidencia {index + 1} de {slides.length}
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0A0D13]">
        <img
          src={current.src}
          alt={current.ref || `Evidencia visual: ${title}`}
          loading="lazy"
          className="h-56 w-full object-contain p-2 md:h-80"
        />
        <div className="border-t border-white/10 bg-black/40 px-4 py-3">
          <p className="whitespace-pre-line text-sm leading-6 text-zinc-200">{current.ref}</p>
        </div>
      </div>

      {hasMany && (
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Evidencia anterior"
              className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-xl border border-red-500/40 bg-black/50 text-zinc-200 transition hover:bg-red-500/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Evidencia siguiente"
              className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-xl border border-red-500/40 bg-black/50 text-zinc-200 transition hover:bg-red-500/20"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {slides.map((slide, dotIndex) => (
              <button
                key={`${slide.ref}-${dotIndex}`}
                type="button"
                onClick={() => setIndex(dotIndex)}
                aria-label={`Ir a evidencia ${dotIndex + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  dotIndex === index ? "bg-red-400" : "bg-zinc-600 hover:bg-zinc-400"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
