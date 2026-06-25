import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Home Screen</Text>
        </View>
    )
}

function ProfileScreen() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Profile Screen</Text>
        </View>
    )
}

function SearchScreen() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Search Screen</Text>
        </View>
    )
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator initialRouteName='Profile'
        screenOptions={({route}) => ({
            // tabBarStyle: {
            //     height: 5,
            //     padding: 6,
            // },

            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'blue',
            tabBarIcon: ({ focused, color, size }) => {
                // color = focused ? 'tomato' : 'gray'
                size = focused ? 30 : 20
                const icon = route.name === 'Home'
                ? focused ? 'home' : 'home-outline'
                : route.name === 'Profile'
                ? focused ? 'chatbubble' : 'chatbubble-outline'
                : focused ? 'search' : 'search-outline'

                return <Ionicons name={icon} size={size} color={color} />

            }
        })}
        >
            <Tab.Screen name="Home" component={HomeScreen}
            // options={{
            //     // Title and tabBarLabel do the same thing but title is used for the header and tabBarLabel is used for the tab bar. If you want to set the title for the header, you should use title. If you want to set the label for the tab bar, you should use tabBarLabel.

            //     title: "Dashboard",
            //     tabBarLabel: "Home"
            // }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen}
            options={{tabBarBadge: 7}} />
            <Tab.Screen name="Search" component={SearchScreen} />
        </Tab.Navigator>
    )
}

export default function DynamicTabNavigator() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}