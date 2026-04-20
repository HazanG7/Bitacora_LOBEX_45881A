import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { evidenceAssets } from "../data/evidenceAssets";

type EvidenceCarouselProps = {
  imageRefs?: string[];
  imageFile?: string;
  title: string;
};

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const placeholder = asset("assets/svg/evidence-placeholder.svg");

function getEvidenceImage(ref: string, imageFile?: string) {
  const mapped = evidenceAssets[ref];

  if (mapped) {
    return asset(mapped);
  }

  if (imageFile) {
    if (imageFile.startsWith("http")) return imageFile;
    if (imageFile.startsWith("/")) return `${import.meta.env.BASE_URL}${imageFile.slice(1)}`;
    return asset(imageFile);
  }

  return placeholder;
}

export default function EvidenceCarousel({
  imageRefs,
  imageFile,
  title,
}: EvidenceCarouselProps) {
  const slides = useMemo(() => {
    if (!imageRefs || imageRefs.length === 0) return [];

    return imageRefs.map((ref) => ({
      ref,
      src: getEvidenceImage(ref, imageFile),
    }));
  }, [imageRefs, imageFile]);

  const [current, setCurrent] = useState(0);

  if (slides.length === 0) return null;

  const total = slides.length;
  const active = slides[current];

  const goPrev = () => {
    setCurrent((value) => (value === 0 ? total - 1 : value - 1));
  };

  const goNext = () => {
    setCurrent((value) => (value === total - 1 ? 0 : value + 1));
  };

  return (
    <section className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-black/25">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <ImageIcon className="h-4 w-4 text-red-300" />
          <p className="text-sm font-bold text-white">Evidencias de bitácora</p>
        </div>
        <p className="text-xs text-zinc-400">
          Evidencia {current + 1} de {total}
        </p>
      </div>

      <div className="relative">
        <img
          src={active.src}
          alt={`${title}: ${active.ref}`}
          className="h-64 w-full bg-[#080A0F] object-contain p-2 md:h-[420px]"
          loading="lazy"
        />

        {total > 1 && (
          <>
            <button
              type="button"
              aria-label="Evidencia anterior"
              onClick={goPrev}
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white backdrop-blur transition hover:bg-red-600"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              aria-label="Evidencia siguiente"
              onClick={goNext}
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white backdrop-blur transition hover:bg-red-600"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      <div className="border-t border-white/10 p-4">
        <p className="text-sm leading-6 text-zinc-200">{active.ref}</p>

        {total > 1 && (
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={`${slide.ref}-${index}`}
                type="button"
                aria-label={`Ir a evidencia ${index + 1}`}
                onClick={() => setCurrent(index)}
                className={`h-2.5 rounded-full transition ${
                  index === current
                    ? "w-8 bg-red-500"
                    : "w-2.5 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
