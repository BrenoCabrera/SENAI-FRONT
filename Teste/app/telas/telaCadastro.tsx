import { Text, TextInput, View, StyleSheet, Button } from "react-native";
import { Atualizar, BuscarPorId, cartaoEmBranco, CartaoInterface, Criar } from "../api";
import { useEffect, useState } from "react";

export default function TelaCadastro(){
    
        const [cartao, setCartao] = useState<CartaoInterface>(cartaoEmBranco);

    async function CarregarDados(){
        return
        // const dados = await BuscarPorId("273ae775-0527-4f7a-7c8a-08de7e148731");
        // setCartao(dados);
    }

    async function Salvar(){
        if (cartao.id != ""){
            await Atualizar(cartao)
        }

        else {
            await Criar(cartao)
        }
    }

    useEffect(() => {CarregarDados()}, []);

    return(
        <View style={styles.container}>
            <View>                
                <Text>Rm: </Text>
                <TextInput style={styles.input} value={cartao.rm.toString()} onChangeText={(value) => setCartao({ ...cartao, rm: Number(value)})}/>
            </View>

            <View>
                <Text>Nome: </Text>
                <TextInput style={styles.input} value={cartao.nome} onChangeText={(value) => setCartao({ ...cartao, nome: value})}/>
            </View>

            <View>
                <Text>Unidade: </Text>
                <TextInput style={styles.input} value={cartao.unidade}onChangeText={(value) => setCartao({ ...cartao, unidade: value})}/>
            </View>
                
            <View>
                <Text>Curso: </Text>
                <TextInput style={styles.input} value={cartao.curso} onChangeText={(value) => setCartao({ ...cartao, curso: value})}/>
            </View>

            <View>          
                <Text>Nascimento: </Text>
                <TextInput style={styles.input} value={cartao.nascimento} onChangeText={(value) => setCartao({ ...cartao, nascimento: value})}/>
            </View>
                
            <View>          
                <Text>Foto: </Text>
                <TextInput style={styles.input} value={cartao.urlFoto} onChangeText={(value) => setCartao({ ...cartao, urlFoto: value})}/>
            </View>

            <View style={styles.botao}>
                <Button onPress={() => Salvar()}title="Salvar" color={'blue'}/>
                <Button title="Excluir" color={'red'}/>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 2,
        backgroundColor: 'white',
    },

    container: {
        padding: 50,
        paddingTop: 10,
        display: 'flex',
        gap: 10,
    },

    botao: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: 15,
    }
})