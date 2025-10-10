import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col gap-[22px]">
      <div className="flex justify-between items-center gap-4">
        <h3 className="text-black font-helvetica text-xl sm:text-2xl font-normal">
          {question}
        </h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex-shrink-0 w-[46px] h-[46px] rounded-full bg-black/10 hover:bg-black/20 transition-colors flex items-center justify-center"
          aria-label={isExpanded ? "Collapse answer" : "Expand answer"}
          aria-expanded={isExpanded}
        >
          {isExpanded ? (
            <svg
              className="w-[11.96px] h-[1.725px]"
              viewBox="0 0 12 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.521729 1H11.5217"
                stroke="black"
                strokeWidth="1.725"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              className="w-[11.96px] h-[11.96px]"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.02173 11.25V0.75M0.521729 5.75H11.5217"
                stroke="black"
                strokeWidth="1.725"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>
      {isExpanded && (
        <div className="text-[#666] font-helvetica text-base sm:text-lg leading-relaxed pr-12 sm:pr-16 animate-in fade-in slide-in-from-top-2 duration-200">
          {answer}
        </div>
      )}
      <div className="w-full h-px bg-[#E1E1E1]" />
    </div>
  );
}
