import ServicePageLayout from "@/components/ServicePageLayout";
export default function DarowiznaDomu() {
  return (
    <ServicePageLayout
      title="Darowizna nieruchomości notariusz Warszawa – Marta Zabielska | Powiśle"
      metaDescription="Darowizna mieszkania, domu lub działki u notariusza w Warszawie. Kancelaria Marta Zabielska – Powiśle. Przepisanie nieruchomości na bliskich. Tel. 22 869 19 81."
      h1="Darowizna nieruchomości u notariusza w Warszawie"
      intro="Darowizna mieszkania, domu lub działki wymaga formy aktu notarialnego. Niezależnie od tego, czy chcesz przekazać nieruchomość dzieciom, małżonkowi czy innej bliskiej osobie – kancelaria na Powiślu przeprowadzi tę czynność sprawnie i bezpiecznie."
      sections={[
        { heading: "Kiedy darowizna nieruchomości wymaga notariusza?", content: "Każde przeniesienie własności nieruchomości – w tym darowizna – musi być dokonane w formie aktu notarialnego pod rygorem nieważności. Dotyczy to mieszkań, domów, działek budowlanych i rolnych, lokali użytkowych oraz udziałów w nieruchomości." },
        { heading: "Darowizna a podatek – kiedy można uniknąć podatku?", content: "Darowizny między najbliższą rodziną (małżonek, dzieci, wnuki, rodzice, rodzeństwo) są zwolnione z podatku od spadków i darowizn – pod warunkiem zgłoszenia darowizny do urzędu skarbowego w ciągu 6 miesięcy. Notariusz poinformuje o obowiązkach podatkowych i pomoże dopełnić formalności." },
        { heading: "Jakie dokumenty są potrzebne do darowizny?", content: "Do sporządzenia aktu notarialnego darowizny potrzebne są: numer księgi wieczystej, dokument nabycia nieruchomości przez darczyńcę, dokumenty tożsamości obu stron, a w przypadku nieruchomości obciążonej kredytem – zgoda banku." },
      ]}
      faq={[
        { question: "Ile kosztuje darowizna mieszkania u notariusza?", answer: "Koszty zależą od wartości nieruchomości. Przy darowiznach w rodzinie najbliższej obowiązuje zwolnienie podatkowe. Zapraszamy do kontaktu w celu dokładnego wyliczenia kosztów." },
        { question: "Czy można darować tylko część mieszkania?", answer: "Tak, możliwe jest darowanie ułamkowego udziału w nieruchomości. Taka czynność również wymaga formy aktu notarialnego." },
        { question: "Czy darowiznę nieruchomości można odwołać?", answer: "W wyjątkowych przypadkach – gdy obdarowany dopuści się rażącej niewdzięczności – darowizna może być odwołana. Odwołanie również wymaga formy aktu notarialnego." },
      ]}
    />
  );
}
