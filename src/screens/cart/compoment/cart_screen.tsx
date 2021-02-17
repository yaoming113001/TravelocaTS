import { useNavigation } from "@react-navigation/native"
import React from "react"
import { RouteStackParamList } from "../../../navigation/RouteParramList"
import { Header } from "../../../share/header/header"
import { Container } from "../../../share/styles/container"
import { CartStore } from "../store/cart_store"
import styles from "../../../share/styles/global_style"
import { FlatList } from "react-native-gesture-handler"
import { ItemHorizontal } from "../../../share/item_horizontal/item_horizontal"
import { Text } from "react-native"

export const CartScreen: React.FunctionComponent<RouteStackParamList<"SignIn">> = props => {
  const { deleteItemCart, listItem } = CartStore.useContainer()
  const navigation = useNavigation();
  const session = () => {
    return (
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={listItem}
        alwaysBounceVertical
        keyExtractor={item => item.id.toString()}
        style={{ height: "83%" }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ItemHorizontal
            item={item}
            moveToDeteil={() => {
              navigation.navigate("Detail", { params: item })
            }}
            existInCart={true}
            deleteItem={() => deleteItemCart(item)}
            isCart={true}
            addCart={() => { }} />

        )} />
    )
  }

  const noItem = () => {
    return (
      <Text style={{ textAlign: "center", fontSize: 22, fontWeight: "bold", letterSpacing: 2, paddingTop: 20 }}>No item in cart</Text>
    )
  }
  const content = listItem.length ? session() : noItem()

  return (
    <Container style={styles.container}>
      <Header iconTitle={"arrow-left"} mainScreen={false} onPress={() => navigation.goBack()} title={"Cart"} />
      <Container>
        {content}
      </Container>
    </Container>
  )
}
