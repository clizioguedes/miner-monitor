import styled from "styled-components/native";

import { Dimensions } from "react-native";

import { Feather } from "@expo/vector-icons";

import fonts from "../../../styles/fonts";
import colors from "../../../styles/colors";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 0px 20px;
`;

export const Title = styled.Text`
  font-family: ${fonts.heading};
  font-size: 32;
  font-weight: bold;
  line-height: 38px;

  text-align: center;
  color: ${colors.heading};
  margin-top: 38;
`;

export const Subtitle = styled.Text`
  font-family: ${fonts.text};
  font-size: 18px;
  text-align: center;

  padding: 0px 20px;
`;

export const Image = styled.Image`
  height: ${Dimensions.get("window").width * 0.7}px;
  width: 284px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${colors.red};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 56px;
  width: 56px;
`;

export const Icon = styled(Feather)`
  color: ${colors.white};
  padding: 0px 10px;
  font-size: 32px;
`;
