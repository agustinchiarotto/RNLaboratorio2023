import { TextInput } from "react-native";
import styles from "./styles";

const Input = ({ placeholder, value, onChangeText }) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
    />
  );
};

export default Input;
