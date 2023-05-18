import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(0);

    const handleClick = (itemIndex) => {
        setExpandedIndex(itemIndex);
    };

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        const arrowIcon = (
            <span className="text-2xl">
                {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
            </span>
        );

        return (
            <div key={item.id}>
                <div
                    className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer "
                    onClick={() => handleClick(index)}
                >
                    {item.label}
                    {arrowIcon}
                </div>
                {isExpanded && (
                    <div className="border-b p-5">{item.content}</div>
                )}
                {/*
                - && return the first falsy value or last truthy value
                - in this case, div is always true
                - if isExpanded is true, div is returned
                - if isExpanded is false, isExpanded is returned
                - React doesnt print booleans, nulls, undefined, so nothing will be displayed here
                */}
            </div>
        );
    });

    return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
