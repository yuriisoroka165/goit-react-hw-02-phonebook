import { Component } from "react";
import "./ContactList.scss";
import ContactListItem from "../ContactListItem/ContactListItem";

class ContactList extends Component {
    render() {
        const contacts = this.props.contacts;
        return (
            <ul className="ContactList__list">
                {contacts.map(({ id, name, number }) => (
                    <ContactListItem
                        key={id}
                        name={name}
                        number={number}
                        onDeleteContact={this.props.onDeleteContact}
                    />
                ))}
            </ul>
        );
    }
}

export default ContactList;