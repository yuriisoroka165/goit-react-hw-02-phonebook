import { Component } from "react";
import "./ContactListItem.scss";

class ContactsListItem extends Component {
    render() {
        const { id, name, number, onDeleteContact } = this.props;
        return (
            <li className="ContactsListItem__item">
                <p className="ContactsListItem__item-name">
                    {name}:
                    <span className="ContactsListItem__item-number">
                        {number}
                    </span>
                </p>
                <button type="button" onClick={() => onDeleteContact(id)}>
                    Delete
                </button>
            </li>
        );
    }
}

export default ContactsListItem;
