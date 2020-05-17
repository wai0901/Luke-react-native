import React, { Component } from 'react';
import { StyleSheet, Dimensions, Text, View, FlatList, ScrollView, Button } from 'react-native';
import RenderCartItem from './render-components/RenderCartItem';
import { connect } from 'react-redux';
import { updateCartItems, removeCartItems } from '../redux/ActionCreators';

const containerWidth = Dimensions.get('window').width / 2 - 40;

const mapDispatchToProps = {
    updateCartItems: (cartItem, id) => (updateCartItems(cartItem, id)),
    removeCartItems: (id) => (removeCartItems(id)),
}



class ShoppingCartComponent extends Component {

    render() {
        
        const { cartItems } = this.props

        const changeQtyHandler = (item, id, action) => {
            let qty = Number(item.quantity);

            if (action === "plus") {
                this.props.updateCartItems({...item, quantity: qty + 1}, id);
            } else if (action === "minus") {
                qty === 1 || qty === "1"?
                this.props.removeCartItems(id):
                this.props.updateCartItems({...item, quantity: qty - 1}, id);
            } else if (action === "remove") {
                this.props.removeCartItems(id);
            }
        }
        
        return (
            <>
                <View style={styles.topContainer}>
                    <View style={styles.priceContainer}>               
                        
                            {
                                cartItems?
                                <Text style={styles.totalPrice} numberOfLines={1}>
                                    Total: ${cartItems.map(item => Number(item.cartItem.quantity * item.cartItem.price)).reduce((t, c) => t + c).toFixed(2)}
                                </Text> :
                                <Text>Total: $0.00</Text>
                            }
                        
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.checkoutButton}>
                            <Button 
                                title="Checkout"
                                type="outline"
                                size={15}
                                color='#535c68'
                            />
                        </View>
                    </View>
                </View>
                <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                    <View style={{ marginLeft: 5 }}>
                        <FlatList 
                            showsVerticalScrollIndicator={false}
                            data={cartItems}
                            keyExtractor={item => item.id}
                            renderItem={({item}) => 
                                <RenderCartItem
                                    item={item}
                                    changeQtyHandler={changeQtyHandler}
                                />
                            }
                        />
                    </View>
                    <Text style={styles.loading}>{ this.props.isLoading ? 'Loading....' : null }</Text>
                </ScrollView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    topContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },  
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    priceContainer: {
        flex: 1,
        height: 50, 
        marginLeft: 20,
        marginBottom: 5,
        justifyContent: 'center',
    },
    buttonContainer: {
        // width: containerWidth,
        justifyContent: 'center',
        position: 'absolute',
        alignItems: 'flex-end',
        right: 20,
        bottom: 10
        
    },
    checkoutButton: {
        width: 100,
    },
    totalPrice: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#d63031',
    },
    loading: {
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})


export default connect(null, mapDispatchToProps)(ShoppingCartComponent);