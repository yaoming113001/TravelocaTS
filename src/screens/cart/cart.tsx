import React from "react"
import { ImageBackground, ScrollView } from "react-native"
import { RouteStackParamList } from "../../navigation/RouteParramList"
import { CartScreen } from "./compoment/cart_screen"
import { CartStore } from "./store/cart_store"



export const Cart: React.FunctionComponent<RouteStackParamList<"SignIn">> = props => {
  return (
    <CartStore.Provider >
      <CartScreen {...props} />
    </CartStore.Provider >
  )
}