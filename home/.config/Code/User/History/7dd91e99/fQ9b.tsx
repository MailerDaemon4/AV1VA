import { Text, View } from "react-native";

type AnimalProps ={
    name:string,
    emoji:string
}

export default function AnimalCard({name , emoji}:AnimalProps){
    return(
        <View style={StyleSheet.card}>
            <Text style={styles}>
                {name}
            </Text>
            <Text>
                {emoji}
            </Text>
        </View>
    )
}