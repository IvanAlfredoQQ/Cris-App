import Constants from "expo-constants"
import Porcentajes from "./Porcentajes";

import { Text, View } from "react-native";

export default function Main() {
    return(
        <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
            <Porcentajes/>
        </View>
    )
}