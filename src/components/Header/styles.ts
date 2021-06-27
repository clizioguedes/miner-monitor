import styled from "styled-components/native";

import { getStatusBarHeight } from "react-native-iphone-x-helper";

import fonts from "../../../styles/fonts";
import colors from "../../../styles/colors";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 20px;
  margin-top: ${getStatusBarHeight()}px;
  width: 100%;
`;

export const Greeting = styled.Text`
  font-size: 32px;
  font-family: ${fonts.text};
  color: ${colors.heading};
`;

export const UserName = styled.Text`
  font-size: 32px;
  font-family: ${fonts.heading};

  color: ${colors.heading};
  line-height: 40px;
`;

export const Image = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 40px;
`;
