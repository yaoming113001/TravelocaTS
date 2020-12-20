import React from "react"
import { Text, TouchableOpacity } from "react-native"
import { Button } from "react-native-elements"
import { RouteStackParamList } from "../../../navigation/RouteParramList"
import { BaseInput } from "../../../share/base_input/base_input"
import { Container } from "../../../share/styles/container"
import styles from "../../../share/styles/global_style"
import { InformationStore } from "../store/information_store"


export const InformationScreen: React.FunctionComponent<RouteStackParamList<"SignIn">> = props => {
  const { title, info } = InformationStore.useContainer()
  return (
    <Container>
      <Container style={styles.titleContainer}>
        <Text style={styles.title}> {title}</Text>
        <Text style={styles.info}> {info}</Text>
      </Container>

      <Container style={styles.inputContainer}>
        <BaseInput title="EMAIL"
          placeholder="Enter email"
          icon="envelope"
          onChangeText={() => console.log("Hello")} />
        <BaseInput title="PASSWORD" placeholder="Enter password" icon="lock" />
        <Container style={styles.forgetContainer}>
          <TouchableOpacity>
            <Text style={styles.forget}>FORGET</Text>
          </TouchableOpacity>
        </Container>
      </Container>

      <Container style={styles.buttonContainer}>
        <Button
          title="Sign in"
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
        />
        <TouchableOpacity>
          <Text style={styles.signUpTitle}>Sign up</Text>
        </TouchableOpacity>
      </Container>
    </Container>
  )
}
