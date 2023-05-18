import Dropdown from "./components/DropDown";
import { useState } from "react";

function App() {
    const [selection, setSelection] = useState(null);

    const handleSelect = (option) => {
        setSelection(option);
    };

    const options = [
        { label: "Red", value: "red" },
        { label: "Blue", value: "blue" },
        { label: "Green", value: "green" },
    ];

    //return <ButtonPage />;
    //return <Accordion items={items} />;
    return (
        <Dropdown
            options={options}
            selection={selection}
            onSelect={handleSelect}
        />
    );
}

export default App;
