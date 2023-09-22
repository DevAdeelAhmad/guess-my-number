import { Text, StyleSheet, Platform } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: "center",
    color: 'white',
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    // borderWidth: Platform.OS === 'ios'? 0 : 2,
    padding: 12,
    maxWidth: '100%',
    width: '70%',
  },
});
