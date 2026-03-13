import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
    <Stack.Screen
    name='index'
    options={{title : "Menu Principal"}}
    />

    <Stack.Screen
    name='pesquisa'
    options={{title : "Pesquisa"}}
    />

    <Stack.Screen
    name='cadastro'
    options={{title : "Cadastro"}}
    />
    </Stack>
  );
}