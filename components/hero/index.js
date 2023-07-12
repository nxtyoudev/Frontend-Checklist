import React from 'react';

export default () => (
  <>
    <section className="header md:pt-[150px] pt-[70px] md:h-auto h-[800px]" id="hero">
      <div className="header_info_holder">
        <div className="header__draw">
          <h1 className='font-bold md:text-[50px] text-[38px]'>seit</h1>
          <img
            src="./assets/hero_logo.png"
            alt="illustration"
          />
          <h1 className='font-bold md:text-[50px] text-[38px]'>2018</h1>
        </div>
        <div className="header__text-box mt-[20px]">
          <h1 className='font-bold text-[44px]'>Liefern wir<br />unvergessliche Sommer</h1>
          <p className='mt-[30px]'>
            pünktlich – hochwertig – verlässlich – kundenorientiert
          </p>
          <a href="https://formular.mg-pools.de/start/" target="_blank" className=" flex items-center text-white gap-4  bg-[#1E75EE] px-[18px] py-[21px]">
            <span className='text-[14px]'>JETZT ANFRAGEN</span>
            <svg fill="currentColor" viewBox="0 0 16 16" height="1em">
              <path fillRule="evenodd" d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  </>
);
