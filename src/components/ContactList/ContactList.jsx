import PropTypes from "prop-types";
import ContactListItem from "../ContactListItem/ContactListItem";
import "./ContactList.scss";

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className="ContactList__list">
        {contacts.map(({ id, name, number }) => (
            <ContactListItem
                key={id}
                id={id}
                name={name}
                number={number}
                onDeleteContact={onDeleteContact}
            />
        ))}
    </ul>
);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;