import { useNavigation } from "@react-navigation/native"
import React from "react"
import { RouteStackParamList } from "../../../navigation/RouteParramList"
import { Header } from "../../../share/header/header"
import { Container } from "../../../share/styles/container"
import { CartStore } from "../store/cart_store"
import styles from "../../../share/styles/global_style"


export const CartScreen: React.FunctionComponent<RouteStackParamList<"SignIn">> = props => {
  const { listCart } = CartStore.useContainer()
  console.log(listCart)
  const navigation = useNavigation();
  return (
    <Container style={styles.container}>
      <Header iconTitle={"arrow-left"} mainScreen={false} onPress={() => navigation.goBack()} title={"Cart"} />
    </Container>
  )
}
