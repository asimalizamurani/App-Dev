import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SearchScreen from "../../screens/SearchScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "../../screens/DetailScreen";
import HomeScreen from "../../screens/HomeScreen";

const HomeStack = createNativeStackNavigator()

function HomeStackScreens() {
    return (
        <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="Details" component={DetailScreen} />
    </HomeStack.Navigator>    
    )
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Overview" component={HomeStackScreens} />
            <Tab.Screen name="Search" component={SearchScreen} options={{headerShown: false}} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default function TabAndStackNavigator() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}