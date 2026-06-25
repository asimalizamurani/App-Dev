import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import DetailScreen from "../../screens/DetailScreen";
import ProfileScreen from "../../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        
        <Stack.Navigator
            screenOptions={{
                title: "Home Page",
             headerStyle: {
                backgroundColor: "orange",
             },
             headerTintColor: "#fff",
             headerTitleStyle: {
                fontWeight: "bold",
                fontFamily: "Arial",
                fontSize: 20
             }
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen}
            options={{
                // headerShown: false,
             title: "Home Page",
             headerStyle: {
                backgroundColor: "orange",
             },
             headerTintColor: "#fff",
             headerTitleStyle: {
                fontWeight: "bold",
                fontFamily: "Arial",
                fontSize: 20
             }
            }} 
            
            />
            <Stack.Screen name="Details" component={DetailScreen} options={{ title: "Details Page"}} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    )
}

export default function DynamicStackNavigator() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}