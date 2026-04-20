import { useMemo, useState } from 'react';
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';

type EvidenceCarouselProps = {
  imageRefs?: string[];
  imageFile?: string;
  title: string;
};

const placeholderImage = `${import.meta.env.BASE_URL}assets/svg/evidence-placeholder.svg`;
const asAsset = (fileName: string) => `${import.meta.env.BASE_URL}assets/svg/${fileName}`;

const getEvidenceImage = (ref: string, fallback?: string) => {
  void ref;
  return fallback || placeholderImage;
};

export default function EvidenceCarousel({ imageRefs, imageFile, title }: EvidenceCarouselProps) {
  const slides = useMemo(() => {
    if (!imageRefs?.length) return [];
    const fallback = imageFile ? asAsset(imageFile) : undefined;
    return imageRefs.map((ref) => ({ ref, src: getEvidenceImage(ref, fallback) }));
  }, [imageFile, imageRefs]);

  const [current, setCurrent] = useState(0);

  if (!slides.length) return null;

  const hasMultiple = slides.length > 1;
  const currentSlide = slides[current] ?? slides[0];

  const goPrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const goNext = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 md:p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-xs font-bold uppercase tracking-widest text-red-300">Evidencias</p>
        <p className="text-xs text-zinc-400">
          Evidencia {current + 1} de {slides.length}
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
        <img
          src={currentSlide.src}
          alt={currentSlide.ref || `Evidencia visual: ${title}`}
          className="h-52 w-full object-cover md:h-72"
        />

        <div className="border-t border-white/10 bg-black/40 p-4">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400">
            <Camera className="h-4 w-4 text-red-300" />
            Referencia visual
          </p>
          <p className="mt-2 whitespace-pre-line text-sm leading-6 text-zinc-200">{currentSlide.ref}</p>
        </div>
      </div>

      {hasMultiple && (
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Evidencia anterior"
              className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-zinc-200 transition hover:bg-white/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Evidencia siguiente"
              className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-zinc-200 transition hover:bg-white/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={`${slide.ref}-${index}`}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Ir a evidencia ${index + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === current ? 'bg-red-400' : 'bg-zinc-600 hover:bg-zinc-400'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
