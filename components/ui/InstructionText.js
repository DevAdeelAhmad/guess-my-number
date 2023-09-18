import Colors from "../../utils/colors";
import { Text, StyleSheet } from "react-native";

function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
    fontFamily: "open-sans",
  },
});
