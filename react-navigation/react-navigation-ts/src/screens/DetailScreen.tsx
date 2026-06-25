import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button } from '@react-navigation/elements'

const DetailScreen = ({route}:any) => {
  const navigation = useNavigation<any>()
  const {username} = route.params;
  // console.log("username", username)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "baloch"
    })
  }, [navigation])

  return (
    <View>
      <Text>Hello {username}</Text>
      {/* <Button
      onPress={() => navigation.goBack()}
      >Go Back</Button> */}
      <Button
      onPress={() => navigation.replace("Profile")}>Profile</Button>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})