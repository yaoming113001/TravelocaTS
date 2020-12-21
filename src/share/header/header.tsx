import React from "react"
import { Text } from "react-native"
import { Container } from "../../share/styles/container"
import styles from "./header_style"
import { Icon } from 'react-native-elements'
import { useNavigation } from "@react-navigation/native"

export interface IHeader {
  title: string;
  main: boolean;
  onPress: () => void
}

export const Header: React.FunctionComponent<IHeader> = props => {
  return (
    <Container style={!props.main ? styles.rowContainer : styles.rowReverse}>
      <Container style={styles.titleContainer}>
        <Icon
          raised
          name={props.main ? 'heart' : 'arrow-left'}
          type='font-awesome'
          color='#f50'
          onPress={() => props.onPress()} />
      </Container>
      <Container style={styles.titleContainer}>
        <Text style={styles.headerTitle}>{props.title}</Text>
      </Container>
    </Container>
  )
}
