import React from "react";

const Link = ({className, href, children}) => {

    const onClick = (event) => {

        //for ctrl + link to open in new tab
        if(event.metaKey || event.ctrlKey){
            return;
        }

        event.preventDefault();
        window.history.pushState({},"",href);//1st step for navigation change of address bar without changing page (faking navigation)

        const navEvent = new PopStateEvent("popstate"); //it tells Route component that url just changed
        window.dispatchEvent(navEvent);
    };

    return <a onClick={onClick} className={className} href={href} >{children}</a>
};

export default Link;