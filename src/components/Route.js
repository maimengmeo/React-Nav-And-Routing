import useNavigation from "../hooks/use-navigation";

function Route({ path, children }) {
    const { currentPath } = useNavigation();

    if (path === currentPath) return children; //check if the path props is currentPath, if true, return children, which would be the page component

    return null;
}

export default Route;
