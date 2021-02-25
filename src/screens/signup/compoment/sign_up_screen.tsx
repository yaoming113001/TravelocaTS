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
import { useTranslation } from "../../../languages/language_context";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


export const SignUpScreen: React.FunctionComponent<RouteStackParamList<"SignIn">> = ({ }) => {
  const { accountRequired, passwordRequired, emailRequired, invalidEmail, phoneRequired, invalidPhone,
    nameRequired, sexRequired, register, pleaseRegister, signIn } = useTranslation();

  const SignUpSchema = Yup.object().shape({
    account: Yup.string().required(accountRequired),
    password: Yup.string().required(passwordRequired),
    email: Yup.string().required(emailRequired).email(invalidEmail),
    phone: Yup.string().required(phoneRequired).matches(phoneRegExp, invalidPhone),
    name: Yup.string().required(nameRequired),
    sex: Yup.string().required(sexRequired),
  })
  const {
    submitRegister, moveToSignIn, isVisible, toggle, code, setCode, submitCode_, message, setMessage } = SignUpStore.useContainer()


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <Container>
        <Container style={[styles.titleContainer, { height: 100 }]}>
          <Text style={styles.title}> {register}</Text>
          <Text style={styles.info}> {pleaseRegister}</Text>
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
                    title={signIn}
                    buttonStyle={styles.button}
                    titleStyle={styles.buttonTitle}
                    onPress={() => props.handleSubmit()}
                  />
                  <TouchableOpacity onPress={moveToSignIn}>
                    <Text style={styles.signUpTitle}>{register}</Text>
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
