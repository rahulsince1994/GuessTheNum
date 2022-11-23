import {View , Text , StyleSheet, Dimensions} from "react-native";
import colors from "../../constants/colors";
function NumberContainer ({children}){
    return (
        <View style={styles.container}>
            <Text style = {styles.number}>{children}</Text>
        </View>
    )
};
export default NumberContainer;
const deviceWidth = Dimensions.get("window").width;
// console.log(deviceWidth);

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: colors.accent500,
        padding: deviceWidth < 380 ? 12 : 18,
        margin:24,
        borderRadius:8,
        alignItems: "center",
        justifyContent: "center",

    },
    number: {
        color: colors.accent500,
        fontSize:deviceWidth < 380 ? 28 :36 ,
        fontWeight: "bold",
        fontFamily: "FuzzyBubbles-Bold"
    }
})