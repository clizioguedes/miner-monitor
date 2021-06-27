import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, ListRenderItem } from "react-native";

import api from "../../services/api/api";

import Header from "../../components/Header";
import EnviromentButton from "../../components/EnviromentButton";
import PoolCardPrimary from "../../components/PoolCardPrimary";

import { Container, Title, HeaderTitle, Pools } from "./styles";

import { Coin } from "../../models/Coin";
import { Pool } from "../../models/Pool";

const PoolSelect: React.FC = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [pools, setPools] = useState<Pool[]>([]);

  const _renderCoin: ListRenderItem<Coin> = ({ item }) => (
    <EnviromentButton title={item.name} key={item.key} />
  );

  const _renderPool: ListRenderItem<Pool> = ({ item }) => (
    <PoolCardPrimary pool={item} key={item.id} />
  );

  const fetchCoins = async () => {
    const { data } = await api.get("/coins_mining");
    setCoins(data);
  };

  const fetchPools = async () => {
    const { data } = await api.get("/pools");
    setPools(data);
  };

  useEffect(() => {
    fetchPools();
    fetchCoins();
  }, []);

  useEffect(() => {}, []);

  return (
    <Container>
      <Header />
      <HeaderTitle>
        <Title>Selecione a Pool de mineração da sua Rig de Etherium</Title>
      </HeaderTitle>

      <View>
        <FlatList
          data={coins}
          renderItem={_renderCoin}
          keyExtractor={(item, index) => String(index)}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
        />
      </View>

      <FlatList
        data={pools}
        renderItem={_renderPool}
        keyExtractor={(item, index) => String(index)}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
    </Container>
  );
};

export default PoolSelect;

const styles = StyleSheet.create({
  enviromentList: {
    height: 40,
    justifyContent: "center",
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  },
});
