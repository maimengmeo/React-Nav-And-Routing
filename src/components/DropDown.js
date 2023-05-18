import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen((current) => {
            setIsOpen(!current);
        });
    };

    const handleOptionClick = (selectedOption) => {
        setIsOpen(false);
        onChange(selectedOption);
    };

    const renderedOptions = options.map((option) => {
        return (
            <div
                className="hover:bg-sky-100 rounded cursor-pointer p-1"
                onClick={() => handleOptionClick(option)}
                key={option.value}
            >
                {option.label}
            </div>
        );
    });

    return (
        <div className="w-48 relative">
            <div
                className="flex justify-between items-center cursor-pointer border rounded p-3 shdow bg-white w-full"
                onClick={handleClick}
            >
                {value?.label || "Select..."}
                <GoChevronDown className="text-lg" />
            </div>
            {isOpen && (
                <div className="absolute top-full rounded border p-3 bg-white w-full">
                    {renderedOptions}
                </div>
            )}
        </div>
    );
}

export default Dropdown;
