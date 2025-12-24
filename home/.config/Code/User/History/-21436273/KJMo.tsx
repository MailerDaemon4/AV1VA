import { HeaderTitle } from "@react-navigation/elements";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Int32 } from "react-native/Libraries/Types/CodegenTypes";



export default function Index() {
  const [ticket, setTicket] = useState<number>(0);
  const [pcChoice , setPcChoice] = useState<number>(Math.floor(Math.random()*3+1));
  const [userChoice, setUserChoice] = useState<null|number>(null)
   return (
    <View style={styles.container}>
      <Text style={styles.title}>Üdv az előadáson!</Text>
      <TouchableOpacity style={styles.btn} onPress={() => alert("Sose hagyjon el benneteket a remény")}>
        <Text style={styles.btntext}>  Sose hagyjon el benneteket a remény  </Text>
      </TouchableOpacity>
      <Text style={styles.ticket}>Jelenlegi jegyek: {ticket}</Text>
      <TouchableOpacity style={styles.btn} onPress={() => setTicket(ticket + 1)}><Text style={styles.btntext}>      +      </Text></TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => minusticket()}><Text style={styles.btntext}>      -      </Text></TouchableOpacity>

      <View style={styles.buttongroup}>
        <TouchableOpacity style={styles.btn} onPress={() => threebutton(1)}><Text style={styles.btntext}>  Bal  </Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => threebutton(2)}><Text style={styles.btntext}>  Közép  </Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => threebutton(3)}><Text style={styles.btntext}>  Jobb  </Text></TouchableOpacity>
      </View>

      <Text></Text>
    </View>
  );

  function minusticket()
{
  if(ticket <= 0){
    alert("A jegy érteke nem mehet minuszba!!");

  }
  else{
    setTicket(ticket -1)
  }  
}

function threebutton(buttonindex:Int32){
  if(buttonindex == pcChoice){
    alert("Eltaláltad");
  }
  else if(buttonindex > pcChoice){
    alert("Kisebb");
  }
  else{
    alert("Nagyobb");
  }
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "blue",
  },
  btn: {
    margin: 2,
    backgroundColor: "lightblue",
    height: 70,
    borderColor: "black",
    borderRadius: 20,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  btntext: {
    color: "black",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold"
  },
  ticket: {
    fontSize: 32,
    fontWeight: "bold",
    color: "green",
  },
  buttongroup:{
    flexDirection:"row"
  }
})


