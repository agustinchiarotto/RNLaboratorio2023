import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import Titulo from "../components/Titulo/Titulo";
import PrimaryButton from "../components/PrimaryButton/PrimaryButton";
import Input from "../components/Input/Input";
import Card from "../components/Card/Card";

const data = [
  {
    name: "Pikachu",
    id: "1",
  },
  {
    name: "Charmander",
    id: "2",
  },
  {
    name: "Ratata",
    id: "3",
  },
  {
    name: "Pichu",
    id: "4",
  },
];

const Home = () => {
  const onPressHandler = () => {
    getPokemon();
  };

  //   const onPressHandlerChau = () => {
  //     Alert.alert("chauuuu");
  //   };

  const [pokemon, setPokemon] = useState();
  const [allPokemon, setAllPokemon] = useState();
  const [inputValue, setInputValue] = useState(""); //primer parametro es el nombre de la variable/estado
  //el segundo es una funcion para modificarlo.

  const getPokemon = async () => {
    const resultApi = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${inputValue || "charmander"}`
    );
    const resultPokemon = await resultApi.json();
    setPokemon(resultPokemon);
  };

  const getAllPokemons = async () => {
    const resultApi = await fetch(`https://pokeapi.co/api/v2/pokemon`);
    const resultPokemon = await resultApi.json();
    console.log("resultPokemon: ", resultPokemon);
    setAllPokemon(resultPokemon);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <View style={styles.container}>
      <Titulo text={"Poke App"} isBlue={true} />

      <Input
        placeholder="Ingrese un pokemon"
        value={inputValue}
        onChangeText={setInputValue}
      />

      <Input
        placeholder="Ingrese un Segundo pokemon"
        value={inputValue}
        onChangeText={setInputValue}
      />

      <Input
        placeholder="Ingrese un Tercer pokemon"
        value={inputValue}
        onChangeText={setInputValue}
      />

      <PrimaryButton title="Buscar" onPressHandler={onPressHandler} />
      {/* <PrimaryButton title="Mi Boton" onPressHandler={onPressHandler} />  */}
      {/* 
      {pokemon && (
        <ScrollView>
          <Card
            name={pokemon.name}
            number={pokemon.order}
            imgUrl={pokemon.sprites.back_default}
          />
        </ScrollView>
      )} */}
      {allPokemon && (
        <FlatList
          data={allPokemon.results}
          renderItem={({ item }) => {
            return (
              <Card name={item.name} number={item.order} imgUrl={item.url} />
            );
          }}
        />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 40,
  },
});
