import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
    },
    featureContainer: {
        height: 250, 
        width: 'auto',
        marginHorizontal: 5,
    },
    featureTextContainer: {
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
    featureTitle: {
        marginTop: 80,
        marginLeft: 10,
        fontSize: 50,
        fontWeight: 'bold',
        color: '#fff'
    },
    featureDescription: {
        marginLeft: 15,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff'
    },
    imageStyle: {
        flex: 1,
        width: 'auto',
        height: 150,
        borderRadius: 4,
        marginBottom: 5,
    },
    loading: {
        position: 'absolute',
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(45, 52, 54, 0.6)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        fontSize: 15,
        color: '#fff'
    }
})