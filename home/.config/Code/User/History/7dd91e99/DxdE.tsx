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
    card:{
        backgroundColor:"teal",
        padding:3,
        borderRadius:15,
        alignItems:"center",
        justifyContent:"center",
        margin:10,
        width:120,
        shadowColor:"#1f2937",
        shadowOpacity:0.1,
        shadowRadius:4,
        elevation:3,
    },
    name:{},
    emoji:{}
})