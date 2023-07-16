import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#1f1e25",
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        borderRadius: 5,
        marginBottom: 10,
       
    },
    taskName: {
        color: "#FFFFFF",
        flex: 1,
        marginLeft: 16,
         

    },
    taskDoneName: {
        color: "#FFFFFF",
        flex: 1,
        marginLeft: 16,
        textDecorationLine: 'line-through',
         

    },
    
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        width: 56,
        borderRadius: 10
      
       
    },

    CheckButton: {
        height: 24,
        width: 24,
        borderWidth: 1,
        borderColor: '#AFBBF2',
        borderRadius: 100
    },
    CheckedButton: {
        height: 24,
        width: 24,
        borderWidth: 1,
        borderColor: '#AFBBF2',
        borderRadius: 100,
        backgroundColor: '#D3FFF3',
        alignItems: 'center',
        justifyContent: 'center',


    },

    date:{
        fontSize: 10,
        color: '#6B6B6B',
    }


})