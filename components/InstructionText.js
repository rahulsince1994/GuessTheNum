import {StyleSheet , Text} from 'react-native';
import colors from "../constants/colors";


export default function Instructiontext ({children, style}){
    return(
        <Text style={[styles.instructionText,style]}>{children}</Text>
    )
}
const styles = StyleSheet.create({
    instructionText: {
        color: colors.accent500,
        fontSize: 24,
        fontFamily: "FuzzyBubbles-Bold"
        
    },
});