import Menu from "./Menu";
import Porcentajes from "./Porcentajes";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Main() {
  const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Porcentajes" component={Porcentajes} />
      </Stack.Navigator>
  );
}
