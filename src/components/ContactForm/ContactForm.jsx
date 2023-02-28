import { Component } from "react";
import "./ContactForm.scss";
import { nanoid } from "nanoid";

class ContactForm extends Component {
    state = {
        name: "",
        number: "",
    };

    handleChange = event => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value,
        });
    };

    handleSubmit = event => {
        const { name, number } = this.state;
        event.preventDefault();
        this.props.onSubmit({id: nanoid(), name, number});
        this.reset();
    };

    reset = () => {
        this.setState({ name: "", number: "" });
    };

    render() {
        return (
            <form className="ContactForm__form" onSubmit={this.handleSubmit}>
                <label
                    htmlFor="name"
                    className="ContactForm__field ContactForm__field-label"
                >
                    Name:
                    <input
                        className="ContactForm__input"
                        id="name"
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </label>
                <label
                    htmlFor="number"
                    className="ContactForm__field ContactForm__field-label"
                >
                    Number:
                    <input
                        className="ContactForm__input"
                        id="number"
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={this.state.number}
                        onChange={this.handleChange}
                    />
                </label>
                <button type="submit" className="ContactForm__submit-button">
                    Add contact
                </button>
            </form>
        );
    }
}

export default ContactForm;
