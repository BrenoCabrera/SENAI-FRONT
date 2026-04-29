import { useState } from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ProdutosScreen() {
    const [parametro, setParametro] = useState("");

    return (

        <SafeAreaProvider>
            <View style={styles.container}>

                <ImageBackground
                    style={styles.fundo}
                    source={require('../../assets/images/fundo.jpg')}
                    resizeMode='cover'
                >

                    <Searchbar
                        value={parametro}
                        onChangeText={(value) => setParametro(value)}
                        placeholder="Produto ou Categoria"
                        mode="view"
                        iconColor="rgb(100, 0, 0)"
                        style={styles.searchBar}
                        inputStyle={styles.texto}
                    />
                    <ScrollView>
                        <View style={styles.cardsConainer}>
                            <View style={styles.card}>
                                <Image
                                    style={styles.imagem}
                                    source={{
                                        uri: "https://godam.com.br/wp-content/uploads/2020/10/Leite-UHT-Godam-1L-Integral-768-x-768.png",
                                    }}
                                />

                                <View style={styles.dados}>
                                    <Text>Categoria: Bebidas</Text>
                                    <Text style={{ fontWeight: 500 }}>Leite UHT Integral Godam 1Lt </Text>
                                    <Text>Quantidade: 500 Un</Text>
                                </View>
                            </View>

                            <View style={styles.card}>
                                <Image
                                    style={styles.imagem}
                                    source={{
                                        uri: "https://godam.com.br/wp-content/uploads/2020/10/Leite-UHT-Godam-1L-Integral-768-x-768.png",
                                    }}
                                />

                                <View style={styles.dados}>
                                    <Text>Categoria: Bebidas</Text>
                                    <Text style={{ fontWeight: 500 }}>Leite UHT Integral Godam 1Lt </Text>
                                    <Text>Quantidade: 500 Un</Text>
                                </View>
                            </View>

                            <View style={styles.card}>
                                <Image
                                    style={styles.imagem}
                                    source={{
                                        uri: "https://godam.com.br/wp-content/uploads/2020/10/Leite-UHT-Godam-1L-Integral-768-x-768.png",
                                    }}
                                />

                                <View style={styles.dados}>
                                    <Text>Categoria: Bebidas</Text>
                                    <Text style={{ fontWeight: 500 }}>Leite UHT Integral Godam 1Lt </Text>
                                    <Text>Quantidade: 500 Un</Text>
                                </View>
                            </View>

                            <View style={styles.card}>
                                <Image
                                    style={styles.imagem}
                                    source={{
                                        uri: "https://godam.com.br/wp-content/uploads/2020/10/Leite-UHT-Godam-1L-Integral-768-x-768.png",
                                    }}
                                />

                                <View style={styles.dados}>
                                    <Text>Categoria: Bebidas</Text>
                                    <Text style={{ fontWeight: 500 }}>Leite UHT Integral Godam 1Lt </Text>
                                    <Text>Quantidade: 500 Un</Text>
                                </View>
                            </View>

                            <View style={styles.card}>
                                <Image
                                    style={styles.imagem}
                                    source={{
                                        uri: "https://godam.com.br/wp-content/uploads/2020/10/Leite-UHT-Godam-1L-Integral-768-x-768.png",
                                    }}
                                />

                                <View style={styles.dados}>
                                    <Text>Categoria: Bebidas</Text>
                                    <Text style={{ fontWeight: 500 }}>Leite UHT Integral Godam 1Lt </Text>
                                    <Text>Quantidade: 500 Un</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        </SafeAreaProvider>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    fundo: {
        width: '100%',
        height: '100%',
        padding: 10,
        gap: 15,
    },

    cardsConainer: {
        display: 'flex',
        padding: 10,
        gap: 25
    },

    searchBar: {
        backgroundColor: 'white',
    },

    texto: {
        fontSize: 18
    },

    card: {
        backgroundColor: 'beige',
        height: 100,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'black',
        borderTopRightRadius: 20,
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
    },

    imagem: {
        width: 100 - 14,
        height: 100 - 14
    },

    dados: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    }
})