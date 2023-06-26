import {useEffect, useState} from "react";

const Route = ({path, children}) => {

    const[currentPath, setCurrentPath] = useState(window.location.pathname);

    const onLocationChange = () => {
        setCurrentPath(window.location.pathname);
    };

    useEffect(() => {
        window.addEventListener("popstate", onLocationChange);

        return () => {
            window.removeEventListener("popstate", onLocationChange);
        }

    },[]);

    return currentPath === path ? children : null;//there are many route so this show only that route which path is equal to currentPath
};

export default Route;