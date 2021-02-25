import React from "react"
import { RouteStackParamList } from "../../navigation/RouteParramList"
import { WelcomeStore } from "./store/welcome_store"
import { WelcomeScreen } from "./compoment/welcome_screen"

export const Welcome: React.FunctionComponent<RouteStackParamList<"Welcome">> = props => {
  return (
    <WelcomeStore.Provider >
      <WelcomeScreen {...props} />
    </WelcomeStore.Provider >
  )
}