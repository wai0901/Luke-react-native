import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Badge, Icon } from 'react-native-elements'

const mapStateToProps = state => {
    return {
        cartItems: state.cartItem.cart.data
    }
}

class CartIcon extends Component {

    render() {
            
        // const CartNum = this.props.cartItems.map(item => Number(item.cartItem.quantity)).reduce((t, c) => t + c);
        const { navigate } = this.props.navigation;

        return <View style={styles.cartContainer}>
                <Icon
                     name='shopping-cart'
                     type='feather'
                     color='black'
                     size={20}
                     iconStyle={styles.iconRight}
                     onPress={() => navigate('ShoppingCart')}
                />
                {
                    this.props.cartItems ?
                    <Badge
                         status="error"
                         containerStyle={{ position: 'absolute', top: -4, right: -5 }}
                         value={
                            this.props.cartItems.map(item => Number(item.cartItem.quantity)).reduce((t, c) => t + c)
                         }
                    /> :
                    null
                }
            </View>
        }
    }

const styles = StyleSheet.create({
    cartContainer: {
        marginRight: 20,
        marginBottom: -5,
    },
    iconRight: {
        color: '#000',
        fontSize: 27
    }
})

export default connect(mapStateToProps)(CartIcon);