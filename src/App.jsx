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
        if (term != "") {
            setActiveSearch(true);
            const results = beers.filter((beer) => {
                return beer.name.toLowerCase().includes(term.toLowerCase());
            });
            console.log(activeSearch, results);
            return results;
        } else {
            console.log(activeSearch);
            setActiveSearch(false);
            return beers;
        }
    };

    const HomeJSX = (array) => {
        return (
            <>
                <Home array={array} />
            </>
        );
    };

    return (
        <div className="App">
            <Nav search={search} />
            {/* {activeSearch ? HomeJSX(search()) : HomeJSX(beers)} */}
            {/* {activeSearch && <Home array={search()} />} */}
            {/* <Home array={beers} /> */}
            {/* <Home array={search} /> */}
        </div>
    );
}

export default App;
