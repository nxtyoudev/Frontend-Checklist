import React from "react";
import brands1 from '../../public/assets/brands1.svg'
import brands2 from '../../public/assets/brands2.svg'
import brands3 from '../../public/assets/brands3.svg'
import brands4 from '../../public/assets/brands4.svg'
import brands5 from '../../public/assets/brands5.svg'
import brands6 from '../../public/assets/brands6.svg'
import brands7 from '../../public/assets/brands7.svg'

const carouselData = [
    {
        img: brands1
    },
    {
        img: brands2
    },
    {
        img: brands3
    },
    {
        img: brands4
    },
    {
        img: brands5
    },
    {
        img: brands6
    },
    {
        img: brands7
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
                                <img src={carousel.img} key={index} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="about-brands-carousel-div">
                    <ul className="items-center gap-8 justify-around">
                        {carouselData.map((carousel, index) => (
                            <li>
                                <img src={carousel.img} key={index} />
                            </li>
                        ))}
                    </ul>
                </div>
            </article>
        </section>
    </div>
)