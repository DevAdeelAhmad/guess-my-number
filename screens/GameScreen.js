import { StyleSheet, View } from "react-native";
import Title from "../components/Title";

function GameScreen() {
  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
    </View>
  );
}

function generateRandomBetween(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
}

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
});
