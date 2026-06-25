import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button } from '@react-navigation/elements'

const ProfileScreen = () => {
    const navigation = useNavigation<any>()
  return (
    <View>
      <Text>Profile</Text>
      <Button
      onPress={() => navigation.popToTop("Home")}>Go Back</Button>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})