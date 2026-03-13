import { useRouter } from "expo-router";
import { Button, View } from "react-native";


export default function App() {
  const router = useRouter();
  return (
    <View>
      <Button
        title="ID CADASTRO = 1"
        onPress={() => router.push({pathname:'/cadastro', params: {id : 1}})}
      />
    </View>
  );
}