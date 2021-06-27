import React from "react";
import { View } from "react-native";

import { RectButtonProps } from "react-native-gesture-handler";

import { Container, TextButton } from "./styles";

interface EnviromentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

const EnviromentButton: React.FC<EnviromentButtonProps> = ({
  title,
  active = false,
}) => {
  return (
    <Container isActive={active}>
      <TextButton isActive={active}>{title}</TextButton>
    </Container>
  );
};

export default EnviromentButton;
