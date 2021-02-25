import { useNavigation } from "@react-navigation/native";
import React from "react"
import { createContainer } from "unstated-next"
import axios from 'axios';
import { GlobalStore } from "../../../share/useStore/global_store";

export const useSignUpStore = () => {
  const navigation = useNavigation()
  const [isVisible, setVisible] = React.useState<boolean>(false)
  const [account, setAccount] = React.useState<string>("")
  const [code, setCode] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");

  const toggle = React.useCallback(() => {
    setVisible(!isVisible);
  }, [setVisible])

  const { submitAuthen, submitCode } = GlobalStore.useContainer().useUserAPI

  const submitRegister = React.useCallback(async (value) => {
    const result = await submitAuthen(value, "register");
    if (result.data.error) {
      setMessage(result.data.error)
    } else {
      setAccount(result.data.account)
      toggle()
    }
  }, [toggle, message, account, axios])


  const submitCode_ = React.useCallback(async () => {
    const result = await submitCode(code, account);
    if (result.data.error) {
      setMessage(result.data.error)
    } else {
      navigation.goBack()
    }
  }, [account, code])

  const moveToSignIn = React.useCallback(() => {
    navigation.navigate("SignIn")
  }, [])

  return {
    submitRegister,
    moveToSignIn,
    toggle,
    isVisible,
    code,
    setCode,
    submitCode_,
    message,
    setMessage
  };
}

export const SignUpStore = createContainer(useSignUpStore);