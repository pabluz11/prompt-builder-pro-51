import ServicePageLayout from "@/components/ServicePageLayout";
export default function DzialSpadku() {
  return (
    <ServicePageLayout
      title="Dział spadku u notariusza Warszawa – Marta Zabielska | Powiśle"
      metaDescription="Dział spadku u notariusza w Warszawie. Kancelaria Marta Zabielska – Powiśle. Podział majątku po śmierci spadkodawcy. Tel. 22 869 19 81."
      h1="Dział spadku u notariusza w Warszawie"
      intro="Dział spadku pozwala podzielić majątek odziedziczony przez kilku spadkobierców. Notarialny dział spadku jest szybszy i tańszy od sądowego – wymaga jedynie zgodnego porozumienia wszystkich spadkobierców."
      sections={[
        { heading: "Czym jest dział spadku?", content: "Po stwierdzeniu nabycia spadku majątek należy do wszystkich spadkobierców wspólnie. Dział spadku kończy ten stan współwłasności i przyznaje konkretne składniki majątku konkretnym osobom. Może obejmować nieruchomości, środki pieniężne, ruchomości i inne prawa majątkowe." },
        { heading: "Kiedy wymagana jest forma notarialna?", content: "Forma aktu notarialnego jest wymagana, gdy dział spadku obejmuje nieruchomości. W pozostałych przypadkach forma notarialna jest zalecana ze względu na bezpieczeństwo i pewność prawną dla wszystkich stron." },
        { heading: "Co jest potrzebne do notarialnego działu spadku?", content: "Potrzebne są: akt poświadczenia dziedziczenia lub prawomocne postanowienie sądu, dokumenty dotyczące składników majątku (np. numery ksiąg wieczystych) oraz dokumenty tożsamości wszystkich spadkobierców." },
      ]}
      faq={[
        { question: "Czy dział spadku musi być u notariusza?", answer: "Nie zawsze – ale jeśli w skład spadku wchodzi nieruchomość, forma notarialna jest obowiązkowa. W pozostałych przypadkach jest zalecana ze względu na bezpieczeństwo prawne." },
        { question: "Ile kosztuje notarialny dział spadku?", answer: "Koszty zależą od wartości majątku objętego działem. Taksa notarialna jest określona rozporządzeniem Ministra Sprawiedliwości. Zapraszamy do kontaktu w celu wyceny." },
        { question: "Co jeśli spadkobiercy nie mogą się porozumieć?", answer: "Notarialny dział spadku jest możliwy tylko przy zgodzie wszystkich spadkobierców. W przypadku sporu konieczne jest postępowanie sądowe." },
      ]}
    />
  );
}
