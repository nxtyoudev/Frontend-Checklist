import React from 'react'

export default () => (
	<div className='md:mt-[114px] mt-[44px] md:px-[100px] px-4'>
		<div className="flex md:flex-row flex-col items-center">
			<div className="flex-1 flex-col">
				<div className="md:text-base text-sm leading-4 text-[#1E75EE]">Matthias Grundmann</div>
				<div className="mt-2.5 font-bold md:text-[48px] text-[32px] md:leading-[52px] leading-9 text-black">
					Es ist mehr als nur ein Pool
				</div>
				<div className="md:mt-[136px] mt-4 md:text-[18px] md:pr-[100px] pr-0 text-base md:leading-7 leading-6 text-black">
					Mein Name ist Matthias Grundmann. Ich wurde am 28. Januar 1980 in Halle geboren, bin seit 2010 verheiratet und habe drei Kinder. Mein beruflicher Werdegang begann nach dem Realschulabschluss mit einer Handwerkslehre, die ich erfolgreich abgeschlossen habe. Anschließend nahm ich regelmäßig an branchenspezifischen Lehrgängen zur Aus- und Weiterbildung teil.<br/><br/>
					Meine Leidenschaft ist die Natur. Aus diesem Grund betreibe ich in meiner Freizeit gerne Outdoorsport wie Skifahren, Radfahren, Wandern oder Schwimmen. Ich weiß deshalb aus eigener Erfahrung, wie ein Swimmingpool aussehen muss, in dem man sich wohlfühlt wie der sprichwörtliche Fisch im Wasser. Seit über 14 Jahren habe ich mich deshalb auf die Schwimmbad- und Wellnessbranche spezialisiert.
				</div>
			</div>
			<div className="flex-1">
				<img src="./assets/about-description.jpg" />
			</div>
		</div>
		<div className="md:mt-[69px] mt-[30px] flex md:flex-row flex-col md:justify-center justify-start md:gap-[90px] gap-2.5">
			<div className="md:text-[18px] text-base md:leading-7 leading-6 text-black md:w-[529px] w-full">
				Dabei lege ich Wert darauf, meinen Auftraggebern die gesamte Leistungspalette anbieten zu können: Ich verwirkliche die Schwimmbadträume meiner Auftraggeber von der Beratung und Projektplanung über den Rohbau und die Montage der Schwimmbadtechnik bis hin zum Kundendienst. Hierzu gehört auch die komplette Leitung entsprechender Projekte sowohl im privaten als auch im öffentlichen Bereich.
			</div>
			<div className="md:mt-6 md:text-[18px] text-base md:leading-7 leading-6 text-black md:w-[541px] w-full">
				Ob Sie sich einen einfachen Außenpool wünschen, einen exklusiven Privatpool bauen oder Ihren Gästen als Leiter eines 5-Sterne-Luxushotels einen exquisiten Wellnessbereich anbieten möchten: Ich stehe Ihnen gerne mit meiner langjährigen Erfahrung bei der Umsetzung Ihrer Pläne zur Verfügung!
			</div>
		</div>
	</div>
);