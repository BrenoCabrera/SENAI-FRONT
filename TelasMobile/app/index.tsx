import { useRouter } from "expo-router";
import { Button, View } from "react-native";


export default function App() {
  const router = useRouter();
  return (
    <View>
      <Button
        title="ABRIR PESQUISA"
        onPress={() => router.push('/pesquisa')}
      />

      <Button
        title="ABRIR CADASTRO"
        onPress={() => router.push({pathname:'/cadastro'})}
      />
    </View>
  );
}