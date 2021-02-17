import React from "react"
import { Image, Text, FlatList, ScrollView } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Container } from "../../../share/styles/container"
import styles from "../home_style"
import { HomeStore } from "../store/home_store"

export const HomeSession: React.FunctionComponent = ({ }) => {
  const { image, gotoCatetory } = HomeStore.useContainer()
  const session = () => {
    return (
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={image}
        horizontal
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => gotoCatetory(Number(item.id))} >
            <Container style={styles.containerSession}>
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
    <Container style={styles.rowContainer}>
      {session()}
    </Container>
  )
}
