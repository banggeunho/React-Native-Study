import React, {useState} from 'react';
import {Button, Modal, StyleSheet, TextInput, View} from 'react-native';

const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText("");
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput}
                           placeholder={"your course goal!"}
                           onChangeText={goalInputHandler}
                           value={enteredGoalText}
                />
                <Button title="Add Goal"
                        onPress={addGoalHandler}/>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
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
})

export default GoalInput;
