import { Text, View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../utils/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}
export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    borderColor: Colors.accent500,
    borderWidth: 4,
    margin: deviceWidth < 380 ? 12 : 24,
  },
  numberText: {
    fontSize:  deviceWidth < 450 ? 28 : 36,
    color: Colors.accent500,
  },
});
