import React from "react"
import { Container } from "../../../share/styles/container"
import styles from "../home_style"
import { HomeHeader } from "./home_header"
import { HomeSession } from "./home_session"
import { HomePoster } from "./home_poster"
import { HomeDiscount } from "./home_discount"
import { ScrollView } from "react-native"

export const HomeScreen: React.FunctionComponent = ({ }) => {
  return (
    <Container style={styles.container}>
      <HomeHeader />
      <ScrollView style={{ height: "85%" }} showsVerticalScrollIndicator={false}>
        <HomeSession />
        <HomePoster />
        <HomeDiscount />
      </ScrollView>
    </Container>
  )
}
