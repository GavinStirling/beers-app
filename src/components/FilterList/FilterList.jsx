import React from "react";

import "./FilterList.scss";

import Filter from "../Filter/Filter";

const FilterList = (props) => {
    const { alcohol, classic, acidity } = props;

    return (
        <div className="filter-list">
            <p className="filter-list__heading">Filters:</p>

            <Filter id="alcohol" label="High Alcohol" onChange={alcohol} />
            <Filter id="classic" label="Classic Range" onChange={classic} />
            <Filter id="acidity" label="High Acidity" onChange={acidity} />
        </div>
    );
};

export default FilterList;
