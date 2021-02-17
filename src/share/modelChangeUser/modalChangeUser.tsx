import React from "react"
import { Text } from "react-native"
import { Container } from "../styles/container"
import { Overlay } from 'react-native-elements';
import styles from "./modelChangeUser.style"
import { GlobalStore } from "../useStore/global_store";
import * as Yup from "yup"
import { Formik } from "formik";
import { IButton } from "../base_button/base_button";
import { ModalChangeUserForm } from "./modalChangeUserForm";
import { IUserForm } from "../types/user_type";
import { Message } from "../message/message";
import messageStyle from "../message/message.style";


interface IModalChangeUser {
  title: string;
  isVisible: boolean;
  yesButton?: boolean;
  noButton?: boolean;
  cancelLabel?: string;
  submit: (val: IUserForm) => void;
  onCancelPress?: () => void;
  onBackdropPress: () => void;
  message: boolean;
  onToggleMessage: () => void;
}

export const EditUserSchema = Yup.object().shape({
  name: Yup.string().required("Full name is required"),
  account: Yup.string().required("Account is required"),
  password: Yup.string().required("Password is required"),
  email: Yup.string().required("Email is required").email("Invalid email"),
  phone: Yup.string().required("Phone number is required"),
  sex: Yup.string().required("Gender is required"),
  dateBirth: Yup.string().required("Date of birth is required"),
})

export const ModalChangeUser: React.FunctionComponent<IModalChangeUser> = props => {
  const { user } = GlobalStore.useContainer().userStore;
  return (
    <Container>
      <Overlay
        isVisible={props.isVisible}
        onBackdropPress={props.onBackdropPress}
        overlayStyle={{ borderRadius: 20 }}
        animationType="slide">
        <Container style={styles.modalContainer}>
          <Text style={styles.title}>Change user information</Text>
          <Formik
            initialValues={user}
            onSubmit={(value) => props.submit(value)}
            validationSchema={EditUserSchema}>
            {(propss) => (
              <Container style={{ position: "relative" }}>
                <ModalChangeUserForm {...propss} />

                <Container horizontal style={{ justifyContent: "space-around", marginTop: 20 }}>
                  <IButton
                    title="Go back"
                    typeButton="outline"
                    onSubmit={props.onBackdropPress}
                  />
                  <IButton
                    title="Change"
                    typeButton="solid"
                    onSubmit={() => propss.handleSubmit()}
                    backgroundColor="#337ab7"
                    fontColor="white"
                  />
                </Container>
              </Container>
            )}
          </Formik>
          <Message title={"Successfully"}
            type={"Add"}
            isVisible={props.message}
            messageContent={"Change user successfully"}
            onBackdropPress={props.onToggleMessage}
            submit={props.onToggleMessage}
            yesButton={true} />
        </Container>
      </Overlay>
    </Container>
  )
}
