import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props = {
    taskname: string;
    onRemove: () => void;
}

export function Task(props: Props) {

    return (
        <>

            <View style={styles.container}>
                <Text style={styles.name}>
                     {props.taskname} 
                </Text>

                <TouchableOpacity style={styles.button} onPress={props.onRemove} >
                    <Text style={styles.buttonText}>
                        x
                    </Text>
                </TouchableOpacity>
            </View>

        </>

    )

}