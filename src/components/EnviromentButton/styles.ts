import styled from "styled-components/native";

import { RectButton } from "react-native-gesture-handler";

import fonts from "../../../styles/fonts";
import colors from "../../../styles/colors";

interface EnviromentButtonProps {
  isActive?: boolean;
}

export const Container = styled(RectButton)<EnviromentButtonProps>`
  background-color: ${(props) =>
    props.isActive ? colors.green_light : colors.shape};
  height: 40px;
  width: 90px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-right: 5px;
`;

export const TextButton = styled.Text<EnviromentButtonProps>`
  color: ${(props) => (props.isActive ? colors.green_dark : colors.heading)};
  font-family: ${(props) => (props.isActive ? fonts.heading : fonts.text)};
`;
