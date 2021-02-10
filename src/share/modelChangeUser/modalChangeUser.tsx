import React from "react"
import { Dimensions, Text } from "react-native"
import { Container } from "../styles/container"
import { Overlay } from 'react-native-elements';
import styles from "./modelChangeUser.style"
import { GlobalStore } from "../useStore/global_store";
import * as Yup from "yup"
import { Formik } from "formik";
import { IButton } from "../base_button/base_button";
import { ModalChangeUserForm } from "./modalChangeUserForm";
import { IUser } from "../types/user";


interface IModalChangeUser {
  title: string;
  isVisible: boolean;
  yesButton?: boolean;
  noButton?: boolean;
  cancelLabel?: string;
  submit?: () => void;
  onCancelPress?: () => void;
  onBackdropPress: () => void;
}

export const EditUserSchema = Yup.object().shape({
  account: Yup.string().required("Account is required"),
  email: Yup.string().required("Email is required").email("Invalid email"),
  phone: Yup.string().required("Phone number is required"),
  fullname: Yup.string().required("Full name is required"),
  dateOfBirth: Yup.string().required("Date of birth is required"),
  address: Yup.string().required("Address is required"),
  gender: Yup.string().required("Gender is required"),
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
            onSubmit={(value) => console.log(value)}
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
        </Container>
      </Overlay>
    </Container>
  )
}
