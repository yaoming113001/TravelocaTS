import React from "react"
import { Formik, Form } from "formik";
import { View, Text, Image, ImageBackground, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native"
import { Button } from "react-native-elements"
import { RouteStackParamList } from "../../../navigation/RouteParramList"
import { BaseInput } from "../../../share/base_input/base_input"
import { Container } from "../../../share/styles/container"
import styles from "../../../share/styles/global_style"
import { SignUpStore } from "../store/sign_up_store"
import * as Yup from "yup";
import { StatusBar } from "expo-status-bar";

interface FormValue {
  email: string;
  password: string;
  name: string;
  phone: string;
  address: string;
  birth: string
}

export const InitialData: FormValue = {
  email: "",
  password: "",
  name: "",
  phone: "",
  address: "",
  birth: ""
}

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const SignUpSchema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required().min(10),
  name: Yup.string().required(),
  phone: Yup.string().required().matches(phoneRegExp, "Phone number is not valid"),
  address: Yup.string().required(),
  birth: Yup.string().required(),
})

export const SignUpScreen: React.FunctionComponent<RouteStackParamList<"SignIn">> = props => {
  const { title, info, submit, moveToSignIn } = SignUpStore.useContainer()
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
          initialValues={InitialData}
          onSubmit={(value) => submit(value)}
          validationSchema={SignUpSchema}>
          {(props) => (
            <>
              <ScrollView style={styles.scrollviewSignUpContainer}>

                <Container style={[styles.inputContainer, { marginTop: 30 }]}>
                  <BaseInput title="EMAIL"
                    placeholder="Enter email"
                    icon="envelope"
                    value={props.values.email}
                    error={props.touched.email ? props.errors.email : ""}
                    onChangeText={props.handleChange("email")}
                    onLostFocus={() => props.setFieldTouched("email")} />
                  <BaseInput title="Name"
                    placeholder="Enter name"
                    icon="user"
                    value={props.values.name}
                    error={props.touched.name ? props.errors.name : ""}
                    onChangeText={props.handleChange("name")}
                    onLostFocus={() => props.setFieldTouched("name")} />
                  <BaseInput title="Password"
                    placeholder="Enter password"
                    icon="lock"
                    value={props.values.password}
                    error={props.touched.password ? props.errors.password : ""}
                    onChangeText={props.handleChange("password")}
                    onLostFocus={() => props.setFieldTouched("password")} />
                  <BaseInput title="Phone"
                    placeholder="Enter phone number"
                    icon="phone"
                    value={props.values.phone}
                    error={props.touched.phone ? props.errors.phone : ""}
                    onChangeText={props.handleChange("phone")}
                    onLostFocus={() => props.setFieldTouched("phone")} />
                  <BaseInput title="Address"
                    placeholder="Enter address"
                    icon="map"
                    value={props.values.address}
                    error={props.touched.address ? props.errors.address : ""}
                    onChangeText={props.handleChange("address")}
                    onLostFocus={() => props.setFieldTouched("address")} />


                </Container>
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
          )
          }
        </Formik>
      </Container>
    </KeyboardAvoidingView>
  )
}
