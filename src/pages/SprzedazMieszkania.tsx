import ServicePageLayout from "@/components/ServicePageLayout";
export default function SprzedazMieszkania() {
  return (
    <ServicePageLayout
      title="Sprzedaż mieszkania u notariusza Warszawa – Marta Zabielska | Powiśle"
      metaDescription="Sprzedaż mieszkania u notariusza w Warszawie. Kancelaria Marta Zabielska – Powiśle, ul. Jaracza. Umowy sprzedaży nieruchomości. Tel. 22 869 19 81."
      h1="Sprzedaż mieszkania u notariusza w Warszawie"
      intro="Umowa sprzedaży nieruchomości wymaga formy aktu notarialnego. Kancelaria na Powiślu kompleksowo obsługuje transakcje sprzedaży mieszkań i domów w Warszawie – od weryfikacji dokumentów po podpisanie aktu."
      sections={[
        { heading: "Kiedy potrzebny jest notariusz przy sprzedaży mieszkania?", content: "Każda umowa przeniesienia własności nieruchomości musi być zawarta w formie aktu notarialnego – bez tej formy umowa jest nieważna. Notariusz weryfikuje stan prawny nieruchomości, tożsamość stron i zabezpiecza interesy zarówno sprzedającego, jak i kupującego." },
        { heading: "Jakie dokumenty są potrzebne?", content: "Do sporządzenia aktu notarialnego sprzedaży mieszkania potrzebne są: numer księgi wieczystej, dokument potwierdzający nabycie nieruchomości, zaświadczenie o braku zaległości w opłatach, dokumenty tożsamości stron oraz – jeśli nieruchomość jest obciążona hipoteką – zaświadczenie banku o wysokości zadłużenia i zgodzie na wykreślenie." },
        { heading: "Koszty notarialne przy sprzedaży mieszkania", content: "Taksa notarialna zależy od wartości transakcji i jest określona rozporządzeniem Ministra Sprawiedliwości. Do kosztów notarialnych dochodzi podatek PCC (2% przy rynku wtórnym) lub VAT (rynek pierwotny) oraz opłaty sądowe za wpis do księgi wieczystej. Zapraszamy do kontaktu w celu wyliczenia kosztów." },
        { heading: "Jak wygląda wizyta przy sprzedaży?", content: "Przed wizytą warto przesłać podstawowe dane dotyczące nieruchomości i stron transakcji. Notariusz ustali wymagane dokumenty i zaproponuje termin. W dniu podpisania notariusz odczytuje akt, wyjaśnia wątpliwości i po podpisaniu składa wniosek o wpis do księgi wieczystej." },
      ]}
      faq={[
        { question: "Ile trwa sporządzenie aktu notarialnego?", answer: "Sam akt podpisywany jest zazwyczaj w ciągu 1–2 godzin. Wcześniejsze przygotowanie i weryfikacja dokumentów zajmuje kilka dni roboczych." },
        { question: "Kto płaci notariusza – kupujący czy sprzedający?", answer: "Koszty notarialne ponosi zazwyczaj kupujący, jednak strony mogą umówić się inaczej. Warto ustalić to na etapie negocjacji umowy przedwstępnej." },
        { question: "Czy można sprzedać mieszkanie z kredytem hipotecznym?", answer: "Tak. Konieczne jest zaświadczenie z banku o wysokości zadłużenia i zgodzie na wykreślenie hipoteki. Notariusz zabezpiecza interesy obu stron odpowiednimi zapisami w akcie." },
      ]}
    />
  );
}
