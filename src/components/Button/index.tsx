import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Text } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <Container activeOpacity={0.7} onPress={onPress}>
      <Text>{title}</Text>
    </Container>
  );
};

export default Button;
