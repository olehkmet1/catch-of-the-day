import React from "react";

class AddFishForm extends React.Component{

    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createFish = (e) => {
        e.preventDefault();
        const fish = {
           name: this.nameRef.value.value,
           price: parseFloat(this.priceRef.value.value),
           status: this.statusRef.value.value,
           desc: this.descRef.value.value,
           image: this.imageRef.value.value
        }
        this.props.addFish(fish);
        e.currentTarget.reset();
    };
    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" ref={this.nameRef} type="text" placeholder="name"/>
                <input name="price" ref={this.priceRef} type="text" placeholder="price"/>
                <select name="status" ref={this.statusRef} placeholder="status">
                    <option value="available">Fresh</option>
                    <option value="unavailable">Sold out</option>
                </select>
                <textarea name="desc" ref={this.descRef} placeholder="desc"/>
                <input name="image" ref={this.imageRef} type="text" placeholder="image"/>
                <button type="submit">Add Fish</button>
            </form>
        )
    }
}

export default AddFishForm;