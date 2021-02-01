import React from "react"
import { Text } from "react-native"
import { Icon } from "react-native-elements"
import { Container } from "../styles/container"
import styles from "./header_style"

interface IHeader {
  title: string;
  iconTitle: string;
  mainScreen: boolean;
  onPress: () => void;

}

export const Header: React.FunctionComponent<IHeader> = props => {
  return (
    <Container style={[styles.rowContainer, props.mainScreen ? { flexDirection: "row" } : { flexDirection: "row-reverse" }]}>
      <Container style={styles.titleContainer}>
        <Text style={styles.headerTitle}>{props.title}</Text>
      </Container>
      <Container style={styles.titleContainer}>
        <Icon
          raised
          name={props.iconTitle}
          type='font-awesome'
          color='#f50'
          onPress={() => props.onPress()} />
      </Container>
    </Container>
  )
}
