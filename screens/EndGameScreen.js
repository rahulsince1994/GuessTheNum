import { View, Image, Text, StyleSheet ,useWindowDimensions} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import colors from "../constants/colors";

// function StartNewGame(){

// }
function EndGameScreen({roundsNumber,userNumber,onStartNewGame}) {
    const {width , height} = useWindowDimensions();
    let imageSize = 300;
    if(width < 380 ){
        imageSize = 150
    }
    if (height < 400) {
        imageSize = 80
    };
    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius : imageSize / 2
    }
    return (
        <View style={styles.rootContainer}>
            <Title>Game Is Over !!</Title>
            <View style={[styles.imageContainer , imageStyle]}>
                <Image style={styles.image} source={require("../assets/images/winwin.jpg")} />
            </View>
            <Text style={styles.summaryText}>Your phone needed
                <Text style={styles.highlightText}> {roundsNumber}</Text> rounds to guess
                <Text style={styles.highlightText} > {userNumber}</Text></Text>
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    )
};
export default EndGameScreen;
// const deviceWidth = Dimensions.get("window").width ;


const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        // width: deviceWidth < 380 ? 150 : 300 ,
        // height:  deviceWidth < 380 ? 150 : 300 ,
        // borderRadius:  deviceWidth < 380 ? 75 : 150 ,
        borderWidth: 3,
        // marginHorizontal:14,
        marginVertical: 16,
        borderColor: colors.primary600,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: "100%"
    },
    summaryText: {
        fontFamily: "FuzzyBubbles-Regular",
        color:colors.primary600,
    },
    highlightText: {
        fontFamily: "Poppins-BoldItalic",
        fontSize:24,
        color:colors.primary500
    }
})