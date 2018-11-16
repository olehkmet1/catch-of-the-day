import React from "react";
import AddFishForm from "./AddFishForm";

class Invertory extends React.Component{
    render() {
        return (
            <div className="inventory">
                <AddFishForm/>
            </div>
        )
    }
}

export default Invertory;