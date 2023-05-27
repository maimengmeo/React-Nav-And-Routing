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

function SortableTable(props) {
    const { config } = props;
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    //handle click will change the state. null-asc-desc-null
    const handleClick = (label) => {
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
                <th onClick={() => handleClick(c.label)}>
                    {c.label} IS SORTED
                </th>
            ),
        };
    });

    return (
        <div>
            {sortOrder} - {sortBy} <Table {...props} config={updatedConfig} />
        </div>
    );
}

export default SortableTable;
