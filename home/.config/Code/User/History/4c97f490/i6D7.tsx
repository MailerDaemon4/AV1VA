import { useState } from "react";
import { Text, View , TextInput , StyleSheet, FlatList , Button} from "react-native";

export default function Index() {

  const [termek , setTermek] = useState<Termék[]>([{id: 1, name: "Alma" , isBuyed: false},{id: 2, name: "Körte" , isBuyed: false},{id: 3, name: "Banán" , isBuyed: false}]);
  const [inputValue, setInputValue] = useState("");

  type Termék = {
    id? : number  ;
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
        renderItem={({ item, index }) => <Text key={index} style={termek[index].isBuyed ? st.listItemb : st.listItem } onPress={() => {
          const newTermek = [...termek];
          newTermek[index].isBuyed = !newTermek[index].isBuyed;
          setTermek(newTermek);
        }}>{item.name}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
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

function addItem(inputv : string){
    
}