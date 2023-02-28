import { Component } from "react";
import css from "./App.scss"

class App extends Component {
    state = {
        contacts: [],
        name: "",
    };

    render() {
        return (
            <div>
                <h1>Phonebokk</h1>
            </div>
        );
    }
}
export default App;
