import React from "react";
import { Button } from "react-native";
import styles from "./styles.js";

const PrimaryButton = ({ title, onPressHandler }) => {
  return (
    <Button style={styles.button} title={title} onPress={onPressHandler} />
  );
};

export default PrimaryButton;
