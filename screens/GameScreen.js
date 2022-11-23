import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, FlatList, useWindowDimensions } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Cards from '../components/Cards';
import Title from "../components/Title";
import Icon from "react-native-vector-icons/Ionicons";
import Instructiontext from "../components/InstructionText";
import GameLogList from "../components/game/GameLoglist";

function generateRandumBetween(min, max, exclude) {
    const randumNum = Math.floor(Math.random() * (max - min)) + min;
    if (randumNum === exclude) {
        return generateRandumBetween(min, max, exclude);
    } else {
        return randumNum;
    }

}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandumBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);
    const { width, height } = useWindowDimensions();
    console.log("hi");

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);
    useEffect(() => {
        minBoundary = 1,
            maxBoundary = 100
    }, [])

    function nextGuessHandler(direction) {
        // direction => "lower" or "higher"
        if ((direction === "lower" && currentGuess < userNumber) ||
            (direction === "higher" && currentGuess > userNumber)) {
            Alert.alert("don't lie !", "You Know this Is Wrong", [{ text: "sorry!", style: 'cancel' }])
            return
        }
        if (direction === "lower") {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        console.log(minBoundary, maxBoundary)
        const newRandomNumber = generateRandumBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRandomNumber);
        setGuessRounds(prevGuessRounds => [newRandomNumber, ...prevGuessRounds])
    };
    console.log(height)
    const guessRoundListLength = guessRounds.length;
    let content = <>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Cards style={styles.cards}>
            <Instructiontext style={styles.instructionText}>Lower Or Higher</Instructiontext>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
                        <Icon name="md-remove" size={24} color="#fff" />
                    </PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>

                        <Icon name="md-add" size={24} color="#fff" /></PrimaryButton>
                </View>
            </View>
        </Cards>
    </>;
    if (height < 500) {
        content =
        <> 
            <View style = {styles.buttonContainerWide}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
                        <Icon name="md-remove" size={24} color="#fff" />
                    </PrimaryButton>
                </View>
                <NumberContainer>{currentGuess}</NumberContainer>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>

                        <Icon name="md-add" size={24} color="#fff" /></PrimaryButton>
                </View>
            </View>
        </>
    }
    return (
        <View style={styles.screen}>
            <Title style={styles.title}>Opponent's Guess</Title>
            {content}
            <View style={{ flex: 1 }}>
                {/* {guessRounds.map(guessRound => 
                <Text key={guessRound}>{guessRound}</Text>)} */}
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) =>
                        <GameLogList roundsNumber={guessRoundListLength - itemData.index}
                            guess={itemData.item}
                            style={styles.gameLogText} />}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    )
}
export default GameScreen;
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        alignItems: "center"
    },
    instructionText: {
        marginBottom: 12,

    },
    title: {
        fontFamily: "FuzzyBubbles-Bold"
    },
    buttonsContainer: {
        flexDirection: "row",

    },
    cards: {
        padding: 16
    },
    buttonContainer: {
        flex: 1
    },
    gameLogText: {
        fontFamily: "FuzzyBubbles-Bold"
    },
    buttonContainerWide: {
        flexDirection: "row",
        alignItems: "center"
    }
})
