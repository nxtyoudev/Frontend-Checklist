import React from 'react';

export default () => (
    <>
        <div className="stat-area hidden lg:block text-center">
            <div className="stat-holder mx-auto">
                <div className="stat_item">
                    <span className="stat_item__h3">1090 Liter</span>
                    <span className="stat_item__p">Fassungsvermögen</span>
                </div>
                <div className="stat_item">
                    <span className="stat_item__h3">125 m³</span>
                    <span className="stat_item__p">Beckengröße</span>
                </div>
                <div className="stat_item">
                    <span className="stat_item__h3">290 h</span>
                    <span className="stat_item__p">Spaß pro Jahr</span>
                </div>
                <div className="stat_item">
                    <span className="stat_item__h3">2903+</span>
                    <span className="stat_item__p">Unvergessliche Momente</span>
                </div>
                <a href="https://formular.mg-pools.de/start/" target="_blank">
                    <div className="btn main-btn__dark hidden xl:block">
                        <span>JETZT ANFRAGEN</span>
                    </div>
                </a>
            </div>
        </div>
        <div className='block lg:hidden mt-[-100px] py-[50px]' style={{ backgroundImage: 'url(/assets/stat_background.png)', backgroundSize: '100% 100%' }}>
            <div className="">
                <div className="flex flex-row justify-center gap-[52px] pl-[34px] pr-4">
                    <div className="text-center">
                        <div className="text-[24px] font-medium">1090 Liter</div>
                        <div className="text-[16px]">Fassungsvermögen</div>
                    </div>
                    <div className="text-center">
                        <div className="text-[24px] font-medium">125 m³</div>
                        <div className="text-[16px]">Beckengröße</div>
                    </div>
                </div>
                <div className="mt-7 flex flex-row justify-center gap-[28px] pl-4 pr-4">
                    <div className="text-center">
                        <div className="text-[24px] font-medium">2903+</div>
                        <div className="text-[16px]">Unvergessliche Momente</div>
                    </div>
                    <div className="text-center">
                        <div className="text-[24px] font-medium">290 h</div>
                        <div className="text-[16px]">Spaß pro Jahr</div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
