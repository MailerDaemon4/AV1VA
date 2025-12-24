import { useState} from "react";
import { Text, View , TextInput , StyleSheet, FlatList , Button} from "react-native";
import { Int32 } from "react-native/Libraries/Types/CodegenTypes";

export default function Index() {

  const [termek , setTermek] = useState<Termék[]>([{id: Date.now().toString(), name: "Alma" , isBuyed: false},{id: Date.now().toString(), name: "Körte" , isBuyed: false},{id: Date.now().toString(), name: "Banán" , isBuyed: false}]);
  const [inputValue, setInputValue] = useState("");

  type Termék = {
    id? : string  ;
    name?: string;
    isBuyed?: boolean;
  };

  return (
    <View style={st.container}>
      <View>
        <TextInput
       placeholder="Add a product"
       style={st.inputbox}
        value={inputValue}
        onChangeText={setInputValue}
      />

      <Button onPress={() => addItem(inputValue)} title="asd"></Button>
      </View>

      <FlatList
        style={st.list}
        data={termek}
        renderItem={({ item, index }) => <Text key={index} style={termek[index].isBuyed ? st.listItemb : st.listItem } onLongPress={() => listlong(index)} onPress={() => {
          const newTermek = [...termek];
          newTermek[index].isBuyed = !newTermek[index].isBuyed;
          setTermek(newTermek);
        }}>{item.name}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button title="ClearList" onPress={() => setTermek([])}></Button>
    </View>
  );
  function addItem(inputv : string){
    const temp =  [...termek , {id : Date.now().toString() , name : inputv , isBuyed: false}]
    setTermek(temp)
    setInputValue("")
}
  function listlong(index : number){
    const temp = termek[index] = {}
    setTermek(temp)
  }
}
const st = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputbox: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 20,
  },
  list: {
    width: 200,
    maxHeight: 500,
    borderBlockColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  listItem: {
    fontSize: 18,
    padding: 5,
    borderBlockColor: "gray",
    borderBottomWidth: 1,
  },
    listItemb: {
    fontSize: 18,
    padding: 5,
    borderBlockColor: "gray",
    borderBottomWidth: 1,
    textDecorationLine: 'line-through',
  },
});

