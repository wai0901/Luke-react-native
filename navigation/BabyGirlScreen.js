import React, { Component } from 'react';
import { connect } from 'react-redux';
import Category from '../components/CategoryComponent';
import { fetchCategoryData } from '../redux/ActionCreators';

const mapDispatchToProps = {
    fetchCategoryData: (link) => (fetchCategoryData(link)),
};

const headerTitle = {
    link: "https://images.pexels.com/photos/3662824/pexels-photo-3662824.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    title: "Baby Girl",
    text: "5 months - 5 years"
}

class BabyGirlScreen extends Component {

    componentDidMount() {
        this.props.fetchCategoryData("baby-girl");
    }

    static navigationOptions = { title: 'Baby Girl' }

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

export default connect(null, mapDispatchToProps)(BabyGirlScreen);