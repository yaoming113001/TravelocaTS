import React from "react"
import { Container } from "../../../share/styles/container"
import styles from "../home_style"
import { Header } from "../../../share/header/header"
import { HomeSession } from "./home_session"
import { HomePoster } from "./home_poster"
import { HomeDiscount } from "./home_discount"
import { ScrollView, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useTranslation } from "../../../languages/language_context"

export const HomeScreen: React.FunctionComponent = ({ }) => {
  const navigation = useNavigation()
  const { traveloca } = useTranslation()

  return (
    <Container style={styles.container}>
      <Header iconTitle={"heart"} mainScreen={true} title={traveloca} onPress={() => navigation.navigate("Cart")} />
      <ScrollView style={{ height: "85%" }} showsVerticalScrollIndicator={false}>
        <HomeSession />
        <HomePoster />
        <HomeDiscount />
      </ScrollView>
    </Container>
  )
}
