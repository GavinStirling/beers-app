import "./App.scss";
import { useState } from "react";

import Nav from "./containers/Nav/Nav";
import Home from "./containers/Home/Home";

import beers from "./data/beers";

function App() {
    const [activeSearch, setActiveSearch] = useState(false);

    const handleSearchInput = () => {
        if (!activeSearch) {
            setActiveSearch(true);
        } else {
            setActiveSearch(false);
        }
    };

    const search = (event) => {
        const term = event.target.value;
        console.log(term);
        if (term !== "") {
            // handleSearchInput();
            const results = beers.filter((beer) => {
                return beer.name.toLowerCase().includes(term);
            });
            console.log(activeSearch, results);
            return results;
        } else if (term === "") {
            console.log(activeSearch);
            return beers;
        }
    };

    return (
        <div className="App">
            <Nav search={search} />
            {!activeSearch && <Home array={beers} />}
            {activeSearch && <Home array={search} />}
            {/* <Home array={beers} /> */}
            {/* <Home array={search} /> */}
        </div>
    );
}

export default App;
