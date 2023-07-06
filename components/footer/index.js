import React from 'react';
import Logo from './logo';
import Link from "next/link";
import LeftSvg from '../../public/assets/arrow-left.svg'
import EmailSvg from '../../public/assets/footer-email.svg'

export default () => (
  <footer id="footer" className="md:px-[100px] px-4 md:py-[87px] py-10 bg-[#0B1C29]">
    <div className="flex md:flex-row flex-col md:justify-between justify-start">
      <div className="flex-1">
        <div className="md:text-base text-sm leading-4 text-[#1E75EE]">Frage uns jetzt an!</div>
        <div className="mt-2.5 max-w-xl font-bold md:text-[48px] text-[32px] md:leading-[52px] leading-9 text-white">Wir freuen uns, Dir Deinen Traum vom eigenen Pool zu erfüllen!</div>
        <div className="md:mt-8 mt-2.5 md:text-lg text-base md:leading-7 leading-6 text-white max-w-lg">
          Beantworte uns ein paar Fragen, indem Du auf den Button hier unten klickst - danach können wir Deine Anfrage bestmöglich bearbeiten und melden uns schnellstmöglich bei Dir!
        </div>
        <a href="https://formular.mg-pools.de/start/" target="_blank">
          <button className="md:flex hidden mt-9 px-4 py-5 flex-row gap-4 items-center bg-[#1E75EE]">
            <div className="font-medium text-sm leading-6 text-white">JETZT ANFRAGEN</div>
            <img src={LeftSvg} />
          </button>
        </a>
      </div>
      <div className="flex-1 relative flex flex-row justify-end">
        <div className="relative md:mt-0 mt-[53px]">
          <div className="absolute md:block hidden w-[120px] h-[120px] -left-[19px] -bottom-[8px] border-[3px] border-[#196DB7]"></div>
          <img src="./assets/footer-image.jpg" className="md:block hidden w-[399px] relative" />
          <img src="./assets/footer-image-mobile.jpg" className="w-full md:hidden block" />
        </div>
      </div>
    </div>
    <div className="w-full h-[1px] md:mt-[68px] mt-[30px] bg-[#CCDBDC]"></div>
    <div className="md:mt-[37px] mt-[30px] flex md:flex-row flex-col gap-4 justify-between">
      <div>
        <img src="./assets/footer-logo.png" className="w-[90px]" />
        <div className="mt-8 md:w-[234px] w-full text-base leading-6 text-white">Matthias Grundmann ist seit 2018 mit seiner eigenen Pool-Firma selbstständig und erfüllt den Traum vom eigenen Pool!</div>
      </div>
      <div className="md:flex hidden flex-row flex-wrap md:gap-[70px] gap-[30px]">
        <div>
          <div className="font-medium text-base leading-6 text-[#1E75EE]">ÜBER UNS</div>
          <div className="mt-7 flex flex-col gap-2.5">
            <Link href='/about'><div className="font-medium text-sm leading-5 text-white">Über mich</div></Link>
            <div className="font-medium text-sm leading-5 text-white">Impressum</div>
            <div className="font-medium text-sm leading-5 text-white">Datenschutz</div>
          </div>
        </div>
        <div>
          <div className="font-medium text-base leading-6 text-[#1E75EE]">ÜBER UNS</div>
          <div className="mt-7 flex flex-col gap-2.5">
          <Link href='/about'><div className="font-medium text-sm leading-5 text-white">Über mich</div></Link>
            <div className="font-medium text-sm leading-5 text-white">SPA Bau</div>
            <div className="font-medium text-sm leading-5 text-white">Energieberatung</div>
            <div className="font-medium text-sm leading-5 text-white">Kundenservice</div>
          </div>
        </div>
        <div>
          <div className="font-medium text-base leading-6 text-[#1E75EE]">Wo Sie uns finden</div>
          <div className="mt-7 flex flex-col gap-2.5">
            <div className="font-medium text-sm leading-5 text-white">Facebook</div>
            <div className="font-medium text-sm leading-5 text-white">Instagram</div>
          </div>
        </div>
        <div>
          <div className="font-medium text-base leading-6 text-[#1E75EE]">KONTAKTIEREN SIE UNS</div>
          <a className="mt-7 flex flex-row items-center gap-8" href="mailto:info@mg-pools.de" target="_blank">
            <img src={EmailSvg} />
            <div className="flex flex-col gap-3">
              <div className="text-base leading-4 text-white">EMAIL</div>
              <div className="font-medium text-[22px] leading-4 text-white">info@mg-pools.de</div>
            </div>
          </a>
        </div>
      </div>
      <div className="mt-6 md:hidden block">
        <div className="flex flex-row gap-[30px]">
          <div>
            <div className="font-medium text-base leading-6 text-[#1E75EE]">Wo Sie uns finden</div>
            <div className="mt-4 flex flex-col gap-2">
              <div className="font-medium text-sm leading-5 text-white">Facebook</div>
              <div className="font-medium text-sm leading-5 text-white">Instagram</div>
            </div>
          </div>
          <div>
            <div className="font-medium text-base leading-6 text-[#1E75EE]">LEISTUNGEN</div>
            <div className="mt-4 flex flex-col gap-2">
              <div className="font-medium text-sm leading-5 text-white">Poolbau</div>
              <div className="font-medium text-sm leading-5 text-white">SPA Bau</div>
              <div className="font-medium text-sm leading-5 text-white">Energieberatung</div>
              <div className="font-medium text-sm leading-5 text-white">Kundenservice</div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="font-medium text-base leading-6 text-[#1E75EE]">KONTAKTIEREN SIE UNS</div>
          <a className="mt-7 flex flex-row items-center gap-4" href="mailto:info@mg-pools.de" target="_blank">
            <img src={EmailSvg} />
            <div className="flex flex-col gap-3">
              <div className="text-base leading-4 text-white">EMAIL</div>
              <div className="font-medium text-[22px] leading-4 text-white">info@mg-pools.de</div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div className="md:block hidden md:mt-[100px] mt-8 font-medium text-xs leading-4 text-white text-center md:text-start">
      <div>MG Schwimmbadtechnik © 2023</div>
      <div>Webdesign by NXT-YOU GmbH</div>
    </div>
    <div className="mt-[44px] md:hidden flex flex-row justify-center gap-[53px] font-medium text-sm text-white">
      <div>Impressum</div>
      <div>Datenschutz</div>
    </div>
    <div className="mt-8 md:hidden block text-center text-xs font-medium text-white">
      <div>Le Chomat© 2023</div>
      <div>Webdesign by NXT-YOU GmbH</div>
    </div>
  </footer>
);
