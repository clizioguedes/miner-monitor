import { Coin } from "./Coin";

export interface Pool {
  id: number;
  name: string;
  logo: string;
  coins: Coin[];
}
