import React, { Component } from 'react';
import { connect } from 'react-redux';
import Items from '../components/ItemsComponent';



const mapStateToProps = state => {
    // console.log(state)
    return {
        items: state.items.ItemsData.data
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
            />
        )
    }
}

export default connect(mapStateToProps)(ItemsScreen);