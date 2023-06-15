import React from 'react';

export default () => (
  <section className='relative'>
    <img src='./assets/trust_background.png' />
    <div className='absolute w-full top-[25%]'>
      <div className=' container mx-auto '>
        <div className='px-[50px]'>
          <h2 className='text-[44px] font-bold max-w-md text-white'>Frage jetzt Deinen
            neuen Pool an</h2>
          <p className='text-[16px] max-w-[500px] text-white mt-2'>Beantworte uns ein paar Fragen, damit wir Dein Anliegen perfekt
            bearbeiten können und Dich anschließend kontaktieren können.</p>
          <div className='flex gap-8 mt-12'>
            <button className=' flex items-center text-white gap-4  bg-[#1E75EE] px-[16px] py-[19px]'>
              <span className='text-[14px]'>HIER ENTLANG</span>
              <svg fill="currentColor" viewBox="0 0 16 16" height="1em">
                <path fillRule="evenodd" d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z" />
              </svg>
            </button>
            <button className='border text-white gap-4  bg-transparent px-[26px] py-[19px]'>LEISTUNGEN</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);