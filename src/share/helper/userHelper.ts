import { string } from "yup/lib/locale";
import { IUser } from "../types/user";

export const userHelper: IUser = {
  id:"",
  account: "",
  fullname:"",
  password: "",
  email:"",
  phone:"",
  address:"",
  dateOfBirth: new Date(),
  gender:true,
}