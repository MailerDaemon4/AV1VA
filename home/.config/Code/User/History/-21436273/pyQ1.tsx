import { HeaderTitle } from "@react-navigation/elements";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Int32 } from "react-native/Libraries/Types/CodegenTypes";


const [ticket, setTicket] = useState<number>(0);

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Üdv az előadáson!</Text>
      <TouchableOpacity style={styles.btn} onPress={() => alert("Sose hagyjon el benneteket a remény")}>
        <Text style={styles.btntext}>Sose hagyjon el benneteket a remény</Text>
      </TouchableOpacity>
      <Text style={styles.ticket}>Jelenlegi jegyek: {ticket}</Text>
      <TouchableOpacity style={styles.btn} onPress={() => setTicket(ticket + 1)}><Text style={styles.btntext}>      +      </Text></TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => setTicket(ticket - 1)}><Text style={styles.btntext}>      -      </Text></TouchableOpacity>

      <View style={styles.buttongroup}>
        <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>  Bal  </Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>  Közép  </Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>  Jobb  </Text></TouchableOpacity>
      </View>

    </View>
  );

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
