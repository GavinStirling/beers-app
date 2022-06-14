import "./App.scss";
import { useState, useEffect } from "react";

import Nav from "./containers/Nav/Nav";
import Home from "./containers/Home/Home";

import beers from "./data/beers";

function App() {
    const [searchTerm, setSearchTerm] = useState("");

    const [array, setArray] = useState(beers);

    const getBeers = async (searchTerm) => {
        let url = "https://api.punkapi.com/v2/beers";

        if (searchTerm != ""){
            const temp = searchTerm.split(" ");
            const cleanSearchTerm = temp.join("_")
            url+= `?beer_name=${cleanSearchTerm.toLowerCase()}`
        }

        const res = await fetch(url);
        const data = await res.json();
        setArray(data);
    };

    const handleSearchInput = (event) => {
        if (event.target.value != "") {
            setSearchTerm(event.target.value);
        }
    };

    // const search = (event) => {
    //     const term = event.target.value;
    //     console.log(term);
    //     if (term != "") {
    //         setActiveSearch(true);
    //         const results = beers.filter((beer) => {
    //             return beer.name.toLowerCase().includes(term.toLowerCase());
    //         });
    //         console.log(activeSearch, results);
    //         return results;
    //     } else {
    //         console.log(activeSearch);
    //         setActiveSearch(false);
    //         return beers;
    //     }
    // };

    // const HomeJSX = (array) => {
    //     return (
    //         <>
    //             <Home array={array} />
    //         </>
    //     );
    // };

    useEffect(() => {
        getBeers(searchTerm);
    }, [searchTerm]);

    return (
        <div className="App">
            <Nav search={handleSearchInput} />
            {/* {activeSearch ? HomeJSX(search()) : HomeJSX(beers)} */}
            {/* {activeSearch && <Home array={search()} />} */}
            <Home array={array} />
            {/* <Home array={search} /> */}
        </div>
    );
}

export default App;
