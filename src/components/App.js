import React from "react";
import Header from "./Header";
import Order from "./Order";
import Invertory from "./Invertory";

class App extends React.Component{
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh seafood market" />
                </div>
                <Invertory />
                <Order />
            </div>
        )
    }
}

export default App;