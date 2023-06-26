import React, { useState} from "react";

const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(null); //Hook state initialisation (useState Hook)
    const onTitleClick = (index) => {
        setActiveIndex(index);                            // setState in hook
        };
    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? "active" : "";
 
        return (<React.Fragment key={item.title}>
            <div 
                className={"title " + active}
                onClick={()=> onTitleClick(index)}    
            >
                <i className="dropdown icon">
                </i>
                    {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>);
    });

    return (<div className="ui styled accordion">
        {renderedItems}
        {/* <h1>{activeIndex}</h1>   */}
        {/* active index in space of state.element  */}
    </div>);
}

export default Accordion;