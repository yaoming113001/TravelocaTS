import React from "react"
import { ImageBackground, KeyboardAvoidingView, Platform, ScrollView } from "react-native"
import { RouteStackParamList } from "../../navigation/RouteParramList"
import { SignInScreen } from "./compoment/sign_in_screen"
import { SignInStore } from "./store/sign_in_store"



export const SignIn: React.FunctionComponent<RouteStackParamList<"SignIn">> = props => {
  return (
    <SignInStore.Provider >
      <SignInScreen {...props} />
    </SignInStore.Provider >
  )
}