import { useState } from "react";
import { View, TextInput, Text, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import colors from "../constants/colors";
import Cards from "../components/Cards";
import Instructiontext from "../components/InstructionText";
function StartGameScreen({ onPickedNumber }) {
    const [enteredNumber, setEnteredNumber] = useState("");

    const { width, height } = useWindowDimensions();
    function inputNumberHandler(enteredText) {
        setEnteredNumber(enteredText);
    };
    function resetInputHandler() {
        setEnteredNumber("");
    }
    // this function will check whether we have to proceed or not we just have to check number is !<= 0 or !>=99
    function confirmInputHandler() {
        const choosenNumber = parseInt(enteredNumber);
        if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
            // show an alert .....
            Alert.alert("Invalid number!", "Number has to be a number between 1 and 99 ",
                [{ text: "Okay", style: "destructive", onPress: resetInputHandler }])
            return;
        }
        onPickedNumber(choosenNumber);
    }
    const marginTopDistance = height < 380 ? 20 : 50;
    return (
        <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior= "position"> 
            <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
                <Title>Guess My Num</Title>
                <Cards>
                    <Instructiontext>Enter Number</Instructiontext>
                    <TextInput style={styles.numberInput} maxLength={2}
                        keyboardType="number-pad" autoCapitalize="none"
                        value={enteredNumber}
                        onChangeText={inputNumberHandler}
                    />
                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                        </View>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                        </View>
                    </View>
                </Cards>
            </View>
        </KeyboardAvoidingView>
        </ScrollView>
    )
};

export default StartGameScreen;
// instead of doing this we can use hook that is in react native useWindowDimension 
// in the function that will execute whenever screen switches..
// const deviceHeight = Dimensions.get("window").height;
// console.log(deviceHeight);

const styles = StyleSheet.create({
    screen: {
        flex:1
    },
    rootContainer: {
        flex: 1,
        // marginTop: deviceHeight < 380 ? 20 :50,
        alignItems: "center"
    },
    numberInput: {
        heigth: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: colors.accent500,
        borderBottomWidth: 2,
        color: colors.accent500,
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center"
    },
    buttonsContainer: {
        flexDirection: "row"
    },
    buttonContainer: {
        flex: 1
    }
})