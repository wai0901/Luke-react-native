import React from 'react';
import { View, Dimensions, Text, StyleSheet, Alert } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchCartData } from '../../redux/ActionCreators';

const cardWidth = Dimensions.get('window').width / 2 - 40;

const mapDispatchToProps = {
    fetchCartData
}

const RenderCartItem = (props) => {

        const item = props.item.cartItem;
        // console.log(props)
    return (
        <Card
            featuredTitle={item.title}
            image={{uri: item ? item.images[0]: null}}
        >
            <View style={{ flexDirection: "row", marginTop: 10 }}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>Items#: {item.productId}</Text> 
                    <Text style={styles.price}>${item.price}</Text> 
                    <Text style={styles.description}>Size: {item.size}</Text> 
                </View>
                <View style={styles.buttonContainer}>
                    <Text>Qty: {item.quantity}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Button 
                            icon={
                                <Icon 
                                    name="plussquareo"
                                    type="antdesign"
                                    size={25}
                                    color="black"
                                />
                            }
                            type="clear"
                            onPress={() => {
                                props.changeQtyHandler(item, props.item.id, "plus");
                                Alert.alert(
                                    `Added 1 item to cart.`,
                                    `Size: ${item.size}`,
                                    [
                                        {
                                            text: 'Close',
                                            onPress: () => fetchCartData(),
                                            style: 'cancel'
                                        },
                                    ],
                                    { cancelable: false }
                                )
                                }
                            }
                        />
                        <Button 
                            icon={
                                <Icon 
                                    name="minussquareo"
                                    type="antdesign"
                                    size={25}
                                    color="black"
                                />
                            }
                            type="clear"
                            onPress={() => {
                                props.changeQtyHandler(item, props.item.id, "minus");
                                Alert.alert(
                                    `Removed 1 item from cart.`,
                                    `Size: ${item.size}`,
                                    [
                                        {
                                            text: 'Close',
                                            onPress: () => fetchCartData(),
                                            style: 'cancel'
                                        },
                                    ],
                                    { cancelable: false }
                                )
                                }
                            }
                        />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Button 
                            icon={
                                <Icon 
                                    reverse
                                    name="delete"
                                    type="antdesign"
                                    size={15}
                                    color="#636e72"
                                />
                            }
                            type="clear"
                            onPress={() => {
                                props.changeQtyHandler(item, props.item.id, "remove")
                                Alert.alert(
                                    `Removed item to cart.`,
                                    `Size: ${item.size}`,
                                    [
                                        {
                                            text: 'Close',
                                            onPress: () => fetchCartData(),
                                            style: 'cancel'
                                        },
                                    ],
                                    { cancelable: false }
                                )
                                }
                            }
                        />
                    </View>
                </View>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    TextContainer: {
        width: cardWidth,
        marginRight: 20
    },
    title: {
        marginHorizontal: 20,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000'
    },
    description: {
        marginHorizontal: 20,
        fontSize: 15,
        color: '#000'
    },
    price: {
        marginTop: 30,
        marginLeft: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },  
    buttonContainer: {
        width: cardWidth,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default connect(null, mapDispatchToProps)(RenderCartItem);