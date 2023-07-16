import { Alert, FlatList, RefreshControl, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { styles } from "./style";
import { Task } from "../../components/task";
import { useState } from "react";
import React from "react";
import { PlusCircle } from "phosphor-react-native";
import { Header } from "../../components/header";


export function teste(stete: boolean) {

}


export function Home() {



    const [tasks, setTasks] = useState<string[]>([])
    const [taskInput, setTaskInput] = useState('')
    const [completetasks, setCompletetasks] = useState(0);



    function addCompltedTeask() {
        setCompletetasks(completetasks + 1)

    }
    function uncompltedTeask() {
        setCompletetasks(completetasks - 1)
    }



    function handleButton() {


        if (tasks.includes(taskInput)) {
            return Alert.alert('Duplicidade', `${taskInput} ja existe`);

        } else if (taskInput == '') {
            return Alert.alert('Digite o nome da tarefa', `é obrigatorio um nome para a tarefa!`);
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
                onPress: () => {
                    setTasks(prevState => prevState.filter(task => task !== name))
                    completetasks < 0 ? setCompletetasks(completetasks - 1) : setCompletetasks(0)
                },
            },

        ])

    }

    return (
        <>
            <Header />

            <View style={styles.container}>





                <View style={styles.form} >

                    <TextInput

                        placeholder="digite aqui"
                        style={styles.intput}
                        placeholderTextColor={'#6B6B6B'}
                        onChangeText={setTaskInput}
                        value={taskInput}
                    />

                    <TouchableOpacity style={styles.button} onPress={handleButton} >
                        <PlusCircle color="white" />
                    </TouchableOpacity>


                </View>

                <View style={styles.tasksInfo}>

                    <View style={styles.concluidas}>
                        <Text style={styles.text}>

                            Criadas

                        </Text>
                        <View style={styles.count} >
                            <Text style={styles.subtext}>

                                {tasks.length}

                            </Text>
                        </View>

                    </View>

                    <View style={styles.concluidas}>
                        <Text style={styles.text}>

                            Concluidas

                        </Text>

                        <View style={styles.count} >

                            <Text style={styles.subtext}>

                                {completetasks}

                            </Text>
                        </View>

                    </View>


                </View>


                <FlatList
                    data={tasks}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Task key={item}
                            taskname={item}
                            onRemove={() => handleRemoveButton(item)}
                            addCompltedTeask={() => addCompltedTeask()}
                            unCompltedTeask={() => uncompltedTeask()}
                        />
                    )}
                    ListEmptyComponent={() => (

                            <Text style={styles.subtext}> Nenhuma Tarefa </Text>
                    )}

                />

            </View>
        </>
    )
}
