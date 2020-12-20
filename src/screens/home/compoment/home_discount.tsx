import React from "react"
import { Image, Text } from "react-native"
import { FlatList, TouchableOpacity } from "react-native-gesture-handler"
import { Container } from "../../../share/styles/container"
import styles from "../home_style"
import { HomeStore } from "../store/home_store"

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
          <TouchableOpacity>
            <Container style={styles.discountItemContainer}>
              <Image
                source={{ uri: `${item.image}` }}
                style={styles.imageSession}
              />
            </Container>
          </TouchableOpacity>
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
