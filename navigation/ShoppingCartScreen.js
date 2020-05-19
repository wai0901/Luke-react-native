import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShoppingCartComponent from '../components/ShoppingCartComponent';
import { fetchCartData } from '../redux/ActionCreators';


const mapStateToProps = state => {
    
    return {
        isLoading: state.cartItem.isLoading,
        cartItems: state.cartItem.cart
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
                    isLoading={this.props.isLoading}
                />
            
            
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartScreen);