import { Component } from "react";
import PropTypes from "prop-types";
import ContactListItem from "../ContactListItem/ContactListItem";
import "./ContactList.scss";

class ContactList extends Component {
    render() {
        const {contacts, onDeleteContact} = this.props;
        return (
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
    }
};

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;