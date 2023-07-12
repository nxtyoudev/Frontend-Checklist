import React from "react";

const carouselData = [
    {
        img: './assets/1.png'
    },
    {
        img: './assets/2.png'
    },
    {
        img: './assets/3.png'
    },
    {
        img: './assets/4.png'
    },
    {
        img: './assets/5.png'
    },
    {
        img: './assets/6.png'
    },
    {
        img: './assets/7.png'
    },
    {
        img: './assets/8.png'
    },
]

export default () => (
    <div className="about-brands-container overflow-hidden px-[15px] md:px-[100px] items-start md:items-center">
        <div className='text-left md:text-center text-[14px] md:text-[16px] text-[#1E75EE] uppercase'>Unsere kunden</div>
        <div className='text-left md:text-center font-bold  text-[32px] md:text-[48px]'>Diese Kunden vertrauten uns bereits</div>
        {/* <div className="about-brands-carousel">
            {carouselData.map((carousel, index) => (
                <img src={carousel.img} key={index} />
            ))}
        </div> */}
        <section className="about-brands-carousel-section">
            <article className="about-brands-carousel-article">
                <div className="about-brands-carousel-div">
                    <ul className="items-center gap-8 justify-around">
                        {carouselData.map((carousel, index) => (
                            <li>
                                <img src={carousel.img} key={index} className="min-w-[100px]" />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="about-brands-carousel-div">
                    <ul className="items-center gap-8 justify-around">
                        {carouselData.map((carousel, index) => (
                            <li>
                                <img src={carousel.img} key={index} className="min-w-[100px]" />
                            </li>
                        ))}
                    </ul>
                </div>
            </article>
        </section>
    </div>
)