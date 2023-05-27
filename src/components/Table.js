import { Fragment } from "react";

function Table({ data, config, keyFn }) {
    const renderedRows = data.map((d) => {
        //nested map. map through config, for each element: fruit, color, score, return a td by render function
        const renderedCells = config.map((c) => {
            return (
                <td className="p-3" key={c.label}>
                    {c.render(d)}
                </td>
            );
        });

        return (
            <tr key={keyFn(d)} className="border-b">
                {renderedCells}
            </tr>
        );
    });

    const renderedHeader = config.map((c) => {
        if (c.header) {
            return <Fragment key={c.label}>{c.header()}</Fragment>;
            //console complained about no key. using fragment for proper html tag. this wont show any ele inside the DOM
        } else {
            return <th key={c.label}>{c.label}</th>;
        }
    });

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="boder-b-2">{renderedHeader}</tr>
            </thead>
            <tbody>{renderedRows}</tbody>
        </table>
    );
}

export default Table;
