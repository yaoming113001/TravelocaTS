import React from "react"
import { Container } from "../../../share/styles/container"
import styles from "../home_style"
import { Header } from "../../../share/header/header"
import { HomeSession } from "./home_session"
import { HomePoster } from "./home_poster"
import { HomeDiscount } from "./home_discount"
import { ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"

export const HomeScreen: React.FunctionComponent = ({ }) => {
  const navigation = useNavigation()
  return (
    <Container style={styles.container}>
      <Header iconTitle={"heart"} mainScreen={true} title={"Traveloca"} onPress={() => navigation.navigate("Cart")} />
      <ScrollView style={{ height: "85%" }} showsVerticalScrollIndicator={false}>
        <HomeSession />
        <HomePoster />
        <HomeDiscount />
      </ScrollView>
    </Container>
  )
}
