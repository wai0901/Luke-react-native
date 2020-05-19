import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import RenderHome from './render-components/RenderHome';
import RenderLoading from './render-components/RenderLoading';

const mapStateToProps = state => {

    return {
        isLoading: state.mainPage.isLoading,
        mainData: state.mainPage.homeMenu,
    }
};

class HomeComponent extends Component {

    static navigationOptions = {
        title: 'Home'
    }
    
    render() {
        const { navigate } = this.props.navigation;
        
        return (
            <>
                <ScrollView style={styles.container}  showsVerticalScrollIndicator={false}>
                    <View style={styles.featureContainer}>               
                        <Image 
                            style={styles.imageStyle} source={{ uri: 'https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' }} 
                        /> 
                        <View style={styles.featureTextContainer}>
                            <Text style={styles.featureTitle}>30% OFF</Text>
                            <Text style={styles.featureDescription}>Entire Site</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 5 }}>
                        <FlatList 
                            showsVerticalScrollIndicator={false}
                            numColumns={2}
                            data={this.props.mainData}
                            keyExtractor={item => item.id}
                            renderItem={({item}) => 
                                <RenderHome
                                    item={item}
                                    navigate={navigate}
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
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
    },
    featureContainer: {
        height: 250, 
        width: 'auto',
        marginHorizontal: 5,
    },
    featureTextContainer: {
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
    featureTitle: {
        marginTop: 80,
        marginLeft: 10,
        fontSize: 80,
        fontWeight: 'bold',
        color: '#fff'
    },
    featureDescription: {
        marginLeft: 15,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff'
    },
    imageStyle: {
        flex: 1,
        width: 'auto',
        height: 150,
        borderRadius: 4,
        marginBottom: 5,
    },
})

export default connect(mapStateToProps)(HomeComponent);