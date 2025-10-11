import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface TestimonialsCarouselProps {
  testimonials: Array<{
    text: string;
    name: string;
    rating: number;
    image?: string;
  }>;
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    slidesToScroll: 1,
  });
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
    <div>
      {/* Carousel */}
      <div className="overflow-hidden mb-12 sm:mb-14 md:mb-16" ref={emblaRef}>
        <div className="flex -mx-2 sm:-mx-3 md:-mx-4">
          {testimonials.map((t, i) => (
            <div key={i} className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-2 sm:px-3 md:px-4">
              <div className="group relative overflow-hidden rounded-xl h-full min-h-[340px]">
                {/* Background portrait */}
                {t.image ? (
                  <img
                    src={t.image}
                    alt={t.name}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-300 filter grayscale group-hover:grayscale-0"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#272727]" />
                )}
                {/* Dark gradient for readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70 opacity-90" />

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-end h-full p-6 sm:p-7">
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, s) => (
                      <svg key={s} className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 25 25" fill="none">
                        <path d="M6.39742 21.6536L8.03322 14.5819L2.547 9.82553L9.79485 9.19637L12.6135 2.52734L15.4321 9.19637L22.6799 9.82553L17.1937 14.5819L18.8295 21.6536L12.6135 17.9039L6.39742 21.6536Z" fill="#EFD05C"/>
                      </svg>
                    ))}
                  </div>

                  {/* Floating name box */}
                  <div className="bg-white rounded-md shadow-md p-4 transition-transform duration-300 translate-y-2 group-hover:translate-y-0 max-w-[85%]">
                    <p className="text-[#111] font-helvetica text-base sm:text-lg font-semibold">{t.name}</p>
                    <p className="text-[#5A5A5A] font-helvetica text-sm sm:text-base line-clamp-2">{t.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={scrollPrev}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
        >
          <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 30 30" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.0802 15.184L17.1119 22.2157L18.4018 20.9258L12.6601 15.184L18.4018 9.4441L17.1119 8.15234L10.0802 15.184Z"
              fill="#272727"
            />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={scrollNext}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
        >
          <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 30 30" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.9198 15.184L12.8881 22.2157L11.5982 20.9258L17.3399 15.184L11.5982 9.4441L12.8881 8.15234L19.9198 15.184Z"
              fill="#272727"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default TestimonialsCarousel;
