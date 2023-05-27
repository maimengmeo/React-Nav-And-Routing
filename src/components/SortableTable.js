//create sortabletabel, take all props & pass then through Table
//make sure tablepage shows sortabletable
//add 'sortValue' func to column config in tablepage. rm header prop bc header will be handle in sortable table
//sortabletable should find column objects with 'sortValue' & add a header func to them
//th returned by the header func should watch for click event
//when user clicks the th, sort data & pass the result to table
//table->shortabletable->tablepage

//sortable table:
//2 pcs of state:
//  +track of the sort order: null 'asc' 'desc'
//  +track which col is sorting: null, 'name', 'score'

import Table from "./Table";
import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

function SortableTable(props) {
    const { config, data } = props;
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    //handle click will change the state. null-asc-desc-null
    //everytime click, app will be rerendered, resort, passed to table
    const handleClick = (label) => {
        //check if the clicked label is same as the current label,
        //if not reset the sortedData, get new sortedData by the new label
        if (sortBy && label !== sortBy) {
            setSortBy(label);
            setSortOrder("asc");
            return;
        }

        if (sortOrder === null) {
            setSortOrder("asc");
            setSortBy(label);
        } else if (sortOrder === "asc") {
            setSortOrder("desc");
            setSortBy(label);
        } else if (sortOrder === "desc") {
            setSortOrder(null);
            setSortBy(label);
        }
    };

    const updatedConfig = config.map((c) => {
        if (!c.sortValue) {
            return c;
        }

        //return an obj, if there is sort value, tranform obj by adding header func
        return {
            ...c,
            header: () => (
                <th
                    className="cursor-pointer hover:bg-gray-100"
                    onClick={() => handleClick(c.label)}
                >
                    <div className="flex items-center">
                        {getIcons(c.label, sortBy, sortOrder)}
                        {c.label}
                    </div>
                </th>
            ),
        };
    });

    //only sort if sortOrder && sortBy !== null
    //make a copy of the 'data' prop. never modify an array directly if that array is a part of the prop sys or state sys
    //find the correct sortValue function & use it for sorting
    let sortedData = [...data];
    if (sortBy && sortOrder) {
        const { sortValue } = config.find((c) => c.label === sortBy);
        sortedData = sortedData.sort((a, b) => {
            //comparetor function that work with sort func
            const reverseOrder = sortOrder === "asc" ? 1 : -1; //if asc, keep the order, otherwise, return value will be * -1, order is revered to desc

            const valueA = sortValue(a);
            const valueB = sortValue(b);

            if (typeof valueA === "string") {
                return valueA.localeCompare(valueB) * reverseOrder;
            } else return (valueA - valueB) * reverseOrder;
        });
    }

    return (
        <div>
            <Table {...props} data={sortedData} config={updatedConfig} />
        </div>
    );
}

function getIcons(label, sortBy, sortOrder) {
    //check if the column is the sort target, if not, show both icons
    if (label !== sortBy) {
        return (
            <div>
                <GoChevronUp />
                <GoChevronDown />
            </div>
        );
    }

    if (sortOrder === null) {
        return (
            <div>
                <GoChevronUp />
                <GoChevronDown />
            </div>
        );
    } else if (sortOrder === "asc") {
        return (
            <div>
                <GoChevronUp />
            </div>
        );
    } else if (sortOrder === "desc") {
        return (
            <div>
                <GoChevronDown />
            </div>
        );
    }
}

export default SortableTable;
