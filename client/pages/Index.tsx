import { ChevronRight } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-white">
      {/* Trust Banner */}
      <div className="bg-[#F9F7F0] px-6 sm:px-8 md:px-12 py-6 md:py-7">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-7">
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-3 sm:gap-4">
              <div className="flex-shrink-0">{badge.icon}</div>
              <div className="text-[#333] font-inter text-sm sm:text-base">
                {badge.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="px-6 sm:px-8 md:px-12 lg:px-28 pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Brand Name */}
          <h3 className="text-[#333] font-serif text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">
            the peptide market
          </h3>

          {/* Main Content */}
          <div className="flex flex-col gap-12 lg:gap-16">
            {/* Hero Text */}
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[91px] font-helvetica leading-tight">
                <span className="text-[#199F65]">Mental health</span>
                <br />
                <span className="text-[#1C1C1C]">personalized to you</span>
              </h1>
              <p className="text-[#595959] font-helvetica text-base sm:text-lg md:text-xl">
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
                    className="bg-[#F9F7F1] rounded-xl p-5 flex flex-col gap-5 min-h-[182px]"
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
                    className="bg-[#F9F7F1] rounded-xl p-6 flex items-center justify-between min-h-[73px]"
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
  );
}
