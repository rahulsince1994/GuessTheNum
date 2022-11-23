import {View , Text,StyleSheet} from "react-native";
import colors from "../../constants/colors";

function  GameLogList ({roundsNumber ,guess,style}){
return(
    <View style={styles.viewList}>
        <Text style={styles.text}>#{roundsNumber}</Text>
        <Text style={[styles.text,style]}>Opponent guess :{guess}</Text>
    </View>
)
}
export default GameLogList; 
const styles = StyleSheet.create({
    viewList: {
        backgroundColor: colors.accent500,
        padding: 12,
        marginVertical: 8,
        width: "100%",
        borderColor: colors.primary400,
        borderRadius: 20,
        borderColor: colors.primary500,
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        elevation: 4,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3

    },
    text: {
        fontWeight: "bold",
        fontSize: 15,
        // fontFamily: "FuzzyBubbles-Bold",
        color: colors.primary500
    }
})