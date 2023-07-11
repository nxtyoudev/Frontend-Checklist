import React from "react";
import HandsSvg from '../../public/assets/abouthands.svg';
import MedalSvg from '../../public/assets/aboutmedal.svg';
import AboutRectangle from '../../public/assets/about-rectangle.svg'
import AboutRectangleMobile from '../../public/assets/aboutrectangle-mobile.svg'
import DiamondSvg from '../../public/assets/aboutdiamond.svg'

export default () => (
  <div className="max-w-[1440px] py-[71px] mt-[50px] md:mt-[97px]">
    <div className='flex flex-col md:gap-5 gap-2.5 items-center justify-center'>
      <div className="md:w-[515px] w-[345px] font-bold text-black md:text-[44px] text-[32px] md:leading-[44px] leading-8 text-center">
        Wir liefern wir unvergessliche Sommer
      </div>
      <div className="mt-2.5 md:text-lg text-base md:leading-7 leading-6 text-black text-center">
        pünktlich – hochwertig – verlässlich – kundenorientiert
      </div>
      <a href="https://formular.mg-pools.de/start/" target="_blank" className="mt-[57px] md:hidden flex items-center text-white gap-4  bg-[#1E75EE] px-[18px] py-[21px]">
        <span className='text-[14px]'>JETZT ANFRAGEN</span>
        <svg fill="currentColor" viewBox="0 0 16 16" height="1em">
          <path fillRule="evenodd" d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z" />
        </svg>
      </a>
    </div>
    <div className="relative w-full md:mt-[105px] mt-[53px] md:px-[100px] px-[15px]">
      <div className="absolute md:w-[284px] w-[97px] md:h-[281px] h-[94px] md:-top-[50px] -top-[12px] md:right-[25px] right-0.5 border-[3px] border-[#196DB7]"></div>
      <img src='./assets/abouthero.jpg' className="relative md:block hidden md:w-auto w-full md:h-auto h-[325px] bg-cover" />
      <img src='./assets/abouthero-mobile.jpg' className="relative md:hidden block w-full h-[281px] bg-cover" />
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
    <div className="md:mt-[120px] mt-[38px] md:px-[100px] px-4">
      <div className="flex flex-col items-center justify-center gap-2.5">
        <div className="md:text-base text-sm md:leading-7 leading-4 text-[#1E75EE] uppercase">
          Angebot und Service
        </div>
        <div className="font-bold md:text-[48px] text-[32px] md:leading-[52px] leading-9 text-black md:text-start text-center">
          Unser Angebot individuell für Dich
        </div>
      </div>
      <div className="md:mt-[77px] mt-4 flex md:flex-row flex-col md:justify-between md:gap-[151px] gap-4 items-center">
        <div className="relative">
          <div className="absolute md:w-[204px] w-[90px] md:h-[204px] h-[76px] md:-bottom-[30px] -bottom-2.5 md:-right-[19px] -right-4 border-[3px] border-[#196DB7] z-0"></div>
          <img src='./assets/about2.jpg' className="min-w-[469px] md:block hidden relative " />
          <img src='./assets/aboutmobile2.jpg' className="w-full h-[190px] md:hidden block relative" />
        </div>
        <div>
          <div className="md:text-base text-sm leading-4 text-[#1E75EE] uppercase">01/ angebot</div>
          <div className="mt-2.5 font-semibold md:text-[28px] text-2xl md:leading-[42px] leading-9 text-black">Individuelles Angebot</div>
          <div className="mt-2.5 md:text-lg text-base md:leading-7 leading-6 text-black">Im ersten Schritt besprechen wir gemeinsam Ihr Vorhaben und Ihre individuellen Wünsche. Auf Ihre Bedürfnisse angepasst arbeite ich für Sie einen genauen Plan für Ihr Vorhaben aus. Wir besprechen alle Details und erst wenn Sie mir das GO geben, legen wir los.</div>
          <div className="md:mt-[30px] mt-4 flex flex-row items-center gap-5">
            <img src={HandsSvg} />
            <div className="md:text-lg text-base md:leading-7 leading-6 text-black">Individuelles Angebot auf Ihre Bedürfnisse abgestimmt</div>
          </div>
          <a href="https://formular.mg-pools.de/start/" target="_blank" className="md:block hidden">
            <button className="md:mt-[50px] mt-2 md:px-[30px] md:w-auto w-full py-[14px] bg-[#1E75EE]">
              <div className="font-medium text-base leading-6 text-white text-center">JETZT ANFRAGEN</div>
            </button>
          </a>
        </div>
      </div>
      <div className="md:mt-[45px] mt-[88px] flex md:flex-row flex-col md:justify-between md:gap-[151px] gap-4 items-center">
        <div className="relative md:hidden block">
          <img src='./assets/aboutmobile3.jpg' className='w-full h-[190px] relative' />
        </div>
        <div>
          <div className="md:text-base text-sm leading-4 text-[#1E75EE] uppercase">02/ UMSETZUNG</div>
          <div className="mt-2.5 font-semibold md:text-[28px] text-2xl md:leading-[42px] leading-9 text-black">Bauen Deines Pools</div>
          <div className="mt-2.5 md:text-lg text-base md:leading-7 leading-6 text-black">Im nächsten Schritt gehe ich mit meinem Team an die Umsetzung. Du musst Dich um nichts kümmern. Wir bauen und Du genießt. </div>
          <div className="md:mt-[30px] mt-4 flex flex-row items-center gap-5">
            <img src={HandsSvg} />
            <div className="md:text-lg text-base md:leading-7 leading-6 text-black">Energie effizient und nachhaltig </div>
          </div>
          <a href="https://formular.mg-pools.de/start/" target="_blank">
            <button className="md:mt-[50px] mt-[28px] md:px-[30px] md:w-auto w-full py-[14px] bg-[#1E75EE]">
              <div className="font-medium text-base leading-6 text-white">JETZT ANFRAGEN</div>
            </button>
          </a>
        </div>
        <div className="relative md:block hidden">
          <img src='./assets/about3.jpg' className="min-w-[469px] relative" />
        </div>
      </div>
      <div className="md:mt-[45px] mt-[58px] flex md:flex-row flex-col md:justify-between md:gap-[151px] gap-4 items-center relative">
        <div className="md:hidden block absolute -top-[29px] -left-[30px] w-[90px] h-[76px] border-[3px] border-[#196DB7]"></div>
        <div className="relative">
          <div className="md:block hidden absolute w-[204px] h-[204px] -top-4 -right-7 border-[3px] border-[#196DB7] z-0"></div>
          <img src='./assets/about4.jpg' className="min-w-[469px] md:block hidden relative " />
          <img src='./assets/aboutmobile4.jpg' className="w-full md:hidden block relative" />
        </div>
        <div>
          <div className="md:text-base text-sm leading-4 text-[#1E75EE] uppercase">03/ Pflege und Wartung</div>
          <div className="mt-2.5 font-semibold md:text-[28px] text-2xl md:leading-[42px] leading-9 text-black">Lifetime Pool Care </div>
          <div className="mt-2.5 md:text-lg text-base md:leading-7 leading-6 text-black">Nachdem wir Dein Vorhaben umgesetzt haben, können wir uns weiterhin um die Wartung und Pflege der gesamten Schwimmbadtechnik kümmern.</div>
          <div className="md:mt-[30px] mt-4 flex flex-row items-center gap-5">
            <img src={MedalSvg} />
            <div className="md:text-lg text-base md:leading-7 leading-6 text-black">Lieferung der kompletten Schwimmbadchemie, Pflegeprodukten und Zubehör Namenhafter Hersteller</div>
          </div>
          <a href="https://formular.mg-pools.de/start/" target="_blank">
            <button className="md:mt-[50px] mt-[28px] md:px-[30px] md:w-auto w-full py-[14px] bg-[#1E75EE]">
              <div className="font-medium text-base leading-6 text-white">JETZT ANFRAGEN</div>
            </button>
          </a>
        </div>
      </div>
    </div>
    <div className="md:mt-[218px] mt-[94px] md:px-[100px] px-4">
      <div className="flex flex-col items-center gap-2.5">
        <div className="md:text-base text-sm leading-4 text-[#1E75EE]">Impressionen</div>
        <div className="font-bold md:text-[48px] text-[32px] md:leading-[52px] leading-9 text-black md:text-start text-center">Ein Einblick in unsere Arbeit</div>
      </div>
      <div className="md:mt-20 mt-4 flex md:flex-row flex-col md:justify-between justify-start md:gap-[50px] gap-2.5">
        <div className="relative">
          <div className="absolute md:w-[204px] w-[142px] md:h-[204px] h-[142px] md:-top-7 -top-3 md:-left-9 -left-3 border-[3px] border-[#196DB7] z-0"></div>
          <div className="md:flex hidden flex-col gap-[17px] relative">
            <div className=" flex flex-row gap-[17px]">
              <img src="./assets/about-gallery-1.jpg" className="w-[259px]" />
              <img src="./assets/about-gallery-2.jpg" className="w-[536px]" />
            </div>
            <div className="flex flex-row gap-[17px]">
              <img src="./assets/about-gallery-3.jpg" className="w-[536px]" />
              <img src="./assets/about-gallery-4.jpg" className="w-[259px]" />
            </div>
            <div className=" flex flex-row gap-[17px]">
              <img src="./assets/about-gallery-5.jpg" className="w-[259px]" />
              <img src="./assets/about-gallery-6.jpg" className="w-[536px]" />
            </div>
          </div>
          <div className="md:hidden flex flex-col gap-2.5 relative">
            <img src="./assets/about-gallery-mobile-1.jpg" className="w-full h-[250px]" />
            <img src="./assets/about-gallery-mobile-2.jpg" className="w-full h-[250px]" />
            <img src="./assets/about-gallery-mobile-3.jpg" className="w-full h-[250px]" />
          </div>
          <div className="md:hidden block -translate-y-[50px] relative">
            <img src={AboutRectangleMobile} className="w-full h-auto" />
            <div className="absolute w-full top-0 px-[13px] py-[25px] flex flex-col gap-[28px]">
              <div className="flex flex-row pl-[21px] justify-between items-center">
                <div className="flex flex-col items-center gap-[5px]">
                  <div className="font-medium text-[24px] leading-6 text-black">1090 Liter</div>
                  <div className="text-base leading-4 text-black">Fassungsvermögen</div>
                </div>
                <div className="flex flex-col items-center gap-[5px]">
                  <div className="font-medium text-[24px] leading-6 text-black">125 m³</div>
                  <div className="text-base leading-4 text-black">Beckengröße</div>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col items-center gap-[5px]">
                  <div className="font-medium text-[24px] leading-6 text-black">2903+</div>
                  <div className="text-base leading-4 text-black">Unvergessliche Momente</div>
                </div>
                <div className="flex flex-col items-center gap-[5px]">
                  <div className="font-medium text-[24px] leading-6 text-black">290 h</div>
                  <div className="text-base leading-4 text-black">Spaß pro Jahr</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:mt-[34px] mt-0 flex flex-col gap-[35px] md:w-[360px] w-full">
          <div className="flex flex-col md:gap-4 gap-2.5">
            <div className="md:text-base text-sm md:leading-7 leading-[21px] text-[#1E75EE] uppercase">Unsere Kunden</div>
            <div className="font-semibold md:text-[28px] text-[24px] md:leading-[42px] leading-9 text-black">
              Hotels, private Pools, Wellness & Spa
            </div>
          </div>
          <div className="md:text-lg text-base md:leading-7 leading-6 text-black">
            Wir verbinden Leidenschaft mit Kompetenz und liefern Dir unvergessliche Sommermomente mit Deinem Pool-Traum!
          </div>
          <div className="md:text-lg text-base md:leading-7 leading-6 text-black">
            Wir haben uns auf den Bau von privaten und öffentlichen Schwimmbädern fokussiert. Egal ob für Dein Zuhause im Garten, für den Wellness Bereich indoor oder für Deine Hotelanlage, um Deinen Hotelgästen ein ganz besonderes Schwimm-Erlebnis zu bieten.
          </div>
        </div>
      </div>
      <div className="md:flex hidden justify-end">
        <div className="relative -translate-y-1/2">
          <img src={AboutRectangle} />
          <div className="absolute w-[950px] pl-[80px] pr-[128px] top-1/2 -translate-y-1/2 flex flex-row justify-between items-center">
            <div className="flex flex-col gap-[5px] items-center">
              <div className="font-medium text-[28px] leading-7 text-[#FF0000]">1090 Liter</div>
              <div className="text-base leading-4 text-[#FF0000]">Fassungsvermögen</div>
            </div>
            <div className="flex flex-col gap-[5px] items-center">
              <div className="font-medium text-[28px] leading-7 text-[#FF0000]">125 m³</div>
              <div className="text-base leading-4 text-[#FF0000]">Beckengröße</div>
            </div>
            <div className="flex flex-col gap-[5px] items-center">
              <div className="font-medium text-[28px] leading-7 text-[#FF0000]">xxx</div>
              <div className="text-base leading-4 text-[#FF0000]">Länge</div>
            </div>
            <div className="flex flex-col gap-[5px] items-center">
              <div className="font-medium text-[28px] leading-7 text-[#FF0000]">xxxx</div>
              <div className="text-base leading-4 text-[#FF0000]">Breite</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="md:mt-[120px] mt-9 md:px-[100px] px-4">
      <div className="flex md:flex-row flex-col md:justify-between justify-start items-center md:gap-[57px] gap-">
        <div className="md:flex hidden flex-row items-center">
          <div className="relative">
            <div className="absolute w-[204px] h-[204px] -bottom-[17px] -right-[35px] border-[3px] border-[#196DB7]"></div>
            <img src="./assets/about5.jpg" className="w-[481px] relative z-10" />
          </div>
          <img src="./assets/about6.png" className="w-[357px] relative -translate-x-1/2 z-20" />
        </div>
        <div className="md:w-[475px] w-full">
          <div className="md:text-base text-sm text-[#1E75EE]">
            MEINE WERTE
          </div>
          <div className="mt-2.5 md:w-[475px] w-full font-bold md:text-[48px] text-[32px] md:leading-[52px] leading-9 text-black">
            Nach diesen Werten lebe und arbeite ich.
          </div>
          <div className="md:mt-11 mt-[30px] flex flex-col md:gap-[25px] gap-4">
            <div className="w-full px-2.5 md:py-[22px] py-[14px] flex flex-row gap-[21px] items-start border border-[#CCDBDC]">
              <img src={HandsSvg} />
              <div className="flex flex-col gap-2.5">
                <div className="font-semibold text-[21px] leading-8 text-black">Zuverlässigkeit</div>
                <div className="text-lg leading-7">Zuverlässigkeit ist der Schlüssel zu Erfolg und Zufriedenheit.</div>
              </div>
            </div>
            <div className="w-full px-2.5 md:py-[22px] py-[14px] flex flex-row gap-[21px] items-start border border-[#CCDBDC]">
              <img src={DiamondSvg} />
              <div className="flex flex-col gap-2.5">
                <div className="font-semibold text-[21px] leading-8 text-black">Qualität</div>
                <div className="text-lg leading-7">Ich schätze Qualität als einen wertvollen Schatz</div>
              </div>
            </div>
            <div className="w-full px-2.5 md:py-[22px] py-[14px] flex flex-row gap-[21px] items-start border border-[#CCDBDC]">
              <img src={MedalSvg} />
              <div className="flex flex-col gap-2.5">
                <div className="font-semibold text-[21px] leading-8 text-black">Vertrauen</div>
                <div className="text-lg leading-7">Vertrauen ist der Grundpfeiler meines Wertesystems.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="https://formular.mg-pools.de/start/" target="_blank">
        <button className="md:hidden block mt-[26px] w-full py-[14px] bg-[#1E75EE]">
          <div className="font-medium text-base leading-6 text-white">JETZT ANFRAGEN</div>
        </button>
      </a>
    </div>
  </div>
);
