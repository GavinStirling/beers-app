import React from "react";

import "./Home.scss";

import CardList from "../../components/CardList/CardList";

const Home = (props) => {
    const { array } = props;

    return (
        <div>
            This is the Home Page
            <CardList array={array} />
        </div>
    );
};

export default Home;
