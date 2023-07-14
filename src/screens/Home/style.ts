import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        justifyContent: 'center',
        padding: 24,
    },

    text: {
        color: '#6B6B6B',
        fontWeight: 'bold',
        fontSize: 10,
    },

    intput: {
        backgroundColor: '#1f1e25',
        height: 56,
        flex: 1,
        color: 'white',
        padding: 16,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        marginBottom: 20   
        
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'purple',
        height: 56,
        width: 56,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
       
    },

    buttonText: {

        color: 'lightgray',
        fontSize: 24,


    },
    form: {
        marginTop: 36,
        width: '100%',
        flexDirection: 'row',
    }
})