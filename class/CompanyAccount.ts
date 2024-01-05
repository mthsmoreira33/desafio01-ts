import { DioAccount } from './DioAccount'

export class CompanyAccount extends DioAccount {
  private _status = this.getStatus()
  private _balance = this.getBalance()
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if (this._status === true) {
      console.log('Voce pegou um empréstimo')
      this.setBalance((this._balance = this._balance + value))
      return
    }

    console.log('Valor inválido')
  }
}
