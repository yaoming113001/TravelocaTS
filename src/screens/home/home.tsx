import React from "react"
import { HomeStackParamList } from "../../navigation/RouteParramList"
import { HomeScreen } from "./compoment/home_screen"
import { HomeStore } from "./store/home_store"



export const Home: React.FunctionComponent<HomeStackParamList<"Home">> = ({ }) => {
  return (
    <HomeStore.Provider >
      <HomeScreen />
    </HomeStore.Provider >
  )
}