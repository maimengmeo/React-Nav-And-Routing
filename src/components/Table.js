function Table({ data, header }) {
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

    const renderedHeader = header.map((h) => {
        return <th key={h.label}>{h.label}</th>;
    });

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="boder-b-2">{renderedHeader}</tr>
            </thead>
            <tbody>{renderedRow}</tbody>
        </table>
    );
}

export default Table;
