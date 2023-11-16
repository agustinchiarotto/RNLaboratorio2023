import React from "react";
import { Text } from "react-native";
import styles from "./styles.js";

const Titulo = ({ text, isBlue }) => {
  return <Text style={[styles.title, isBlue && styles.blue]}>{text}</Text>;
};

export default Titulo;
