import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles/Styles';


const RenderHome = (props) => {

    const { item, navigate } = props;

    return <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => {
                        navigate(String(item.RNLink))
                    }}
                >
                <View style={ styles.itemContainer }>
                    <Image style={styles.image} source={{ uri: item.image }} /> 
                </View>
                <View style={styles.overlay}>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{item.title.toUpperCase()}</Text>
                        <Text style={styles.description}>{item.description.toUpperCase()}</Text>
                    </View>
                </View>
        </TouchableOpacity>
}

export default RenderHome;