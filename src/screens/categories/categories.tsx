import React from "react"
import { ImageBackground, ScrollView } from "react-native"
import { HomeStackParamList, RouteStackParamList } from "../../navigation/RouteParramList"
import { CategoriesScreen } from "./compoment/categories_screen"
import { CategoriesStore } from "./store/categories_store"



export const Categories: React.FunctionComponent<HomeStackParamList<"Category">> = props => {
  return (
    <CategoriesStore.Provider initialState={props.route.params}>
      <CategoriesScreen {...props} />
    </CategoriesStore.Provider >
  )
}