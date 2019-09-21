import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 1,
            cheese: 1,
            meat: 0
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div>Buid Control</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;