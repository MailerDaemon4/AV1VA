import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {

  const[exercise, setExercise] = useState


  return (
    <View style={sty.container}>
      <Text style={sty.title}>Workout app</Text>
      <TextInput style={sty.textInput} placeholder="Enter your exercise" />
    </View>
  );
}
const sty = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  title:{
    fontSize:20,
    fontWeight:"bold"
  },
  textInput:{
    height:40,
    borderColor:"gray",
    borderWidth:1,
    marginTop:20,
    width:"80%",
    paddingHorizontal:10
  }
})
