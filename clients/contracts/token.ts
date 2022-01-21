import {
  DelphinusAccount,
  DelphinusContract,
  DelphinusProvider,
} from "web3subscriber/src/client";

const TokenContractABI = require("../../build/contracts/Token.json");
// const TokenABI = require("../../build/contracts/IERC20.json");

export class TokenContract extends DelphinusContract {
  constructor(
    provider: DelphinusProvider,
    address: string,
    account?: DelphinusAccount
  ) {
    super(provider, TokenContract.getJsonInterface(), address, account);
  }

  static getJsonInterface(): any {
    return TokenContractABI;
  }

  static getContractAddress(chainId: string) {
    return TokenContractABI.networks[chainId].address;
  }

  approve(address: string, amount: number) {
    return this.getWeb3Contract().approve(address, amount);
  }

  balanceOf(account: string) {
    return this.getWeb3Contract().balanceOf(account);
  }

  mint(amount: number) {
    return this.getWeb3Contract().mint(amount);
  }

  transfer(address: string, amount: number) {
    return this.getWeb3Contract().transfer(address, amount);
  }
}
