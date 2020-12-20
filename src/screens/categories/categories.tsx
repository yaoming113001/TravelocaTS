import React from "react"
import { ImageBackground, ScrollView } from "react-native"
import { RouteStackParamList } from "../../navigation/RouteParramList"
import { CategoriesScreen } from "./compoment/categories_screen"
import { CategoriesStore } from "./store/categories_store"



export const Categories: React.FunctionComponent<RouteStackParamList<"SignIn">> = props => {
  return (
    <CategoriesStore.Provider >
      <CategoriesScreen {...props} />
    </CategoriesStore.Provider >
  )
}