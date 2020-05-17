import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        marginTop: 50,
        backgroundColor: '#222f3e',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    socialMedia: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        marginHorizontal: 50
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    iconLeft: {
        marginLeft: 20,
        marginBottom: 0,
        color: '#000',
        fontSize: 35
    },
    LoginStyle: {
        flexDirection: 'row',
        // flex: 1,
        paddingLeft: 60,
        paddingVertical: 20,
        marginBottom:30,
        // alignItems: 'flex-end',
        backgroundColor: '#b2bec3',
        
    }
})