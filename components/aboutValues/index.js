import React from 'react';
import value1 from './values1.svg';
import value2 from './values2.svg';
import value3 from './values3.svg';
import valuesImg from '../../public/assets/valuesImg.svg'
import valuesImg2 from '../../public/assets/valuesImg2.svg'

export default () => (
  <div className="md:mt-[120px] mt-9 md:px-[100px] px-4">
    <div className="flex md:flex-row flex-col md:justify-center justify-start items-center md:gap-[57px] gap-">
      <div className="md:flex hidden flex-row items-center">
        <div className="relative">
          <div className="absolute w-[204px] h-[204px] -bottom-[17px] -right-[35px] border-[3px] border-[#196DB7]"></div>
          <img src="./assets/about5.png" className="w-[481px] relative z-10" />
        </div>
        <img src="./assets/about6.png" className="w-[357px] relative -translate-x-1/2 z-20" />
      </div>
      <div className="md:w-[475px] w-full">
        <div className="md:text-base text-sm text-[#1E75EE]">
          MEINE WERTE
        </div>
        <div className="mt-2.5 md:w-[475px] w-full font-bold md:text-[48px] text-[32px] md:leading-[52px] leading-9 text-black md:text-start text-center">
          Nach diesen Werten lebe und arbeite ich.
        </div>
        <div className="md:mt-11 mt-[30px] flex flex-col md:gap-[25px] gap-4">
          <div className="w-full px-2.5 md:py-[22px] py-[14px] flex flex-row gap-[21px] items-start border border-[#CCDBDC]">
            <img src={value1} />
            <div className="flex flex-col gap-2.5">
              <div className="font-semibold text-[21px] leading-8 text-black">Zuverlässigkeit</div>
              <div className="text-lg leading-7">Zuverlässigkeit ist der Schlüssel zu Erfolg und Zufriedenheit.</div>
            </div>
          </div>
          <div className="w-full px-2.5 md:py-[22px] py-[14px] flex flex-row gap-[21px] items-start border border-[#CCDBDC]">
            <img src={value2} />
            <div className="flex flex-col gap-2.5">
              <div className="font-semibold text-[21px] leading-8 text-black">Qualität</div>
              <div className="text-lg leading-7">Ich schätze Qualität als einen wertvollen Schatz</div>
            </div>
          </div>
          <div className="w-full px-2.5 md:py-[22px] py-[14px] flex flex-row gap-[21px] items-start border border-[#CCDBDC]">
            <img src={value3} />
            <div className="flex flex-col gap-2.5">
              <div className="font-semibold text-[21px] leading-8 text-black">Vertrauen</div>
              <div className="text-lg leading-7">Vertrauen ist der Grundpfeiler meines Wertesystems.</div>
            </div>
          </div>
        </div>
        <a href="https://formular.mg-pools.de/start/" target="_blank">
          <button className="md:w-auto w-full mt-[30px] px-[24px] py-[14px] bg-[#1E75EE]">
            <div className="font-medium text-base leading-5 text-white uppercase">JETZT ANFRAGEN</div>
          </button>
        </a>
      </div>
    </div>
  </div>
);
