import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShoppingCartComponent from '../components/ShoppingCartComponent';
import { fetchCartData } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        cartItems: state.cartItem.cart.data
    }
}

const mapDispatchToProps = {
    fetchCartData
}

class ShoppingCartScreen extends Component {

    componentDidMount() {
        this.props.fetchCartData();
    }

    static navigationOptions = { title: 'ShoppingCart' }

    render() {

        return (
            <ShoppingCartComponent 
                cartItems={this.props.cartItems}
            />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartScreen);