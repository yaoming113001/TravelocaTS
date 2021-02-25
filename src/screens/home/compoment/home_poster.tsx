import React from "react"
import { Image, Text } from "react-native"
import { useTranslation } from "../../../languages/language_context"
import { Container } from "../../../share/styles/container"
import styles from "../home_style"
import { HomeStore } from "../store/home_store"

export const HomePoster: React.FunctionComponent = ({ }) => {
  const { lifeIsEasy } = useTranslation()
  const { poster } = HomeStore.useContainer()

  const session = () => {
    return (
      <Container style={styles.imagePosterContainer}>
        <Container style={styles.imageContainer}>
          <Image
            source={{ uri: `${poster[0].image}` }}
            style={styles.imagePoster1}
          />
        </Container>
        <Container style={styles.imageContainer}>
          <Image
            source={{ uri: `${poster[1].image}` }}
            style={styles.imagePoster2}
          />
          <Image
            source={{ uri: `${poster[2].image}` }}
            style={styles.imagePoster2}
          />
        </Container>
      </Container>

    )
  }
  return (
    <Container style={styles.posterContainer}>
      <Text style={styles.posterTitle}>{lifeIsEasy}</Text>
      {session()}
    </Container>
  )
}
