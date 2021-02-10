import { useNavigation } from "@react-navigation/native";
import React from "react"
import { createContainer } from "unstated-next"
import { IUser } from "../../../share/types/user";
import { GlobalStore } from "../../../share/useStore/global_store";

interface FormValue {
  email: string;
  password: string;
}

export const useSignInStore = () => {
  const navigation = useNavigation()
  const [title] = React.useState("Sign in");
  const [info] = React.useState(" Please sign in to continue");

  const [user] = React.useState<IUser>({
    id:"1",
    account: "ducnguyen",
    fullname: "duc phuoc nguyen",
    password: "abcd",
    email:"ducnguyen@123.com",
    phone:"0123456789",
    address:"34/1c ap hung lan",
    dateOfBirth: new Date(),
    gender:true,
    })

  const {storeUser} = GlobalStore.useContainer().userStore;
 
  const submit = React.useCallback((value: FormValue) => {
    storeUser(user);
    navigation.navigate("Drawer")
  }, [])

  const moveToSignUp = React.useCallback((props) => {
    navigation.navigate("SignUp")

  }, [])

  return { title, info, submit, moveToSignUp };
}

export const SignInStore = createContainer(useSignInStore);