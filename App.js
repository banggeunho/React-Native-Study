import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

export default function App() {
    const [enteredGoalText, setEnteredGoalText] = useState("");
    const [courseGoals, setCourseGoals] = useState([]);

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            enteredGoalText
        ]);
    }

    function clearGoalHandler() {
        setCourseGoals(() => []);
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
                <Button title={"Clear Goals"}
                        onPress={clearGoalHandler}/>
            </View>
            <View style={styles.goalsContainer}>
                {courseGoals.map((goal, idx) =>
                    <Text key={idx}>{idx} {goal}</Text>)}
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
    }
});
