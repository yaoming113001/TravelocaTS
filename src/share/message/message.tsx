import React from "react"
import { Text, View } from "react-native"
import { Container } from "../styles/container"
import { Overlay } from 'react-native-elements';
import { Button } from 'react-native-elements';
import styles from "./message.style"

interface IMessage {
  type?: string;
  title: string;
  isVisible: boolean;
  yesButton?: boolean;
  noButton?: boolean;
  messageContent: string;
  cancelLabel?: string;
  submit?: () => void;
  onCancelPress?: () => void;
  onBackdropPress?: () => void;

}

export const Message: React.FunctionComponent<IMessage> = props => {
  return (
    <Container>
      <Overlay overlayStyle={{ borderRadius: 20 }}
        isVisible={props.isVisible}
        onBackdropPress={props.onBackdropPress}
        animationType="fade">
        <Container style={styles.container}>
          <Text style={[props.type === "Add" ? styles.colorAdd : styles.colorDelete, styles.title]}>{props.title}</Text>
          <Container style={styles.containerContentMessage}>
            <Text style={styles.messageContent}>{props.messageContent}</Text>
          </Container>
          <Container horizontal style={styles.buttonContainer}>
            <Button
              title="Go back"
              type="outline"
              buttonStyle={{ display: !props.noButton ? "none" : "flex" }}
              onPress={props.onCancelPress}
            />
            <Button
              title="OK"
              type="solid"
              disabled={!props.yesButton}
              onPress={props.submit}
              buttonStyle={[props.type === "Add" ? styles.buttonAdd : styles.buttonDelete, styles.button]}
            />
          </Container>
        </Container>
      </Overlay>
    </Container>
  )
}
