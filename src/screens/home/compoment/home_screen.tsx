import React from "react"
import { Container } from "../../../share/styles/container"
import styles from "../home_style"
import { HomeSession } from "./home_session"
import { HomePoster } from "./home_poster"
import { HomeDiscount } from "./home_discount"
import { ScrollView } from "react-native"
import { Header } from "../../../share/header/header"
import { useNavigation } from "@react-navigation/native"

export const HomeScreen: React.FunctionComponent = ({ }) => {
  const navigation = useNavigation()
  return (
    <Container style={styles.container}>
      <Header onPress={() => navigation.navigate("Cart")} title="Traveloca" main={true} />
      <ScrollView style={{ height: "85%" }} showsVerticalScrollIndicator={false}>
        <HomeSession />
        <HomePoster />
        <HomeDiscount />
      </ScrollView>
    </Container>
  )
}
