import React from "react"
import { Text, Image, Dimensions } from "react-native"
import { InformationStackParamList } from "../../../navigation/RouteParramList"
import { Container } from "../../../share/styles/container"
import { InformationStore, useInformationStore } from "../store/information_store"
import { Button } from 'react-native-elements';
import styles from "../information.style"
import { ModalChangeUser } from "../../../share/modelChangeUser/modalChangeUser"
import { IUserForm } from "../../../share/types/user_type"
import { InformationBoard } from "./information_board"
import { HasntLoggin } from "./no_information"
import { Icon } from 'react-native-elements'

export const InformationScreen: React.FunctionComponent<InformationStackParamList<"Information">> = props => {
  const {
    accountImage,
    coverImage,
    toggleOverlay,
    visible,
    editUserSubmit,
    isMessage,
    toggleMessage,
    navigateToSignIn,
    navigateToRegister,
    navigateToHistory
  } = InformationStore.useContainer()

  const { user, deleteUser } = InformationStore.useContainer()

  const logged = () => {
    return (
      <>
        <Container horizontal style={{ marginTop: 5, justifyContent: "space-between" }}>
          <Icon
            raised
            name='truck'
            type='font-awesome'
            color='#f50'
            onPress={() => navigateToHistory()} />
          <Icon
            raised
            name='cog'
            type='font-awesome'
            color='gray'
            onPress={() => console.log('hello')} />
        </Container>
        <InformationBoard user={user} />
        <Container style={styles.buttonContainer}>
          <Button
            title="Edit user"
            onPress={() => toggleOverlay()}
            buttonStyle={styles.button}
          />
          <Button
            title="Logout"
            type="clear"
            onPress={() => deleteUser()}
            buttonStyle={styles.button}
          />
        </Container>
      </>
    )
  }

  const hasntLoggin = () => {
    return (
      <>
        <HasntLoggin navigateToRegister={() => navigateToRegister()} navigateToSignIn={() => navigateToSignIn()} />
      </>
    )
  }

  const userImage = () => {
    return (
      <>
        <Image
          source={{ uri: `${accountImage}` }}
          style={styles.inforImage}
        />
      </>
    )
  }

  const showImage = user.id !== 0 ? userImage() : null

  const content = user.id !== 0 ? logged() : hasntLoggin()
  return (
    <Container style={{ flex: 1 }}>
      <Image
        source={{ uri: `${coverImage}` }}
        style={{ flex: 1 }}
      />
      <Container style={styles.informationContainer}>
        {content}
      </Container>

      <ModalChangeUser title={"Chage user's information"} isVisible={visible}
        onBackdropPress={() => { toggleOverlay() }}
        submit={(val: IUserForm) => editUserSubmit(val)}
        message={isMessage}
        onToggleMessage={() => toggleMessage()}
      />

      {showImage}

    </Container>
  )
}
