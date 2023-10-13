import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        
    },
    img: {
        width: 350,
        height: 150,
        marginTop: 50,
        marginBottom: 20,
    }, 
    txt: {
        color: '#e0b03a',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,

    },
    info: {
        fontSize: 18,
        textAlign: 'center',
        color: '#e0b03a',
        marginBottom: 30,
    },
    box: {
        width:  200,
        height: 40,
        backgroundColor: '#7c641e',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
        
    },
    txtBox: {
        fontSize: 18,
        color: 'white',
               
    },

})

export default styles;