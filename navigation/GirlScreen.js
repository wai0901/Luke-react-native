import React, { Component } from 'react';
import { connect } from 'react-redux';
import Category from '../components/CategoryComponent';
import { fetchCategoryData } from '../redux/ActionCreators';

const mapDispatchToProps = {
    fetchCategoryData: (link) => (fetchCategoryData(link)),
};

const headerTitle = {
    link: "https://images.pexels.com/photos/3154330/pexels-photo-3154330.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    title: "GIRL",
    text: "6 - 14 YEARS"
}

class GirlScreen extends Component {

    componentDidMount() {
        this.props.fetchCategoryData("girl");
    }

    static navigationOptions = { title: 'Girl' }

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

export default connect(null, mapDispatchToProps)(GirlScreen);