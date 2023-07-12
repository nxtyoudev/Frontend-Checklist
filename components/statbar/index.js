import React from 'react';

export default () => (
  <>
    <div className="stat-area hidden lg:block text-center">
      <div className="stat-holder mx-auto">
        <div className="flex flex-row items-center gap-10">
          <div className="stat_item">
            <span className="stat_item__h3">100</span>
            <span className="stat_item__p">gebaute Pools</span>
          </div>
          <div className="stat_item">
            <span className="stat_item__h3">300</span>
            <span className="stat_item__p">glückliche Kunden</span>
          </div>
          <div className="stat_item">
            <span className="stat_item__h3">20</span>
            <span className="stat_item__p">Jahre Erfahrung</span>
          </div>
        </div>
        <a href="https://formular.mg-pools.de/start/" target="_blank">
          <div className="px-6 py-[18px] border border-black lg:block hidden">
            <span className="text-base font-medium leading-[150%] text-black">JETZT ANFRAGEN</span>
          </div>
        </a>
      </div>
    </div>
    <div className='lg:hidden mt-[-100px] py-[50px] flex flex-col items-center' style={{ backgroundImage: 'url(/assets/stat_background.png)', backgroundSize: '100% 100%' }}>
      <div className="">
        <div className="flex flex-row pl-0">
          <div className="text-center">
            <div className="text-[30px] leading-[100%] font-medium text-black">20</div>
            <div className="text-[20px] leading-[150%] font-normal text-black">Jahre Erfahrung</div>
          </div>
        </div>
        <div className="mt-6 flex flex-row pl-0">
          <div className="text-center">
            <div className="text-[30px] leading-[100%] font-medium text-black">100</div>
            <div className="text-[20px] leading-[150%] font-normal text-black">gebaute Pools</div>
          </div>
          <div className="text-center -mt-10">
            <div className="text-[30px] leading-[100%] font-medium text-black">300</div>
            <div className="text-[20px] leading-[150%] font-normal text-black">glückliche Kunden</div>
          </div>
        </div>
      </div>
    </div>
  </>
);
