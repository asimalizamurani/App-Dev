import { useState } from "react";
import { View, Text, Image, TextInput, Pressable } from "react-native";

export default function HomeScreen() {

    const [name, setName] = useState("");

  return (
    <View>
      <Text numberOfLines={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laborum quos quia corporis, ducimus unde delectus nobis molestiae exercitationem perferendis accusamus labore ad optio sint voluptas. Hic enim distinctio sunt?
      Quam quasi ratione, suscipit delectus adipisci similique optio excepturi autem rem maxime sed non dolores explicabo alias possimus ipsam qui asperiores </Text>

      <Image source={{uri: 'https://images.unsplash.com/photo-1778392120781-a6b2b55dc12a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8'}}
      width={300}
      height={200}
      />

      <Image
      source={require("@/assets/images/icon.png")}
      style={{
        width: 100,
        height: 100,
      }}
      blurRadius={20}
      />

      <TextInput
      placeholder="Enter your name"
      value={name}
      onChangeText={setName}
      placeholderTextColor={"blue"}
      
      style={{
        borderWidth: 1,
        borderColor: "gray",
        padding: 10,
        marginTop: 20,
        fontSize: 20,
      }}
      />     

      <Pressable onPress={() => alert("button pressed")}
        style={
          (pressed) => ({
            backgroundColor: pressed ? "red" : "grey",
          })
        }
        hitSlop={{
          top: 20,
          bottom: 60,
        }}
        >
        {({pressed}) => 
          pressed ? <Text> Press me</Text> : <Text> Pressed me </Text>}
      </Pressable>
    
    </View>
  )
}


.............Second Section........................

import { Pressable, ScrollView, StyleSheet, Switch, Text, View, Button } from 'react-native'
import React, { useState } from 'react'

const HomeScreen = () => {
  
  const [darkMode, setDarkMode] = useState(false);
  const items = Array.from({ length: 5 }, (_, i) => `Item ${i + 1}`)
  return (
    <ScrollView
    style={{
      flex: 1,
    }}
    contentContainerStyle={{
      padding: 16,
      alignItems: "center",
    }}
    >
      {items.map((item,) => (
        <View
        key={item}
        style={{
          backgroundColor: "white",
          padding: 16,
          marginBottom: 16,
          width: "100%",
          borderRadius: 8,
        }}
        >
          <Text key={item}>item</Text>
        </View>
      ))}

    <Pressable
    style={{
      backgroundColor: "blue",
      padding: 16,
      borderRadius: 8,
    }
    }>
      <Text>Load More</Text>
      </Pressable>     

      <Button title='Load More' onPress={() => console.log("Load More")} />

      <Switch
      value={darkMode}
      onValueChange={setDarkMode}
      trackColor={{false: "white", true: "black"}}
      thumbColor={"yellow"}
      /> 
    </ScrollView>
  );
};

export default HomeScreen

const styles = StyleSheet.create({})




###### SECTION THREE  ############

import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const HomeScreen = () => {

  const users = [
    { id: 1, name: "Asim", role: "Designer"},
    { id: 2, name: "Javid", role: "Developer"},
    { id: 3, name: "Majid", role: "Teacher"},
    { id: 3, name: "Kumar", role: "Coder"},
    { id: 3, name: "Samir", role: "Developer"},
  ]

  return (
    <FlatList
    style={{ backgroundColor: "red"}}
    data={users}
    // horizontal
    keyExtractor={(item) => item.id}
    contentContainerStyle={{ padding: 20, backgroundColor: "pink" }}
    renderItem={({item}) =>  (
      <Text>{item.name}</Text>
  )}
  ItemSeparatorComponent={
    <View style={{
      height: 1,
      backgroundColor: "black"
    }} />
  }
    />
  )
}

export default HomeScreen

const styles = StyleSheet.create({})