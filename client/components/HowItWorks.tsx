import { useState } from "react";

type Step = {
  title: string;
  description: string;
  image?: string;
};

interface HowItWorksProps {
  title?: string;
  subtitle?: string;
  steps: Step[];
}

export function HowItWorks({
  title = "We're with you every step of the way",
  subtitle,
  steps,
}: HowItWorksProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-[#808080] font-helvetica text-2xl sm:text-3xl md:text-[39px] mb-3 sm:mb-4 md:mb-6">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-[#808080] font-helvetica mb-8 sm:mb-10 md:mb-12">
          {subtitle}
        </p>
      ) : null}

      {/* Cards */}
      <div
        className="group grid grid-cols-1 md:flex gap-4 sm:gap-6"
        onMouseLeave={() => setActive(0)}
      >
        {steps.map((step, i) => {
          const isActive = i === active;
          return (
            <div
              key={i}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={
                "relative rounded-[22px] p-6 sm:p-8 overflow-hidden transition-all duration-300 focus:outline-none " +
                "bg-[#F9F7F1] md:min-h-[360px] " +
                (isActive
                  ? "md:flex-[1.6] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-[#EAEAEA] bg-white"
                  : "md:flex-1 border border-transparent opacity-90")
              }
              style={{ minWidth: 0 }}
              tabIndex={0}
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-4 sm:mb-6">
                <div className="flex-shrink-0 w-6 h-6 rounded border border-black/70 flex items-center justify-center text-sm text-black font-helvetica">
                  {i + 1}
                </div>
                <h3 className="text-black font-helvetica text-base sm:text-lg md:text-xl">
                  {step.title}
                </h3>
              </div>

              {/* Body */}
              <p className="text-[#333] font-helvetica text-sm sm:text-base leading-relaxed max-w-prose">
                {step.description}
              </p>

              {step.image ? (
                <div className="mt-6 md:mt-auto relative w-full aspect-[4/3] max-w-[360px]">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : null}

              {/* Active tint */}
              <div
                aria-hidden
                className={
                  "pointer-events-none absolute inset-0 rounded-[22px] transition-opacity " +
                  (isActive ? "opacity-100 bg-gradient-to-b from-[#EDEDED]/40 to-transparent" : "opacity-0")
                }
              />
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-6 sm:mt-8">
        <button className="bg-[#333] hover:bg-[#4a4a4a] transition-colors text-white font-helvetica text-sm sm:text-base px-6 sm:px-8 py-3 rounded-full">
          Get started
        </button>
      </div>
    </div>
  );
}
