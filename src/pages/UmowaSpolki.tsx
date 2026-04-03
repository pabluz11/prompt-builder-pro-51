import ServicePageLayout from "@/components/ServicePageLayout";
export default function UmowaSpolki() {
  return (
    <ServicePageLayout
      title="Umowa spółki z o.o. u notariusza Warszawa – Marta Zabielska | Powiśle"
      metaDescription="Umowa spółki z o.o. i obsługa spółek u notariusza w Warszawie. Kancelaria Marta Zabielska – Powiśle. Protokoły zgromadzeń, sprzedaż udziałów. Tel. 22 869 19 81."
      h1="Umowa spółki z o.o. u notariusza w Warszawie"
      intro="Założenie spółki z o.o., zmiana umowy spółki, protokołowanie zgromadzeń wspólników i sprzedaż udziałów – kancelaria notarialna na Powiślu zapewnia kompleksową obsługę spółek i przedsiębiorców."
      sections={[
        { heading: "Kiedy wymagany jest notariusz przy zakładaniu spółki?", content: "Forma notarialna jest wymagana przy spółkach, do których wnoszony jest wkład niepieniężny (np. nieruchomość), oraz jest zalecana przy bardziej rozbudowanych umowach spółek. Notariusz zapewnia bezpieczeństwo prawne całej transakcji." },
        { heading: "Jakie czynności notarialne dotyczą spółek?", content: "Notariusz obsługuje m.in.: sporządzanie i zmiany umów spółek (sp. z o.o., S.A., spółka komandytowa), protokołowanie zgromadzeń wspólników i walnych zgromadzeń, sprzedaż udziałów w spółce, ustanawianie zastawów na udziałach oraz poświadczanie podpisów na dokumentach spółkowych." },
        { heading: "Sprzedaż udziałów w spółce u notariusza", content: "Zbycie udziałów w spółce z o.o. wymaga poświadczenia podpisów przez notariusza. Notariusz sprawdza tożsamość zbywcy i nabywcy, co zapewnia bezpieczeństwo transakcji i jej skuteczność wobec spółki." },
      ]}
      faq={[
        { question: "Czy umowę spółki z o.o. trzeba zawierać u notariusza?", answer: "Nie zawsze – prosta umowa spółki z o.o. może być zawarta przez Internet (S24). Jednak przy wkładach niepieniężnych lub bardziej złożonych strukturach konieczna lub wskazana jest forma aktu notarialnego." },
        { question: "Ile kosztuje notarialna zmiana umowy spółki?", answer: "Koszty zależą od zakresu zmian i wartości wkładów. Zapraszamy do kontaktu w celu wyceny konkretnej czynności." },
        { question: "Jak wygląda notarialne protokołowanie zgromadzenia wspólników?", answer: "Notariusz uczestniczy w zgromadzeniu i sporządza protokół w formie aktu notarialnego. Jest to wymagane m.in. przy niektórych zmianach umowy spółki." },
      ]}
    />
  );
}
