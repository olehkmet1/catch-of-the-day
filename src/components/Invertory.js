import React from "react";
import AddFishForm from "./AddFishForm";

class Invertory extends React.Component{
    render() {
        return (
            <div className="inventory">
                <AddFishForm addFish={this.props.addFish}/>
                <button onClick={this.props.loadSampleFishes}>Load sample fishes</button>

            </div>
        )
    }
}

export default Invertory;