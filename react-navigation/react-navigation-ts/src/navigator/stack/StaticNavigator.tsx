import HomeScreen from "../../screens/HomeScreen";
import DetailScreen from "../../screens/DetailScreen";
import Profile from "../../screens/ProfileScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation } from "@react-navigation/native";


const Stack = createNativeStackNavigator({
  screens:{
    Home:HomeScreen,
    Details: DetailScreen,
    Profile: Profile

  }
})

const Navigation = createStaticNavigation(Stack);

export default function StaticStackNavigator(){
    return <Navigation />
}