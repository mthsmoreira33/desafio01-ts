import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { VipAccount } from './class/VipAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(100)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(200)
companyAccount.withdraw(50)
console.log(companyAccount)
peopleAccount.withdraw(10)
console.log(peopleAccount)
const vipAccount: VipAccount = new VipAccount('Roberto', 10)
vipAccount.deposit(200)
vipAccount.withdraw(20)
console.log(vipAccount)
