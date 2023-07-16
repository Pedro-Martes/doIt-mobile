import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24,
        border: '100px solid red',
    },

    text:{
        color: '#AFBBF2',
        fontWeight: 'bold',
        justifyContent: 'space-between',
        
        
        

    },

    subtext: {
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
        marginBottom: 20 ,
        position: 'relative',
        
        
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9649CB',
        height: 56,
        width: 56,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
       
    },

   
    form: {
        position: 'absolute',
        width: '100%',
        flexDirection: 'row',
        margin: 24,
        marginTop: -20

    },

    tasksInfo:{
        borderWidth: 1,
        borderBottomColor: '#6B6B6B',
        borderTopColor:'transparent',
        borderRightColor:'transparent',
        borderLeftColor:'transparent',
        marginTop: 24,
        marginBottom: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    concluidas: {

        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',

    },

    count: {
        alignItems: 'center',
        backgroundColor: '#1f1e25',
        borderRadius: 100,
        padding: 5


    }
})