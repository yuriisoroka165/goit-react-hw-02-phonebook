import { Component } from "react";
import "./App.scss"
import ContactForm from "./ContactForm/ContactForm";

class App extends Component {
    state = {
        contacts: [],
        name: "",
    };

    render() {
        return (
            <div className="App__container">
                <h1>Phonebok</h1>
                <ContactForm />

                <h2>Contacts</h2>
                {/* <Filter /> */}
                {/* <ContactsList /> */}
            </div>
        );
    }
}
export default App;
