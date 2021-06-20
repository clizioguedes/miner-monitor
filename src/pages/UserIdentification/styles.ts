import styled from "styled-components/native";

import fonts from "../../../styles/fonts";
import colors from "../../../styles/colors";

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const KeyboardAvoiding = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding: 0px 54px;
`;

export const Header = styled.View`
  align-items: center;
`;

export const Emoji = styled.Text`
  font-size: 44px;
`;

export const Text = styled.Text`
  font-family: ${fonts.heading};
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: ${colors.heading};
  margin-top: 20px;
`;

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-color: ${colors.gray};
  color: ${colors.heading};
  width: 100%;
  font-size: 18px;
  margin-top: 50px;
  padding: 10px;
  text-align: center;
`;

export const Footer = styled.View`
  margin-top: 40px;
  width: 100%;
  padding: 0px 20px;
`;
