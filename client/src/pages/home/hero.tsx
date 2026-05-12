import type { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="my-10 relative font-rubik rounded-2xl sm:rounded-3xl xl:rounded-4xl aspect-2/1 md:aspect-video lg:aspect-[2.1/1] overflow-hidden">
      <img
        src="/hero.png"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute bottom-3 right-3 w-1/6 ">
        <img src="/hero-small-1.png" alt="hero" className="size-full" />
        <img src="/hero-small-2.png" alt="hero" className="size-full" />
      </div>

      <p className="absolute top-6 left-0 sm:top-8  lg:top-10 flex flex-col items-center bg-dark-gray text-gray px-2 py-2 rounded-tr-md rounded-br-md text-[12px] sm:text-[13px] md:text-[14px] max-sm:hidden">
        <span
          style={{ writingMode: "vertical-rl" }}
          className="py-0 px-2 uppercase font-semibold"
        >
          Nike yılın ürünü
        </span>
      </p>

      <div className="absolute left-4 sm:left-6 lg:left-10 bottom-6 sm:bottom-8 lg:bottom-10 max-w-[60%] lg:max-w-[55%] text-white">
        <h1 className="font-semibold text-[28px] sm:text-[40px] md:text-[52px] lg:text-[64px]xl:text-[72px]">
          NIKE AIR MAX
        </h1>
        <p className="mt-0 md:mt-1 text-white text-[11px] sm:text-sm md:text-base max-w-[320px] leading-snug">
          Nike herkesin komforu için yeni Air Max'i tanıtıyor
        </p>
        <button className="bg-blue py-2 px-5 sm:px-7 sm:py-2.5 rounded-md mt-2 md:mt-5 lg:mt-6 hover:bg-blue/90 uppercase text-[10px] sm:text-xs md:text-sm">
          Shop now
        </button>
      </div>
    </div>
  );
};

export default Hero;
