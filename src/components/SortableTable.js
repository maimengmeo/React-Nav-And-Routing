//create sortabletabel, take all props & pass then through Table
//make sure tablepage shows sortabletable
//add 'sortValue' func to column config in tablepage. rm header prop bc header will be handle in sortable table
//sortabletable should find column objects with 'sortValue' & add a header func to them
//th returned by the header func should watch for click event
//when user clicks the th, sort data & pass the result to table
//table->shortabletable->tablepage

import Table from "./Table";

function SortableTable(props) {
    const { config } = props;

    const handleClick = (label) => {
        console.log(label);
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

    return <Table {...props} config={updatedConfig} />;
}

export default SortableTable;
