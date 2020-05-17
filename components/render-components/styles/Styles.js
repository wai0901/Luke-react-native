import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    buttonStyle: {
        flex: 1,
        marginRight: 5,
    },
    itemContainer:{
        // ...StyleSheet.absoluteFillObject,

    },
    image: {
        width: 'auto',
        height: 150,
        borderRadius: 4,
        marginBottom: 5,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(45, 52, 54, 0.6)',
        borderRadius: 4,
        marginBottom: 5,
    },
    textContainer: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    description: {
        marginHorizontal: 10,
        fontSize: 10,
        fontWeight: 'bold',
        color: '#fff'
    },
})