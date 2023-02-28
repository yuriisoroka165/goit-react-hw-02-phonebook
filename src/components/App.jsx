import { Component } from "react";
import "./App.scss";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";

class App extends Component {
    state = {
        contacts: [
            { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
            { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
            { id: "id-3", name: "Eden Clements", number: "645-17-79" },
            { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
            { id: "id-5", name: "Yurii Soroka", number: "111-11-11" },
        ],
        filter: "",
    };

    deleteContact = contactId => {
        this.setState(prevState => {
            return {
                contacts: prevState.contacts.filter(
                    contact => contact.id !== contactId
                ),
            };
        });
    };

    newContactAudit = newContact => {
        return this.state.contacts.filter(
            contact =>
                contact.name.toLowerCase() === newContact.name.toLowerCase()
        );
    };

    contactFormSubmitHandler = newContact => {
        this.newContactAudit(newContact).length > 0
            ? alert(`${newContact.name} is already in contacts.`)
            : this.setState(prevState => ({
                  contacts: [...prevState.contacts, newContact],
              }));
    };

    contactFilter = event => {
        this.setState({ filter: event.currentTarget.value });
    };

    render() {
        const filterValueLowerCase = this.state.filter.toLowerCase();

        const visibleContacts = this.state.contacts.filter(contact =>
            contact.name.toLowerCase().includes(filterValueLowerCase)
        );

        return (
            <div className="App__container">
                <h1>Phonebok</h1>
                <ContactForm onSubmit={this.contactFormSubmitHandler} />

                <h2>Contacts</h2>
                <Filter
                    filterValue={this.state.filter}
                    onChange={this.contactFilter}
                />
                <ContactList
                    onDeleteContact={this.deleteContact}
                    contacts={visibleContacts}
                />
            </div>
        );
    }
}

export default App;
