import Table from "../components/Table";

function TablePage() {
    const data = [
        { name: "Orange", color: "bg-orange-500", score: 5 },
        { name: "Apple", color: "bg-red-500", score: 3 },
        { name: "Banaba", color: "bg-yellow-500", score: 1 },
        { name: "Lime", color: "bg-green-500", score: 4 },
    ];

    const header = [
        { label: "Fruits" },
        { label: "Color" },
        { label: "Score" },
    ];

    return (
        <div>
            <Table data={data} header={header} />
        </div>
    );
}

export default TablePage;
