import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Button, TextInput} from "react-native";
import BookCard from './BookCard';
import { getRequest, getRequestbyId, postRequest } from './Api';
import TaskCard from './TaskCard';

export default function VerLivros() {
  const [Biblioteca, setBiblioteca] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRequest(); 
        setBiblioteca(response);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  const emprestarLivro = (index, id) => {
    const updatedLivros = [...Biblioteca];
    updatedLivros.splice(index, id);
    postRequest()
    setBiblioteca(updatedLivros);
  };



  return (
    <View style={styles.container}>

      <Text style={styles.label}>LIVROS</Text>
      

      {Biblioteca.length > 0 ? <View style={styles.separator} /> : <></>}

      <ScrollView>
        {Biblioteca?.map((item, index) => (
          <BookCard
            Id={item.id}
            Titulo={item.titulo}
            Qtd={item.qtd}
            status={"Done"}
            onActionPress={() => Locar()}
          />
        ))}
      </ScrollView>
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
