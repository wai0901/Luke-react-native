import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchItemsData } from '../../redux/ActionCreators';
import styles from './styles/Styles';

const mapDispatchToProps = {
    fetchItemsData: (link) => (fetchItemsData(link)),
};

const RenderCategory = (props) => {
        
    const { item, navigate } = props;

    return (
        <TouchableOpacity
            style={styles.buttonStyle}
                onPress={() => {
                    navigate('Items');
                    props.fetchItemsData(item.link);
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


export default connect(null, mapDispatchToProps)(RenderCategory);