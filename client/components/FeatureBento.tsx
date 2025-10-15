interface BentoItem {
  title: string;
  description: string;
  image?: string;
}

interface FeatureBentoProps {
  items: BentoItem[];
  variant?: "light" | "dark";
}

export function FeatureBento({ items, variant = "light" }: FeatureBentoProps) {
  const isDark = variant === "dark";
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
      {items.map((it, i) => (
        <div
          key={i}
          className={
            "rounded-2xl p-5 sm:p-6 flex flex-col gap-4 overflow-hidden border " +
            (isDark
              ? "bg-[#0F0F0F] border-[#1F1F1F] shadow-[0_6px_30px_rgba(0,0,0,0.35)]"
              : "bg-white border-[#ECECEC] shadow-[0_6px_30px_rgba(0,0,0,0.06)]")
          }
        >
          <div>
            <h3
              className={
                (isDark ? "text-white" : "text-[#111]") +
                " font-helvetica text-base sm:text-lg md:text-xl mb-1"
              }
            >
              {it.title}
            </h3>
            <p
              className={
                (isDark ? "text-[#9CA3AF]" : "text-[#6B7280]") +
                " font-helvetica text-sm leading-relaxed"
              }
            >
              {it.description}
            </p>
          </div>
          <div
            className={
              "relative w-full aspect-[16/9] rounded-xl border overflow-hidden " +
              (isDark
                ? "bg-gradient-to-b from-[#121212] to-[#171717] border-[#1F1F1F]"
                : "bg-gradient-to-b from-[#F7F7F7] to-[#EFEFEF] border-[#EFEFEF]")
            }
          >
            {it.image ? (
              <img
                src={it.image}
                alt={it.title}
                className="absolute inset-0 w-full h-full object-contain opacity-90"
              />
            ) : (
              <div
                className={
                  "absolute inset-0 flex items-center justify-center font-helvetica text-xs " +
                  (isDark ? "text-[#6B7280]" : "text-[#BDBDBD]")
                }
              >
                Preview
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
          </div>
        </div>
      ))}
    </div>
  );
}
