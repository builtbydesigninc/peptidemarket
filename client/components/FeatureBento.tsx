interface BentoItem {
  title: string;
  description: string;
  image?: string;
}

interface FeatureBentoProps {
  items: BentoItem[];
}

export function FeatureBento({ items }: FeatureBentoProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
      {items.map((it, i) => (
        <div
          key={i}
          className="rounded-2xl bg-white border border-[#ECECEC] shadow-[0_6px_30px_rgba(0,0,0,0.06)] p-5 sm:p-6 flex flex-col gap-4 overflow-hidden"
        >
          <div>
            <h3 className="text-[#111] font-helvetica text-base sm:text-lg md:text-xl mb-1">
              {it.title}
            </h3>
            <p className="text-[#6B7280] font-helvetica text-sm leading-relaxed">
              {it.description}
            </p>
          </div>
          <div className="relative w-full aspect-[16/9] rounded-xl bg-gradient-to-b from-[#F7F7F7] to-[#EFEFEF] border border-[#EFEFEF] overflow-hidden">
            {it.image ? (
              <img
                src={it.image}
                alt={it.title}
                className="absolute inset-0 w-full h-full object-contain opacity-90"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-[#BDBDBD] font-helvetica text-xs">
                Preview
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.6),transparent_60%)]" />
          </div>
        </div>
      ))}
    </div>
  );
}
