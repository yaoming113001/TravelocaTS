import React from "react"
import { Text, TouchableOpacity } from "react-native"
import { Button } from "react-native-elements"
import { Header } from "../../../share/header/header"
import { RouteStackParamList } from "../../../navigation/RouteParramList"
import { BaseInput } from "../../../share/base_input/base_input"
import { Container } from "../../../share/styles/container"
import styles from "../../../share/styles/global_style"
import { DetailsStore } from "../store/details_store"
import { useNavigation } from "@react-navigation/native"



export const DetailsScreen: React.FunctionComponent = props => {
  const { title, info } = DetailsStore.useContainer()
  const navigation = useNavigation()
  return (
    <Container style={styles.container}>
      <Header iconTitle="arrow-left" title="Detail" mainScreen={false} onPress={() => navigation.goBack()} />
    </Container>

  )
}
