import React from 'react';
import { useState } from 'react';
import PlusIcon from "./MinusIcon";
import MinusIcon from "./PlusIcon";

const faqData = [
  {
    question: "Wie lange dauert der Bau eines Pools?",
    answer: "<div>Die Dauer des Poolbaus variiert je nach Art und Umfang des Projekts. Um eine genaue Zeitangabe zu erhalten, empfehlen wir dir, eine Anfrage hier bei uns auf der Seite zu starten, um deine spezifischen Anforderungen zu besprechen.<br />Die Bauzeit eines Pools kann je nach folgenden Faktoren unterschiedlich sein:<br /><ul class='list-disc pl-[20px]'><li>Art des Pools: Die Bauzeit variiert je nach Art des Pools. Der Bau eines größeren Schwimmbeckens oder eines aufwändigeren Designs kann mehrere Wochen in Anspruch nehmen.</li><li>Bodenbeschaffenheit und Gelände: Die Beschaffenheit des Bodens und das Gelände können den Bau beeinflussen. Bei schwierigen Bodenverhältnissen oder umfangreichen Geländeanpassungen kann die Bauzeit länger sein.</li><li>Zusätzliche Ausstattung: Wenn du zusätzliche Funktionen wie eine Poolheizung, Beleuchtung oder Wasserfeatures wünschst, kann dies die Bauzeit verlängern.</li></ul>Um eine genaue Zeitabschätzung für den Bau deines Pools zu erhalten, empfehlen wir dir, einen Termin mit uns zu vereinbaren. Bei diesem Termin kannst du deine Pläne und Anforderungen besprechen. Der Experte wird dann in der Lage sein, dir eine genauere Schätzung zu geben und den Zeitrahmen entsprechend festzulegen.<br />Bitte vereinbare einen Termin, damit wir deine individuellen Bedürfnisse besprechen können. So können wir dir einen genaueren Einblick geben, wie lange der Bau deines spezifischen Pools voraussichtlich dauern wird.</div>"
  },
  {
    question: "Was kostet ein eigener Pool?",
    answer: "<div>Der Preis für einen eigenen Pool variiert stark und ist abhängig von verschiedenen Faktoren. Um eine genaue Kostenabschätzung zu erhalten, empfehlen wir dir, eine individuelle Anfrage zu starten.<br />Die Kosten für einen Pool hängen von verschiedenen Aspekten ab, wie zum Beispiel:<br /><ul class='list-disc pl-[20px]'><li >Art des Pools: Es gibt verschiedene Arten von Pools, wie Schwimmbecken, Whirlpools oder natürliche Pools. Jede Art hat unterschiedliche Bau- und Materialkosten.</li><li >Größe und Form des Pools: Größere Pools erfordern mehr Materialien und Arbeitsaufwand, was zu höheren Kosten führt. Auch die gewünschte Form des Pools kann den Preis beeinflussen.</li><li >Zusätzliche Ausstattung: Die Kosten können sich erhöhen, wenn du zusätzliche Funktionen wie Poolheizung, Beleuchtung, Wasserspiele oder Poolabdeckungen wünschst.</li><li >Bodenbeschaffenheit und Gelände: Die Beschaffenheit des Bodens und das Gelände können zusätzliche Kosten für Erdarbeiten und Vorbereitungen mit sich bringen.</li><li >Regionale Unterschiede: Die Preise für Poolbau können je nach Region variieren.</li></ul>Um eine genaue Kostenabschätzung für deinen individuellen Pool zu erhalten, empfehlen wir dir, mit uns Kontakt aufzunehmen.<br />Bitte starte eine Anfrage, um Informationen und Preise für deinen eigenen Pool zu erhalten. Wir können dir die genauen Kosten auf der Grundlage deiner spezifischen Anforderungen und örtlichen Gegebenheiten nennen.</div>"
  },
  {
    question: "Ich brauche keinen Pool, nur Wartung meiner Technik.",
    answer: "<div>Selbstverständlich bieten wir auch Wartungsdienstleistungen für Pooltechnik an. Wenn du Unterstützung bei der Wartung und Instandhaltung deiner Poolausrüstung benötigst, stehen wir gerne zur Verfügung.<br/>Um mehr über deine spezifischen Anforderungen zu erfahren und wie wir dir am besten helfen können, bitten wir dich, eine Anfrage zu starten.<br />Sobald wir deine Anfrage erhalten haben, werden wir uns mit dir in Verbindung setzen, um weitere Details zu besprechen. Wir bieten eine breite Palette von Wartungsleistungen für Pooltechnik an, darunter die Überprüfung, Reinigung und Reparatur von Filteranlagen, Pumpen, Heizungen, Steuerungen und anderen Komponenten.<br/>Unser erfahrenes Team wird sicherstellen, dass deine Pooltechnik ordnungsgemäß gewartet wird, um eine optimale Funktionalität und Langlebigkeit zu gewährleisten.<br/>Bitte starte eine Anfrage, damit wir deine Anforderungen besser verstehen können und dir die entsprechenden Wartungsdienstleistungen für deine Pooltechnik anbieten können.</div>"
  },
  {
    question: "Was muss ich bedenken, wenn ich einen Pool plane?",
    answer: "<div>Wenn du einen Pool planst, gibt es einige wichtige Punkte, die du beachten solltest:<br /><ul class='list-decimal pl-[20px]'><li>Platz und Lage: Überlege, wo du den Pool auf deinem Grundstück platzieren möchtest. Berücksichtige dabei Aspekte wie die Ausrichtung zur Sonne, die Privatsphäre und die Zugänglichkeit. Stelle sicher, dass genügend Platz für den Pool vorhanden ist und dass er gut in das Gesamtbild deines Gartens passt.</li><li>Was willst du haben: Überlege dir im Voraus, welche Art von Pool du haben möchtest. Es gibt verschiedene Optionen wie einen klassischen Schwimmbecken, einen Whirlpool oder einen natürlichen Pool. Denke auch an zusätzliche Funktionen wie eine Poolheizung, Beleuchtung oder eine Poolabdeckung. Definiere deine Bedürfnisse und Prioritäten, um die richtige Wahl zu treffen.</li><li>Finanzielles Budget: Setze dir ein realistisches finanzielles Budget für deinen Pool. Berücksichtige dabei nicht nur die Kosten für den Poolbau selbst, sondern auch für eventuelle Erdarbeiten, Landschaftsgestaltung, Poolausrüstung und regelmäßige Wartung. Es ist wichtig, dass du deine finanziellen Möglichkeiten im Blick behältst und dich nicht übernimmst.</li><li>Genehmigung: Informiere dich über die örtlichen Bauvorschriften und Genehmigungsverfahren für den Bau eines Pools. Manche Gemeinden erfordern eine Baugenehmigung, insbesondere wenn es sich um einen größeren oder fest installierten Pool handelt. Stelle sicher, dass du alle erforderlichen Genehmigungen einholst, um rechtliche Probleme zu vermeiden.</li><li>Vor-Ort-Termin vereinbaren: Um deine Pläne und Bedürfnisse genauer zu besprechen, ist es ratsam, einen Vor-Ort-Termin mit uns zu vereinbaren. Dieser Experte kann dir bei der Auswahl des besten Standorts, der Poolgröße und -form sowie der technischen Details helfen. Nutze die Gelegenheit und frage jetzt hier auf der Seite deinen Pool Neubau an!</li></ul></div>"
  },
  {
    question: "Plant und baut ihr auch Wellness & Spa Anlagen?",
    answer: "Ja, wir bieten auch Planung und Bau von Wellness- und Spa-Anlagen an. Wenn du Interesse an der Gestaltung und dem Bau einer Wellness- oder Spa-Anlage hast, stehen wir gerne zur Verfügung.<br/> Um mehr über deine spezifischen Wünsche und Anforderungen zu erfahren und wie wir dir am besten helfen können, bitten wir dich, eine Anfrage zu starten.<br/> Sobald wir deine Anfrage erhalten haben, werden wir uns mit dir in Verbindung setzen, um weitere Details zu besprechen. Wir haben Erfahrung in der Planung und dem Bau von Wellness- und Spa-Anlagen und können dir bei der Umsetzung deiner Vorstellungen unterstützen.<br/> Unser kompetentes Team wird mit dir zusammenarbeiten, um eine maßgeschneiderte Wellness- oder Spa-Anlage zu entwerfen und zu realisieren, die deinen Bedürfnissen und Vorlieben entspricht. Wir können dabei verschiedene Elemente wie Saunen, Dampfbäder, Whirlpools, Ruhebereiche und weitere Wellness-Komponenten integrieren.<br/> Bitte starte eine Anfrage, damit wir deine Anforderungen besser verstehen können und dir die entsprechenden Leistungen für die Planung und den   Bau   deiner   Wellness- oder Spa-Anlage anbieten können."
  },
  {
    question: "Wie kontaktiere ich MG Schwimmbadtechnik?",
    answer: "Um uns zu kontaktieren, kannst du ganz einfach den Button auf dieser Seite starten, um deine Anfrage zu beginnen. Wir stehen dir gerne zur Verfügung und freuen uns darauf, dir zu helfen.<br/> Um uns bestmöglich auf deine Bedürfnisse einzustellen, werden dir im Anfrageprozess einige Fragen gestellt. Diese helfen uns dabei, deine Anforderungen besser zu verstehen und herauszufinden, wie wir dir am besten helfen können. Sobald du deine Fragen beantwortet hast, werden wir deine Anfrage überprüfen und uns dann umgehend mit dir in Verbindung setzen. Wir werden dich entweder per E-Mail oder Telefon kontaktieren, je nachdem, welche Kontaktdaten du uns zur Verfügung stellst. Du kannst uns alle Fragen, Anliegen oder spezifischen Anforderungen mitteilen, die du hast. Wir sind hier, um dir zu helfen und sicherzustellen, dass du die Informationen erhältst, die du benötigst. Zögere nicht, den Button zu starten und uns deine Anfrage zukommen zu lassen. Wir werden uns so schnell wie möglich bei dir melden, um dir weiterzuhelfen."
  },
  {
    question: "Baut ihr auch Poolanlagen im Ausland?",
    answer: "<div>Ja, wir bieten den Bau von Poolanlagen nicht nur national, sondern auch im Ausland an. Wir haben Erfahrung und sind in verschiedenen LändernEuropas tätig.<br />Zu den Ländern, in denen wir Poolanlagen bauen, gehören unter anderem:<ul class='list-disc pl-[20px]'><li>Österreich</li><li>Italien</li><li>Kroatien</li><li>Ungarn</li><li>Schweiz</li><li>Spanien</li></ul>Wir sind stolz darauf, unsere Dienstleistungen europaweit anzubieten und haben ein erfahrenes Team, das mit den spezifischen Anforderungen und Bauvorschriften dieser Länder vertraut ist.<br />Wenn du Interesse an einer Poolanlage im Ausland hast, bitten wir dich, eine Anfrage zu starten, um weitere Informationen zu erhalten. Wir werden uns mit dir in Verbindung setzen, um deine Wünsche und Anforderungen zu besprechen und eine individuelle Lösung für dich zu finden.<br />Bitte starte eine Anfrage, damit wir dir helfen können, eine Poolanlage in deinem Wunschland im Ausland zu planen und zu bauen.</div>"
  },
  {
    question: "Wie kann ich mich von euch beraten lassen?",
    answer: "Um uns zu kontaktieren, kannst du ganz einfach den Button auf dieser Seite starten, um deine Anfrage zu beginnen. Wir stehen dir gerne zur Verfügung und freuen uns darauf, dir zu helfen.<br/> Um uns bestmöglich auf deine Bedürfnisse einzustellen, werden dir im Anfrageprozess einige Fragen gestellt. Diese helfen uns dabei, deine Anforderungen besser zu verstehen und herauszufinden, wie wir dir am besten helfen können.<br/> Sobald du deine Fragen beantwortet hast, werden wir deine Anfrage überprüfen und uns dann umgehend mit dir in Verbindung setzen. Wir werden dich entweder per E-Mail oder Telefon kontaktieren, je nachdem, welche Kontaktdaten du uns zur Verfügung stellst.<br/> Du kannst uns alle Fragen, Anliegen oder spezifischen Anforderungen mitteilen, die du hast. Wir sind hier, um dir zu helfen und sicherzustellen, dass du die Informationen erhältst, die du benötigst.<br/> Zögere nicht, den Button zu starten und uns deine Anfrage zukommen zu lassen. Wir werden uns so schnell wie möglich bei dir melden, um dir weiterzuhelfen."
  },
];

const FAQ = () => {
  const [clicked, setClicked] = useState(null);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <section className='container mx-auto'>
      <div className='text-center px-[20px]'>
        <div className='text-left md:text-center text-[14px] md:text-[16px] text-[#1E75EE]'>FAQ</div>
        <div className='text-left md:text-center font-bold  text-[32px] md:text-[48px]'>Häufig gestellte Fragen</div>
      </div>
      <div className="relative flex flex-col lg:flex-row gap-0 lg:gap-10 mt-4 md:mt-14 px-[20px]">
        <div className="absolute md:w-[132px] w-[94px] md:h-[132px] h-[89px] md:-top-10 top-10 md:-left-[34px] left-1 border-[3px] border-[#196DB7] z-0"></div>
        <div className="relative flex-1 z-10">
          {faqData.map((item, idx) => (
            idx % 2 == 0 && (
              <div key={idx} className="px-[30px] py-[36px] bg-white" style={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.06)' }}>
                <div className="flex justify-between gap-8 cursor-pointer items-center relative" onClick={() => toggle(idx)}>
                  <div>{item.question}</div>
                  <div><PlusIcon className={`${clicked !== idx ? 'open_icon' : 'hidden'}`} />  <MinusIcon className={`${clicked !== idx ? 'hidden' : 'open_icon mt-2'}`} /></div>
                </div>
                {clicked === idx ? <div className="mt-3 text-darkGray text-sm sm:textbase ">
                  <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                </div>
                  : null}
              </div>
            )
          ))}
        </div>
        <div className="relative flex-1 z-10">
          {faqData.map((item, idx) => (
            idx % 2 == 1 && (
              <div key={idx} className="px-[30px] py-[36px] bg-white" style={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.06)' }}>
                <div className="flex justify-between gap-4 cursor-pointer items-center" onClick={() => toggle(idx)}>
                  <div>{item.question}</div>
                  <div><PlusIcon className={`${clicked !== idx ? 'open_icon' : 'hidden'}`} />  <MinusIcon className={`${clicked !== idx ? 'hidden' : 'open_icon mt-2'}`} /></div>
                </div>
                {clicked === idx ? <div className="mt-3 text-darkGray text-sm sm:textbase">
                  <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                </div>
                  : null}
              </div>
            )
          ))}
        </div>
      </div>

    </section>
  )
};

export default FAQ;