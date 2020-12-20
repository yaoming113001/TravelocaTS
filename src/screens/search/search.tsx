import React from "react"
import { RouteStackParamList } from "../../navigation/RouteParramList"
import { SearchScreen } from "./compoment/search_screen"
import { SearchStore } from "./store/search_store"



export const Search: React.FunctionComponent<RouteStackParamList<"SignIn">> = props => {
  return (
    <SearchStore.Provider >
      <SearchScreen {...props} />
    </SearchStore.Provider >
  )
}