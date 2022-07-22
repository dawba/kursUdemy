import React, {useState} from 'react';
import Dropdown from "./components/Dropdown";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
    {
        title: "What is React?",
        content: "React is a front end javascript framework"
    },
    {
        title: "Why use React?",
        content: "React is a favorite JS library among engineers"
    },
    {
        title: "How do you use React?",
        content: "You use React by creating components"
    }
];

const options = [
    {
        label: "Color red",
        value: "red"
    },
    {
        label: "Color blue",
        value: "blue"
    },
    {
        label: "Color green",
        value: "green"
    },
    {
        label: "Szymkowy",
        value: "#50B1B0"
    }
];

export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [toggled, setToggle] = useState(true);

    return (
        <div>
            <label>
                <Header/>
            </label>
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/list">
                <Search/>
            </Route>
            <Route path="/dropdown">
                <button onClick={() => setToggle(!toggled)}>
                    Toggle Dropdown
                </button>
                    {
                        toggled
                            ? <Dropdown
                                label="Select a color"
                                selected={selected}
                                options={options}
                                onSelectedChange={setSelected}
                            />
                            : null
                    }
                    <h1 style={{color: selected.value}}>selected color</h1>
            </Route>
            <Route path="/translate">
                <Translate/>
            </Route>
        </div>
    );
};




/*
<button onClick={() => setToggle(!toggled)}>
                Toggle Dropdown
            </button>
            {
                toggled ? <Dropdown
                    selected={selected}
                    options={options}
                    onSelectedChange={setSelected}
                /> : null
            }
            <h1 style={{color: selected.value}}>selected color</h1>
 */