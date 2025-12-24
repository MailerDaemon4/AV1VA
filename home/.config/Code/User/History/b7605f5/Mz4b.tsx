import { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {

  const [exercise, setExercise] = useState<string>("");
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const exercises: { name: string; isCompleted: boolean }[] = [];

  function addExercise() {
    exercises.push({ name: exercise, isCompleted: false });
    console.log(exercises);
    setExercise("");
  }

  return (
    <View style={sty.container}>
      <Text style={sty.title}>Workout app</Text>
      <TextInput
        style={sty.textInput}
        placeholder="Enter your exercise"
        value={exercise}
        onChangeText={setExercise}
      />
      <TouchableOpacity onPress={() => { addExercise() }}>
        <Text>Add Exercise</Text>
      </TouchableOpacity>


      <FlatList
        data={exercises}
        keyExtractor={(item,index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity onPress={() => {}} ><Text>{item.name} - {item.isCompleted ? "Completed" : "Not Completed"}</Text></TouchableOpacity>
          </View>
        )}
      />

    </View>



  );
}
const sty = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20,
    width: "80%",
    paddingHorizontal: 10
  }
})
