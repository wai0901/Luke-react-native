import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchMainData } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {mainData: state.mainPage}
};

const mapDispatchToProps = { fetchMainData }


const Main = (props) => {

    const { isLoading } = props.mainData;
    const { data } = props.mainData.homeMenu;

    useEffect(() => {
        props.fetchMainData();
    }, [])

    console.log(data)
    return (
        <View style={styles.mainBody}>
            <Text>{data[0].title}</Text>
        </View>
    )
    
}

const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);