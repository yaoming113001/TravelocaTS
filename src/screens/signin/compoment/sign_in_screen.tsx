import { Formik, Form } from "formik";
import React from "react"
import { Text, TouchableOpacity } from "react-native"
import { Button } from "react-native-elements"
import { RouteStackParamList } from "../../../navigation/RouteParramList"
import { BaseInput } from "../../../share/base_input/base_input"
import { Container } from "../../../share/styles/container"
import styles from "../../../share/styles/global_style"
import { SignInStore } from "../store/sign_in_store"
import * as Yup from "yup";
import { StatusBar } from "expo-status-bar";

interface FormValue {
  email: string;
  password: string;
}

export const InitialData: FormValue = {
  email: "",
  password: ""
}

export const SignInSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email must be a valid email"),
  password: Yup.string().required("Password is required").min(10, "Password must larger than 10 characters")
})


export const SignInScreen: React.FunctionComponent<RouteStackParamList<"SignIn">> = props => {
  const { title, info, submit, moveToSignUp } = SignInStore.useContainer()
  return (
    <Container>
      <Container style={styles.titleContainer}>
        <Text style={styles.title}> {title}</Text>
        <Text style={styles.info}> {info}</Text>
      </Container>
      <Formik
        initialValues={InitialData}
        onSubmit={(value) => submit(value)}
        validationSchema={SignInSchema}>
        {(props) => (
          <>
            <Container style={styles.inputContainer}>
              <BaseInput title="EMAIL"
                placeholder="Enter email"
                icon="envelope"
                value={props.values.email}
                error={props.touched.email ? props.errors.email : ""}
                onChangeText={props.handleChange("email")}
                onLostFocus={() => props.setFieldTouched("email")}
              />
              <BaseInput title="PASSWORD"
                placeholder="Enter password"
                icon="lock"
                value={props.values.password}
                error={props.touched.password ? props.errors.password : ""}
                onChangeText={props.handleChange("password")}
                onLostFocus={() => props.setFieldTouched("password")}

              />
              <Container style={styles.forgetContainer}>
                <TouchableOpacity>
                  <Text style={styles.forget}>FORGET</Text>
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
                <Text style={styles.signUpTitle}>Sign up</Text>
              </TouchableOpacity>
            </Container>
          </>
        )}
      </Formik>
    </Container>

  )
}
