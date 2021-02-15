import { string } from "yup/lib/locale";
import { ISearchItem } from "../types/search_item";
import { IUserForm } from "../types/user_type"

export const genderOption: ISearchItem[] = [
  { key: "male", value: "Male" },
  { key: "female", value: "Female" },
]

export const userRegisterHelper: IUserForm = {
  account: "",
  password: "",
  email: "",
  phone: "",
  name: "",
  sex: ""
}

export const userLoginHelper: IUserForm = {
  account: "",
  password: ""
}

export const userHelper: IUserForm = {
  id: 0,
  account: "",
  dateBirth: "",
  email: "",
  name: "",
  password: "",
  phone: "",
  role: 0,
  sex: "",
  status: 0,
  verify: "",
}