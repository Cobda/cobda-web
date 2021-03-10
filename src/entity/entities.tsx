import { Role } from '../enum/role'

export const user = (username: string,
                    password: string,
                    firstname: string,
                    lastname: string,
                    phoneNumber: string,
                    role: Role,
                    products: Object[],
                    histories: Object[]) => ({
  username,
  password,
  firstname,
  lastname,
  phoneNumber,
  role,
  products,
  histories
})

export const product = (name: string, quantity: number) => ({
  name,
  quantity
})
