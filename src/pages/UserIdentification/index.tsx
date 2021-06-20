import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";

import colors from "../../../styles/colors";

import Button from "../../components/Button";

import {
  Container,
  Content,
  Form,
  Header,
  Emoji,
  Text,
  Input,
  Footer,
  KeyboardAvoiding,
} from "./styles";

const UserIdentification: React.FC = () => {
  const navigation = useNavigation();

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!name);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputChange = (value: string) => {
    setIsFilled(!!value);
    setName(value);
  };

  const handleSubmit = () => {
    navigation.navigate("Confirmation");
  };

  return (
    <Container>
      <KeyboardAvoiding behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Content>
            <Form>
              <Header>
                <Emoji>{isFilled ? "😄" : "😀"}</Emoji>
                <Text> Como podemos {"\n"} chamar você?</Text>
              </Header>
              <Input
                placeholder="Digite seu nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
                style={(isFocused || isFilled) && { borderColor: colors.green }}
              />
              <Footer>
                <Button onPress={handleSubmit} title="Confirmar" />
              </Footer>
            </Form>
          </Content>
        </TouchableWithoutFeedback>
      </KeyboardAvoiding>
    </Container>
  );
};

export default UserIdentification;
