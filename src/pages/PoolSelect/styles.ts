import styled from "styled-components/native";

import fonts from "../../../styles/fonts";
import colors from "../../../styles/colors";

export const Container = styled.View`
  flex: 1;
  /* justify-content: space-around;
  align-items: center;

  background-color: ${colors.background}; */
`;

export const HeaderTitle = styled.View`
  padding: 0px 20px;
`;

export const Title = styled.Text`
  font-size: 17px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
  line-height: 20px;
  margin-top: 15px;
`;

export const Subtitle = styled.Text`
  font-size: 17px;
  font-family: ${fonts.text};
  line-height: 20px;
  color: ${colors.heading};
`;

export const Pools = styled.View`
  flex: 1;
  padding: 0px 32px;
  justify-content: center;
`;
