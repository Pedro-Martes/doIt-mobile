import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#1f1e25",
        flexDirection: 'row',
        alignItems: 'center',
        
        borderRadius: 5,
        marginBottom: 10,
       
    },
    name: {
        color: "#FFFFFF",
        flex: 1,
        marginLeft: 16,

    },
    
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e23c44',
        height: 56,
        width: 56,
        borderRadius: 10
      
       
    },

    buttonText: {

        color: 'lightgray',
        fontSize: 24,


    },
})