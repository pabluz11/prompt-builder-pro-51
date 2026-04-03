import ServicePageLayout from "@/components/ServicePageLayout";
export default function Testament() {
  return (
    <ServicePageLayout
      title="Testament notarialny Warszawa – Notariusz Marta Zabielska | Powiśle"
      metaDescription="Testament notarialny w Warszawie. Notariusz Marta Zabielska, Powiśle. Sporządzenie testamentu w formie aktu notarialnego. Tel. 22 869 19 81."
      h1="Testament notarialny u notariusza w Warszawie"
      intro="Testament sporządzony w formie aktu notarialnego to najbezpieczniejsza forma rozporządzenia majątkiem na wypadek śmierci. Jest trudny do podważenia i automatycznie trafia do Notarialnego Rejestru Testamentów."
      sections={[
        { heading: "Dlaczego warto sporządzić testament u notariusza?", content: "Testament notarialny zapewnia najwyższy stopień bezpieczeństwa prawnego. Notariusz czuwa nad jego zgodnością z prawem i rejestruje go w NORT (Notarialny Rejestr Testamentów) – dzięki czemu po śmierci testatora można go łatwo odnaleźć. Testament notarialny jest wyjątkowo trudny do zakwestionowania." },
        { heading: "Co można zawrzeć w testamencie notarialnym?", content: "W testamencie notarialnym można wskazać spadkobierców i ich udziały, ustanowić zapis windykacyjny, wydziedziczyć osoby uprawnione do zachowku, ustanowić wykonawcę testamentu oraz zawrzeć polecenie testamentowe." },
        { heading: "Jak sporządzić testament notarialny w Warszawie?", content: "Wystarczy umówić się na wizytę w kancelarii przy ul. Stefana Jaracza 10/3 na Powiślu. Należy przynieść dokument tożsamości. Notariusz pomoże sformułować wolę testatora w sposób jasny i zgodny z prawem." },
      ]}
      faq={[
        { question: "Ile kosztuje testament notarialny w Warszawie?", answer: "Taksa notarialna za sporządzenie testamentu wynosi 50 zł netto. Do tego dochodzi koszt wypisów aktu – ok. 6 zł netto za stronę. Łączny koszt to zazwyczaj kilkaset złotych." },
        { question: "Czy testament notarialny można zmienić lub odwołać?", answer: "Tak, w dowolnym momencie – poprzez sporządzenie nowego testamentu. Notariusz doradzi, jaka forma zmiany jest właściwa w danej sytuacji." },
        { question: "Czym różni się testament notarialny od własnoręcznego?", answer: "Testament własnoręczny jest bezpłatny, ale łatwiej go podważyć. Testament notarialny sporządzany jest przed notariuszem, co wyklucza wątpliwości co do poczytalności testatora i zapewnia wpis do rejestru." },
      ]}
    />
  );
}
