import PropTypes from "prop-types";
import "./Filter.scss";

const Filter = ({ filterValue, onChange }) => (
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

Filter.propTypes = {
    filterValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;
