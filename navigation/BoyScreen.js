import React, { Component } from 'react';
import { connect } from 'react-redux';
import Category from '../components/CategoryComponent';
import { fetchCategoryData } from '../redux/ActionCreators';

const mapDispatchToProps = {
    fetchCategoryData: (link) => (fetchCategoryData(link)),
};

const headerTitle = {
    link: "https://images.pexels.com/photos/3905786/pexels-photo-3905786.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    title: "boy",
    text: "6 - 14 years"
}

class BoyScreen extends Component {

    componentDidMount() {
        this.props.fetchCategoryData("boy");
    }

    static navigationOptions = { title: 'Boy' }
    
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

export default connect(null, mapDispatchToProps)(BoyScreen);