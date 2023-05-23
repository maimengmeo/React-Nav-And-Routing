function Table({ data }) {
    const renderedRow = data.map((d) => {
        return (
            <tr key={d.name} className="border-b">
                <td className="p-3">{d.name}</td>
                <td className="p-3">
                    <div className={`p-3 m-2 ${d.color}`}></div>
                    {/* make the colored square */}
                </td>
                <td className="p-3">{d.score}</td>
            </tr>
        );
    });

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="boder-b-2">
                    <th>Fruit</th>
                    <th>Color</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>{renderedRow}</tbody>
        </table>
    );
}

export default Table;
