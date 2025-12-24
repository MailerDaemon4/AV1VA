import { useState } from "react";
import { StyleSheet, Text, View , TextInput, Button} from "react-native";

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

  const handleAddPerson = () => {
  //validation
  
  if(!PersonName.trim()){
    //validation failed
    setError("Kérem adjon meg egy nevet!");
    return;
  }
  else if(!PersonEmail.trim() || !PersonEmail.includes("@")){
    //validation failed
    setError("Kérem adjon meg egy érvényes email címet!");
    return;
  }
  else if(!PersonAge.trim() || isNaN(Number(PersonAge)) || Number(PersonAge) <=0){
    //validation failed
    setError("Kérem adjon meg egy érvényes életkort!");
    return;
  }
  else{
    //validation passed
    setError("");}

    const newPerson: Person = {
      id : Date.now().toString(),
      name: PersonName,
      email: PersonEmail,
      age: PersonAge,
    }

    setPeople((prev) => [newPerson, ...prev]);
  
}


  return (
    <View style={styles.container}>
      <TextInput placeholder="Add meg a neved!" onChangeText={(text) => { setPersonName(text); }} style={styles.TextInput} value={PersonName} />
      <TextInput placeholder="Add meg az emailed!" onChangeText={(text) => { setPersonEmail(text); }} keyboardType="email-address" style={styles.TextInput} value={PersonEmail} />
      <TextInput placeholder="Add meg az életkorod!" onChangeText={(text) => { setPersonAge(text); }} keyboardType="numeric" style={styles.TextInput} value={PersonAge} />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <Button title="Hozzáadás"  onPress={() => {handleAddPerson()}} />
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
    fontWeight: "bold",
    marginBottom: 10,
  }
})

