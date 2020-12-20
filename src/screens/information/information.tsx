import React from "react"
import { ImageBackground, ScrollView } from "react-native"
import { RouteStackParamList } from "../../navigation/RouteParramList"
import { InformationScreen } from "./compoment/information_screen"
import { InformationStore } from "./store/information_store"



export const Information: React.FunctionComponent<RouteStackParamList<"SignIn">> = props => {
  return (
    <InformationStore.Provider >
      <InformationScreen {...props} />
    </InformationStore.Provider >
  )
}