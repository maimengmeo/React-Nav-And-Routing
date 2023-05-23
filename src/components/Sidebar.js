import Link from "./Link";

function Sidebar() {
    const links = [
        { label: "Dropdown", path: "/" },
        { label: "Accordion", path: "/accordion" },
        { label: "Buttons", path: "/buttons" },
        { label: "Modal", path: "/modal" },
        { label: "Table", path: "/table" },
    ];

    const renderedLink = links.map((link) => {
        return (
            <Link
                key={link.label}
                to={link.path}
                className="mb-3"
                activeClassName="font-bold border-l-4 border-blue-500 pl-2"
            >
                {link.label}
            </Link>
        );
    });

    return (
        <div className="sticky top-0 overflow-y-auto flex flex-col items-start">
            {/* item-start: only able to click on the text link, not the whole line */}
            {renderedLink}
        </div>
    );
}

export default Sidebar;
