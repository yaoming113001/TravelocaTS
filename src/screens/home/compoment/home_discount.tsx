import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Image, Button, Text } from "react-native"
import { FlatList, TouchableOpacity } from "react-native-gesture-handler"
import { RouteHomeParamList } from "../../../navigation/RouteParramList"
import { ItemVertical } from "../../../share/item_vertical/item_vertical"
import { Container } from "../../../share/styles/container"
import { GlobalStore } from "../../../share/useStore/global_store"
import styles from "../home_style"
import { HomeStore } from "../store/home_store"

export const HomeDiscount: React.FunctionComponent = ({ }) => {
  const { item, addToCart } = HomeStore.useContainer()
  const { list } = GlobalStore.useContainer().asyncStore

  const navigation = useNavigation();
  const session = () => {
    return (
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={item}
        horizontal
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ItemVertical addCart={() => addToCart(item)} item={item} moveToDeteil={() => {
            navigation.navigate("Detail", { params: item })
          }} existInCart={true} />

        )} />
    )
  }
  return (
    <Container style={styles.discountContainer}>
      <Text style={styles.posterTitle}>Best discount for you $ {list.length}</Text>
      {session()}
    </Container>
  )
}
