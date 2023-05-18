import Dropdown from "./components/DropDown";

function App() {
    const options = [
        { label: "Red", value: "red" },
        { label: "Blue", value: "blue" },
        { label: "Green", value: "green" },
    ];

    //return <ButtonPage />;
    //return <Accordion items={items} />;
    return <Dropdown options={options} />;
}

export default App;
