import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({label, options, selected, onSelectedChange}) => {

    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        
        const onBodyClick = (event) => {

            // console.log("Event.terget=>",event.target);

            if(ref.current.contains(event.target)){return ;}
            // console.log("Body Clicked !!");
            setOpen(false);

        };

        document.body.addEventListener("click", onBodyClick, {capture: true});
            
            return () => {
                document.body.removeEventListener("click", onBodyClick, {capture: true});
            };
    }, []);

    const renderedOptions = options.map((option) => {

        if(option.value === selected.value){
            return null; // null in react means not render anything.
        }

        return (<div 
                    key={option.value} 
                    className="item" 
                    onClick={() => {
                        // console.log("Rendered option clicked!!");
                        onSelectedChange(option)
                    }}
                >
            {option.label}
        </div>);
    })

    // console.log("ref.current =>",ref.current);

    return (<div ref={ref} className="ui form">
              <div className="field">
                 <label className="label">{label}</label>
                 <div 
                    onClick={() => { 
                        // console.log("Dropdown is clicked!!");
                        setOpen(!open)
                    }}
                    className={`ui selection dropdown ${open? "visible active" : ""}`}
                 >
                     <i className="dropdown icon" ></i>
                     <div className="text">{selected.label}</div>
                     <div className={`menu ${open ? "visible transition" : ""}`}>
                         {renderedOptions}
                     </div>
                 </div>
              </div>
              {/* <h1 style = {{color: `${selected.value}`, marginLeft: "25px"}}> This text is {selected.value}!!</h1> */}
            </div>);
}

export default Dropdown;