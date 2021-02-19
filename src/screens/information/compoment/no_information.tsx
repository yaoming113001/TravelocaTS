import React from "react"
import { Text } from "react-native"
import { Button } from "react-native-elements"
import { Container } from "../../../share/styles/container"
import styles from "../information.style"

export interface IHasntLoggin {
  navigateToSignIn: () => void;
  navigateToRegister: () => void;
}

export const HasntLoggin: React.FunctionComponent<IHasntLoggin> = props => {
  return (
    <Container style={{ flex: 2 }}>
      <Container>
        <Text style={styles.loginWarning}>You haven't login in</Text>
      </Container>
      <Container horizontal style={{ justifyContent: "space-around", marginTop: 100 }}>
        <Button
          title="Register"
          type="clear"
          onPress={props.navigateToSignIn}
          buttonStyle={styles.button}
        />
        <Button
          title="Log in"
          onPress={props.navigateToRegister}
          buttonStyle={styles.button}
        />
      </Container>
    </Container>
  )
}
