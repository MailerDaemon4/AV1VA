import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {

  const [ProductName , setProductName] = useState<string>("");
  const [product , setproduct] = useState<Products[]>([]);

  

  const addrecord = () => {
    // Function to add a record



  };

  return (
    <View style={styles.container}>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

});
