import React, { Component } from 'react';
import { connect } from 'react-redux';
import Category from '../components/CategoryComponent';
import { fetchCategoryData } from '../redux/ActionCreators';

const mapDispatchToProps = {
    fetchCategoryData: (link) => (fetchCategoryData(link)),
};

const headerTitle = {
    link: "https://cdn.pixabay.com/photo/2017/06/23/07/15/smile-2433791_960_720.jpg",
    title: "MINI",
    text: "0 - 12 months"
}

class MiniScreen extends Component {

    componentDidMount() {
        this.props.fetchCategoryData("mini");
    }

    static navigationOptions = { title: 'Mini' }

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

export default connect(null, mapDispatchToProps)(MiniScreen);