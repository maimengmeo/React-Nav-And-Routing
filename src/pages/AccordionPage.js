import Accordion from "./components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: "asdf",
            label: "Is React better than Angular?",
            content: "Chicken wings is better",
        },
        {
            id: "fdas",
            label: "Is C# better than Java?",
            content: "Korean bbq is better",
        },
        {
            id: "qwer",
            label: "Is JavaScript better than Python?",
            content: "Noodles soup is better",
        },
    ];

    return <Accordion items={items} />;
}

export default AccordionPage;
