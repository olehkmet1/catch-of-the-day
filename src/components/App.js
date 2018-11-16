import React from "react";
import Header from "./Header";
import Order from "./Order";
import Invertory from "./Invertory";

class App extends React.Component{
    state = {
        fishes:{},
        order:{}
    };
    addFish = fish => {

    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh seafood market" />
                </div>
                <Invertory addFish={this.addFish()} />
                <Order />
            </div>
        )
    }
}

export default App;