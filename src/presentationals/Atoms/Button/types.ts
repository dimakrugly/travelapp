import { TextStyle, ViewStyle } from "react-native";

export interface ButtonProps {
  title: string;
}

export interface ButtonStyles {
  container: ViewStyle,
  button: ViewStyle,
  title: TextStyle,
}
