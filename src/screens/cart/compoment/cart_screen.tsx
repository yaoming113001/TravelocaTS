import { useNavigation } from "@react-navigation/native"
import React from "react"
import { RouteStackParamList } from "../../../navigation/RouteParramList"
import { Header } from "../../../share/header/header"
import { Container } from "../../../share/styles/container"
import { CartStore } from "../store/cart_store"
import styles from "../../../share/styles/global_style"
import { FlatList } from "react-native-gesture-handler"
import { Item } from "../../../share/types/item"
import { ItemHorizontal } from "../../../share/item_horizontal/item_horizontal"


export const CartScreen: React.FunctionComponent<RouteStackParamList<"SignIn">> = props => {
  const { listItem } = CartStore.useContainer()
  const navigation = useNavigation();
  const session = () => {
    return (
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={listItem}
        alwaysBounceVertical
        keyExtractor={item => item.id}
        style={{ height: "83%" }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ItemHorizontal addCart={() => console.log("Hell")} item={item} moveToDeteil={() => {
            navigation.navigate("Detail", { params: item })
          }} existInCart={true} />

        )} />
    )
  }
  return (
    <Container style={styles.container}>
      <Header iconTitle={"arrow-left"} mainScreen={false} onPress={() => navigation.goBack()} title={"Cart"} />
      <Container>
        {session()}
      </Container>
    </Container>
  )
}
