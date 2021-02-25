import React from "react"
import styles from "../../../share/styles/global_style"
import { InformationStackParamList } from "../../../navigation/RouteParramList"
import { Header } from "../../../share/header/header"
import { Container } from "../../../share/styles/container"

export const HistoryScreen: React.FunctionComponent<InformationStackParamList<"Information">> = props => {

  return (
    <Container style={styles.container}>
      <Header iconTitle={"arrow-left"} mainScreen={false} onPress={() => props.navigation.goBack()} title={"Booking"} />

    </Container >
  )
}
