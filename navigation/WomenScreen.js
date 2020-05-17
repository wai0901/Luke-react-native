import React, { Component } from 'react';
import { connect } from 'react-redux';
import Category from '../components/CategoryComponent';
import { fetchCategoryData } from '../redux/ActionCreators';

const mapDispatchToProps = {
    fetchCategoryData: (link) => (fetchCategoryData(link)),
};

const headerTitle = {
    link: "https://images.pexels.com/photos/704977/pexels-photo-704977.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    title: "women",
    text: "collection"
}

class WomenScreen extends Component {

    componentDidMount() {
        this.props.fetchCategoryData("women");
    }

    static navigationOptions = { title: 'Women' }
    
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Category 
                link={headerTitle.link}
                title={headerTitle.title}
                text={headerTitle.text}
                navigate={navigate}
            />
        )
    }
}

export default connect(null, mapDispatchToProps)(WomenScreen);