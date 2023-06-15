import React, { useState, useEffect } from 'react';

export default () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(currentScrollPos < 64);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <>
      <header className={`bg-white fixed w-full z-[1000] top-0`}>
        <div class="container mx-auto px-6 py-3 flex justify-between items-center h-[97px]">
          <div class="flex justify-between items-center flex-1">
            <nav class="hidden md:block">
              <ul class="flex justify-end items-center">
                <li>
                  <a class="px-4 py-2 text-[18px] font-semibold text-black" href="/">Startseite</a>
                </li>
                <li>
                  <a class="px-4 py-2 text-[18px] font-normal text-black" href="/about">Über Mich</a>
                </li>
                <li>
                  <a class="px-4 py-2 text-[18px] font-normal text-black" href="/offer">Angebot</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className='flex-1 flex justify-center'>
            <img src="./assets/header_logo.svg" alt="trafalgar logo" />
          </div>
          <div className='flex-1 flex justify-end'>

            <button className="border border-[#1E75EE] px-[31px] py-[18px] text-[14px] text-black">Jetzt anfragen</button>
          </div>
        </div>
      </header>
    </>
  );
};
