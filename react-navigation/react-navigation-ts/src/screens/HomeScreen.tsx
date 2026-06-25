import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from "@react-navigation/elements";
import { Link, useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation<any>()
  
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button 
      onPress={() => navigation.navigate("Details", {username:"balochcoder"})}
      >
        Visit Details
      </Button>
      <Button
      onPress={() => navigation.push("Home")}>Go to Home</Button>
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({})


// 1. navigate() go to a screen by name.
// 2. goBack() go back to the previous screen in the stack.
// 3. push() go to a screen by name, even if it's already on the stack. or Always add a new instance of the screen to the stack.
// 4. replace() replace the current screen with a new one, removing the current screen from the stack. -- Splash Home, Login, --> App
// 5. popToTop() go back to the first screen in the stack
// 6. popTo() go back to a specific screen in the stack by name.