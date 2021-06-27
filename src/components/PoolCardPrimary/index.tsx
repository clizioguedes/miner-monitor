import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Pool } from "../../models/Pool";

import { SvgFromUri } from "react-native-svg";

import { Container, TextCard, Logo } from "./styles";

interface PoolProps extends RectButtonProps {
  pool: Pool;
}

const PoolCardPrimary: React.FC<PoolProps> = ({ pool, ...rest }) => {
  return (
    <Container {...rest}>
      <Logo uri={pool.logo} width={70} height={70} />
      <TextCard>{pool.name}</TextCard>
    </Container>
  );
};

export default PoolCardPrimary;
