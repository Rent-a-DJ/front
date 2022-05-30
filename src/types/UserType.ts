export type UserType = {
  id: null,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  coins: number,
  isAdmin: boolean,
  isBanned: boolean
}

export type CreateUserType = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
}
