import React from 'react'
import aboutDescBG from '../../public/assets/aboutDescBG.svg'
import aboutDesc2 from '../../public/assets/aboutDesc2.svg'

export default () => (
    <div className='about-description-container'>
        <div className='about-heading'>
            <h2>Matthias Grundmann</h2>
            <h3>Es ist mehr als nur ein Pool</h3>
        </div>
        <div className='about-text-image'>
            <div className='about-text-container'>
                <p>Mein Name ist Matthias Grundmann. Ich wurde am 28. Januar 1980 in Halle geboren, bin seit 2010 verheiratet und habe drei Kinder. Mein beruflicher Werdegang begann nach dem Realschulabschluss mit einer Handwerkslehre, die ich erfolgreich abgeschlossen habe. Anschließend nahm ich regelmäßig an branchenspezifischen Lehrgängen zur Aus- und Weiterbildung teil.</p>
                <p>Meine Leidenschaft ist die Natur. Aus diesem Grund betreibe ich in meiner Freizeit gerne Outdoorsport wie Skifahren, Radfahren, Wandern oder Schwimmen. Ich weiß deshalb aus eigener Erfahrung, wie ein Swimmingpool aussehen muss, in dem man sich wohlfühlt wie der sprichwörtliche Fisch im Wasser. Seit über 14 Jahren habe ich mich deshalb auf die Schwimmbad- und Wellnessbranche spezialisiert.</p>
            </div>
            <div className="about-desc-image">
                <img src={aboutDescBG} />
                <img className='about-absolute-image' src={aboutDesc2} />
            </div>
        </div>
        <div className='about-text'>
            <p>Dabei lege ich Wert darauf, meinen Auftraggebern die gesamte Leistungspalette anbieten zu können: Ich verwirkliche die Schwimmbadträume meiner Auftraggeber von der Beratung und Projektplanung über den Rohbau und die Montage der Schwimmbadtechnik bis hin zum Kundendienst. Hierzu gehört auch die komplette Leitung entsprechender Projekte sowohl im privaten als auch im öffentlichen Bereich.</p>
            <p>Ob Sie sich einen einfachen Außenpool wünschen, einen exklusiven Privatpool bauen oder Ihren Gästen als Leiter eines 5-Sterne-Luxushotels einen exquisiten Wellnessbereich anbieten möchten: Ich stehe Ihnen gerne mit meiner langjährigen Erfahrung bei der Umsetzung Ihrer Pläne zur Verfügung!</p>
        </div>
    </div>
);