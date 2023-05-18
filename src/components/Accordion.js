import { useState } from "react";

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(1);

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        return (
            <div key={item.id}>
                <div>{item.label}</div>
                {isExpanded && <div>{item.content}</div>}
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

    return <div>{renderedItems}</div>;
}

export default Accordion;
