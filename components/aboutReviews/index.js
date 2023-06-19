import React from "react";
import Quote from "../../public/assets/quote.svg";
import reviewsBG from '../../public/assets/reviewsBG.svg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive1 = {
  desktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
  }
};
export default () => (
  <section className="">
    <Carousel responsive={responsive1} infinite={true} arrows={false} autoPlay={true}>

      {carouselContent('Das sagen unsere Kunden:', 'Zuverlässig! Wunderbar! ', 'Hotel Zugspitze', '„Wir können Herrn Grundmann bedingungslos weiterempfehlen. Er betreut unser Hotel nun seit mehr als 5 Jahren. Sowohl der laufende Betrieb, wie auch die unlängst durchgeführte Erneuerung der gesamten Schwimmbadtechnik hat immer wunderbar und reibungslos funktioniert.“', '/assets/ReferenceImage.png')}
      {carouselContent('Das sagen unsere Kunden:', 'Kreativ, zuverlässig!', 'Herr Küffner', 'Matthias ist ein super zuverlässiger, sehr freundlicher Mann mit dem perfekten Fingerspitzengefühl für seine Tätigkeit. Uns hat seine Kompetenz in Kombination mit seiner einfühlsamen Art überzeugt! Empfehle ihn jedem sehr gerne weiter!', '/assets/ReferenceImage1.png')}
      {carouselContent('Das sagen unsere Kunden:', 'Kreativ, zuverlässig!', 'Frau Georgens', 'Ich bin seit Jahren zufriedene Kundin von Herrn Grundmann. Seit er die Wartung und Reinigung unseres Pools übernommen hat, passt alles perfekt. Herr Grundmann ist nicht nur freundlich und kompetent, er ist auch jederzeit erreichbar! Ein unschätzbarer Vorteil, wenn es mal dringend ist. Und er findet für jede Herausforderung eine kreative Lösung. Mit der kürzlich von ihm durchgeführten Komplettsanierung des Pools hat er uns ein kleines Paradies geschaffen. Vielen Dank!', '/assets/ReferenceImage2.png')}

      {carouselContent('Das sagen unsere Kunden:', 'Kompetenz trifft Leidenschaft!', 'Familie Bissinger', 'Sowohl der Bau als auch die Betreuung unseres Schwimmbades war bzw. ist 1.Klassig. Herr Grundmann stellt einen sehr kompetenten Service zur Verfügung. Toll - weiter so!', '/assets/ReferenceImage3.png')}

      {carouselContent('Das sagen unsere Kunden:', 'Toller Service! Perfekte Planung!', 'Familie Schneider', 'Ein Traum wurde wahr mit MG-Schwimmbadtechnik, unser Pool. Von der Planung, Beratung bis zur Fertigstellung war alles sehr Fachkompetent und professionell.Toller Service, Nachsorge und Betreuung bis heute.Definitiv empfehlenswert !!!', '/assets/ReferenceImage4.png')}

      {carouselContent('Das sagen unsere Kunden:', 'Immer wieder gerne!', 'Familie Bachhuber', 'Wir haben 2021 mit Matthias unser Projekt Pool umgesetzt und waren mehr als zufrieden. Es wurde sich an alle Termine und an die vereinbarten Preise gehalten - was im Handwerk leider mittlerweile nicht mehr üblich ist. Jede seiner Arbeiten wurden perfekt ausgeführt und mit dem Ergebnis sind wir mehr als zufrieden. Wir würden uns immer wieder für ihn entscheiden!', '/assets/ReferenceImage5.png')}

    </Carousel>
  </section>
);

const carouselContent = (a, b, c, d, e) => {
  return (
    <div className="flex flex-col md:flex-row gap-12">
      <div className="flex-1">
        <div className="">
          <div className="px-[20px] md:px-[100px] relative text-center md:text-start">
            <h2 className="text-[32px] md:text-[48px] font-bold">{a}</h2>
            <img src={Quote} width={86} className="absolute md:static py-[30px] bottom-0" />
            <h3 className="text-[28px] ">{b} </h3>
            <div className="">
              <h4 className="text-[21px] mt-[25px] mb-[15px]">{c}</h4>
              <div className="flex">
                <svg
                  width="26"
                  height="24"
                  viewBox="0 0 26 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0562 0.695236C12.3688 -0.197434 13.6312 -0.19743 13.9438 0.69524L16.3155 7.46808C16.4532 7.86125 16.8202 8.12788 17.2366 8.13733L24.4109 8.30001C25.3564 8.32145 25.7466 9.52209 24.9942 10.0952L19.2857 14.4438C18.9543 14.6962 18.8142 15.1276 18.9339 15.5266L20.9961 22.4C21.2679 23.3059 20.2466 24.048 19.469 23.5095L13.5693 19.4242C13.2268 19.1871 12.7732 19.1871 12.4307 19.4242L6.531 23.5095C5.75341 24.048 4.73208 23.3059 5.00389 22.4L7.06613 15.5266C7.18585 15.1276 7.04567 14.6962 6.71429 14.4438L1.00582 10.0952C0.253439 9.52209 0.643555 8.32145 1.58913 8.30001L8.76337 8.13733C9.17984 8.12788 9.54683 7.86125 9.68451 7.46808L12.0562 0.695236Z"
                    fill="#196DB7"
                  />
                </svg>
                <svg
                  width="26"
                  height="24"
                  viewBox="0 0 26 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0562 0.695236C12.3688 -0.197434 13.6312 -0.19743 13.9438 0.69524L16.3155 7.46808C16.4532 7.86125 16.8202 8.12788 17.2366 8.13733L24.4109 8.30001C25.3564 8.32145 25.7466 9.52209 24.9942 10.0952L19.2857 14.4438C18.9543 14.6962 18.8142 15.1276 18.9339 15.5266L20.9961 22.4C21.2679 23.3059 20.2466 24.048 19.469 23.5095L13.5693 19.4242C13.2268 19.1871 12.7732 19.1871 12.4307 19.4242L6.531 23.5095C5.75341 24.048 4.73208 23.3059 5.00389 22.4L7.06613 15.5266C7.18585 15.1276 7.04567 14.6962 6.71429 14.4438L1.00582 10.0952C0.253439 9.52209 0.643555 8.32145 1.58913 8.30001L8.76337 8.13733C9.17984 8.12788 9.54683 7.86125 9.68451 7.46808L12.0562 0.695236Z"
                    fill="#196DB7"
                  />
                </svg>
                <svg
                  width="26"
                  height="24"
                  viewBox="0 0 26 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0562 0.695236C12.3688 -0.197434 13.6312 -0.19743 13.9438 0.69524L16.3155 7.46808C16.4532 7.86125 16.8202 8.12788 17.2366 8.13733L24.4109 8.30001C25.3564 8.32145 25.7466 9.52209 24.9942 10.0952L19.2857 14.4438C18.9543 14.6962 18.8142 15.1276 18.9339 15.5266L20.9961 22.4C21.2679 23.3059 20.2466 24.048 19.469 23.5095L13.5693 19.4242C13.2268 19.1871 12.7732 19.1871 12.4307 19.4242L6.531 23.5095C5.75341 24.048 4.73208 23.3059 5.00389 22.4L7.06613 15.5266C7.18585 15.1276 7.04567 14.6962 6.71429 14.4438L1.00582 10.0952C0.253439 9.52209 0.643555 8.32145 1.58913 8.30001L8.76337 8.13733C9.17984 8.12788 9.54683 7.86125 9.68451 7.46808L12.0562 0.695236Z"
                    fill="#196DB7"
                  />
                </svg>
                <svg
                  width="26"
                  height="24"
                  viewBox="0 0 26 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0562 0.695236C12.3688 -0.197434 13.6312 -0.19743 13.9438 0.69524L16.3155 7.46808C16.4532 7.86125 16.8202 8.12788 17.2366 8.13733L24.4109 8.30001C25.3564 8.32145 25.7466 9.52209 24.9942 10.0952L19.2857 14.4438C18.9543 14.6962 18.8142 15.1276 18.9339 15.5266L20.9961 22.4C21.2679 23.3059 20.2466 24.048 19.469 23.5095L13.5693 19.4242C13.2268 19.1871 12.7732 19.1871 12.4307 19.4242L6.531 23.5095C5.75341 24.048 4.73208 23.3059 5.00389 22.4L7.06613 15.5266C7.18585 15.1276 7.04567 14.6962 6.71429 14.4438L1.00582 10.0952C0.253439 9.52209 0.643555 8.32145 1.58913 8.30001L8.76337 8.13733C9.17984 8.12788 9.54683 7.86125 9.68451 7.46808L12.0562 0.695236Z"
                    fill="#196DB7"
                  />
                </svg>
                <svg
                  width="26"
                  height="24"
                  viewBox="0 0 26 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0562 0.695236C12.3688 -0.197434 13.6312 -0.19743 13.9438 0.69524L16.3155 7.46808C16.4532 7.86125 16.8202 8.12788 17.2366 8.13733L24.4109 8.30001C25.3564 8.32145 25.7466 9.52209 24.9942 10.0952L19.2857 14.4438C18.9543 14.6962 18.8142 15.1276 18.9339 15.5266L20.9961 22.4C21.2679 23.3059 20.2466 24.048 19.469 23.5095L13.5693 19.4242C13.2268 19.1871 12.7732 19.1871 12.4307 19.4242L6.531 23.5095C5.75341 24.048 4.73208 23.3059 5.00389 22.4L7.06613 15.5266C7.18585 15.1276 7.04567 14.6962 6.71429 14.4438L1.00582 10.0952C0.253439 9.52209 0.643555 8.32145 1.58913 8.30001L8.76337 8.13733C9.17984 8.12788 9.54683 7.86125 9.68451 7.46808L12.0562 0.695236Z"
                    fill="#196DB7"
                  />
                </svg>
              </div>
              <p className="text-[16px] md:text-[18px] mt-[15px]">{d}</p>
              <div className="flex gap-4 mt-[25px] justify-center md:justify-start">
                <button className="border border-[rgba(0,0,0,0.2)] px-[7px] py-[14px]">23m³</button>
                <button className="border border-[rgba(0,0,0,0.2)] px-[7px] py-[14px]">600L</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-end relative">
        <img className="pl-[80px] md:pl-0" src={reviewsBG} />
        <img className="absolute top-[15%] md:top-[20%] left-[0%] md:left-[-20%]" src={e} width={705} />
      </div>
    </div>
  )
}
