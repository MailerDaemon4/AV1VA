import { useState } from "react";
import { StyleSheet, Text, View , TextInput} from "react-native";
import { Int32 } from "react-native/Libraries/Types/CodegenTypes";

type Person = {
  id: string;
  name: string;
  email: string;
  age: string;
};


export default function Index() {
  // person data states
  const [PersonName, setPersonName] = useState<string>("");
  const [PersonEmail , setPersonEmail] = useState<string>("");
  const [PersonAge, setPersonAge] = useState<string>("");
  //people state
  const [people, setPeople] = useState<Person[]>([]);
  //error state
  const [error, setError] = useState<string>("");


  return (
    <View style={styles.container}>
      <TextInput placeholder="Add meg a neved!" onChangeText={(text) => { setPersonName(text); }} style={styles.TextInput} value={PersonName} />
      <TextInput placeholder="Add meg az emailed!" onChangeText={(text) => { setPersonEmail(text); }} keyboardType="email-address" style={styles.TextInput} value={PersonEmail} />
      <TextInput placeholder="Add meg az életkorod!" onChangeText={(text) => { setPersonAge(text); }} keyboardType="numeric" style={styles.TextInput} value={PersonAge} />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  TextInput:{
    color: "gray",
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "black",
    width: 200,
    padding: 10,
    marginBottom: 10,
    fontSize:16,
    textAlign: "center",
  },
  errorText:{
    color: "red",
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  }
})
