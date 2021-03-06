import React, { Component } from 'react';
import { connect } from 'react-redux';
import Items from '../components/ItemsComponent';



const mapStateToProps = state => {

    return {
        itemsIsLoading: state.items.isLoading,
        items: state.items.ItemsData
    }
};


class ItemsScreen extends Component {

    static navigationOptions = { title: 'Items' }
    
    render() {

        const { navigate } = this.props.navigation;
        
        return (
            <Items
                navigate={navigate}
                items={this.props.items}
                itemsIsLoading={this.props.itemsIsLoading}
            />
        )
    }
}

export default connect(mapStateToProps)(ItemsScreen);