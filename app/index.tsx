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