import React from "react";

class AddFishForm extends React.Component{
    render() {
        return (
            <form className="fish-edit">
                <input name="name" type="text" placeholder="name"/>
                <input name="price" type="text" placeholder="price"/>
                <input name="status" type="text" placeholder="status"/>
                <textarea name="desc" type="text" placeholder="desc"/>
                <input name="image" type="text" placeholder="image"/>
                <button type="submit">Add Fish</button>
            </form>
        )
    }
}

export default AddFishForm;