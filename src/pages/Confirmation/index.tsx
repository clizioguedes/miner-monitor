import React from "react";
import Button from "../../components/Button";
import { Footer } from "../UserIdentification/styles";

import { Container, Content, Emoji, Title, Subtitle } from "./styles";

const Confirmation: React.FC = () => {
  const handleStart = () => {};

  return (
    <Container>
      <Content>
        <Emoji>😄</Emoji>
        <Title>Prontinho</Title>
        <Subtitle>
          Perfeito, agora adicione sua carteira e {"\n"} selecione a criptomoeda
          que faremos o resto
        </Subtitle>

        <Footer>
          <Button title="Começar" onPress={handleStart} />
        </Footer>
      </Content>
    </Container>
  );
};

export default Confirmation;
