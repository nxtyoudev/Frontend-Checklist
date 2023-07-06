import React from "react";

export default () => (
  <div className="relative w-full md:mt-[105px] mt-[51px] md:px-[100px] px-[15px]">
  <div className="absolute md:w-[284px] w-[97px] md:h-[281px] h-[94px] md:-top-[50px] -top-[12px] md:right-[25px] right-0.5 border-[3px] border-[#196DB7]"></div>
  <img src='./assets/about-stats.jpg' className="relative md:w-auto w-full md:h-auto h-[325px] bg-cover" />
  <div className="absolute md:w-auto w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
    <div className="flex flex-row md:flex-nowrap flex-wrap items-center md:justify-start justify-center md:gap-24 gap-10">
      <div className="flex flex-col items-center">
        <div className="font-bold text-white md:text-[69px] text-[34px] md:leading-[94px] leading-[46px]">
          <span className="text-[#4A92F0]">+</span>300
        </div>
        <div className="text-white">glückliche Kunden</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="font-bold text-white md:text-[69px] text-[34px] md:leading-[94px] leading-[46px]">
          20<span className="text-[#4A92F0]">J</span>
        </div>
        <div className="text-white">Erfahrung</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="font-bold text-white md:text-[69px] text-[34px] md:leading-[94px] leading-[46px]">
          <span className="text-[#4A92F0]">+</span>50
        </div>
        <div className="text-white">neu gebaute Pools</div>
      </div>
    </div>
  </div>
</div>
);
