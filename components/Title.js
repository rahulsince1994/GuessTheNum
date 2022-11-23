import {Text , StyleSheet  ,Platform} from "react-native";
import colors from "../constants/colors";

function Title ({children,style}) {
    return(
        <Text style={[styles.title,style]}>{children}</Text>
    )
};
export default Title;
const styles = StyleSheet.create({
    title: {
            fontSize: 24,
            fontWeight: "bold",
            color: "#fff",
            textAlign: "center",
            // borderWidth: Platform.OS === "android" ? 2 : 0,
            // we can also do this also
            borderWidth: Platform.select({ios: 0, android: 2}),
            borderColor: "#fff",
            padding: 12
        }
    
})