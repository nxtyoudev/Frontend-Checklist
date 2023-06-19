import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
    partialVisibilityGutter: 40
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    partialVisibilityGutter: 40
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    partialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 40
  }
};
const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <div className="absolute  right-[50px] md:right-2/4 bottom-[80px]">
      <div className='flex gap-8'>
        <button onClick={() => next()}>
          <svg width="50" height="12" viewBox="0 0 50 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.5962 11.0104 6.5962 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.5962 1.46447 6.5962 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.469669 5.46967ZM50 5.25L1 5.25V6.75L50 6.75V5.25Z" fill="#1E75EE" />
          </svg>
        </button>
        <button onClick={() => previous()} className='mr-[5px]'>
          <svg width="50" height="12" viewBox="0 0 50 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M49.5303 6.53033C49.8232 6.23744 49.8232 5.76256 49.5303 5.46967L44.7574 0.696699C44.4645 0.403806 43.9896 0.403806 43.6967 0.696699C43.4038 0.989593 43.4038 1.46447 43.6967 1.75736L47.9393 6L43.6967 10.2426C43.4038 10.5355 43.4038 11.0104 43.6967 11.3033C43.9896 11.5962 44.4645 11.5962 44.7574 11.3033L49.5303 6.53033ZM0 6.75H49V5.25H0V6.75Z" fill="#1E75EE" />
          </svg>
        </button>
      </div>
    </div>
  )
};

export default () => (
  <>
    <section className='relative'>
      <div className='hidden md:grid grid-cols-1 md:grid-cols-2 pt-[20px] pb-[70px]'>
        <div className='pr-[50px] md:pr-[0]'>
          <Carousel responsive={responsive} itemClass="px-[5px]" infinite={true} partialVisible={true} rtl={true} arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}>
            <div className="relative">
              <img className='max-h-[660px]' src='./assets/stat_carousel2.png' />
              <div className='absolute bottom-[70px] w-full text-white'>
                <div className="text-center text-[16px]">AUßEN</div>
                <div className="text-center text-[32px]">Poolanalgen</div>
              </div>
            </div>
            <div className="relative">
              <img className='max-h-[660px]' src='./assets/stat_carousel3.png' />
              <div className='absolute bottom-[70px] w-full text-white'>
                <div className="text-center text-[16px]">INNEN</div>
                <div className="text-center text-[32px]">Poolanalgen</div>
              </div>
            </div>
            <div className="relative">
              <img className='max-h-[660px]' src='./assets/stat_carousel1.jpg' />
              <div className='absolute bottom-[70px] w-full text-white'>
                <div className="text-center text-[16px]">INDOR</div>
                <div className="text-center text-[32px]">Hotelanlagen</div>
              </div>
            </div>
          </Carousel>
        </div>
        <div className='flex flex-col justify-center pl-[20px]'>
          <div className='text-[16px] text-[#1E75EE]'>UNSERE POOLS</div>
          <h2 className='text-[48px] text-black font-bold max-w-2xl'>Dein zuverlässiger Partner rund um Deinen Pool</h2>
          <p className='text-[18px] text-black  max-w-md'>Mit uns baust Du Deinen Traumpool nach Deinen Wünschen und sparen dabei nachhaltig Energie.</p>
          <div>
            <button type="button" className="text-white text-[16px]  bg-[#1E75EE] px-[24px] py-[14px] mt-[20px]">
              JETZT ANFRAGEN
            </button>
          </div>
        </div>
      </div>
      <div className='md:hidden grid grid-cols-1 md:grid-cols-2 pt-[20px] pb-[70px] gap-8'>
        <div className='flex flex-col justify-center px-[20px]'>
          <div className='text-[14px] text-[#1E75EE]'>UNSERE POOLS</div>
          <h2 className='text-[32px] text-black font-bold max-w-2xl'>Dein zuverlässiger Partner rund um Deinen Pool</h2>
          <p className='text-[16px] text-black  max-w-md'>Mit uns baust Du Deinen Traumpool nach Deinen Wünschen und sparen dabei nachhaltig Energie.</p>
          <div>
            <button type="button" className="w-full  text-white text-[16px]  bg-[#1E75EE] px-[24px] py-[14px] mt-[20px]">
              JETZT ANFRAGEN
            </button>
          </div>
        </div>
        <div className='pr-[50px] md:pr-[0]'>
          <Carousel responsive={responsive} itemClass="px-[5px]" infinite={true} partialVisible={true} rtl={true} arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}>
            <div className="relative">
              <img className='max-h-[660px]' src='./assets/stat_carousel2.png' />
              <div className='absolute bottom-[70px] w-full text-white'>
                <div className="text-center text-[16px]">AUßEN</div>
                <div className="text-center text-[32px]">Poolanalgen</div>
              </div>
            </div>
            <div className="relative">
              <img className='max-h-[660px]' src='./assets/stat_carousel3.png' />
              <div className='absolute bottom-[70px] w-full text-white'>
                <div className="text-center text-[16px]">INNEN</div>
                <div className="text-center text-[32px]">Poolanalgen</div>
              </div>
            </div>
            <div className="relative">
              <img className='max-h-[660px]' src='./assets/stat_carousel1.jpg' />
              <div className='absolute bottom-[70px] w-full text-white'>
                <div className="text-center text-[16px]">INDOR</div>
                <div className="text-center text-[32px]">Hotelanlagen</div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      <hr className='py-4 container mx-auto' />
    </section >
  </>
);
