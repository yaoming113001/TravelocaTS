import { Formik } from "formik";
import React from "react"
import { Text, TouchableOpacity } from "react-native"
import { Button } from "react-native-elements"
import { RouteStackParamList } from "../../../navigation/RouteParramList"
import { BaseInput } from "../../../share/base_input/base_input"
import { Container } from "../../../share/styles/container"
import styles from "../../../share/styles/global_style"
import { SignInStore } from "../store/sign_in_store"
import * as Yup from "yup";
import { ScrollView } from "react-native-gesture-handler";
import { userLoginHelper } from "../../../share/helper/userHelper";
import { Message } from "../../../share/message/message";
import { useTranslation } from "../../../languages/language_context";



export const SignInScreen: React.FunctionComponent<RouteStackParamList<"SignIn">> = props => {
  const { submit, moveToSignUp, message, setMessage } = SignInStore.useContainer()
  const { signIn, pleaseSignIn, enterAccount, enterPass, forget, register, accountRequired, passwordRequired } = useTranslation()

  const SignInSchema = Yup.object().shape({
    account: Yup.string().required(accountRequired),
    password: Yup.string().required(passwordRequired)
  })

  return (
    <ScrollView>
      <Container style={styles.titleContainer}>
        <Text style={styles.title}> {signIn}</Text>
        <Text style={styles.info}> {pleaseSignIn}</Text>
      </Container>
      <Formik
        initialValues={userLoginHelper}
        onSubmit={(value) => submit(value)}
        validationSchema={SignInSchema}>
        {(props) => (
          <>
            <Container style={styles.inputContainer}>
              <BaseInput
                placeholder={enterAccount}
                icon="envelope"
                value={props.values.account}
                error={props.touched.account ? props.errors.account : ""}
                onChangeText={props.handleChange("account")}
                onLostFocus={() => props.setFieldTouched("account")}
              />
              <BaseInput
                placeholder={enterPass}
                icon="lock"
                value={props.values.password}
                error={props.touched.password ? props.errors.password : ""}
                onChangeText={props.handleChange("password")}
                onLostFocus={() => props.setFieldTouched("password")}

              />
              <Container style={styles.forgetContainer}>
                <TouchableOpacity>
                  <Text style={styles.forget}>{forget}</Text>
                </TouchableOpacity>
              </Container>

            </Container>
            <Container style={styles.buttonContainer}>
              <Button
                title="Sign in"
                buttonStyle={styles.button}
                titleStyle={styles.buttonTitle}
                onPress={() => props.handleSubmit()}
              />
              <TouchableOpacity onPress={() => moveToSignUp(props)}>
                <Text style={styles.signUpTitle}>{register}</Text>
              </TouchableOpacity>
            </Container>
          </>
        )}
      </Formik>
      <Message title={"Error"}
        isVisible={message.length ? true : false}
        messageContent={message}
        yesButton={true}
        submit={() => setMessage("")} />
    </ScrollView>

  )
}
