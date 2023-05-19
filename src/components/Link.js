import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";

function Link({ to, children, className, activeClassName }) {
    //to is the path, children is text shows inside of a element
    const { navigate, currentPath } = useNavigation();

    const classes = classNames(
        "text-blue-500",
        className,
        currentPath === to && activeClassName //if the first condition is true, return the second truthy value
    );

    //when user click a link, prevent default to prevent the auto rendering, then navigate user by the function
    const handleClick = (event) => {
        //if user hold ctrl/cmd key, treat the link as usual (normal link), will open link in new tab
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();

        navigate(to);
    };

    return (
        <a className={classes} href={to} onClick={handleClick}>
            {children}
        </a>
    );
}

export default Link;
