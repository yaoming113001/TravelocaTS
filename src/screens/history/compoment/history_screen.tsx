import React from "react"
import styles from "../../../share/styles/global_style"
import { InformationStackParamList } from "../../../navigation/RouteParramList"
import { Header } from "../../../share/header/header"
import { Container } from "../../../share/styles/container"
import { Text } from "react-native-elements"
import { FlatList } from "react-native-gesture-handler"
import { HistoryStore } from "../store/history_store"
import { ItemHorizontal } from "../../../share/item_horizontal/item_horizontal"

export const HistoryScreen: React.FunctionComponent<InformationStackParamList<"Information">> = props => {
  const { list } = HistoryStore.useContainer();
  const listItem = () => {
    return (
      <FlatList
        showsHorizontalScrollIndicator={true}
        data={list}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ItemHorizontal item={item} existInCart={true} isCart={false} showMessage={true} dateOrder={item.date} />
        )} />
    )
  }

  return (
    <Container style={styles.container}>
      <Header iconTitle={"arrow-left"} mainScreen={false} onPress={() => props.navigation.goBack()} title={"History"} />
      <Container style={{ height: "83%" }}>
        {listItem()}
      </Container>
    </Container >
  )
}
