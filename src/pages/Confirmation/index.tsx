import React from "react";
import { useNavigation } from "@react-navigation/core";

import Button from "../../components/Button";

import { Container, Content, Emoji, Title, Subtitle, Footer } from "./styles";

const Confirmation: React.FC = () => {
  const navigation = useNavigation();

  const handleMoveOn = () => {
    navigation.navigate("PoolSelect");
  };

  return (
    <Container>
      <Content>
        <Emoji>😄</Emoji>
        <Title>Prontinho</Title>
        <Subtitle>
          Perfeito, para começar o monitoramento da sua RIG,
          {"\n"} vamos selecionar a pool, adicionar sua carteira de ETH e
          pronto.
        </Subtitle>

        <Footer>
          <Button title="Começar" onPress={handleMoveOn} />
        </Footer>
      </Content>
    </Container>
  );
};

export default Confirmation;
