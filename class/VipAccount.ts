import { DioAccount } from './DioAccount'

export class VipAccount extends DioAccount {
  private _balance: number = this.getBalance()

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  deposit = (value: number) => {
    this.setBalance((this._balance = this._balance + (value + 10)))
  }
}
