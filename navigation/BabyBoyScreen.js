import React, { Component } from 'react';
import { connect } from 'react-redux';
import Category from '../components/CategoryComponent';
import { fetchCategoryData } from '../redux/ActionCreators';

const mapDispatchToProps = {
    fetchCategoryData: (link) => (fetchCategoryData(link)),
};

const headerTitle = {
    link: "https://static.zara.net/photos///2020/V/0/3/p/5644/603/052/43/w/1782/5644603052_2_10_1.jpg?ts=1585332278099",
    title: "baby boy",
    text: "5 months - 5 years"
}

class BabyBoyScreen extends Component {

    componentDidMount() {
        this.props.fetchCategoryData("baby-boy");
    }

    static navigationOptions = { title: 'BabyBoy' }

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

export default connect(null, mapDispatchToProps)(BabyBoyScreen);