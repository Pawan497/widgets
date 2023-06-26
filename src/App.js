import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search"
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
    {
        title: "What is React?",
        content: "React is front end javascript framework"
    },
    {
        title: "Why use React?",
        content: "React is a favorite JS librabry among engineers"
    },
    {
        title: "How do you use React?",
        content: "You use React by creating components"
    }
];

const options = [
    {
        label: "The Color Red",
        value: "red"
    },
    {
        label: "The Color Green",
        value: "green"
    },
    {
        label: "A Shade of Blue",
        value: "blue"
    }
];

// const showAccordion = () => {
//     if(window.location.pathname === "/"){
//         return <Accordion 
//                     items={items}
//                 />;
//     }
// }

// const showList = () => {
//     if(window.location.pathname === "/list"){
//         return <Search />;
//     }
// }

// const showDropdown = () => {
//     if(window.location.pathname === "/dropdown"){
//         return <Dropdown 
//                   label = "Select a Color"
//                   selected = {selected}
//                   onSelectedChange = {setSelected}
//                   options = {options}
//                 />;
//     }
// }

// const showTranslate = () => {
//     if(window.location.pathname === "/translate"){
//         return <Translate />;
//     }
// }


const App = () => {

    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    // return (
    //         <div>
    //             <button onClick={() => {setShowDropdown(!showDropdown)}}>Toggle Dropdown</button>
    //             {/* <Accordion items={items}/> */}
    //             {/* <Search /> */}
    //             { showDropdown ? 
    //                 <Dropdown 
    //                 label = "Select a Color"
    //                 selected = {selected}
    //                 onSelectedChange = {setSelected}
    //                 options = {options}
    //             /> : null
    //             }
    //         </div>
    // );

    return (<div>
                {/* {showAccordion()}
                {showList()}
                {showDropdown()}
                {showTranslate()} */}

                <Header />
                <Route path="/">
                    <Accordion items={items} />
                </Route>
                <Route path="/list">
                    <Search />
                </Route>
                <Route path="/dropdown">
                    <button onClick={() => {setShowDropdown(!showDropdown)}}>Toggle Dropdown</button>
                    {  showDropdown ?
                        <Dropdown 
                        label = "Select a Color"
                        selected = {selected}
                        onSelectedChange = {setSelected}
                        options = {options}
                        /> : null
                    }
                </Route>
                <Route path="/translate">
                    <Translate />
                </Route>

                {/* <Translate /> */}
            </div>);
};

export default App;