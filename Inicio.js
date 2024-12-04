import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Button, TextInput} from "react-native";

export default function Inicio(){
    <View style={styles.container}>

      <Text style={styles.label}>LIVROS</Text>
      


    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: "#fff",
    },
    label: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 8,
      marginTop: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      padding: 12,
      fontSize: 16,
    },
    textArea: {
      height: 100,
      textAlignVertical: "top",
    },
    buttonContainer: {
      marginTop: 16,
    },
    separator: {
      marginTop: 16,
      width: "100%",
      height: 1,
      backgroundColor: "gray",
    },
    errorText: {
      color: "red",
      fontSize: 12,
      fontStyle: "italic",
    },
  });
  