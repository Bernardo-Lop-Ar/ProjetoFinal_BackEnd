import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Button, TextInput} from "react-native";
import { getRequest, getRequestbyId, postRequest } from './Api';

export default function EmprestarLivro() {
    const [Biblioteca, setBiblioteca] = useState([]);
    const [BibliotecaId, setBibliotecaId] = useState("");
    const [BibliotecaNome, setBibliotecaNome] = useState("");
    const [BibliotecaAnoNasc, setBibliotecaAnoNasc] = useState("");

    const handleSave = async () => {
        setAlert1(false);
        setAlert2(false);
    
        if (BibliotecaId != "" && BibliotecaNome != "" && BibliotecaAnoNasc != "") {
          let newLocatario = await postRequest(BibliotecaId, BibliotecaNome, BibliotecaAnoNasc);
          setTasks(newLocatario);
    
          setBibliotecaId("");
          setBibliotecaNome("");
          setBibliotecaAnoNasc("");
        } else {
          if (!BibliotecaId.trim()) {
            setAlert1(true);
            setTimeout(() => {
              setAlert1(false);
            }, 4000);
          }
          if (!BibliotecaNome.trim()) {
            setAlert1(true);
            setTimeout(() => {
              setAlert1(false);
            }, 4000);
          }
          if (BibliotecaAnoNasc != "") {
            setAlert2(true);
            setTimeout(() => {
              setAlert2(false);
            }, 4000);
          }
        }
      };

      const emprestarLivro = (index, id) => {
        const updatedLivros = [...Biblioteca];
        updatedLivros.splice(index, id);
        postRequest()
        setBiblioteca(updatedLivros);
      };

      return (
        <View style={styles.container}>
          <Text style={styles.label}>Nome Locatario</Text>
          <TextInput
            style={styles.input}
            value={BibliotecaNome}
            onChangeText={setBibliotecaNome}
            placeholder="Nome"
          />
    
          {alert1 ? (
            <Text style={styles.errorText}>Necessário informar o Nome</Text>
          ) : (
            <></>
          )}
    
          <Text style={styles.label}>Ano Nascimento</Text>
          <TextInput  
            style={[styles.input, styles.textArea]}
            value={BibliotecaAnoNasc}
            onChangeText={setBibliotecaAnoNasc}
            placeholder="Ano de Nascimento"
          />
    
          {alert2 ? (
            <Text style={styles.errorText}>Necessário informar o Ano</Text>
          ) : (
            <></>
          )}
    
          <View style={styles.buttonContainer}>
            <Button title="Locar" onPress={emprestarLivro} />
          </View>

        </View>
      );

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