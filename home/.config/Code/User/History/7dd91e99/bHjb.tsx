import { StyleSheet, Text, View } from "react-native";

type AnimalProps ={
    name:string,
    emoji:string
}

export default function AnimalCard({name , emoji}:AnimalProps){
    return(
        <View style={styles.card}>
            <Text style={styles.name}>
                {name}
            </Text>
            <Text style={styles.emoji}>
                {emoji}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    card:{},
    name:{},
    emoji:{}
})