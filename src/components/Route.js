import { useContext } from "react";
import NavigationContext from "../context/Navigation";

function Route({ path, children }) {
    const { currentPath } = useContext(NavigationContext);

    if (path === currentPath) return children; //check if the path props is currentPath, if true, return children, which would be the page component

    return null;
}

export default Route;
