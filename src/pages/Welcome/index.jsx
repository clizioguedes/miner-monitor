import React from "react";
import { useNavigation } from "@react-navigation/core";

import {
  Container,
  Title,
  Image,
  Subtitle,
  Button,
  Icon,
  Wrapper,
} from "./styles";

import bitcoinWelcome from "../../assets/images/bitcoin-welcome.png";

const Welcome = () => {
  const navigation = useNavigation();

  const handleStart = () => {
    navigation.navigate("UserIdentification");
  };

  return (
    <Container>
      <Wrapper>
        <Title>
          Monitore {"\n"} sua mineração de {"\n"} forma fácil
        </Title>

        <Image source={bitcoinWelcome} resizeMode="contain" />

        <Subtitle>
          Informações úteis para o monitoramento da sua RIG na maioria das pools
          conhecidades
        </Subtitle>

        <Button activeOpacity={0.7} onPress={handleStart}>
          <Icon name="chevron-right" />
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Welcome;
