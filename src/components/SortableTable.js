//create sortabletabel, take all props & pass then through Table
//make sure tablepage shows sortabletable
//add 'sortValue' func to column config in tablepage. rm header prop bc header will be handle in sortable table
//sortabletable should find column objects with 'sortValue' & add a header func to them
//th returned by the header func should watch for click event
//when user clicks the th, sort data & pass the result to table
//table->shortabletable->tablepage

import Table from "./Table";
import useSort from "../hooks/use-sort";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

function SortableTable(props) {
    const { config, data } = props;
    const { sortOrder, sortBy, sortedData, setSortCol } = useSort(data, config);

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
                    onClick={() => setSortCol(c.label)}
                >
                    <div className="flex items-center">
                        {getIcons(c.label, sortBy, sortOrder)}
                        {c.label}
                    </div>
                </th>
            ),
        };
    });

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
