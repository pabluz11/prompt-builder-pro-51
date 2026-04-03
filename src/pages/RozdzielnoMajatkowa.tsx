import ServicePageLayout from "@/components/ServicePageLayout";
export default function RozdzielnoMajatkowa() {
  return (
    <ServicePageLayout
      title="Rozdzielność majątkowa u notariusza Warszawa – Marta Zabielska | Powiśle"
      metaDescription="Rozdzielność majątkowa (intercyza) u notariusza w Warszawie. Kancelaria Marta Zabielska – Powiśle. Umowy majątkowe małżeńskie. Tel. 22 869 19 81."
      h1="Rozdzielność majątkowa u notariusza w Warszawie"
      intro="Intercyza pozwala małżonkom uregulować zasady zarządu majątkiem inaczej niż przewiduje ustawowa wspólność majątkowa. Kancelaria na Powiślu sporządza umowy majątkowe małżeńskie dla par przed ślubem i po ślubie."
      sections={[
        { heading: "Czym jest rozdzielność majątkowa?", content: "Rozdzielność majątkowa to umowa, na mocy której każdy z małżonków zachowuje majątek nabyty przed i w trakcie małżeństwa jako swój odrębny. Umowę można zawrzeć przed ślubem (intercyza przedmałżeńska) lub w trakcie trwania małżeństwa." },
        { heading: "Kiedy warto zdecydować się na intercyzę?", content: "Rozdzielność majątkowa jest szczególnie wskazana dla przedsiębiorców – chroni majątek rodzinny przed odpowiedzialnością za długi z działalności gospodarczej. Jest też rozwiązaniem dla par, które chcą zachować niezależność finansową." },
        { heading: "Jak ustanowić rozdzielność majątkową u notariusza?", content: "Wystarczy wizyta obojga małżonków (lub narzeczonych) z dokumentami tożsamości. Notariusz sporządzi umowę w formie aktu notarialnego – tylko ta forma jest ważna. Umowę można zawrzeć w dowolnym momencie przed ślubem lub w trakcie małżeństwa." },
      ]}
      faq={[
        { question: "Ile kosztuje intercyza u notariusza w Warszawie?", answer: "Taksa notarialna za umowę majątkową małżeńską wynosi 400 zł netto (niezależnie od wartości majątku). Do tego dochodzi koszt wypisów aktu." },
        { question: "Czy intercyzę można zawrzeć tylko przed ślubem?", answer: "Nie – umowę majątkową małżeńską można zawrzeć zarówno przed ślubem, jak i w trakcie trwania małżeństwa. Można też w każdej chwili powrócić do ustawowej wspólności majątkowej." },
        { question: "Czy intercyza chroni przed długami współmałżonka?", answer: "W dużej mierze tak – wierzyciel może dochodzić należności tylko z majątku osobistego dłużnika. Jednak w przypadku zobowiązań zaciągniętych wspólnie ochrona jest ograniczona." },
      ]}
    />
  );
}
