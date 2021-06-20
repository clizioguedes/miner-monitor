import styled from "styled-components/native";

import fonts from "../../../styles/fonts";
import colors from "../../../styles/colors";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px;
`;

export const Emoji = styled.Text`
  font-size: 48px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: ${fonts.heading};
  text-align: center;
  color: ${colors.heading};
  line-height: 38px;
  margin-top: 15px;
`;

export const Subtitle = styled.Text`
  font-size: 17px;
  font-family: ${fonts.text};
  text-align: center;
  padding: 10px 0px;
  color: ${colors.heading};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 0px 50px;
  margin-top: 20px;
`;
