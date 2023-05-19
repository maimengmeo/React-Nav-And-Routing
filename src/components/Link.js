import { useContext } from "react";
import NavigationContext from "../context/Navigation";

function Link({ to, children }) {
    //to is the path, children is text shows inside of a element
    const { navigate } = useContext(NavigationContext);

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
        <a href={to} onClick={handleClick}>
            {children}
        </a>
    );
}

export default Link;
