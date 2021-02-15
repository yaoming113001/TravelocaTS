import React from "react"
import { Formik } from "formik";
import { Text, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native"
import { Button } from "react-native-elements"
import { RouteStackParamList } from "../../../navigation/RouteParramList"
import { Container } from "../../../share/styles/container"
import styles from "../../../share/styles/global_style"
import { SignUpStore } from "../store/sign_up_store"
import * as Yup from "yup";
import { userRegisterHelper } from "../../../share/helper/userHelper";
import { UserFormScreen } from "../../../share/form/form_user_auth";
import { ActivePopup } from "./active_popup";
import { Message } from "../../../share/message/message";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const SignUpSchema = Yup.object().shape({
  account: Yup.string().required("Account is required"),
  password: Yup.string().required("Password is required"),
  email: Yup.string().required("Email is required").email("Invalid email"),
  phone: Yup.string().required("Phone number is not valid").matches(phoneRegExp, "Phone number is not valid"),
  name: Yup.string().required("Full name is required"),
  sex: Yup.string().required("Gender of birth is required"),
})


export const SignUpScreen: React.FunctionComponent<RouteStackParamList<"SignIn">> = ({ }) => {
  const {
    title,
    info,
    submitRegister,
    moveToSignIn,
    isVisible,
    toggle,
    code,
    setCode,
    submitCode_,
    message,
    setMessage
  } = SignUpStore.useContainer()

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <Container>
        <Container style={[styles.titleContainer, { height: 100 }]}>
          <Text style={styles.title}> {title}</Text>
          <Text style={styles.info}> {info}</Text>
        </Container>
        <Formik
          initialValues={userRegisterHelper}
          onSubmit={(value) => submitRegister(value)}
          validationSchema={SignUpSchema}>
          {(props) => (
            <>
              <ScrollView style={styles.scrollviewSignUpContainer}>
                <UserFormScreen {...props} />
                <Container style={styles.buttonContainer}>
                  <Button
                    title="Sign up"
                    buttonStyle={styles.button}
                    titleStyle={styles.buttonTitle}
                    onPress={() => props.handleSubmit()}
                  />
                  <TouchableOpacity onPress={moveToSignIn}>
                    <Text style={styles.signUpTitle}>Sign in</Text>
                  </TouchableOpacity>
                </Container>
              </ScrollView>
            </>
          )}
        </Formik>
      </Container>
      <Message title={"Error"}
        isVisible={message.length ? true : false}
        messageContent={message}
        yesButton={true}
        submit={() => setMessage("")} />
      <ActivePopup
        isVisible={isVisible}
        title="Active account"
        value={code}
        onChangeText={(val) => { setCode(val) }}
        onBackdropPress={() => toggle()}
        submit={() => submitCode_()} />
    </KeyboardAvoidingView>
  )
}
