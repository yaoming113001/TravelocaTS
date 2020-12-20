import { useNavigation } from "@react-navigation/native";
import React from "react"
import { createContainer } from "unstated-next"

interface FormValue {
  email: string;
  password: string;
}

export const useSignInStore = () => {
  const navigation = useNavigation()
  const [title] = React.useState("Sign in");
  const [info] = React.useState(" Please sign in to continue");

  const submit = React.useCallback((value: FormValue) => {
    console.log(value)
    navigation.navigate("Drawer")

  }, [])

  const moveToSignUp = React.useCallback((props) => {
    navigation.navigate("SignUp")

  }, [])

  return { title, info, submit, moveToSignUp };
}

export const SignInStore = createContainer(useSignInStore);