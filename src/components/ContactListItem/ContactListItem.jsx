import PropTypes from "prop-types";
import "./ContactListItem.scss";

const ContactsListItem = ({ id, name, number, onDeleteContact }) => (
    <li className="ContactsListItem__item">
        <span className="ContactsListItem__item-circle"></span>
        <p className="ContactsListItem__item-name">
            {name}:
            <span className="ContactsListItem__item-number">{number}</span>
        </p>
        <button
            type="button"
            className="ContactsListItem__button"
            onClick={() => onDeleteContact(id)}
        >
            Delete
        </button>
    </li>
);

            

ContactsListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}

export default ContactsListItem;
