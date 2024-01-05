export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance += value
      console.log('Voce depositou')
      return
    }
    console.log('Você não pode depositar')
  }

  withdraw = (value: number): void => {
    if (this.status === true && this.balance > value) {
      this.balance -= value
      console.log('Voce sacou')
      return
    }

    console.log('Você não pode sacar')
  }

  getBalance = (): number => {
    return this.balance
  }

  getStatus = (): boolean => {
    return this.status
  }

  setBalance = (value: number): void => {
    this.balance = value
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
