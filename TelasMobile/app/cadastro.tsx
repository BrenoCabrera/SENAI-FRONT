import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function Details() {
    const params = useLocalSearchParams();    
    const id = params.id?.toString();


    if (id) {
        var texto = `Cadastro com id ${id}`;
    } else {
        var texto = "Cadastro sem Id"
    }

    return (
        <View>
            <Text>{texto}</Text>
        </View>
    )
}