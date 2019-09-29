import React, { Component } from 'react';
import PizzaImage from "../components/PizzaImage/PizzaImage";
class Pizza extends Component {
    render() {
        return (
            <div>
                <p>The Pizza</p>
                <PizzaImage/>
            </div>
        );
    }
}

export default Pizza;