import React from "react";

import "./CardList.scss";

import Card from "../Card/Card";

const CardList = (props) => {
    const { array } = props;

    const CardListJSX = array.map((beer) => {
        return <Card key={beer["id"]} beer={beer} />
    })

    return <div className="cardlist">
        {CardListJSX}
    </div>;
};

export default CardList;
