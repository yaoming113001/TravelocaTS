import React from "react"
import { HomeStackParamList } from "../../navigation/RouteParramList"
import { DetailsScreen } from "./compoment/details_screen"
import { DetailsStore } from "./store/details_store"



export const Details: React.FunctionComponent<HomeStackParamList<"Detail">> = props => {
  return (
    <DetailsStore.Provider>
      <DetailsScreen {...props} />
    </DetailsStore.Provider>
  )
}