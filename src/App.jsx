import "./App.scss";
import React, { useState, useEffect } from "react";

import Nav from "./containers/Nav/Nav";
import Home from "./containers/Home/Home";

import beers from "./data/beers";

function App() {
    const [array, setArray] = useState(beers);
    const [searchTerm, setSearchTerm] = useState("");
    const [alcoholFilter, setAlcoholFilter] = useState(false);
    const [classicFilter, setClassicFilter] = useState(false);
    const [acidityFilter, setAcidityFilter] = useState(false);

    // { alcohol: 6, active: false },
    // { classic: 2010, active: false },
    // { acidity: 4, active: false }

    const getBeers = async (
        searchTerm,
        alcoholFilter,
        classicFilter,
        acidityFilter
    ) => {
        const globalArray = [];

        for (let index = 0; index < 5; index++) {
            let url = `https://api.punkapi.com/v2/beers?page=${
                index + 1
            }&per_page=80`;

            if (searchTerm != "") {
                const temp = searchTerm.split(" ");
                const cleanSearchTerm = temp.join("_");
                url += `&beer_name=${cleanSearchTerm.toLowerCase()}`;
            }

            if (alcoholFilter) {
                url += `&abv_gt=6`;
            }

            if (classicFilter) {
                url += `&brewed_before=01-2010`;
            }

            const res = await fetch(url);
            const data = await res.json();

            data.forEach((beer)=>{
                globalArray.push(beer);
                console.log(array)
            })

        }

        if (acidityFilter) {
            const temp = globalArray.filter((beer) => {
                return beer.ph < 4;
            });
            setArray(temp);
            return;
        }

        setArray(globalArray);
    };

    const handleSearchInput = (event) => {
        if (event.target.value != "") {
            setSearchTerm(event.target.value);
        }
    };

    const handleAlcoholFilter = (event) => {
        if (event.target.checked) {
            setAlcoholFilter(true);
        } else if (!event.target.checked) {
            setAlcoholFilter(false);
        }
    };

    const handleClassicFilter = (event) => {
        if (event.target.checked) {
            setClassicFilter(true);
        } else if (!event.target.checked) {
            setClassicFilter(false);
        }
    };

    const handleAcidityFilter = (event) => {
        if (event.target.checked) {
            setAcidityFilter(true);
        } else if (!event.target.checked) {
            setAcidityFilter(false);
        }
    };

    useEffect(() => {
        getBeers(searchTerm, alcoholFilter, classicFilter, acidityFilter);
    }, [searchTerm, alcoholFilter, classicFilter, acidityFilter]);

    return (
        <div className="App">
            <Nav
                search={handleSearchInput}
                alcohol={handleAlcoholFilter}
                classic={handleClassicFilter}
                acidity={handleAcidityFilter}
            />
            <Home array={array} />
        </div>
    );
}

export default App;
