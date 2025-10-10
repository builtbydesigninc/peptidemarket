import { Carousel } from "./Carousel";

interface SlideData {
  title: string;
  image: string;
  bullets: string[];
}

interface BenefitShowcaseProps {
  title: string;
  ghostTitle?: string;
  wrapperClassName?: string; // background and padding wrapper
  color?: "teal" | "emerald" | "slate" | "black" | "cream";
  cta: {
    title: string;
    image: string;
    buttonLabel: string;
  };
  slides: SlideData[];
  tags: string[];
  testimonial: {
    text: string;
    author: string;
    image: string; // background image
  };
}

export function BenefitShowcase({
  title,
  ghostTitle,
  wrapperClassName,
  color = "teal",
  cta,
  slides,
  tags,
  testimonial,
}: BenefitShowcaseProps) {
  const Slide = ({ data }: { data: SlideData }) => (
    <div className="bg-white/5 rounded-[22px] p-5 flex flex-col items-center h-full border border-white/10 backdrop-blur-sm">
      <h3 className="text-white font-helvetica text-xl sm:text-2xl mb-6">{data.title}</h3>
      <img src={data.image} alt={data.title} className="w-32 h-32 object-contain mb-6" />
      <div className="space-y-2 w-full">
        {data.bullets.map((b, i) => (
          <div key={i} className="flex items-center gap-2">
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 18 18" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M8.97425 17.5401C10.0664 17.5401 11.1479 17.3249 12.1569 16.907C13.166 16.489 14.0828 15.8764 14.8551 15.1041C15.6274 14.3318 16.24 13.415 16.658 12.406C17.0759 11.3969 17.291 10.3155 17.291 9.22328C17.291 8.1311 17.0759 7.04962 16.658 6.04058C16.24 5.03154 15.6274 4.11471 14.8551 3.34242C14.0828 2.57014 13.166 1.95753 12.1569 1.53957C11.1479 1.12161 10.0664 0.906494 8.97425 0.906494C6.7685 0.906494 4.6531 1.78272 3.0934 3.34242C1.5337 4.90212 0.657471 7.01753 0.657471 9.22328C0.657471 11.429 1.5337 13.5444 3.0934 15.1041C4.6531 16.6638 6.7685 17.5401 8.97425 17.5401ZM8.75986 12.587L13.3803 7.04243L11.9609 5.8596L7.98733 10.627L5.93123 8.56995L4.62458 9.87661L7.39684 12.6489L8.11208 13.3641L8.75986 12.587Z" fill="#FFFD6C"/></svg>
            <span className="text-white font-helvetica text-[13px]">{b}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const carouselSlides = slides.map((s, i) => <Slide key={i} data={s} />);

  const theme = {
    teal: {
      wrapper: "bg-[#77A9A3]",
      panel: "bg-white/10 border-white/15",
      ctaBtn: "bg-white/20 hover:bg-white/30 text-white",
    },
    emerald: {
      wrapper: "bg-[#199F65]",
      panel: "bg-white/10 border-white/15",
      ctaBtn: "bg-white/20 hover:bg-white/30 text-white",
    },
    slate: {
      wrapper: "bg-[#1F2937]",
      panel: "bg-white/10 border-white/15",
      ctaBtn: "bg-white/20 hover:bg-white/30 text-white",
    },
    black: {
      wrapper: "bg-[#111111]",
      panel: "bg-white/10 border-white/15",
      ctaBtn: "bg-white/20 hover:bg-white/30 text-white",
    },
    cream: {
      wrapper: "bg-[#F9F7F1]",
      panel: "bg-white border-[#EAEAEA]",
      ctaBtn: "bg-black text-white hover:bg-black/90",
    },
  }[color];

  return (
    <div className={
      `rounded-[22px] p-8 sm:p-10 md:p-12 lg:p-16 relative overflow-hidden ${theme.wrapper} ` +
      (wrapperClassName || "")
    }>
      {/* Header */}
      <div className="mb-8 sm:mb-12">
        <h2 className="text-white font-helvetica text-4xl sm:text-5xl md:text-[52px] leading-tight whitespace-pre-line">{title}</h2>
        {ghostTitle ? (
          <div className="mt-2 sm:mt-3 text-white/10 font-helvetica text-5xl sm:text-6xl md:text-[79px] font-bold leading-tight">
            {ghostTitle}
          </div>
        ) : null}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
        {/* CTA Card */}
        <div className={`lg:col-span-4 ${theme.panel} rounded-[22px] p-6 flex flex-col items-center justify-between min-h-[332px] backdrop-blur-sm relative overflow-hidden`}>
          <div className="pointer-events-none absolute inset-0 rounded-[22px] bg-gradient-to-br from-white/5 to-transparent" aria-hidden="true" />
          <div className="flex flex-col items-center gap-10 flex-1 justify-center">
            <h3 className="text-white font-helvetica text-lg text-center">{cta.title}</h3>
            <img src={cta.image} alt={cta.title} className="w-40 h-40 object-contain" />
          </div>
          <button className={`${theme.ctaBtn} transition-colors font-helvetica text-base px-6 py-2 rounded-[22px]`}>
            {cta.buttonLabel}
          </button>
        </div>

        {/* Carousel */}
        <div className={`lg:col-span-4 ${theme.panel} rounded-[22px] p-4 sm:p-6 relative backdrop-blur-sm`}>
          <Carousel slides={carouselSlides} className="" verticalDots />
          <div className="pointer-events-none absolute inset-0 rounded-[22px] bg-gradient-to-b from-white/5 to-transparent mix-blend-overlay" aria-hidden="true" />
        </div>

        {/* Checklist Panel */}
        <div className={`lg:col-span-4 ${theme.panel} rounded-[22px] p-6 flex flex-col justify-between min-h-[332px] relative overflow-hidden`}>
          <div>
            <h3 className="text-white font-helvetica text-xl sm:text-2xl mb-4">Your plan</h3>
            <ul className="space-y-3">
              {[
                "Build strength, energy, and libido",
                "Personalized dosing by clinicians",
                "Lab monitoring and optimizations",
                "Discrete shipping and support",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/90">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-emerald-400" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  <span className="text-sm sm:text-base font-helvetica">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <button className={`${theme.ctaBtn} mt-6 w-full transition-colors font-helvetica text-base px-6 py-3 rounded-[12px]`}>Start your plan</button>
          <div className="pointer-events-none absolute inset-0 rounded-[22px] bg-gradient-to-tr from-white/5 to-transparent" aria-hidden="true" />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Testimonial */}
        <div className="lg:col-span-4 relative rounded-[22px] overflow-hidden min-h-[211px] flex items-center justify-center p-6 sm:p-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_30px_rgba(0,0,0,0.35)]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${testimonial.image}')` }} />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 flex flex-col items-center gap-4 text-center">
            <p className="text-white font-helvetica text-[13px] leading-relaxed">“{testimonial.text}”</p>
            <p className="text-[#B9B9B9] font-helvetica text-[13px]">{testimonial.author}</p>
          </div>
        </div>

        {/* Tags */}
        <div className={`lg:col-span-8 ${theme.panel} rounded-[22px] p-4 sm:p-5 min-h-[84px] flex flex-wrap items-center gap-2 sm:gap-3 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_30px_rgba(0,0,0,0.35)]`}>
          {tags.map((tag) => (
            <div key={tag} className="bg-white/10 hover:bg-white/20 transition-colors rounded-[22px] px-4 py-2">
              <span className="text-white font-helvetica text-sm sm:text-[15px]">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
