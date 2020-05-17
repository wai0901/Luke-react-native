import React, { Component } from 'react';
import { Text, View, FlatList, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import RenderCategory from './render-components/RenderCategory';
import styles from './styles/Styles';


const mapStateToProps = state => {

    return {
        isLoading: state.category.isLoading,
        categoryData: state.category.category.data,
    }
};

class CategoryComponent extends Component {

    static navigationOptions = {
        title: 'Category'
    }
    
    render(){
        console.log(this.props.isLoading)
        return (
            <ScrollView style={styles.container}  showsVerticalScrollIndicator={false}>
                <View style={styles.featureContainer}>               
                    <Image 
                        style={styles.imageStyle} source={{ uri: this.props.link }} 
                    /> 
                    <View style={styles.featureTextContainer}>
                        <Text style={styles.featureTitle}>{this.props.title.toUpperCase()}</Text>
                        <Text style={styles.featureDescription}>{this.props.text.toUpperCase()}</Text> 
                    </View>
                </View>
                <View style={{ marginLeft: 5 }}>
                    <FlatList 
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        data={this.props.categoryData}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => 
                            <RenderCategory
                                item={item}
                                navigate={this.props.navigate}
                            />
                        }
                    />
                </View>
                {
                    this.props.isLoading ?
                    <View style={styles.loading}>
                        <Text style={styles.loadingText}>{ this.props.isLoading ? 'Loading....' : null }</Text>
                    </View>:
                    null
                }
                
            </ScrollView>
        )
    }
}

export default connect(mapStateToProps)(CategoryComponent);