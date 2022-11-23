import {View , StyleSheet , Dimensions} from "react-native";
import colors from "../constants/colors";
function Cards ({children,style}){
    return(
        <View style={[styles.inputContainer, style]}>{children}</View>
    )
};
export default Cards;
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
    inputContainer: {
        // flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primary600,
        padding: 8,
        marginHorizontal: 24,
        borderRadius: 20,
        marginTop: deviceWidth < 380 ? 18 : 30,
        elevation: 16,
        shadowColor: "purple",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 20,
        shadowOpacity: 1
    },
})