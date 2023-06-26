import React from "react";
import aboutCarousel1 from "../../public/assets/aboutCarousel1.svg";
import aboutCarousel2 from "../../public/assets/aboutCarousel2.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    partialVisibilityGutter: 800,
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    partialVisibilityGutter: 600,
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    partialVisibilityGutter: 250,
    items: 1
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    partialVisibilityGutter: 100,
    items: 1
  }
};

const carouselData = [
  {
    img: aboutCarousel1,
  },
  {
    img: aboutCarousel2,
  },
];

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <div className="absolute  bottom-[10px] px-2">
      <div className='flex gap-8'>
        <button onClick={() => previous()}>
          <svg width="50" height="12" viewBox="0 0 50 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.5962 11.0104 6.5962 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.5962 1.46447 6.5962 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.469669 5.46967ZM50 5.25L1 5.25V6.75L50 6.75V5.25Z" fill="#1E75EE" />
          </svg>
        </button>
        <button onClick={() => next()} className='mr-[5px]'>
          <svg width="50" height="12" viewBox="0 0 50 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M49.5303 6.53033C49.8232 6.23744 49.8232 5.76256 49.5303 5.46967L44.7574 0.696699C44.4645 0.403806 43.9896 0.403806 43.6967 0.696699C43.4038 0.989593 43.4038 1.46447 43.6967 1.75736L47.9393 6L43.6967 10.2426C43.4038 10.5355 43.4038 11.0104 43.6967 11.3033C43.9896 11.5962 44.4645 11.5962 44.7574 11.3033L49.5303 6.53033ZM0 6.75H49V5.25H0V6.75Z" fill="#1E75EE" />
          </svg>
        </button>
      </div>
    </div>
  )
};

export default () => (
  <div className="about-carousel-container mt-[100px] pl-[20px] md:pl-[100px]">
    <div className="about-carousel-inner grid relative py-12">
      <Carousel responsive={responsive} infinite={true} itemClass="px-[5px]"  partialVisible={true} arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}>
        {carouselData.map((carousel, index) => (
          <div key={index} className="about-carousel-item">
            <img src={carousel.img} alt="image" />
          </div>
        ))}
      </Carousel>
    </div>
  </div>
);
