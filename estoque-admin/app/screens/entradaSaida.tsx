import { useLocalSearchParams } from "expo-router";
import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function Details() {
  const params = useLocalSearchParams();
  const tipo = params.tipo?.toString();

  const dataHoraFormatada = new Date().toLocaleString("pt-BR");

  const texto = tipo === "E" ? "Entrada de Produtos" : "Saída de Produtos";

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Operação de Estoque</Text>

        <Text
          style={[
            styles.subtitulo,
            tipo === "E" ? styles.entrada : styles.saida,
          ]}
        >
          {texto}
        </Text>

        <Text style={styles.data}>{dataHoraFormatada}</Text>

        <Text style={styles.label}>Motivo</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite o motivo..."
          placeholderTextColor="#9ca3af"
        />

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>Procurar produto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    justifyContent: "center",
    padding: 20,
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 18,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },

  titulo: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 8,
  },

  subtitulo: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },

  entrada: {
    color: "#16a34a",
  },

  saida: {
    color: "#dc2626",
  },

  data: {
    fontSize: 12,
    color: "#6b7280",
    marginBottom: 16,
  },

  label: {
    fontSize: 13,
    color: "#374151",
    marginBottom: 6,
  },

  input: {
    backgroundColor: "#f9fafb",
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: "#111827",
    marginBottom: 16,
  },

  botao: {
    backgroundColor: "#e5e7eb",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  botaoTexto: {
    color: "#111827",
    fontWeight: "600",
  },
});