import React from "react";
import { View } from "react-native";

import { Container, Greeting, UserName, Image } from "./styles";

import coinImg from "../../assets/images/eth.png";

const Header: React.FC = () => {
  return (
    <Container>
      <View>
        <Greeting>Olá,</Greeting>
        <UserName>Clizio</UserName>
      </View>

      <Image source={coinImg}></Image>
    </Container>
  );
};

export default Header;
