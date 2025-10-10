import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  slides: React.ReactNode[];
  options?: EmblaOptionsType;
  className?: string;
  /** When true, shows a vertical dot indicator on the right side */
  verticalDots?: boolean;
}

export function Carousel({ slides, options, className, verticalDots = true }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", ...options });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);

  return (
    <div className={"relative " + (className || "")}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -mx-2 sm:-mx-3 md:-mx-4">
          {slides.map((slide, i) => (
            <div key={i} className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_50%] px-2 sm:px-3 md:px-4">
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        aria-label="Previous"
        onClick={scrollPrev}
        className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white absolute left-2 top-1/2 -translate-y-1/2"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={scrollNext}
        className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white absolute right-2 top-1/2 -translate-y-1/2"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      {verticalDots ? (
        <div className="hidden md:flex flex-col gap-3 absolute -right-10 md:-right-12 lg:-right-14 top-1/2 -translate-y-1/2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`w-3 h-3 rounded-full border border-white/60 ${
                i === selectedIndex ? "bg-white" : "bg-transparent"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Carousel;
