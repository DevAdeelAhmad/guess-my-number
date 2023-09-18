import { useState } from "react";
import Colors from "./utils/colors";
import { StatusBar } from "expo-status-bar";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import {useFonts} from 'expo-font'

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(true);

useFonts();

  function pickedNumberHandler(picekedNumber) {
    setUserNumber(picekedNumber);
    setIsGameOver(false);
  }

  function gameOverHandler(){
    setIsGameOver(true);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
  }

  if(isGameOver && userNumber) {
    screen = <GameOverScreen/>;
  }
  
  return (
    <>
      <StatusBar style="light" />
      <LinearGradient colors={[Colors.fromGradient, Colors.toGradient]} style={styles.rootScreen}>
        <ImageBackground
          source={require("./assets/images/background.jpg")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.5,
  },
});
