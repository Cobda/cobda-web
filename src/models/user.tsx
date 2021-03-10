const user = (username: string, password: string, firstname: string, lastname: string, phoneNumber: string) => ({
  username: (): string => {
    return username
  },
  password: (): string => {
    return password
  },
  firstname: (): string => {
    return firstname
  },
  lastname: (): string => {
    return lastname
  },
  phoneNumber: (): string => {
    return phoneNumber
  }
})

export default { user }
