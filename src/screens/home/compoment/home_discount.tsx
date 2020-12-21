import React from "react"
import { Text } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { Container } from "../../../share/styles/container"
import styles from "../home_style"
import { HomeStore } from "../store/home_store"
import { Item } from "../../../share/item/item"


export const HomeDiscount: React.FunctionComponent = ({ }) => {
  const { item } = HomeStore.useContainer()
  const session = () => {
    return (
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={item}
        horizontal
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Item title="Khach san" rating={4} addToCart={() => console.log("add")} price={135}
            moveToDetail={() => console.log("move")} image={item.image} inCart={true} />
        )} />
    )
  }
  return (
    <Container style={styles.discountContainer}>
      <Text style={styles.posterTitle}>Best discount for you $</Text>
      {session()}
    </Container>
  )
}
