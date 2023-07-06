/*Deprecated component, this was used to make and interface, but it was replaced by React Navigation behaviour*/
import Constants from "expo-constants"
import { View, Text} from "react-native"

export default function AppBar() {
    return(
        <View style={{ display: 'flex', justifyContent:'center', backgroundColor: '#212121', marginTop: Constants.statusBarHeight, height: 50}}>
            <Text style={{marginLeft:10, color: '#E2E2E2', fontSize: 30, fontWeight: 'bold'}}>Cris App</Text>
        </View>
    )
}