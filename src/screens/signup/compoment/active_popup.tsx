import React from "react"
import { Formik } from "formik";
import { Text, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native"
import { Button, Overlay } from "react-native-elements"
import { RouteStackParamList } from "../../../navigation/RouteParramList"
import { Container } from "../../../share/styles/container"
import styles from "../../../share/styles/global_style"
import { SignUpStore } from "../store/sign_up_store"
import * as Yup from "yup";
import { userRegisterHelper } from "../../../share/helper/userHelper";
import { UserFormScreen } from "../../../share/form/form_user_auth";
import { BaseInput } from "../../../share/base_input/base_input";

interface IActiveUser {
  title: string;
  isVisible: boolean;
  yesButton?: boolean;
  submit?: () => void;
  onBackdropPress: () => void;
  onChangeText: (code: string) => void;
  value: string;
}

export const ActivePopup: React.FunctionComponent<IActiveUser> = props => {
  return (
    <Overlay
      isVisible={props.isVisible}
      onBackdropPress={props.onBackdropPress}
      overlayStyle={{ borderRadius: 20 }}
      animationType="slide">
      <Container style={{ width: 300, height: 200 }}>
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20, marginBottom: 20 }}>{props.title}</Text>
        <BaseInput
          placeholder="Enter active number"
          value={props.value}
          icon="phone"
          onChangeText={(val) => props.onChangeText(val)} />
        <Container style={{ alignItems: "center", margin: 10 }}>
          <Button title="Submit" buttonStyle={{ width: 100 }} onPress={props.submit} />
        </Container>
      </Container>
    </Overlay>
  )
}
