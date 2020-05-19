import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles/Styles';

const RenderLoading = () => {
    return (
            <View style={styles.loading}>
                <Text style={styles.loadingText}>Loading....</Text>
            </View>  

    )
}

export default RenderLoading;