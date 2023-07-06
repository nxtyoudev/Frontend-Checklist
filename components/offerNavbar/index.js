import React, { useState, useEffect } from 'react';
import Link from "next/link";

export default () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleClick = () => {
    setIsMenuActive(!isMenuActive);
  };

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
    <header className={`${(visible === false && isMenuActive === false) && "bg-white"} fixed w-full z-[1000] top-0 lg:bg-white`}>
        <div className={`${isMenuActive ? 'hidden' : ''} container mx-auto px-6 py-3 flex justify-between items-center h-[97px]`}>
          <div className="hidden lg:flex justify-between items-center flex-[2]  ">
            <nav className="">
              <ul className="flex justify-end items-center">
                <li>
                  <a className="px-4 py-2 text-[18px] font-normal text-black" href="/">Startseite</a>
                </li>
                <li>
                  <a className="px-4 py-2 text-[18px] font-semibold text-black" href="/about">Über Mich</a>
                </li>
                <li>
                  <a className="px-4 py-2 text-[18px] font-normal text-black" href="/offer">Angebot</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className='flex-[1] flex justify-center'>
            <img src="./assets/header_logo.svg" alt="trafalgar logo" />
          </div>
          <div className='flex-[2] flex justify-end '>
            <a href="https://formular.mg-pools.de/start/" target="_blank">
              <button className="hidden lg:flex flex-row items-center gap-2 bg-[#1E75EE] pl-[21px] pr-[27px] py-5 font-medium text-[14px] text-white uppercase">
                <div>Zum Angebot</div>
                <svg width="39" height="12" viewBox="0 0 39 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M38.5303 6.53033C38.8232 6.23744 38.8232 5.76256 38.5303 5.46967L33.7574 0.696699C33.4645 0.403806 32.9896 0.403806 32.6967 0.696699C32.4038 0.989593 32.4038 1.46447 32.6967 1.75736L36.9393 6L32.6967 10.2426C32.4038 10.5355 32.4038 11.0104 32.6967 11.3033C32.9896 11.5962 33.4645 11.5962 33.7574 11.3033L38.5303 6.53033ZM0 6.75H38V5.25H0V6.75Z" fill="white"/>
                </svg>
              </button>
            </a>
            <div className="block lg:hidden">
              <button
                className={`space-y-1.5 ${isMenuActive ? "hidden" : ""}`}
                onClick={handleClick}
              >
                <span
                  className={`block h-[3px] w-7 rounded-full bg-black transition-all group-hover:bg-gallery`}
                ></span>
                <span
                  className={`block h-[3px] w-7 rounded-full bg-black transition-all group-hover:bg-gallery`}
                ></span>
                <span
                  className={`block h-[3px] w-7 rounded-full bg-black transition-all group-hover:bg-gallery`}
                ></span>
              </button>
              <button
                className={`${isMenuActive ? "" : "hidden"}`}
                onClick={handleClick}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.791249 1.01041C1.05379 0.747952 1.40982 0.60051 1.78105 0.60051C2.15228 0.60051 2.50831 0.747952 2.77085 1.01041L8.78105 7.02061L14.7912 1.01041C14.9204 0.876697 15.0749 0.770042 15.2457 0.696669C15.4165 0.623297 15.6002 0.584676 15.7861 0.583061C15.972 0.581445 16.1563 0.616867 16.3284 0.687261C16.5004 0.757654 16.6568 0.861608 16.7882 0.993058C16.9197 1.12451 17.0236 1.28082 17.094 1.45288C17.1644 1.62493 17.1998 1.80928 17.1982 1.99517C17.1966 2.18106 17.158 2.36477 17.0846 2.53558C17.0112 2.70638 16.9046 2.86087 16.7708 2.99001L10.7606 9.00021L16.7708 15.0104C17.0259 15.2745 17.167 15.6281 17.1638 15.9952C17.1606 16.3622 17.0134 16.7134 16.7538 16.973C16.4942 17.2325 16.1431 17.3798 15.776 17.383C15.4089 17.3861 15.0553 17.245 14.7912 16.99L8.78105 10.9798L2.77085 16.99C2.50681 17.245 2.15316 17.3861 1.78609 17.383C1.41901 17.3798 1.06787 17.2325 0.808303 16.973C0.548731 16.7134 0.401494 16.3622 0.398305 15.9952C0.395115 15.6281 0.536228 15.2745 0.791249 15.0104L6.80145 9.00021L0.791249 2.99001C0.528789 2.72747 0.381348 2.37144 0.381348 2.00021C0.381348 1.62898 0.528789 1.27295 0.791249 1.01041Z"
                    fill="#111928"
                  />
                </svg>
              </button>
            </div>
          </div>

        </div>
        <div className={`${isMenuActive ? '' : 'hidden'} min-h-screen w-full flex flex-row justify-end bg-black bg-opacity-50`}>
          <div className=" w-4/5 min-h-screen bg-white">
            <div className="flex flex-row justify-between pt-10 px-6">
              <img src="./assets/header-logo.png" alt="trafalgar logo" className="w-[90px]" />
              <button
                className={`${isMenuActive ? "" : "hidden"}`}
                onClick={handleClick}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.791249 1.01041C1.05379 0.747952 1.40982 0.60051 1.78105 0.60051C2.15228 0.60051 2.50831 0.747952 2.77085 1.01041L8.78105 7.02061L14.7912 1.01041C14.9204 0.876697 15.0749 0.770042 15.2457 0.696669C15.4165 0.623297 15.6002 0.584676 15.7861 0.583061C15.972 0.581445 16.1563 0.616867 16.3284 0.687261C16.5004 0.757654 16.6568 0.861608 16.7882 0.993058C16.9197 1.12451 17.0236 1.28082 17.094 1.45288C17.1644 1.62493 17.1998 1.80928 17.1982 1.99517C17.1966 2.18106 17.158 2.36477 17.0846 2.53558C17.0112 2.70638 16.9046 2.86087 16.7708 2.99001L10.7606 9.00021L16.7708 15.0104C17.0259 15.2745 17.167 15.6281 17.1638 15.9952C17.1606 16.3622 17.0134 16.7134 16.7538 16.973C16.4942 17.2325 16.1431 17.3798 15.776 17.383C15.4089 17.3861 15.0553 17.245 14.7912 16.99L8.78105 10.9798L2.77085 16.99C2.50681 17.245 2.15316 17.3861 1.78609 17.383C1.41901 17.3798 1.06787 17.2325 0.808303 16.973C0.548731 16.7134 0.401494 16.3622 0.398305 15.9952C0.395115 15.6281 0.536228 15.2745 0.791249 15.0104L6.80145 9.00021L0.791249 2.99001C0.528789 2.72747 0.381348 2.37144 0.381348 2.00021C0.381348 1.62898 0.528789 1.27295 0.791249 1.01041Z"
                    fill="#111928"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-[38px] pl-6 flex flex-col gap-6">
              <Link href="/">
                <span className="text-lg leading-7 font-normal text-black">
                  Startseite
                </span>
              </Link>
              <Link href="/about">
                <span
                  className="text-lg leading-7 font-normal text-black"
                >
                Über Mich
                </span>
              </Link>
              <Link href="/offer">
                <span className="font-semibold text-black text-lg leading-7">
                  Angebot
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
