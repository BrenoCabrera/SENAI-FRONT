import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index(){
    return(
        <View>
            <Link href={"/telas/telaCadastro"}>
                <Text>Abrir tela de cadastro</Text>
            </Link>
        </View>
    )
}