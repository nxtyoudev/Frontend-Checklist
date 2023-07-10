import React from 'react';

export default () => (
  <section className='relative'>
    <div className="md:hidden block absolute w-[228px] h-[175px] -top-10 left-3.5 border-[3px] border-[#196DB7] z-0"></div>
    <img className='hidden md:block relative' src='./assets/trust_background.jpg' />
    <img className='block md:hidden w-full relative' src='./assets/trust_background2.jpg' />
    <div className='absolute w-full  top-[20%] md:top-[25%] 2xl:top-[30%] z-10'>
      <div className=' container mx-auto '>
        <div className='px-[50px]'>
          <h2 className='text-[32px] md:text-[44px] font-bold max-w-md text-white'>Frage jetzt Deinen
            neuen Pool an</h2>
          <p className='text-[16px] max-w-[500px] text-white mt-2'>Beantworte uns ein paar Fragen, damit wir Dein Anliegen perfekt
            bearbeiten können und Dich anschließend kontaktieren können.</p>
          <div className='flex gap-4 md:gap-8 mt-12 flex-col md:flex-row'>
            <a href="https://formular.mg-pools.de/start/" target="_blank">
              <button className='text-center md:text-left flex items-center text-white gap-4  bg-[#1E75EE] pl-4 pr-8 py-5'>
                <span className='text-[14px]'>HIER ENTLANG</span>
                <svg width="39" height="12" viewBox="0 0 39 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M38.5303 6.53033C38.8232 6.23744 38.8232 5.76256 38.5303 5.46967L33.7574 0.696699C33.4645 0.403806 32.9896 0.403806 32.6967 0.696699C32.4038 0.989593 32.4038 1.46447 32.6967 1.75736L36.9393 6L32.6967 10.2426C32.4038 10.5355 32.4038 11.0104 32.6967 11.3033C32.9896 11.5962 33.4645 11.5962 33.7574 11.3033L38.5303 6.53033ZM0 6.75H38V5.25H0V6.75Z" fill="white"/>
                </svg>
              </button>
            </a>
            <button className='text-center text-[14px] md:text-left border text-white gap-4  bg-transparent px-[26px] py-5'>LEISTUNGEN</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);