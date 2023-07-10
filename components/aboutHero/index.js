import React from 'react';
import LeftSvg from '../../public/assets/arrow-left.svg'

export default () => (
  <section className="header headerAbout" id="hero">
    <div className="header_info_holder">
      <div className="header__text-box">
        <div className="md:w-[515px] w-full text-center font-bold md:text-[44px] text-[32px] leading-[100%] text-white">
          Wir liefern Ihnen unvergessliche Sommer
        </div>
        <div className="mt-5 text-[18px] leading-[150%] text-white">
        pünktlich – hochwertig – verlässlich – kundenorientiert
        </div>
        <a href="https://formular.mg-pools.de/start/" target="_blank" className="md:hidden block mt-[57px]">
          <button className="flex flex-row justify-center items-center gap-2 pl-[21px] pr-[27px] py-5 bg-[#1E75EE]">
            <div className="font-medium text-base leading-5 text-white uppercase">JETZT ANFRAGEN</div>
            <img src={LeftSvg} />
          </button>
        </a>
      </div>
    </div>
  </section>
);
