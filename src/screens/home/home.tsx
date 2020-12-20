import React from "react"
import { RouteStackParamList } from "../../navigation/RouteParramList"
import { HomeScreen } from "./compoment/home_screen"
import { HomeStore } from "./store/home_store"



export const Home: React.FunctionComponent = ({ }) => {
  return (
    <HomeStore.Provider >
      <HomeScreen />
    </HomeStore.Provider >
  )
}