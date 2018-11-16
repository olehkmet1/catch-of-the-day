import React, {Fragment} from "react";
import {getFunName} from "../helpers";

class StorePicker extends React.Component {

    nameInput = React.createRef();

    goToStore = (event) => {
        event.preventDefault();
        const storeName = this.nameInput.value.value;
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
        return (
            <form className='store-selector' onSubmit={this.goToStore}>
                <h2>Please enter a Store</h2>
                <input type="text"
                       required
                       ref={this.nameInput}
                       placeholder='Store Name'
                       defaultValue={getFunName()}/>
                <button type="submit">Visit store</button>
            </form>
        )
    }
}

export default StorePicker;