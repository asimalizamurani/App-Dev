import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Pressable } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <KeyboardAvoidingView style={{
      flex: 1
    }}>
      <View
      style={{
        flex: 1, justifyContent: 'flex-end', padding: 24
      }}
      >
        <Text
        style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20}}
        >Login</Text>

        <TextInput
        placeholder='name'
        style={{
          borderWidth: 1,
          borderColor: "grey",
          borderRadius: 10,
          padding: 12,
          fontSize: 16,
          marginBottom: 12
        }}
        />

        <TextInput
        placeholder='email'
        style={{
          borderWidth: 1,
          borderColor: "grey",
          borderRadius: 10,
          padding: 12,
          fontSize: 16,
          marginBottom: 12
        }}
        />

        <Pressable
        style={{
          borderRadius: 10,
          padding: 14,
          alignItems: 'center',
          backgroundColor: "purple"
        }}
        >
          <Text
          style={{ color: "white", fontWeight: 'bold', fontSize: 16}}
          >Sign in</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})