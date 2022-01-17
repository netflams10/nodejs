import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Button, Keyboard, Alert } from 'react-native'

//  Components
import Card from '../components/Card';
import Input from "../components/Input";
import NumberContainer from '../components/NumberContainer';
import Color from '../constants/colors';

const StartGameScreen = props => {
    // initially all state are string
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectednumber] = useState()

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false)
    }

    const confirmInputHandler = () => {
        const choosenNumber = parseInt(enteredValue)

        if (isNaN(choosenNumber)|| choosenNumber <= 0 || choosenNumber > 99) {
            Alert.alert("Invalid Integer", "Number has to be between 1 - 99", [{text: "Okay", style: "destructive", onPress: resetInputHandler}])
            return;
        }
        setConfirmed(true);
        // This will be sent before the next render cycle
        setSelectednumber(parseInt(choosenNumber));
        // will be done in the next render cycle not immediately
        setEnteredValue('')
        Keyboard.dismiss();
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = <Card style={styles.summaryContainer}>
            <Text>You Selected</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button title="Start Program" />
        </Card>
    }

    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number!</Text>
                    <Input style={styles.input} blurOnSubmit 
                        autoCapitalize='none' autoCorrect={false} 
                        keyboardType="number-pad" maxLength={2} 
                        onChangeText={numberInputHandler} 
                        value={enteredValue} 
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Reset" onPress={resetInputHandler} color={Color.accent} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm" onPress={confirmInputHandler} color={Color.primary} />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: 'center',
        // shadowColor: 'black',
        // shadowOffset: { width: 0, height: 2},
        // shadowRadius: 6,
        // shadowOpacity: 0.26,
        // elevation: 5,
        // backgroundColor: 'white',
        // padding: 20,
        // borderRadius: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
});

export default StartGameScreen;