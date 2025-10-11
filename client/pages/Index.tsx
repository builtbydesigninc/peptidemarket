import { ChevronRight } from "lucide-react";
import { Carousel } from "../components/Carousel";
import { TestimonialsCarousel } from "../components/TestimonialsCarousel";
import { FAQItem } from "../components/FAQItem";
import { BenefitShowcase } from "../components/BenefitShowcase";
import { HowItWorks } from "../components/HowItWorks";

export default function Index() {
  const trustBadges = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23 12L20.56 9.22001L20.9 5.54001L17.29 4.72001L15.4 1.54001L12 3.00001L8.6 1.54001L6.71 4.72001L3.1 5.53001L3.44 9.21001L1 12L3.44 14.78L3.1 18.47L6.71 19.29L8.6 22.47L12 21L15.4 22.46L17.29 19.28L20.9 18.46L20.56 14.78L23 12ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58001L18 9.00001L10 17Z"
            fill="#333333"
          />
        </svg>
      ),
      text: "Affordable Pricing with no hidden fees",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.25 5C17.587 5 14.992 4.057 12.45 2.15C12.3202 2.05263 12.1623 2 12 2C11.8377 2 11.6798 2.05263 11.55 2.15C9.008 4.057 6.413 5 3.75 5C3.55109 5 3.36032 5.07902 3.21967 5.21967C3.07902 5.36032 3 5.55109 3 5.75V11C3 16.001 5.958 19.676 11.725 21.948C11.9017 22.0176 12.0983 22.0176 12.275 21.948C18.042 19.676 21 16 21 11V5.75C21 5.55109 20.921 5.36032 20.7803 5.21967C20.6397 5.07902 20.4489 5 20.25 5ZM16.757 9.303L10.757 14.803C10.6145 14.9335 10.4271 15.004 10.2339 14.9997C10.0407 14.9954 9.8566 14.9167 9.72 14.78L7.22 12.28C7.14631 12.2113 7.08721 12.1285 7.04622 12.0365C7.00523 11.9445 6.98319 11.8452 6.98141 11.7445C6.97963 11.6438 6.99816 11.5438 7.03588 11.4504C7.0736 11.357 7.12974 11.2722 7.20096 11.201C7.27218 11.1297 7.35701 11.0736 7.4504 11.0359C7.54379 10.9982 7.64382 10.9796 7.74452 10.9814C7.84523 10.9832 7.94454 11.0052 8.03654 11.0462C8.12854 11.0872 8.21134 11.1463 8.28 11.22L10.273 13.212L15.743 8.197C15.8897 8.06253 16.0837 7.99184 16.2825 8.00047C16.4813 8.00909 16.6685 8.09634 16.803 8.243C16.9375 8.38966 17.0082 8.58374 16.9995 8.78253C16.9909 8.98132 16.9037 9.16854 16.757 9.303Z"
            fill="#333333"
          />
        </svg>
      ),
      text: "FDA-registered pharmacies",
    },
    {
      icon: (
        <svg
          className="w-5 h-5"
          viewBox="0 0 20 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.4751 5.48317C18.5029 5.46694 18.526 5.4437 18.542 5.41577C18.5581 5.38783 18.5665 5.35618 18.5665 5.32397C18.5665 5.29176 18.5581 5.26011 18.542 5.23217C18.526 5.20424 18.5029 5.181 18.4751 5.16476L11.4369 1.07566C10.9865 0.814623 10.4752 0.677155 9.9547 0.677155C9.43418 0.677155 8.92289 0.814623 8.47255 1.07566L1.43573 5.16476C1.4079 5.181 1.38482 5.20424 1.36878 5.23217C1.35273 5.26011 1.34429 5.29176 1.34429 5.32397C1.34429 5.35618 1.35273 5.38783 1.36878 5.41577C1.38482 5.4437 1.4079 5.46694 1.43573 5.48317L9.86277 10.4404C9.89112 10.4571 9.92342 10.4659 9.95632 10.4659C9.98921 10.4659 10.0215 10.4571 10.0499 10.4404L18.4751 5.48317ZM0.646843 6.737C0.618735 6.72077 0.586841 6.71225 0.554384 6.71231C0.521928 6.71236 0.490061 6.72098 0.462005 6.7373C0.43395 6.75362 0.410701 6.77705 0.394609 6.80524C0.378518 6.83343 0.370155 6.86536 0.370365 6.89782V14.9106C0.371061 15.2967 0.472832 15.676 0.665557 16.0106C0.858283 16.3452 1.13525 16.6235 1.4689 16.8178L8.94118 21.2982C8.96919 21.3143 9.00096 21.3229 9.03329 21.3229C9.06563 21.3229 9.0974 21.3144 9.12542 21.2982C9.15343 21.2821 9.1767 21.2588 9.19289 21.2308C9.20909 21.2028 9.21763 21.1711 9.21766 21.1387V11.8422C9.21763 11.8098 9.20909 11.7781 9.19292 11.7501C9.17674 11.7221 9.15349 11.6989 9.1255 11.6827L0.646843 6.737ZM10.6922 11.8744V21.1364C10.6922 21.1688 10.7008 21.2005 10.717 21.2285C10.7332 21.2565 10.7564 21.2798 10.7844 21.2959C10.8125 21.3121 10.8442 21.3206 10.8766 21.3206C10.9089 21.3206 10.9407 21.312 10.9687 21.2959L18.4405 16.8155C18.7739 16.6214 19.0508 16.3435 19.2435 16.0093C19.4363 15.6752 19.5384 15.2964 19.5395 14.9106V6.89782C19.5394 6.86552 19.5308 6.83382 19.5146 6.80589C19.4983 6.77796 19.4751 6.75478 19.4471 6.73868C19.4191 6.72258 19.3873 6.71412 19.355 6.71415C19.3227 6.71418 19.291 6.7227 19.263 6.73885L10.7844 11.7154C10.7564 11.7316 10.7332 11.7547 10.7171 11.7826C10.7009 11.8105 10.6923 11.8422 10.6922 11.8744Z"
            fill="#333333"
          />
        </svg>
      ),
      text: "Free and Discrete Shipping on All Prescriptions",
    },
    {
      icon: (
        <svg
          className="w-3 h-5"
          viewBox="0 0 13 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.370361 3.125C0.370361 1.676 1.54636 0.5 2.99536 0.5H9.74536C11.1944 0.5 12.3704 1.676 12.3704 3.125V18.875C12.3704 19.5712 12.0938 20.2389 11.6015 20.7312C11.1092 21.2234 10.4416 21.5 9.74536 21.5H2.99536C2.29917 21.5 1.63149 21.2234 1.13921 20.7312C0.646923 20.2389 0.370361 19.5712 0.370361 18.875V3.125ZM4.87036 17C4.67145 17 4.48068 17.079 4.34003 17.2197C4.19938 17.3603 4.12036 17.5511 4.12036 17.75C4.12036 17.9489 4.19938 18.1397 4.34003 18.2803C4.48068 18.421 4.67145 18.5 4.87036 18.5H7.87036C8.06927 18.5 8.26004 18.421 8.40069 18.2803C8.54134 18.1397 8.62036 17.9489 8.62036 17.75C8.62036 17.5511 8.54134 17.3603 8.40069 17.2197C8.26004 17.079 8.06927 17 7.87036 17H4.87036Z"
            fill="#333333"
          />
        </svg>
      ),
      text: "100% Online Process",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.5 4H16.5L15.17 2.67C14.89 2.39 14.5 2.22 14.09 2.22H9.91C9.5 2.22 9.11 2.39 8.83 2.67L7.5 4H3.5C2.67 4 2 4.67 2 5.5V19.5C2 20.33 2.67 21 3.5 21H20.5C21.33 21 22 20.33 22 19.5V5.5C22 4.67 21.33 4 20.5 4ZM12 18C9.24 18 7 15.76 7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 15.76 14.76 18 12 18ZM12 10C10.34 10 9 11.34 9 13C9 14.66 10.34 16 12 16C13.66 16 15 14.66 15 13C15 11.34 13.66 10 12 10Z" fill="#333333"/>
        </svg>
      ),
      text: "Private white label available",
    },
  ];

  const testosteroneCards = [
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/2ccd82d81a8d0ed082b1a57659b505fdfcae057a?width=253",
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/8e70cc51d231a522977a8d55c40f7a5276ae06ec?width=253",
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/575fa964e8603d7a08b139169d7d2b64597f1440?width=253",
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/e50612109e5c118efbdad3e1de5aecc53381b5dc?width=253",
    },
  ];

  const brandLogos = Array(5).fill("https://api.builder.io/api/v1/image/assets/TEMP/573f8a9a825e36f9f59ba4eedeca62ecaa3d9db8?width=390");

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Trust Banner */}
      <div className="bg-[#F9F7F0] px-6 sm:px-8 md:px-12 py-6 md:py-7 overflow-hidden">
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 mask-fade z-[1]" aria-hidden="true" />
          <div className="marquee flex items-center gap-6 sm:gap-8 md:gap-10 w-max [--duration:40s] hover:[animation-play-state:paused] motion-reduce:!animate-none">
            {trustBadges.map((badge, index) => (
              <div key={`a-${index}`} className="flex items-center gap-3 sm:gap-4">
                <div className="flex-shrink-0">{badge.icon}</div>
                <div className="text-[#333] font-inter text-sm sm:text-base">{badge.text}</div>
              </div>
            ))}
            {trustBadges.map((badge, index) => (
              <div key={`b-${index}`} className="flex items-center gap-3 sm:gap-4">
                <div className="flex-shrink-0">{badge.icon}</div>
                <div className="text-[#333] font-inter text-sm sm:text-base">{badge.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="px-6 sm:px-8 md:px-12 lg:px-28 pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl border border-[#EAEAEA] bg-gradient-to-b from-white to-[#F7F7F7] p-6 sm:p-8 md:p-10">
          {/* Brand Name */}
          <h3 className="text-[#333] font-serif text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">
            the peptide market
          </h3>

          {/* Main Content */}
          <div className="flex flex-col gap-12 lg:gap-16">
            {/* Hero Text */}
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[91px] font-helvetica leading-tight">
                <span className="bg-gradient-to-r from-[#1AAE6F] to-[#199F65] bg-clip-text text-transparent">Mental health</span>
                <br />
                <span className="text-[#1C1C1C]">personalized to you</span>
              </h1>
              <p className="text-[#6B7280] font-helvetica text-base sm:text-lg md:text-xl">
                Customized care starts here
              </p>
            </div>

            {/* Cards Grid */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {/* Large Cards - First Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full">
                {testosteroneCards.map((card, index) => (
                  <div
                    key={index}
                    className="rounded-xl p-5 flex flex-col gap-5 min-h-[182px] bg-white border border-[#EAEAEA] hover:shadow-sm transition-all hover:-translate-y-0.5"
                  >
                    <div className="flex justify-between items-center">
                      <div className="text-base sm:text-[17px] font-helvetica">
                        <span className="text-[#171716]">Boost</span>{" "}
                        <span className="text-[#199F65]">testosterone</span>
                      </div>
                      <ChevronRight className="w-4 h-4 flex-shrink-0" />
                    </div>
                    <img
                      src={card.image}
                      alt="Product"
                      className="w-32 h-28 object-contain mx-auto"
                    />
                  </div>
                ))}
              </div>

              {/* Horizontal Cards - Second Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 w-full">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="bg-white border border-[#EAEAEA] rounded-xl p-6 flex items-center justify-between min-h-[73px] hover:shadow-sm transition-all hover:-translate-y-0.5"
                  >
                    <div className="text-base sm:text-[17px] font-helvetica">
                      <span className="text-[#171716]">Boost</span>{" "}
                      <span className="text-[#199F65]">testosterone</span>
                    </div>
                    <ChevronRight className="w-4 h-4 flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Brands Section */}
      <div className="py-12 sm:py-16 overflow-hidden bg-white">
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 mask-fade z-[1]" aria-hidden="true" />
          <div className="marquee flex items-center gap-16 sm:gap-20 md:gap-24 w-max [--duration:30s] hover:[animation-play-state:paused] motion-reduce:!animate-none">
            {brandLogos.map((logo, index) => (
              <img
                key={`a-${index}`}
                src={logo}
                alt="Brand logo"
                className="h-10 sm:h-12 md:h-[51px] w-auto object-contain opacity-40 hover:opacity-100 transition-opacity"
              />
            ))}
            {brandLogos.map((logo, index) => (
              <img
                key={`b-${index}`}
                src={logo}
                alt="Brand logo"
                className="h-10 sm:h-12 md:h-[51px] w-auto object-contain opacity-40 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Benefits and Products Section */}
      <div className="px-6 sm:px-8 md:px-12 lg:px-28 py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <BenefitShowcase
            title={"Increase\nTestosterone"}
            ghostTitle="Increase Testosterone"
            color="slate"
            cta={{
              title: "Testosterone Solutions",
              image: "https://api.builder.io/api/v1/image/assets/TEMP/6292e665eeb327f4a82e272d4cbac87046c6f323?width=312",
              buttonLabel: "Shop Now",
            }}
            slides={[
              {
                title: "Injectable TRT",
                image: "https://api.builder.io/api/v1/image/assets/TEMP/f76d1259301903dae173ebf0e7a3984c7a46f308?width=312",
                bullets: [
                  "More energy, strength, and libido",
                  "Reduce body fat",
                  "Increase mental clarity",
                ],
              },
              {
                title: "Injectable TRT",
                image: "https://api.builder.io/api/v1/image/assets/TEMP/339411d2a5e370cfdac41242553c914113a9bfdc?width=312",
                bullets: [
                  "More energy, strength, and libido",
                  "Reduce body fat",
                  "Increase mental clarity",
                ],
              },
            ]}
            tags={["get in shape", "be energized", "stay hard", "increased sex drive"]}
            testimonial={{
              text:
                "DRT treatment has been the best decision I've ever made. I'm keeping up with men half my age, also my energy levels are that of my 25-year-old self. Can't say enough about the improvements to my lifestyle.",
              author: "Sarah Jones",
              image:
                "https://api.builder.io/api/v1/image/assets/TEMP/6a8f9d5eaf0c2d8a885e73df8e14237eb5b79db1?width=538",
            }}
          />
        </div>
      </div>

      {/* How It Works Section */}
      <div className="px-6 sm:px-8 md:px-12 lg:px-28 py-12 sm:py-16 md:py-20 bg-white">
        <HowItWorks
          steps={[
            {
              title: "Complete your health history",
              description:
                "Fill in your health history form before meeting with a licensed clinician so we can personalize your care.",
            },
            {
              title: "Clinician review & approval",
              description:
                "Our partners and providers review your medical history and determine if a prescription is right for you.",
              image:
                "https://api.builder.io/api/v1/image/assets/TEMP/3a6ba0116ebdbb0cc21e310f768e6539547989da?width=618",
            },
            {
              title: "Fast delivery & optimization",
              description:
                "Treatments are shipped to your door with ongoing monitoring and optimizations to keep you on track.",
              image:
                "https://api.builder.io/api/v1/image/assets/TEMP/e2b8029fec6ae76eae777f4ebbc23ca419692631?width=752",
            },
          ]}
        />
      </div>

      {/* Comparison Section */}
      <div className="px-6 sm:px-8 md:px-12 lg:px-28 py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="flex-1 max-w-[520px] lg:self-center">
              <h2 className="text-[#333] font-helvetica text-3xl sm:text-[34px] md:text-[38px] mb-6 sm:mb-8 md:mb-10 leading-tight">
                No hidden fees, ever
              </h2>
              <p className="text-[#808080] font-helvetica text-base sm:text-[18px] md:text-[22px] mb-8 sm:mb-10 md:mb-12 leading-relaxed">
                We build community by focusing on real solutions, personalized care, science-backed supplements and root cause therapies paired with virtual appointments and accessible diagnostics make healthcare seamless and centered on you.
              </p>
              <button className="bg-[#333] hover:bg-[#4a4a4a] transition-colors text-white font-helvetica text-xl sm:text-2xl md:text-[26px] px-12 sm:px-16 md:px-24 py-4 sm:py-5 md:py-6 rounded-full">
                Shop now
              </button>
            </div>

            {/* Right Comparison Table */}
            <div className="flex-1 w-full max-w-[643px]">
              {/* Table Headers */}
              <div className="grid grid-cols-[120px_1fr_1fr_1fr] md:grid-cols-[140px_1fr_1fr_1fr] items-end mb-6 sm:mb-8 md:mb-12 gap-x-4">
                <div></div>
                <div className="text-[#333] font-orpheus text-base sm:text-lg md:text-[19px] font-bold text-center">
                  the peptide market
                </div>
                <div className="text-[#636363] font-helvetica text-[10px] sm:text-xs uppercase text-center">
                  OUR COMPETITORS
                </div>
                <div className="text-[#636363] font-helvetica text-[10px] sm:text-xs uppercase text-center">
                  TRADITIONAL MEDICINE
                </div>
              </div>

              {/* Comparison Rows */}
              <div className="space-y-3 mb-6">
                {/* Row: CONVENIENT */}
                <div className="grid grid-cols-[120px_1fr_1fr_1fr] md:grid-cols-[140px_1fr_1fr_1fr] items-center gap-x-4">
                  <div className="text-[#333] font-helvetica text-[10px] uppercase">CONVENIENT</div>
                  <div className="h-11 md:h-12 rounded bg-[#C7D5F6] flex items-center justify-center"><svg className="w-5 h-5" viewBox="0 0 27 27" fill="none"><path d="M10.9574 20.1239L4.75732 13.9238L6.30734 12.3738L10.9574 17.0239L20.9373 7.04395L22.4873 8.59396L10.9574 20.1239Z" fill="#2F2F2F"/></svg></div>
                  <div className="h-11 md:h-12 rounded bg-[#C7D5F6] flex items-center justify-center"><svg className="w-5 h-5" viewBox="0 0 27 27" fill="none"><path d="M10.9574 20.1239L4.75732 13.9238L6.30734 12.3738L10.9574 17.0239L20.9373 7.04395L22.4873 8.59396L10.9574 20.1239Z" fill="#2F2F2F"/></svg></div>
                  <div className="h-11 md:h-12 rounded border border-[#EDEDED] bg-white flex items-center justify-center"><svg className="w-5 h-5" viewBox="0 0 27 27" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.29473 6.49444C6.4477 6.34167 6.65504 6.25586 6.87123 6.25586C7.08742 6.25586 7.29477 6.34167 7.44773 6.49444L20.5005 19.5472C20.5806 19.6219 20.6449 19.7119 20.6895 19.812C20.7341 19.9121 20.7581 20.0201 20.76 20.1297C20.7619 20.2392 20.7418 20.348 20.7008 20.4496C20.6597 20.5512 20.5987 20.6434 20.5212 20.7209C20.4437 20.7984 20.3514 20.8594 20.2499 20.9005C20.1483 20.9415 20.0395 20.9616 19.9299 20.9597C19.8204 20.9578 19.7124 20.9338 19.6123 20.8892C19.5122 20.8446 19.4222 20.7803 19.3475 20.7002L6.29473 7.64744C6.14196 7.49447 6.05615 7.28713 6.05615 7.07094C6.05615 6.85475 6.14196 6.6474 6.29473 6.49444Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20.5006 6.49444C20.6534 6.6474 20.7392 6.85475 20.7392 7.07094C20.7392 7.28713 20.6534 7.49447 20.5006 7.64744L7.44787 20.7002C7.29322 20.8443 7.08868 20.9227 6.87733 20.919C6.66599 20.9153 6.46434 20.8297 6.31487 20.6802C6.1654 20.5307 6.07978 20.3291 6.07605 20.1177C6.07233 19.9064 6.15078 19.7018 6.29488 19.5472L19.3476 6.49444C19.5006 6.34167 19.7079 6.25586 19.9241 6.25586C20.1403 6.25586 20.3477 6.34167 20.5006 6.49444Z" fill="black"/></svg></div>
                </div>

                {/* Row: MEMBERSHIP FEES */}
                <div className="grid grid-cols-[120px_1fr_1fr_1fr] md:grid-cols-[140px_1fr_1fr_1fr] items-center gap-x-4">
                  <div className="text-[#333] font-helvetica text-[10px] uppercase">MEMBERSHIP FEES</div>
                  <div className="h-11 md:h-12 rounded bg-[#C7D5F6] flex items-center justify-center"><span className="text-[#333] font-helvetica text-sm md:text-[15px] leading-none whitespace-nowrap">$0</span></div>
                  <div className="h-11 md:h-12 rounded border border-[#EDEDED] bg-white flex items-center justify-center"><span className="text-[#333] font-helvetica text-sm md:text-[15px] leading-none whitespace-nowrap">$129+</span></div>
                  <div className="h-11 md:h-12 rounded bg-[#C7D5F6] flex items-center justify-center"><span className="text-[#333] font-helvetica text-sm md:text-[15px] leading-none whitespace-nowrap">$0</span></div>
                </div>

                {/* Row: CONSULTATION FEES */}
                <div className="grid grid-cols-[120px_1fr_1fr_1fr] md:grid-cols-[140px_1fr_1fr_1fr] items-center gap-x-4">
                  <div className="text-[#333] font-helvetica text-[10px] uppercase">CONSULTATION FEES</div>
                  <div className="h-11 md:h-12 rounded bg-[#C7D5F6] flex items-center justify-center"><span className="text-[#333] font-helvetica text-sm md:text-[15px] leading-none whitespace-nowrap">$0</span></div>
                  <div className="h-11 md:h-12 rounded bg-[#C7D5F6] flex items-center justify-center"><span className="text-[#333] font-helvetica text-sm md:text-[15px] leading-none whitespace-nowrap">$0</span></div>
                  <div className="h-11 md:h-12 rounded border border-[#EDEDED] bg-white flex items-center justify-center"><span className="text-[#333] font-helvetica text-sm md:text-[15px] leading-none whitespace-nowrap">$20+</span></div>
                </div>

                {/* Row: TREATS ROOT CAUSE */}
                <div className="grid grid-cols-[120px_1fr_1fr_1fr] md:grid-cols-[140px_1fr_1fr_1fr] items-center gap-x-4">
                  <div className="text-[#333] font-helvetica text-[10px] uppercase">TREATS ROOT CAUSE</div>
                  <div className="h-11 md:h-12 rounded bg-[#C7D5F6] flex items-center justify-center"><svg className="w-5 h-5" viewBox="0 0 27 27" fill="none"><path d="M10.9574 20.1239L4.75732 13.9238L6.30734 12.3738L10.9574 17.0239L20.9373 7.04395L22.4873 8.59396L10.9574 20.1239Z" fill="#2F2F2F"/></svg></div>
                  <div className="h-11 md:h-12 rounded border border-[#EDEDED] bg-white flex items-center justify-center"><svg className="w-5 h-5" viewBox="0 0 27 27" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.29473 6.49444C6.4477 6.34167 6.65504 6.25586 6.87123 6.25586C7.08742 6.25586 7.29477 6.34167 7.44773 6.49444L20.5005 19.5472C20.5806 19.6219 20.6449 19.7119 20.6895 19.812C20.7341 19.9121 20.7581 20.0201 20.76 20.1297C20.7619 20.2392 20.7418 20.348 20.7008 20.4496C20.6597 20.5512 20.5987 20.6434 20.5212 20.7209C20.4437 20.7984 20.3514 20.8594 20.2499 20.9005C20.1483 20.9415 20.0395 20.9616 19.9299 20.9597C19.8204 20.9578 19.7124 20.9338 19.6123 20.8892C19.5122 20.8446 19.4222 20.7803 19.3475 20.7002L6.29473 7.64744C6.14196 7.49447 6.05615 7.28713 6.05615 7.07094C6.05615 6.85475 6.14196 6.6474 6.29473 6.49444Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20.5006 6.49444C20.6534 6.6474 20.7392 6.85475 20.7392 7.07094C20.7392 7.28713 20.6534 7.49447 20.5006 7.64744L7.44787 20.7002C7.29322 20.8443 7.08868 20.9227 6.87733 20.919C6.66599 20.9153 6.46434 20.8297 6.31487 20.6802C6.1654 20.5307 6.07978 20.3291 6.07605 20.1177C6.07233 19.9064 6.15078 19.7018 6.29488 19.5472L19.3476 6.49444C19.5006 6.34167 19.7079 6.25586 19.9241 6.25586C20.1403 6.25586 20.3477 6.34167 20.5006 6.49444Z" fill="black"/></svg></div>
                  <div className="h-11 md:h-12 rounded border border-[#EDEDED] bg-white flex items-center justify-center"><svg className="w-5 h-5" viewBox="0 0 27 27" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.29473 6.49444C6.4477 6.34167 6.65504 6.25586 6.87123 6.25586C7.08742 6.25586 7.29477 6.34167 7.44773 6.49444L20.5005 19.5472C20.5806 19.6219 20.6449 19.7119 20.6895 19.812C20.7341 19.9121 20.7581 20.0201 20.76 20.1297C20.7619 20.2392 20.7418 20.348 20.7008 20.4496C20.6597 20.5512 20.5987 20.6434 20.5212 20.7209C20.4437 20.7984 20.3514 20.8594 20.2499 20.9005C20.1483 20.9415 20.0395 20.9616 19.9299 20.9597C19.8204 20.9578 19.7124 20.9338 19.6123 20.8892C19.5122 20.8446 19.4222 20.7803 19.3475 20.7002L6.29473 7.64744C6.14196 7.49447 6.05615 7.28713 6.05615 7.07094C6.05615 6.85475 6.14196 6.6474 6.29473 6.49444Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20.5006 6.49444C20.6534 6.6474 20.7392 6.85475 20.7392 7.07094C20.7392 7.28713 20.6534 7.49447 20.5006 7.64744L7.44787 20.7002C7.29322 20.8443 7.08868 20.9227 6.87733 20.919C6.66599 20.9153 6.46434 20.8297 6.31487 20.6802C6.1654 20.5307 6.07978 20.3291 6.07605 20.1177C6.07233 19.9064 6.15078 19.7018 6.29488 19.5472L19.3476 6.49444C19.5006 6.34167 19.7079 6.25586 19.9241 6.25586C20.1403 6.25586 20.3477 6.34167 20.5006 6.49444Z" fill="black"/></svg></div>
                </div>

                {/* Row: LAB DRAWS */}
                <div className="grid grid-cols-[120px_1fr_1fr_1fr] md:grid-cols-[140px_1fr_1fr_1fr] items-center gap-x-4">
                  <div className="text-[#333] font-helvetica text-[10px] uppercase">LAB DRAWS</div>
                  <div className="h-11 md:h-12 rounded bg-[#C7D5F6] flex items-center justify-center"><svg className="w-5 h-5" viewBox="0 0 27 27" fill="none"><path d="M10.9574 20.1239L4.75732 13.9238L6.30734 12.3738L10.9574 17.0239L20.9373 7.04395L22.4873 8.59396L10.9574 20.1239Z" fill="#2F2F2F"/></svg></div>
                  <div className="h-11 md:h-12 rounded bg-[#C7D5F6] flex items-center justify-center"><svg className="w-5 h-5" viewBox="0 0 27 27" fill="none"><path d="M10.9574 20.1239L4.75732 13.9238L6.30734 12.3738L10.9574 17.0239L20.9373 7.04395L22.4873 8.59396L10.9574 20.1239Z" fill="#2F2F2F"/></svg></div>
                  <div className="h-11 md:h-12 rounded border border-[#EDEDED] bg-white flex items-center justify-center"><svg className="w-5 h-5" viewBox="0 0 27 27" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.29473 6.49444C6.4477 6.34167 6.65504 6.25586 6.87123 6.25586C7.08742 6.25586 7.29477 6.34167 7.44773 6.49444L20.5005 19.5472C20.5806 19.6219 20.6449 19.7119 20.6895 19.812C20.7341 19.9121 20.7581 20.0201 20.76 20.1297C20.7619 20.2392 20.7418 20.348 20.7008 20.4496C20.6597 20.5512 20.5987 20.6434 20.5212 20.7209C20.4437 20.7984 20.3514 20.8594 20.2499 20.9005C20.1483 20.9415 20.0395 20.9616 19.9299 20.9597C19.8204 20.9578 19.7124 20.9338 19.6123 20.8892C19.5122 20.8446 19.4222 20.7803 19.3475 20.7002L6.29473 7.64744C6.14196 7.49447 6.05615 7.28713 6.05615 7.07094C6.05615 6.85475 6.14196 6.6474 6.29473 6.49444Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20.5006 6.49444C20.6534 6.6474 20.7392 6.85475 20.7392 7.07094C20.7392 7.28713 20.6534 7.49447 20.5006 7.64744L7.44787 20.7002C7.29322 20.8443 7.08868 20.9227 6.87733 20.919C6.66599 20.9153 6.46434 20.8297 6.31487 20.6802C6.1654 20.5307 6.07978 20.3291 6.07605 20.1177C6.07233 19.9064 6.15078 19.7018 6.29488 19.5472L19.3476 6.49444C19.5006 6.34167 19.7079 6.25586 19.9241 6.25586C20.1403 6.25586 20.3477 6.34167 20.5006 6.49444Z" fill="black"/></svg></div>
                </div>

                {/* Row: PROACTIVE */}
                <div className="grid grid-cols-[120px_1fr_1fr_1fr] md:grid-cols-[140px_1fr_1fr_1fr] items-center gap-x-4">
                  <div className="text-[#333] font-helvetica text-[10px] uppercase">PROACTIVE</div>
                  <div className="h-11 md:h-12 rounded bg-[#C7D5F6] flex items-center justify-center"><svg className="w-5 h-5" viewBox="0 0 27 27" fill="none"><path d="M10.9574 20.1239L4.75732 13.9238L6.30734 12.3738L10.9574 17.0239L20.9373 7.04395L22.4873 8.59396L10.9574 20.1239Z" fill="#2F2F2F"/></svg></div>
                  <div className="h-11 md:h-12 rounded border border-[#EDEDED] bg-white flex items-center justify-center"><svg className="w-5 h-5" viewBox="0 0 27 27" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.29473 6.49444C6.4477 6.34167 6.65504 6.25586 6.87123 6.25586C7.08742 6.25586 7.29477 6.34167 7.44773 6.49444L20.5005 19.5472C20.5806 19.6219 20.6449 19.7119 20.6895 19.812C20.7341 19.9121 20.7581 20.0201 20.76 20.1297C20.7619 20.2392 20.7418 20.348 20.7008 20.4496C20.6597 20.5512 20.5987 20.6434 20.5212 20.7209C20.4437 20.7984 20.3514 20.8594 20.2499 20.9005C20.1483 20.9415 20.0395 20.9616 19.9299 20.9597C19.8204 20.9578 19.7124 20.9338 19.6123 20.8892C19.5122 20.8446 19.4222 20.7803 19.3475 20.7002L6.29473 7.64744C6.14196 7.49447 6.05615 7.28713 6.05615 7.07094C6.05615 6.85475 6.14196 6.6474 6.29473 6.49444Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20.5006 6.49444C20.6534 6.6474 20.7392 6.85475 20.7392 7.07094C20.7392 7.28713 20.6534 7.49447 20.5006 7.64744L7.44787 20.7002C7.29322 20.8443 7.08868 20.9227 6.87733 20.919C6.66599 20.9153 6.46434 20.8297 6.31487 20.6802C6.1654 20.5307 6.07978 20.3291 6.07605 20.1177C6.07233 19.9064 6.15078 19.7018 6.29488 19.5472L19.3476 6.49444C19.5006 6.34167 19.7079 6.25586 19.9241 6.25586C20.1403 6.25586 20.3477 6.34167 20.5006 6.49444Z" fill="black"/></svg></div>
                  <div className="h-11 md:h-12 rounded border border-[#EDEDED] bg-white flex items-center justify-center"><svg className="w-5 h-5" viewBox="0 0 27 27" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.29473 6.49444C6.4477 6.34167 6.65504 6.25586 6.87123 6.25586C7.08742 6.25586 7.29477 6.34167 7.44773 6.49444L20.5005 19.5472C20.5806 19.6219 20.6449 19.7119 20.6895 19.812C20.7341 19.9121 20.7581 20.0201 20.76 20.1297C20.7619 20.2392 20.7418 20.348 20.7008 20.4496C20.6597 20.5512 20.5987 20.6434 20.5212 20.7209C20.4437 20.7984 20.3514 20.8594 20.2499 20.9005C20.1483 20.9415 20.0395 20.9616 19.9299 20.9597C19.8204 20.9578 19.7124 20.9338 19.6123 20.8892C19.5122 20.8446 19.4222 20.7803 19.3475 20.7002L6.29473 7.64744C6.14196 7.49447 6.05615 7.28713 6.05615 7.07094C6.05615 6.85475 6.14196 6.6474 6.29473 6.49444Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20.5006 6.49444C20.6534 6.6474 20.7392 6.85475 20.7392 7.07094C20.7392 7.28713 20.6534 7.49447 20.5006 7.64744L7.44787 20.7002C7.29322 20.8443 7.08868 20.9227 6.87733 20.919C6.66599 20.9153 6.46434 20.8297 6.31487 20.6802C6.1654 20.5307 6.07978 20.3291 6.07605 20.1177C6.07233 19.9064 6.15078 19.7018 6.29488 19.5472L19.3476 6.49444C19.5006 6.34167 19.7079 6.25586 19.9241 6.25586C20.1403 6.25586 20.3477 6.34167 20.5006 6.49444Z" fill="black"/></svg></div>
                </div>

                {/* Row: DATA DRIVEN */}
                <div className="grid grid-cols-[120px_1fr_1fr_1fr] md:grid-cols-[140px_1fr_1fr_1fr] items-center gap-x-4">
                  <div className="text-[#333] font-helvetica text-[10px] uppercase">DATA DRIVEN</div>
                  <div className="h-11 md:h-12 rounded bg-[#C7D5F6] flex items-center justify-center"><svg className="w-5 h-5" viewBox="0 0 27 27" fill="none"><path d="M10.9574 20.1239L4.75732 13.9238L6.30734 12.3738L10.9574 17.0239L20.9373 7.04395L22.4873 8.59396L10.9574 20.1239Z" fill="#2F2F2F"/></svg></div>
                  <div className="h-11 md:h-12 rounded border border-[#EDEDED] bg-white flex items-center justify-center"><svg className="w-5 h-5" viewBox="0 0 27 27" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.29473 6.49444C6.4477 6.34167 6.65504 6.25586 6.87123 6.25586C7.08742 6.25586 7.29477 6.34167 7.44773 6.49444L20.5005 19.5472C20.5806 19.6219 20.6449 19.7119 20.6895 19.812C20.7341 19.9121 20.7581 20.0201 20.76 20.1297C20.7619 20.2392 20.7418 20.348 20.7008 20.4496C20.6597 20.5512 20.5987 20.6434 20.5212 20.7209C20.4437 20.7984 20.3514 20.8594 20.2499 20.9005C20.1483 20.9415 20.0395 20.9616 19.9299 20.9597C19.8204 20.9578 19.7124 20.9338 19.6123 20.8892C19.5122 20.8446 19.4222 20.7803 19.3475 20.7002L6.29473 7.64744C6.14196 7.49447 6.05615 7.28713 6.05615 7.07094C6.05615 6.85475 6.14196 6.6474 6.29473 6.49444Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20.5006 6.49444C20.6534 6.6474 20.7392 6.85475 20.7392 7.07094C20.7392 7.28713 20.6534 7.49447 20.5006 7.64744L7.44787 20.7002C7.29322 20.8443 7.08868 20.9227 6.87733 20.919C6.66599 20.9153 6.46434 20.8297 6.31487 20.6802C6.1654 20.5307 6.07978 20.3291 6.07605 20.1177C6.07233 19.9064 6.15078 19.7018 6.29488 19.5472L19.3476 6.49444C19.5006 6.34167 19.7079 6.25586 19.9241 6.25586C20.1403 6.25586 20.3477 6.34167 20.5006 6.49444Z" fill="black"/></svg></div>
                  <div className="h-11 md:h-12 rounded border border-[#EDEDED] bg-white flex items-center justify-center"><svg className="w-5 h-5" viewBox="0 0 27 27" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.29473 6.49444C6.4477 6.34167 6.65504 6.25586 6.87123 6.25586C7.08742 6.25586 7.29477 6.34167 7.44773 6.49444L20.5005 19.5472C20.5806 19.6219 20.6449 19.7119 20.6895 19.812C20.7341 19.9121 20.7581 20.0201 20.76 20.1297C20.7619 20.2392 20.7418 20.348 20.7008 20.4496C20.6597 20.5512 20.5987 20.6434 20.5212 20.7209C20.4437 20.7984 20.3514 20.8594 20.2499 20.9005C20.1483 20.9415 20.0395 20.9616 19.9299 20.9597C19.8204 20.9578 19.7124 20.9338 19.6123 20.8892C19.5122 20.8446 19.4222 20.7803 19.3475 20.7002L6.29473 7.64744C6.14196 7.49447 6.05615 7.28713 6.05615 7.07094C6.05615 6.85475 6.14196 6.6474 6.29473 6.49444Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20.5006 6.49444C20.6534 6.6474 20.7392 6.85475 20.7392 7.07094C20.7392 7.28713 20.6534 7.49447 20.5006 7.64744L7.44787 20.7002C7.29322 20.8443 7.08868 20.9227 6.87733 20.919C6.66599 20.9153 6.46434 20.8297 6.31487 20.6802C6.1654 20.5307 6.07978 20.3291 6.07605 20.1177C6.07233 19.9064 6.15078 19.7018 6.29488 19.5472L19.3476 6.49444C19.5006 6.34167 19.7079 6.25586 19.9241 6.25586C20.1403 6.25586 20.3477 6.34167 20.5006 6.49444Z" fill="black"/></svg></div>
                </div>
              </div>

              {/* Total Cost Row */}
              <div className="pt-4 sm:pt-5 md:pt-6 border-t border-[#CFCFCF]">
                <div className="grid grid-cols-[120px_1fr_1fr_1fr] md:grid-cols-[140px_1fr_1fr_1fr] items-center gap-x-4">
                  <div className="text-[#333] font-helvetica text-[10px] font-bold uppercase">TOTAL COST</div>
                  <div className="py-2"><span className="text-[#333] font-helvetica text-sm sm:text-base md:text-lg font-bold">$0</span></div>
                  <div className="py-2"><span className="text-[#333] font-helvetica text-sm sm:text-base md:text-lg font-bold">$129+</span></div>
                  <div className="py-2"><span className="text-[#333] font-helvetica text-sm sm:text-base md:text-lg font-bold">$20+</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="px-6 sm:px-8 md:px-12 lg:px-28 py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-[61px] font-helvetica mb-10 sm:mb-12 md:mb-14">
            <span className="text-[#333]">Our </span>
            <span className="text-[#AAA]">Team</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {[
              { name: "Ashfaq Rahman", role: "CEO", image: "https://cdn.builder.io/api/v1/image/assets%2Fc37b13b2b0fc4b189fd2d2fecf01d42c%2F3fd2907523f946399e2ad0d2cd69a22a?format=webp&width=800" },
              { name: "Oliver Ibrahim", role: "Chief of Staff", image: "https://cdn.builder.io/api/v1/image/assets%2Fc37b13b2b0fc4b189fd2d2fecf01d42c%2F89910f74fc434db5a2dd68727b14fc3f?format=webp&width=800" },
              { name: "Muhammad Bin Sohail", role: "Head of Technology", image: "https://cdn.builder.io/api/v1/image/assets%2Fc37b13b2b0fc4b189fd2d2fecf01d42c%2F2ab4c0bd514143d3a95e3e791a9ead11?format=webp&width=800" },
              { name: "Gaelle Seman", role: "Head of Sales", image: "https://cdn.builder.io/api/v1/image/assets%2Fc37b13b2b0fc4b189fd2d2fecf01d42c%2F47a20243accf4fc18f06692a735c0baf?format=webp&width=800" },
            ].map((member, index) => (
              <div
                key={index}
                className="group relative rounded-md overflow-hidden bg-white shadow-[0_5.67px_45.362px_0_rgba(0,0,0,0.25)]"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-[3/4] object-cover transform transition duration-500 ease-out filter grayscale group-hover:grayscale-0 group-hover:scale-[1.05]"
                />
                <div className="absolute left-3 bottom-3 bg-white/90 backdrop-blur-sm rounded-md px-3 py-2 shadow">
                  <h3 className={`text-[#333] font-helvetica leading-tight ${member.name === "Muhammad Bin Sohail" ? "text-sm sm:text-base md:text-[16px]" : "text-base sm:text-lg md:text-[18px]"}`}>
                    {member.name}
                  </h3>
                  <p className="text-[#90847E] font-helvetica text-xs sm:text-sm">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Medical Advisors Section */}
      <div className="px-6 sm:px-8 md:px-12 lg:px-28 py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-[61px] font-helvetica mb-10 sm:mb-12 md:mb-14">
            <span className="text-[#333]">Our Medical </span>
            <span className="text-[#B9B9B9]">Advisors</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-10 sm:mb-12 md:mb-16">
            {[
              { name: "Ashfaq Rahman", role: "MD", image: "https://api.builder.io/api/v1/image/assets/TEMP/9a730167ce218459764ed3b2d71115d2742b6411?width=544" },
              { name: "Oliver Ibrahim", role: "Doctor", image: "https://api.builder.io/api/v1/image/assets/TEMP/c9ab7ea3e7d76914190be15f86949192ad3d35bf?width=544" },
              { name: "Muhammad Bin Sohail", role: "Head of Technology", image: "https://api.builder.io/api/v1/image/assets/TEMP/4b2ebd867dd1d91c824c85da76edf4cf57c8e550?width=544" },
              { name: "Gaelle Seman", role: "Head of Sales", image: "https://api.builder.io/api/v1/image/assets/TEMP/14ff3c745ade6c7194d578ebd55a3834d188aa07?width=544" },
            ].map((advisor, index) => (
              <div
                key={index}
                className="bg-white rounded-md shadow-[0_5.67px_45.362px_0_rgba(0,0,0,0.25)] overflow-hidden"
              >
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-4">
                  <h3 className="text-[#333] font-helvetica text-lg sm:text-xl md:text-[22px] mb-2">
                    {advisor.name}
                  </h3>
                  <p className="text-[#90847E] font-helvetica text-sm md:text-[14px]">
                    {advisor.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[#333] font-helvetica text-lg sm:text-xl md:text-[22px] text-center max-w-lg mx-auto">
            Our board-certified physicians ensure our treatments are{" "}
            <span className="font-bold">nothing but the best.</span>
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="px-6 sm:px-8 md:px-12 lg:px-28 py-12 sm:py-16 md:py-20 bg-[#333]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-white font-helvetica text-4xl sm:text-5xl md:text-[61px] mb-2">
              250k+ Men choose
            </h2>
            <p className="text-[#989898] font-orpheus text-3xl sm:text-4xl md:text-[45px] font-bold">
              the peptide market
            </p>
          </div>

          <TestimonialsCarousel
            testimonials={[
              {
                text: "It has changed life in the bedroom and dramatically improved my relationship with my wife.",
                name: "Nawaf",
                rating: 5,
              },
              {
                text: "It has changed life in the bedroom and dramatically improved my relationship with my wife.",
                name: "Nawaf",
                rating: 5,
              },
              {
                text: "It has changed life in the bedroom and dramatically improved my relationship with my wife.",
                name: "Nawaf",
                rating: 5,
              },
              {
                text: "It has changed life in the bedroom and dramatically improved my relationship with my wife.",
                name: "Nawaf",
                rating: 5,
              },
              {
                text: "It has changed life in the bedroom and dramatically improved my relationship with my wife.",
                name: "Nawaf",
                rating: 5,
              },
              {
                text: "It has changed life in the bedroom and dramatically improved my relationship with my wife.",
                name: "Nawaf",
                rating: 5,
              },
              {
                text: "It has changed life in the bedroom and dramatically improved my relationship with my wife.",
                name: "Nawaf",
                rating: 5,
              },
              {
                text: "It has changed life in the bedroom and dramatically improved my relationship with my wife.",
                name: "Nawaf",
                rating: 5,
              },
            ]}
          />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-6 sm:px-8 md:px-12 lg:px-28 py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-[601px] mx-auto">
          <div className="flex flex-col gap-[25px]">
            <FAQItem
              question="What is the peptide market?"
              answer="The peptide market is a comprehensive platform offering personalized healthcare solutions including peptides, TRT, and other science-backed treatments. We focus on providing accessible, data-driven care tailored to your specific needs."
            />
            <FAQItem
              question="How does the treatment process work?"
              answer="Our treatment process is simple and convenient. Start by completing a health history form, then consult with our licensed clinicians who will review your medical history. If approved, your personalized treatment will be delivered directly to your door, and we'll continue to optimize your care."
            />
            <FAQItem
              question="Are there any membership or consultation fees?"
              answer="No, we pride ourselves on transparent pricing with no hidden fees. Unlike our competitors who charge $129+ in membership fees, we offer consultations at $0 cost. You only pay for your prescribed treatments."
            />
            <FAQItem
              question="What makes you different from traditional medicine?"
              answer="We take a proactive, data-driven approach to healthcare. Our treatments address root causes rather than just symptoms, and we offer convenient at-home lab draws and virtual appointments. Plus, there are no consultation fees like you'd find with traditional medicine."
            />
            <FAQItem
              question="Is the treatment safe and FDA-approved?"
              answer="Yes, all our treatments are dispensed through FDA-registered pharmacies and prescribed by board-certified physicians. We ensure the highest standards of safety and quality in all our products and services."
            />
            <FAQItem
              question="How long does shipping take?"
              answer="We offer free and discreet shipping on all prescriptions. Most orders are delivered within 3-5 business days. All packages are shipped in unmarked, discreet packaging to protect your privacy."
            />
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="px-6 sm:px-8 md:px-12 lg:px-28 py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#333] rounded-[24px] px-6 sm:px-12 md:px-16 lg:px-20 py-12 sm:py-16 md:py-20 lg:py-[169px]">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 max-w-[1090px] mx-auto">
              {/* Left Content */}
              <div className="flex flex-col gap-[23px] max-w-[359px] w-full">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-helvetica font-normal leading-normal">
                  <span className="text-white">Unlock the free </span>
                  <span className="text-[#B9B9B9]">guide to protein for weight loss</span>
                </h2>
                <p className="text-[#B9B9B9] font-helvetica text-base sm:text-lg">
                  Written by board-certified doctors to support your journey
                </p>
              </div>

              {/* Right Form */}
              <div className="flex flex-col gap-[36px] max-w-[384px] w-full">
                <div className="flex flex-col gap-[30px]">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-6 py-[21px] rounded-lg bg-white text-black placeholder:text-[#ACACAC] font-helvetica text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button className="w-full px-6 py-[9px] rounded-full bg-white text-[#333] font-helvetica text-base sm:text-lg hover:bg-white/90 transition-colors">
                    Get the Guide
                  </button>
                </div>
                <p className="text-[#B9B9B9] font-helvetica text-sm">
                  By creating an account using email, I agree to the{" "}
                  <a href="#" className="underline hover:text-white transition-colors">
                    Terms & conditions
                  </a>{" "}
                  and acknowledge the{" "}
                  <a href="#" className="underline hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="relative bg-[#333333] px-0 py-12 sm:py-16 md:py-20 lg:py-[87px]">
        <div className="relative z-[1] max-w-[1410px] mx-auto px-6 sm:px-8 pb-[clamp(80px,14vw,260px)]">
          <div className="flex flex-col gap-16 sm:gap-20 md:gap-[91px]">
            {/* Footer Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-[187px]">
              {/* Navigation Column */}
              <div className="flex flex-col gap-[22px]">
                <h3 className="text-white font-helvetica text-2xl sm:text-3xl md:text-[31px] font-bold">
                  Navigation
                </h3>
                <nav className="flex flex-col gap-[14px]">
                  <a href="#" className="text-[#B9B9B9] font-helvetica text-lg sm:text-xl md:text-[20px] hover:text-white transition-colors">
                    Home
                  </a>
                  <a href="#" className="text-[#B9B9B9] font-helvetica text-lg sm:text-xl md:text-[20px] hover:text-white transition-colors">
                    Shop / Products
                  </a>
                  <a href="#" className="text-[#B9B9B9] font-helvetica text-lg sm:text-xl md:text-[20px] hover:text-white transition-colors">
                    About
                  </a>
                  <a href="#" className="text-[#B9B9B9] font-helvetica text-lg sm:text-xl md:text-[20px] hover:text-white transition-colors">
                    FAQs
                  </a>
                  <a href="#" className="text-[#B9B9B9] font-helvetica text-lg sm:text-xl md:text-[20px] hover:text-white transition-colors">
                    Contact / Support
                  </a>
                  <a href="#" className="text-[#B9B9B9] font-helvetica text-lg sm:text-xl md:text-[20px] hover:text-white transition-colors">
                    Clinician Login
                  </a>
                </nav>
              </div>

              {/* Legal & Compliance Column */}
              <div className="flex flex-col gap-[22px]">
                <h3 className="text-white font-helvetica text-2xl sm:text-3xl md:text-[31px] font-bold">
                  Legal & Compliance
                </h3>
                <nav className="flex flex-col gap-[14px]">
                  <a href="#" className="text-[#B9B9B9] font-helvetica text-lg sm:text-xl md:text-[20px] hover:text-white transition-colors">
                    Terms & Conditions
                  </a>
                  <a href="#" className="text-[#B9B9B9] font-helvetica text-lg sm:text-xl md:text-[20px] hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-[#B9B9B9] font-helvetica text-lg sm:text-xl md:text-[20px] hover:text-white transition-colors">
                    Return / Refund Policy
                  </a>
                  <a href="#" className="text-[#B9B9B9] font-helvetica text-lg sm:text-xl md:text-[20px] hover:text-white transition-colors">
                    HIPAA Compliance Notice
                  </a>
                </nav>
              </div>

              {/* Contact Column */}
              <div className="flex flex-col gap-[22px]">
                <h3 className="text-white font-helvetica text-2xl sm:text-3xl md:text-[31px] font-bold">
                  Contact
                </h3>
                <div className="flex flex-col gap-[14px]">
                  <p className="text-[#B9B9B9] font-helvetica text-lg sm:text-xl md:text-[20px]">
                    Email: ash@thepeptidemarket.com
                  </p>
                  <p className="text-[#B9B9B9] font-helvetica text-lg sm:text-xl md:text-[20px]">
                    Phone: +1 (914) 874-9600
                  </p>
                  <p className="text-[#B9B9B9] font-helvetica text-lg sm:text-xl md:text-[20px]">
                    Address: 123 North St, New York, NY, 15546
                  </p>
                  <p className="text-[#B9B9B9] font-helvetica text-lg sm:text-xl md:text-[20px]">
                    Hours: Mon-Fri, 9AM-6PM EST
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8">
              <p className="text-[#B9B9B9] font-helvetica text-xs font-bold">
                © 2025 The Peptide Market™
              </p>
              <p className="text-[#B9B9B9] font-helvetica text-xs font-bold text-center">
                Complete Peptide Solutions for Modern Medicine.
              </p>
            </div>

            {/* Watermark handled by absolute element below */}
          </div>
        </div>
        {/* Absolute full-width watermark with 10px margins */}
        <div aria-hidden className="pointer-events-none select-none absolute left-[10px] right-[10px] bottom-[10px] z-0">
          <div className="w-full text-white/30 font-orpheus font-bold leading-none whitespace-nowrap text-[clamp(28px,12vw,220px)]">
            the peptide market
          </div>
        </div>
      </footer>
    </div>
  );
}
