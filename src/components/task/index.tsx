import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import React, { useState } from "react";
import { Check, Trash } from "phosphor-react-native";

type Props = {
    taskname: string;
    onRemove: () => void;
    addCompltedTeask: () => void;
    unCompltedTeask: () => void;


}

export function Task({taskname, onRemove, addCompltedTeask, unCompltedTeask}: Props) {

    const [taskIsDone, setTaskIsDone] = useState(false)
    

    function handleDoneTask() {
        if (taskIsDone == true) {
            setTaskIsDone(false)
            unCompltedTeask()
           
          
        } else {
            setTaskIsDone(true);
            addCompltedTeask()
        }
    }


    return (

        <>

            <View style={styles.container}>

                {taskIsDone == false ?
                    <>
                        <TouchableOpacity style={styles.CheckButton} onPress={handleDoneTask}>

                        </TouchableOpacity >

                        <Text style={styles.taskName}>
                            {taskname}
                        </Text>
                       
                    </>
                    :
                    <>
                        <TouchableOpacity style={styles.CheckedButton} onPress={handleDoneTask}>
                            <Check size={16} color="#1F1E25" weight="regular" />
                        </TouchableOpacity >

                        <Text style={styles.taskDoneName}>
                            {taskname}
                        </Text>


                    </>
                }

                <TouchableOpacity style={styles.button} onPress={onRemove} >
                  
                        <Trash size={20} color="#6B6B6B"  />
                
                </TouchableOpacity>
            </View>

        </>



    )

}




