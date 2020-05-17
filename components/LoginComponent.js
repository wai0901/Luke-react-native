import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';
import { Input, CheckBox, Button, Icon } from 'react-native-elements';

class LoginComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            email: '',
            remember: false,
        };
    }

    static navigationOptions = {
        title: 'Login'
    }

    render() {
        return(
            <View style={styles.container}>
                <Input
                    placeholder='E-mail'
                    leftIcon={{type: 'materialIcons', name: 'email'}}
                    onChangeText={username => this.setState({username})}
                    value={this.state.username}
                    containerStyle={styles.formInput}
                    leftIconContainerStyle={styles.formIcon}
                />
                <Input
                    placeholder='Password'
                    leftIcon={{type: 'entypo', name: 'key'}}
                    onChangeText={password => this.setState({password})}
                    value={this.state.password}
                    containerStyle={styles.formInput}
                    leftIconContainerStyle={styles.formIcon}
                />
                <CheckBox
                    title='Remember Me'
                    center
                    checked={this.state.remember}
                    onPress={() => this.setState({remember: !this.state.remember})}
                    containerStyle={styles.formCheckbox}
                />
                <View style={styles.formButton}>
                    <Button
                        onPress={() => this.handleLogin()}
                        title='Login'
                        // icon={
                        //     <Icon
                        //         name='sign-in'
                        //         type='font-awesome'
                        //         color='#fff'
                        //         iconStyle={{marginRight: 10}}
                        //     />
                        // }
                        buttonStyle={{backgroundColor: '#2d3436'}}
                    />
                </View>
                <View style={styles.formButton}>
                    <Button
                        onPress={() => this.props.navigation.navigate('Register')}
                        title='Register'
                        type='outline'
                        titleStyle={{color: 'gray'}}
                        buttonStyle={{borderColor: '#444', borderWidth: 1}}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        margin: 60
    },
    formIcon: {
        marginRight: 10
    },
    formInput: {
        padding: 8
    },
    formCheckbox: {
        margin: 8,
        backgroundColor: null
    },
    formButton: {
        margin: 20,
        marginHorizontal: 80
    },
});

export default LoginComponent;