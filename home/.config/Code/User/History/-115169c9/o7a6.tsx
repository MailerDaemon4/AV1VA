import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

import AnimalCard from "@/components/AnimalCards";
export default function ListScreen() {
  const animals = [
    { id: "1", name: "majom", emoji: "🐵" },
    { id: "2", name: "egér", emoji: "🐭" },
    { id: "3", name: "panda", emoji: "🐼" },
    { id: "4", name: "tigris", emoji: "🐯" },
    { id: "5", name: "zsiráf", emoji: "🦒" },
    { id: "6", name: "kutya", emoji: "🐶" },
    { id: "7", name: "macska", emoji: "😸" },
    { id: "8", name: "pingvin", emoji: "🐧" },
    { id: "9", name: "medve", emoji: "🐻" },
  ]

  return (
    <View style={styles.container}>
      <Text>Kedvenc Állatok.</Text>
      {
        /*ScrollView
        kis adatmennyisegnel
        */
        <View style={styles.scrollbox}>
          <ScrollView>
            {/* A map metódus implicit return-nel (nincsenek extra {} a nyíl után) */}
            {animals.map((a) => (
              <Text key={a.id}>
                {a.name} , {a.emoji}
              </Text>
            ))}
          </ScrollView>
        </View>

      }

      {
        <View style={styles.scrollbox}>
          <FlatList
            data={animals}
            keyExtractor={(a) => (a.id)}
            renderItem={({ item }) => (
              // 
              
            )

            }
          />
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  scrollbox: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    height:70,
    marginTop:200
  }
});