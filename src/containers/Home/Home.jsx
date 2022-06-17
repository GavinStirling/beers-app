import React from "react";

import "./Home.scss";

import CardList from "../../components/CardList/CardList";

const Home = (props) => {
    const { array } = props;

    return (
        <div data-testid="home" className="home">
            <h1 className="home__heading">Beers!</h1>
            <CardList array={array} />
        </div>
    );
};

export default Home;
