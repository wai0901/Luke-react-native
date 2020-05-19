import React, { useState } from 'react';
import { Text, View, FlatList, Image, Modal, Dimensions, Picker, Alert, TouchableOpacity } from 'react-native';
import RenderLoading from './RenderLoading';
import styles from './styles/RenderModalStyles';


const windowWidth = Dimensions.get('window').width - 40;

const RenderModal = ({ toggleModal, showModal, item, addCartHandler, fetchCartData, cartIsLoading }) => {

    const [size, setSize] = useState("S");
    const [qty, setQty] = useState("1");

    const resetAddItem = () => {
        setSize("S");
        setQty("1");
    }

    return (
        <>
            <Modal
                animationType={'slide'}
                transparent={false}
                visible={showModal}
                onRequestClose={() => toggleModal()}>
                <View style={styles.modal}>
                    <View style={styles.imagesContainer}>
                        <FlatList 
                            horizontal  
                            snapToInterval={windowWidth} 
                            snapToAlignment={"center"}
                            showsHorizontalScrollIndicator={false} 
                            data={item.images}
                            keyExtractir={result => result.id}
                            renderItem={({ item }) => {
                                return  <Image 
                                        style={styles.imageStyle} source={{ uri: item }} 
                                    />  
                            }}
                        />               
                    </View>
                    <View style={styles.textContainer}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.description}>Items#: {item.productId}</Text> 
                            <Text style={styles.price}>${item.price}</Text> 
                            <Text style={styles.description}>{item.description}</Text> 
                    </View>
                    <View style={styles.formRow}>
                        <Text style={styles.formLabel}>Size:</Text>
                        <Picker
                            style={styles.formItem}
                            selectedValue={size}
                            onValueChange={sizeValue => setSize(sizeValue)}>
                            <Picker.Item label='S' value='S' />
                            <Picker.Item label='M' value='M' />
                            <Picker.Item label='L' value='L' />
                            <Picker.Item label='XL' value='XL' />
                        </Picker>
                    </View>
                    <View style={styles.formRow}>
                        <Text style={styles.formLabel}>Qty:</Text>
                        <Picker
                            style={styles.formItem}
                            selectedValue={qty}
                            onValueChange={sizeValue => setQty(sizeValue)}>
                            <Picker.Item label='1' value='1' />
                            <Picker.Item label='2' value='2' />
                            <Picker.Item label='3' value='3' />
                            <Picker.Item label='4' value='4' />
                        </Picker>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonStyle}>
                            <TouchableOpacity
                                style={styles.buttonAddToCart}
                                onPress={() => {
                                    addCartHandler(item, size, qty);
                                    Alert.alert(
                                        `Added ${item.title} to cart.`,
                                        `Size: ${size}, Quantity: ${qty}`,
                                        [
                                            {
                                                text: 'Close',
                                                onPress: () => fetchCartData(),
                                                style: 'cancel'
                                            },
                                        ],
                                        { cancelable: false }
                                    );
                                    resetAddItem();
                                }}>
                                <Text style={styles.buttonAddToCartText}>ADD TO CART</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonStyle}>
                            <TouchableOpacity
                                style={styles.buttonCancel}
                                onPress={() => {
                                    toggleModal();
                                    resetAddItem();
                                }}>
                                <Text style={styles.buttonCancelText}>CANCEL</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {
                    cartIsLoading ?
                    <RenderLoading /> : 
                    null
                }
            </Modal>
        </>
    )
}

export default RenderModal;