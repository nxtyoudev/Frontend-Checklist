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
                <a className="btn main-btn__dark hidden xl:block">
                    <span>JETZT ANFRAGEN</span>
                </a>
            </div>
        </div>
        <div className='block lg:hidden mt-[-100px] px-[50px] sm:px-[100px] py-[50px]' style={{ backgroundImage: 'url(/assets/stat_background.png)', backgroundSize: '100% 100%' }}>
            <div className="grid grid-cols-2 justify-center">
                <div className="text-center">
                    <div className="text-[24px]">1090 Liter</div>
                    <div className="text-[16px]">Fassungsvermögen</div>
                </div>
                <div className="text-center">
                    <div className="text-[24px]">125 m³</div>
                    <div className="text-[16px]">Beckengröße</div>
                </div>
                <div className="text-center">
                    <div className="text-[24px]">290 h</div>
                    <div className="text-[16px]">Spaß pro Jahr</div>
                </div>
                <div className="text-center">
                    <div className="text-[24px]">2903+</div>
                    <div className="text-[16px]">Unvergessliche Momente</div>
                </div>
            </div>
        </div>
    </>
);
