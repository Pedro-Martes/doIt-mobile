import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { Task } from "../../components/task";
import { useState } from "react";



export function Home() {

  

    const [tasks, setTasks] = useState<string[]>([])
    const [taskInput, setTaskInput] = useState('')



    function handleButton() {


        if (tasks.includes(taskInput)) {
            return Alert.alert(taskInput, `${taskInput} ja existe`);

        }
        setTasks(prevState => [...prevState, taskInput]);
        setTaskInput('')

    }

    function handleRemoveButton(name: string) {
        Alert.alert('Excluir', `Deseja Remover a tarefa '${name}'?`, [
            {
                text: 'cancelar',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => setTasks(prevState => prevState.filter( task => task !== name)),
            },

        ])

    }

    return (
        <View style={styles.container}>

            <Text
                style={{
                    color: 'purple',
                    fontSize: 40,

                }}>Do.It!</Text>

           

            <Text style={styles.text}> by Pedro Matos</Text>

            <View style={styles.form}>
                <TextInput 
                
                placeholder="digite aqui" 
                style={styles.intput}
                 placeholderTextColor={'#6B6B6B'}
                 onChangeText={setTaskInput}
                 value={taskInput}
                 />

                <TouchableOpacity style={styles.button} onPress={handleButton}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>


            </View>

            <FlatList
                data={tasks}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Task key={item}
                        taskname={item}
                        onRemove={() => handleRemoveButton(item)} />
                )}
                ListEmptyComponent={() => (
                    <Text style={styles.text}> Sem nenhuma tarefa</Text>
                )}
            />
            {/*             
            <ScrollView>
                 {
                    tasks.map(task =>(
                        <Task key={task}
                         taskname= {task} 
                         onRemove={handleRemoveButton}  />
                    ))
                }
            </ScrollView>

             */}

        </View>

    )
}
