import React from "react"
import { ImageBackground, KeyboardAvoidingView, Platform, ScrollView } from "react-native"
import { RouteStackParamList } from "../../navigation/RouteParramList"
import { SignUpScreen } from "./compoment/sign_up_screen"
import { SignUpStore } from "./store/sign_up_store"

export const SignUp: React.FunctionComponent<RouteStackParamList<"SignIn">> = props => {
  return (
    <SignUpStore.Provider >
      <SignUpScreen {...props} />
    </SignUpStore.Provider >
  )
}