import React, { Component } from 'react';
import { connect } from 'react-redux';
import Category from '../components/CategoryComponent';
import { fetchCategoryData } from '../redux/ActionCreators';

const mapDispatchToProps = {
    fetchCategoryData: (link) => (fetchCategoryData(link)),
};

const headerTitle = {
    link: "https://static.zara.net/photos///2020/V/0/3/p/0653/549/620/2/w/1143/0653549620_1_1_1.jpg?ts=1580314198540",
    title: "accessories",
    text: "baby accessories"
}

class AccessoriesScreen extends Component {

    componentDidMount() {
        this.props.fetchCategoryData("accessories");
    }

    static navigationOptions = { title: 'Accessories' }

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

export default connect(null, mapDispatchToProps)(AccessoriesScreen);