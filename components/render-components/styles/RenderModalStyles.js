import { StyleSheet, Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width - 40;
const buttonWidth = Dimensions.get('window').width / 2 - 40;
const pickerWidth = Dimensions.get('window').width * 0.3;

export default StyleSheet.create({
    modal: {
        justifyContent: 'center',
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 20
    },
    imagesContainer: {
        height: 400, 
        width: 'auto',
    },
    imageStyle: {
        flex: 1,
        width: windowWidth,
        height: 400,
        marginBottom: 5,
    },
    textContainer: {
        width: '100%',
        marginRight: 20
    },
    title: {
        marginHorizontal: 20,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000'
    },
    description: {
        marginHorizontal: 20,
        fontSize: 15,
        color: '#000'
    },
    price: {
        marginTop: 10,
        marginLeft: 20,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#eb4d4b'
    },  
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        marginRight: pickerWidth,
        marginLeft: 20,
        marginTop: 20,
        marginVertical: 15
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    },
    buttonContainer: {
        flexDirection: 'row', 
        marginHorizontal: 10,
        marginTop: 10
    },
    buttonStyle: {
        // alignItems: 'center',
        // justifyContent: 'center',
        // flexDirection: 'row',
        width: buttonWidth,
        marginRight: 20,
        marginVertical: 5
    },
    buttonAddToCart: {
        backgroundColor: '#555',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonAddToCartText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    buttonCancel: {
        backgroundColor: '#fff',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#aaa',
        borderWidth: 2,
        borderRadius: 5,
    },
    buttonCancelText: {
        color: '#aaa',
        fontWeight: 'bold'
    }
})