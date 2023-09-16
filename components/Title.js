import { Text, StyleSheet } from "react-native";
import Colors from "../utils/colors";
function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.accent500,
    borderColor: Colors.accent500,
    borderWidth: 2,
    padding: 12,
  },
});
