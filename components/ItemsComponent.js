import React, { Component } from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import styles from './styles/Styles';
import RenderItems from './render-components/RenderItem';
import RenderModal from './render-components/RenderModal';
import RenderLoading from './render-components/RenderLoading';
import { connect } from 'react-redux';
import { postCartItems, updateCartItems, fetchCartData } from '../redux/ActionCreators';


const mapStateToProps = state => {
    console.log(state.cartItem.isLoading)
    return {
        cartIsLoading: state.cartItem.isLoading,
        inCartItems: state.cartItem.cart
    }
}

const mapDispatchToProps = {
    postCartItems: (cartItem) => (postCartItems(cartItem)),
    updateCartItems: (cartItem, id) => (updateCartItems(cartItem, id)),
    fetchCartData
};

class ItemsComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            selectedItem: ""
        }
    }

    render() {

        const toggleModal = () => {
            this.setState({showModal: !this.state.showModal});
        }

        const selectItemHandler = (item) => {
            this.setState({ selectedItem: item })
        }

        const addCartHandler = (cartItem, size, qty) => {

            if (this.props.inCartItems) {
                if(findItem(this.props.inCartItems, cartItem, size)){
                    //find and update the item which already in cart
                    let updatedItem = sameItemInCart(this.props.inCartItems, cartItem, size, qty);
                    let updatedItemId = getId(this.props.inCartItems, cartItem, size);
                    return this.props.updateCartItems(updatedItem, updatedItemId);
                } else {
                    this.props.postCartItems(addItem(cartItem, size, qty));
                }
            } else {
                this.props.postCartItems(addItem(cartItem, size, qty));
            }          
        }

        return (
            <>
                <ScrollView style={styles.container}>
                    <View style={{ marginLeft: 5 }}>
                        <FlatList 
                            showsVerticalScrollIndicator={false}
                            numColumns={2}
                            data={this.props.items}
                            keyExtractor={item => item.id}
                            renderItem={({item}) => 
                            <RenderItems
                                    item={item}
                                    toggleModal={toggleModal}
                                    selectItemHandler={selectItemHandler}
                                />
                            }
                        />
                    </View>
                    <RenderModal 
                        item={this.state.selectedItem}
                        toggleModal={toggleModal}
                        showModal={this.state.showModal}
                        addCartHandler={addCartHandler}
                        fetchCartData={this.props.fetchCartData}
                        cartIsLoading={this.props.cartIsLoading}
                    />
                </ScrollView>
                {
                    this.props.itemsIsLoading ?
                    <RenderLoading /> : 
                    null
                }
            </>
        )
    }
}



const addItem = (item, size, qty) => {
    let id = item.productId.concat(size)

    return {
        ...item,
        productId: id,
        size: size,
        quantity: qty,
        date: new Date().toISOString()
    };
}

const getId = (cartItems, newItem, size) => {
    let foundItem = findItem(cartItems, newItem, size)
    return foundItem._key;
}

const sameItemInCart = (cartItems, newItem, size, qty) => {
    let item = findItem(cartItems, newItem, size);
    return {
        ...item,
        quantity: Number(item.quantity) + Number(qty)
    }
}

const findItem = (items, inputItem, size) => {
    let newId = inputItem.productId.concat(size);
    return items.find(item => item.productId === newId && item);
}

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }

export default connect(mapStateToProps, mapDispatchToProps)(ItemsComponent);