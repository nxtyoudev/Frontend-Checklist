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
    <div className="about-brands-container">
        <div className="about-brands-title">
            <h2>Unsere kunden</h2>
            <h3>Diese Kunden vertrauten uns bereits</h3>
        </div>

        <div className="about-brands-carousel">
            {carouselData.map((carousel, index) => (
                <img src={carousel.img} key={index} />
            ))}
            <img src={brands1} />
            <img src={brands2} />
            <img src={brands3} />
            <img src={brands4} />
            <img src={brands5} />
            <img src={brands6} />
        </div>
    </div>
)