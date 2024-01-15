import {Button, FlatList, StyleSheet, TextInput, View} from 'react-native';
import {useState} from "react";
import GoalItem from "./components/GoalItem";

export default function App() {
    const [enteredGoalText, setEnteredGoalText] = useState("");
    const [courseGoals, setCourseGoals] = useState([]);

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            {text: enteredGoalText, id: Math.random().toString()}
        ]);
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput}
                           placeholder={"your course goal!"}
                           onChangeText={goalInputHandler}
                />
                <Button title="Add Goal"
                        onPress={addGoalHandler}/>
            </View>
            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    renderItem={(itemData) => <GoalItem text = {itemData.item.text}/>}
                    keyExtractor={(item, index) => {return item.id;}}
                    alwaysBounceVertical={false}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16
    },
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc"
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "60%",
        marginRight: 8,
        padding: 8,
    },
    goalsContainer: {
        flex: 5
    },
    goalText: {
        color: "white"
    }
});
