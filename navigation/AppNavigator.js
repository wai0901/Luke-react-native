import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import { Icon } from 'react-native-elements'
import LukeLogo from '../svgs/lukeLogo';

import { fetchMainData, fetchCartData } from '../redux/ActionCreators';
import Home from '../components/HomeComponent';
import WomenScreen from './WomenScreen';
import MenScreen from './MenScreen';
import GirlScreen from './GirlScreen';
import BoyScreen from './BoyScreen';
import MiniScreen from './MiniScreen';
import AccessoriesScreen from './AccessoriesScreen';
import BabyGirlScreen from './BabyGirlScreen';
import BabyBoyScreen from './BabyBoyScreen';
import Category from '../components/CategoryComponent';
import ItemsScreen from '../navigation/ItemsScreen';
import CartIcon from './cart-icon/cartIcon';
import ShoppingCartScreen from './ShoppingCartScreen';
import Login from '../components/LoginComponent';
import Register from '../components/RegisterComponent';
import styles from './styles/AppNavStyles';


const mapDispatchToProps = { 
    fetchMainData,
    fetchCartData
}

const HomeNavigator = createStackNavigator(
    {
        HomeComponent: { screen: Home}
    },
    {
        initialRouteName: 'HomeComponent',
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#fff',
                height: 60,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            },
            headerTitleStyle: {
                color: '#000'
            },
            headerLeft: <Icon
                name='menu'
                type='feather'
                color='black'
                size={24}
                iconStyle={styles.iconLeft}
                onPress={() => navigation.toggleDrawer()}
            />,
            headerRight: <CartIcon 
                navigation={navigation}
            />
            }
        )
    }
)

const WomenNavigator = createStackNavigator(
    {
        Women: { screen: WomenScreen }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#fff',
                height: 60,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            },
            headerTitleStyle: {
                color: '#000'
            },
            headerLeft: <Icon
                name='menu'
                type='feather'
                color='black'
                size={24}
                iconStyle={styles.iconLeft}
                onPress={() => navigation.toggleDrawer()}
            />,
            headerRight: <CartIcon 
                navigation={navigation}
            />
            }
        )
    }
)

const MenNavigator = createStackNavigator(
    {
        Men: { screen: MenScreen }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#fff',
                height: 60,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            },
            headerTitleStyle: {
                color: '#000'
            },
            headerLeft: <Icon
                name='menu'
                type='feather'
                color='black'
                size={24}
                iconStyle={styles.iconLeft}
                onPress={() => navigation.toggleDrawer()}
            />,
            headerRight: <CartIcon 
                navigation={navigation}
            />
            }
        )
    }
)

const GirlNavigator = createStackNavigator(
    {
        Girl: { screen: GirlScreen }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#fff',
                height: 60,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            },
            headerTitleStyle: {
                color: '#000'
            },
            headerLeft: <Icon
                name='menu'
                type='feather'
                color='black'
                size={24}
                iconStyle={styles.iconLeft}
                onPress={() => navigation.toggleDrawer()}
            />,
            headerRight: <CartIcon 
                navigation={navigation}
            />
            }
        )
    }
)

const BoyNavigator = createStackNavigator(
    {
        Boy: { screen: BoyScreen }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#fff',
                height: 60,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            },
            headerTitleStyle: {
                color: '#000'
            },
            headerLeft: <Icon
                name='menu'
                type='feather'
                color='black'
                size={24}
                iconStyle={styles.iconLeft}
                onPress={() => navigation.toggleDrawer()}
            />,
            headerRight: <CartIcon 
                navigation={navigation}
            />
            }
        )
    }
)

const MiniNavigator = createStackNavigator(
    {
        Mini: { screen: MiniScreen }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#fff',
                height: 60,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            },
            headerTitleStyle: {
                color: '#000'
            },
            headerLeft: <Icon
                name='menu'
                type='feather'
                color='black'
                size={24}
                iconStyle={styles.iconLeft}
                onPress={() => navigation.toggleDrawer()}
            />,
            headerRight: <CartIcon 
                navigation={navigation}
            />
            }
        )
    }
)

const AccessoriesNavigator = createStackNavigator(
    {
        Accessories: { screen: AccessoriesScreen }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#fff',
                height: 60,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            },
            headerTitleStyle: {
                color: '#000'
            },
            headerLeft: <Icon
                name='menu'
                type='feather'
                color='black'
                size={24}
                iconStyle={styles.iconLeft}
                onPress={() => navigation.toggleDrawer()}
            />,
            headerRight: <CartIcon 
                navigation={navigation}
            />
            }
        )
    }
)

const BabyGirlNavigator = createStackNavigator(
    {
        BabyGirl: { screen: BabyGirlScreen }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#fff',
                height: 60,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            },
            headerTitleStyle: {
                color: '#000'
            },
            headerLeft: <Icon
                name='menu'
                type='feather'
                color='black'
                size={24}
                iconStyle={styles.iconLeft}
                onPress={() => navigation.toggleDrawer()}
            />,
            headerRight: <CartIcon 
                navigation={navigation}
            />
            }
        )
    }
)

const BabyBoyNavigator = createStackNavigator(
    {
        BabyBoy: { screen: BabyBoyScreen }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#fff',
                height: 60,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            },
            headerTitleStyle: {
                color: '#000'
            },
            headerLeft: <Icon
                name='menu'
                type='feather'
                color='black'
                size={24}
                iconStyle={styles.iconLeft}
                onPress={() => navigation.toggleDrawer()}
            />,
            headerRight: <CartIcon 
                navigation={navigation}
            />
            }
        )
    }
)

const CategoryNavigator = createStackNavigator(
    {
        Category: { screen: Category }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#fff',
                height: 60,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            },
            headerTitleStyle: {
                color: '#000'
            },
            headerLeft: <Icon
                name='menu'
                type='feather'
                color='black'
                size={24}
                iconStyle={styles.iconLeft}
                onPress={() => navigation.toggleDrawer()}
            />,
            headerRight: <CartIcon 
                navigation={navigation}
            />
            }
        )
    }
)

const ItemsNavigator = createStackNavigator(
    {
        Items: { screen: ItemsScreen }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#fff',
                height: 60,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            },
            headerTitleStyle: {
                color: '#000'
            },
            headerLeft: <Icon
                name='menu'
                type='feather'
                color='black'
                size={24}
                iconStyle={styles.iconLeft}
                onPress={() => navigation.toggleDrawer()}
            />,
            headerRight: <CartIcon 
                navigation={navigation}
            />
            }
        )
    }
)

const ShoppingCartNavigator = createStackNavigator(
    {
        ShoppingCart: { screen: ShoppingCartScreen }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#fff',
                height: 60,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            },
            headerTitleStyle: {
                color: '#000'
            },
            headerLeft: <Icon
                name='menu'
                type='feather'
                color='black'
                size={24}
                iconStyle={styles.iconLeft}
                onPress={() => navigation.toggleDrawer()}
            />,
            headerRight: <CartIcon 
                navigation={navigation}
            />
            }
        )
    }
)

const LoginNavigator = createStackNavigator(
    {
        Login: { screen: Login }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#fff',
                height: 60,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            },
            headerTitleStyle: {
                color: '#000'
            },
            headerLeft: <Icon
                name='menu'
                type='feather'
                color='black'
                size={24}
                iconStyle={styles.iconLeft}
                onPress={() => navigation.toggleDrawer()}
            />,
            headerRight: <CartIcon 
                navigation={navigation}
            />
            }
        )
    }
)

const RegisterNavigator = createStackNavigator(
    {
        Register: { screen: Register }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#fff',
                height: 60,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            },
            headerTitleStyle: {
                color: '#000'
            },
            headerLeft: <Icon
                name='menu'
                type='feather'
                color='black'
                size={24}
                iconStyle={styles.iconLeft}
                onPress={() => navigation.toggleDrawer()}
            />,
            headerRight: <CartIcon 
                navigation={navigation}
            />
            }
        )
    }
)

const CustomDrawerContentComponent = props => (
    <ScrollView contentContainerStyle={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
        <SafeAreaView 
            style={styles.container}
            forceInset={{top: 'always', horizontal: 'never'}}>
            <TouchableOpacity
                onPress={() => {
                    props.descriptors.Accessories.navigation.navigate('Home')
                    props.descriptors.Accessories.navigation.toggleDrawer()
                    }}>
                <View style={styles.drawerHeader}>
                    <View style={{flex: 1, marginLeft: 65}}>
                        <LukeLogo />
                    </View>
                </View>
            </TouchableOpacity>
            <DrawerItems {...props}/>
        </SafeAreaView>
        <View style={styles.socialMedia}>
                <Icon
                    name='facebook-square'
                    type='antdesign'
                    color='black'
                    size={20}
                    iconStyle={styles.iconRight}
                />
                <Icon
                    name='instagram'
                    type='entypo'
                    color='black'
                    size={20}
                    iconStyle={styles.iconRight}
                />
                <Icon
                    name='youtube-with-circle'
                    type='entypo'
                    color='black'
                    size={20}
                    iconStyle={styles.iconRight}
                />
                <Icon
                    name='customerservice'
                    type='antdesign'
                    color='black'
                    size={20}
                    iconStyle={styles.iconRight}
                />
            </View>
        <TouchableOpacity
            onPress={() => {
                props.descriptors.Accessories.navigation.navigate('Login')}}
            >
            <View style={styles.LoginStyle}>
                <Icon
                    name='login'
                    type='simple-line-icon'
                    size={20}
                    color='#222'
                    containerStyle={{ marginRight: '10%' }}
                />
              <Text style={{ color: 'black', fontFamily: 'sans-serif-medium', fontSize: 15 }}>Login</Text>
            </View>
        </TouchableOpacity>
    </ScrollView>
);

//Hide Category screen from drawer.
class Hidden extends React.Component {
    render() {
      return null;
    }
  }

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator,
            navigationOptions: {
                drawerLabel: <Hidden />, }},
        Category: { screen: CategoryNavigator,
            navigationOptions: {
                drawerLabel: <Hidden />, }},
        Items: { screen: ItemsNavigator,
            navigationOptions: {
                drawerLabel: <Hidden />, }},
        ShoppingCart: { screen: ShoppingCartNavigator,
            navigationOptions: {
                drawerLabel: <Hidden />, }},
        Women: { screen: WomenNavigator },
        Men: { screen: MenNavigator },
        Girl: { screen: GirlNavigator },
        Boy: { screen: BoyNavigator },
        Mini: { screen: MiniNavigator },
        Accessories: { screen: AccessoriesNavigator },
        BabyGirl: { screen: BabyGirlNavigator,
            navigationOptions: {
                drawerLabel: "Baby Girl" }},
        BabyBoy: { screen: BabyBoyNavigator,
            navigationOptions: {
                drawerLabel: "Baby Boy" }},
        Login: { screen: LoginNavigator,
            navigationOptions: {
                drawerLabel: <Hidden />, }},
        Register: { screen: RegisterNavigator,
            navigationOptions: {
                drawerLabel: <Hidden />, }},
    },
    {
        initialRouteName: 'Home',
        contentOptions: {
            activeTintColor: '#2d3436',
            itemStyle: { marginLeft: 50 }
        },
        drawerWidth: 250,
        drawerBackgroundColor: '#eee',
        contentComponent: CustomDrawerContentComponent
    },
);

class Main extends Component {

    componentDidMount() {
        this.props.fetchMainData();
        this.props.fetchCartData();
    }
    
    render() {
        return (
            <View style={{
                flex: 1
                // paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
            }}>
                <MainNavigator />
            </View>
        );
    }
}


export default connect(null, mapDispatchToProps)(Main);