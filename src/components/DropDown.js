import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) return;

            if (!divEl.current.contains(event.target)) {
                //if the current click div !== event target then close
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handler, true); //capture pharse handler

        return () => {
            document.removeEventListener("click", handler); //cleanUp function, this function only render the first time, so cleanUp function tell app not looking for event anymore
        };
    }, []);

    // onClick: setIsOpen is set to !current
    const handleClick = () => {
        setIsOpen((current) => {
            setIsOpen(!current);
        });
    };

    // handleOptionClick: setIsOpen is set to false to close the dropdown, onChange which is setSelection is set to the selectedOption
    const handleOptionClick = (selectedOption) => {
        setIsOpen(false);
        onChange(selectedOption);
    };

    // renderedOptions: map through each elements in options, display all options, onClick,
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
        <div ref={divEl} className="w-48 relative">
            <Panel
                className="flex justify-between items-center cursor-pointer"
                onClick={handleClick}
            >
                {value?.label || "Select..."}
                {/* check if value exist if true, get the value.label */}
                <GoChevronDown className="text-lg" />
            </Panel>
            {isOpen && (
                <Panel className="absolute top-full ">{renderedOptions}</Panel>
                // if isOpen, return the second truthy value which is the panel,
                //if not open, return the first falsy value which is isOpen, with React, it wont show anythings
            )}
        </div>
    );
}

export default Dropdown;
