import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Button } from 'react-native';
import RenderCartItem from './render-components/RenderCartItem';
import RenderLoading from './render-components/RenderLoading';
import { connect } from 'react-redux';
import { updateCartItems, removeCartItems } from '../redux/ActionCreators';

const mapDispatchToProps = {
    updateCartItems: (cartItem, id) => (updateCartItems(cartItem, id)),
    removeCartItems: (id) => (removeCartItems(id)),
}



class ShoppingCartComponent extends Component {

    render() {
        

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
                        <Text style={styles.totalPrice} numberOfLines={1}>Total: $
                            {
                                this.props.cartItems === [] ?
                                "0.00" :
                                this.props.cartItems.map(item => Number(item.quantity * item.price)).reduce((t, c) => t + c, 0).toFixed(2) 

                            }
                        </Text>
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
                            data={this.props.cartItems}
                            keyExtractor={item => item.id}
                            renderItem={({item}) => 
                                <RenderCartItem
                                    item={item}
                                    changeQtyHandler={changeQtyHandler}
                                />
                            }
                        />
                    </View>
                </ScrollView>
                {
                    this.props.isLoading ?
                    <RenderLoading /> : 
                    null
                }
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
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(45, 52, 54, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff'
    }
})


export default connect(null, mapDispatchToProps)(ShoppingCartComponent);