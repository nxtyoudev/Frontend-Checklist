import React from 'react';

export default () => (
  <section className='container mx-auto mb-[100px]'>
    <div className='grid grid-cols-2'>
      <div className='p-20'>
        <img src='./assets/cta_photo.png' />
      </div>
      <div className='flex flex-col justify-center pl-[20px]'>
        <div className='text-[16px] text-[#1E75EE]'>Über mich</div>
        <h2 className='text-[48px] text-black font-bold max-w-xl'>Es ist mehr als nur ein Pool - Es ist Leidenschaft</h2>
        <p className='text-[18px] text-black  max-w-2xl'>Matthias Grundmann ist seit 2004 auf die Schwimmbad- und Wellnessbranche spezialisiert. Er bietet seinen Auftraggebern eine gesamte Leistungspalette von der Beratung bis hin zum Kundendienst für private Pools und Hotel Schwimmbäder - indoor & outdoor.</p>
        <div className='flex justify-between'>
          <div className='text-[69px] font-bold'>
            <div><span className='text-[#4A92F0]'>+</span>300</div>
            <div className='text-[16px] font-normal'>glückliche Kunden</div>
          </div>
          <div className='text-[69px] font-bold'>
            <div><span>+</span><span className='text-[#4A92F0]'>20J</span></div>
            <div className='text-[16px] font-normal'>Erfahrung</div>
          </div>
          <div className='text-[69px] font-bold'>
            <div><span className='text-[#4A92F0]'>+</span>50</div>
            <div className='text-[16px] font-normal'>fertiggestellte neue Pools</div>
          </div>
        </div>
        <div className=''>
          <button type="button" className="text-white text-[16px]  bg-[#1E75EE] px-[24px] py-[14px] mt-[20px]">
            ÜBER MICH
          </button>
        </div>
      </div>
    </div>
    <div className='grid grid-cols-2'>
      <div className='flex flex-col justify-center pl-[20px]'>
        <div className='text-[16px] text-[#1E75EE]'>SERVICES</div>
        <h2 className='text-[39px] text-black font-bold max-w-xl'>Unsere Angebot abgestimmt auf Deine Bedürfnisse</h2>
        <div className='flex justify-between flex-col max-w-[32rem] mt-[30px] gap-4'>
          <div className='flex border border-[#CCDBDC] px-[40px] py-[15px] items-center gap-8'>
            <div ><img src='./assets/serviceIcon1.png' className='min-w-[60px]' /></div>
            <div>
              <div className='text-[21px]'>NEUBAU DEINES POOLS</div>
              <div className='text-[16px] mt-[10px]'>Von der Planung bis zum Bau begleiten
                wir dich zum Deinem Pool. </div>
            </div>
          </div>
        <div className='flex border border-[#CCDBDC] px-[40px] py-[15px] items-center gap-8'>
            <div ><img src='./assets/serviceIcon2.png' className='min-w-[60px]' /></div>
            <div>
              <div className='text-[21px]'>WARTUNG</div>
              <div className='text-[16px] mt-[10px]'>Wartung der Schwimmbadtechnik auch Witty, Ospa, Topras, Dinotec, BWT oder Sopra. </div>
            </div>
          </div>
        <div className='flex border border-[#CCDBDC] px-[40px] py-[15px] items-center gap-8'>
            <div ><img src='./assets/serviceIcon3.png' className='min-w-[60px]' /></div>
            <div>
              <div className='text-[21px]'>REPARATUR UND SERVICE</div>
              <div className='text-[16px] mt-[10px]'>Wir reparieren Deinen Pool komplett
                nur mit Original-Herstellermaterialien.</div>
            </div>
          </div>
        <div className='flex border border-[#CCDBDC] px-[40px] py-[15px] items-center gap-8'>
            <div ><img src='./assets/serviceIcon4.png' className='min-w-[60px]' /></div>
            <div>
              <div className='text-[21px]'>SANIERUNG & MODERNISIERUNG</div>
              <div className='text-[16px] mt-[10px]'>Wir bringen Deinen Pool auf den neuesten
                Stand der Technik.</div>
            </div>
          </div>
        <div className='flex border border-[#CCDBDC] px-[40px] py-[15px] items-center gap-8'>
            <div ><img src='./assets/serviceIcon5.png' className='min-w-[60px]' /></div>
            <div>
              <div className='text-[21px]'>SMART TECHNIK</div>
              <div className='text-[16px] mt-[10px]'>Hochkomplexte Pooltechnik von Beleuchtung,
                Steuerung, Überwachung uvm. </div>
            </div>
          </div>
        </div>
        <div className=''>
          <button type="button" className="text-white text-[16px]  bg-[#1E75EE] px-[24px] py-[14px] mt-[20px]">
            Jetzt anfragen
          </button>
        </div>
      </div>
      <div className=''>
        <div>
          <img src='./assets/cta_photo1.png' />
        </div>
      </div>
    </div>
  </section>
);