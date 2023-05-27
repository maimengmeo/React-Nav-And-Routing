import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

function TablePage() {
    const data = [
        { name: "Orange", color: "bg-orange-500", score: 5 },
        { name: "Apple", color: "bg-red-500", score: 3 },
        { name: "Banaba", color: "bg-yellow-500", score: 1 },
        { name: "Lime", color: "bg-green-500", score: 4 },
    ];

    const config = [
        {
            label: "Fruits",
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name,
        },
        {
            label: "Color",
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />,
        },
        {
            label: "Score",
            render: (fruit) => fruit.score,
            sortValue: (fruit) => fruit.score,
        },
    ];
    //need both render & sortValue func bc later on, might change render function with different format, html tag

    const keyFn = (fruit) => fruit.name;

    return (
        <div>
            <SortableTable data={data} config={config} keyFn={keyFn} />
        </div>
    );
}

export default TablePage;
