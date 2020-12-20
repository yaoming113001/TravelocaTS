import { useNavigation } from "@react-navigation/native";
import React from "react"
import { createContainer } from "unstated-next"

export const useSignUpStore = () => {
  const navigation = useNavigation()
  const [title] = React.useState("Sign up");
  const [info] = React.useState(" Please sign up to continue");

  const submit = React.useCallback((value) => {
    console.log(value);
  }, [])

  const moveToSignIn = React.useCallback((value) => {
    navigation.navigate("SignIn")

  }, [])

  return { title, info, submit, moveToSignIn };
}

export const SignUpStore = createContainer(useSignUpStore);