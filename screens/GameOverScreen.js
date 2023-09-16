import {Text, View, StyleSheet} from 'react-native'

function GameOverScreen(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>The Game is Over!</Text>
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    }
})