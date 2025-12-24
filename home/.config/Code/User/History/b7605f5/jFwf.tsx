import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <View style={sty.container}>
      <Text style={sty.title}>></Text>
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
