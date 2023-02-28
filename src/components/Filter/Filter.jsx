import { Component } from "react";
import "./Filter.scss";

const Filter = ({filterValue, onChange}) => (
    <>
        <label
            htmlFor="filter-field"
            className="Filter__field Filter__field-label"
        >
            Find contacts by name
            <input
                id="filter-field"
                className="Filter__field-input"
                type="text"
                value={filterValue}
                onChange={onChange}
            />
        </label>
    </>
);
export default Filter;
