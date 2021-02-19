import React from "react"
import { Image, Text } from "react-native"
import { RouteStackParamList } from "../../../navigation/RouteParramList"
import { Container } from "../../../share/styles/container"
import styles from "../../../share/styles/global_style"
import { WelcomeStore } from "../store/welcome_store"
import welcomeStyle from "../welcome.style"
import { Button } from "react-native-elements"
import { TouchableOpacity } from "react-native-gesture-handler"

export const WelcomeScreen: React.FunctionComponent<RouteStackParamList<"Welcome">> = props => {
  const { imageBanner, moveToHome, moveToSignIn } = WelcomeStore.useContainer();

  return (
    <Container style={styles.container}>
      <Container style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ fontSize: 40, textAlign: "center", fontWeight: "bold" }}>Traveloca</Text>
      </Container>
      <Container style={{ flex: 2, borderRadius: 10 }}>
        <Image
          source={{ uri: `${imageBanner}` }}
          style={welcomeStyle.imageBanner}
        />
      </Container>
      <Container style={welcomeStyle.buttonContainer}>
        <Button
          title="Sign in"
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
          onPress={() => { moveToSignIn() }}
        />
        <TouchableOpacity onPress={() => { moveToHome() }}>
          <Text style={styles.signUpTitle}>Not right now</Text>
        </TouchableOpacity>
      </Container>
    </Container>
  )
}
