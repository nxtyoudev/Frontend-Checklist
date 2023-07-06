import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
    partialVisibilityGutter: 40
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    partialVisibilityGutter: 40
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    partialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 40
  }
};

const responsive1 = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  }
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <div className="absolute right-2/4 bottom-[80px]">
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
  <section>
    <div className=' mx-auto py-[100px]'>
      <div className='text-center text-[16px] text-[#1E75EE]'>Unsere kunden</div>
      <div className='text-center font-bold text-[48px]'>Diese Kunden vertrauten uns bereits</div>
      <Carousel responsive={responsive} sliderClass='flex items-center' arrows={false} autoPlay={true} infinite={true} autoPlaySpeed={1000}>
        <img src='./assets/1.jpg' />
        <img src='./assets/2.jpg' />
        <img src='./assets/3.jpg' />
        <img src='./assets/4.jpg' />
        <img src='./assets/5.jpg' />
        <img src='./assets/6.jpg' />
        <img src='./assets/7.jpg' />
        <img src='./assets/8.jpg' />
        <img src='./assets/9.jpg' />
      </Carousel>
    </div>
    <Carousel responsive={responsive1} itemClass="px-[5px]" infinite={true} partialVisible={true} rtl={true} arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}>
      <div>
        
      </div>
    </Carousel>
  </section>
);