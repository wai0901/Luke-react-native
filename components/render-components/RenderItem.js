import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import styles from './styles/Styles';

const RenderItem = ({item, toggleModal, selectItemHandler}) => {
        
    return (
        <TouchableOpacity
            style={styles.buttonStyle}
                onPress={() => {
                    toggleModal();
                    selectItemHandler(item);
                }}
            >
            <View style={ styles.itemContainer }>
                <Image 
                    style={styles.image} source={{ uri: item.image }} 
                /> 
            </View>
            <View style={styles.overlay}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.title.toUpperCase()}</Text>
                    <Text style={styles.description}>{item.description.toUpperCase()}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
    
    
}


export default RenderItem;