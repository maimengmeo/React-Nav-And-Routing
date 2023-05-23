function Table({ data }) {
    const renderedRow = data.map((d) => {
        return (
            <tr>
                <td>{d.name}</td>
                <td>{d.color}</td>
                <td>{d.score}</td>
            </tr>
        );
    });

    return (
        <table>
            <thead>
                <tr>
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
