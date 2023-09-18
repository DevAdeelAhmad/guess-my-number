import { Text, View, StyleSheet } from "react-native";
import Colors from "../../utils/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}
export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    borderRadius: 8,
    borderColor: Colors.accent500,
    borderWidth:4,
    margin: 24,
  },
  numberText: {
    fontSize: 36,
    fontFamily: "open-sans-bold",
    color: Colors.accent500,
  },
});
