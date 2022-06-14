import React from "react";

import "./Filter.scss";

const Filter = (props) => {
    const { id, label, value, onChange } = props;

    return (
        <div className="filter">
            <label htmlFor={id}> {label}</label>
            <input id={id} type="checkbox" value={value} onChange={onChange}  />
        </div>
    );
};

export default Filter;
