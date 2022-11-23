import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView, StatusBar } from "react-native";
import LinearGradient from "react-native-linear-gradient"
import StartGameScreen from "./screens/StartGameScreen";
import colors from "./constants/colors";
import GameScreen from "./screens/GameScreen";
import EndGameScreen from "./screens/EndGameScreen";

function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRound, setGuessRound] = useState(0);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };
  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRound(numberOfRounds);
  };
  function startNewGame() {
    setUserNumber(null);
    // setGameIsOver(true);
    setGuessRound(0)
  }
  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;
  // fow switching screens
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  };
  if (gameIsOver && userNumber) {
    screen = <EndGameScreen userNumber={userNumber} roundsNumber={guessRound} onStartNewGame={startNewGame} />
  };

  return (
    <>
      <StatusBar animated={true}
        backgroundColor= "#9436d7"/>
      <LinearGradient colors={[colors.primary400, colors.accent400]} style={styles.rootScreen}>
        <ImageBackground source={require("./assets/images/dice.jpg")}
          resizeMode="cover" style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  )
};

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // backgroundColor: "#ddb52f"
  },
  backgroundImage: {
    opacity: 0.15
  }
})