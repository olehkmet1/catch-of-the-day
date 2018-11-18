import React from "react";
import fishes from "../sample-fishes";
import {formatPrice} from "../helpers";

class Fish extends React.Component{

    render() {
        const detail = this.props.details;
        const isAvailable = detail.status === 'available';
        return (
            <li className="menu-fish">
                <img src={detail.image} alt={detail.image}/>
                <h3 className="fish-name">
                    {detail.name}
                    <span className="price">
                        {formatPrice(detail.price)}
                    </span>
                </h3>
                <p>{detail.desc}</p>
                <button disabled={!isAvailable}
                        onClick={() => {this.props.addToOrder(this.props.index)}}
                >{isAvailable? 'Add to Cart' : 'Sold Out!'}</button>
            </li>
        )
    }
}

export default Fish;