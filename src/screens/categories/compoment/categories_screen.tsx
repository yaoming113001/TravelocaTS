import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Text, TouchableOpacity } from "react-native"
import { Button } from "react-native-elements"
import { FlatList } from "react-native-gesture-handler"
import { HomeStackParamList, RouteStackParamList } from "../../../navigation/RouteParramList"
import { BaseInput } from "../../../share/base_input/base_input"
import { Header } from "../../../share/header/header"
import { ItemHorizontal } from "../../../share/item_horizontal/item_horizontal"
import { Container } from "../../../share/styles/container"
import styles from "../../../share/styles/global_style"
import { Item } from "../../../share/types/item"
import { GlobalStore } from "../../../share/useStore/global_store"
import { CategoriesStore } from "../store/categories_store"


export const CategoriesScreen: React.FunctionComponent<HomeStackParamList<"Category">> = props => {
  const navigation = useNavigation()
  const { items, checkCatagory, addToCart } = CategoriesStore.useContainer();

  return (
    <Container style={styles.container}>
      <Header iconTitle={"arrow-left"} mainScreen={false} onPress={() => navigation.goBack()} title={checkCatagory()} />
      <Container style={{ marginBottom: 110 }}>
        <FlatList
          showsHorizontalScrollIndicator={true}
          data={items}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <ItemHorizontal item={item} existInCart={true} isCart={false} showMessage={true}
              moveToDeteil={() => navigation.navigate("Detail", { params: item })}
              deleteItem={() => { }} addCart={() => addToCart(item)} />
          )} />
      </Container>
    </Container>
  )
}
