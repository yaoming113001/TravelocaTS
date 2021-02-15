import React from "react"
import { BaseInput } from "../../share/base_input/base_input"
import { Container } from "../../share/styles/container"
import styles from "../../share/styles/global_style"
import { IBaseForm } from "./withForm";
import { IUserForm } from "../types/user_type";

export const UserFormScreen: React.FunctionComponent<IBaseForm<IUserForm>> = props => {
  return (
    <Container style={[styles.inputContainer, { marginTop: 30 }]}>
      <BaseInput
        placeholder="Enter account user"
        icon="envelope"
        value={props.values.account}
        error={props.touched.account ? props.errors.account : ""}
        onChangeText={props.handleChange("account")}
        onLostFocus={() => props.setFieldTouched("account")} />
      <BaseInput
        placeholder="Enter email"
        icon="envelope"
        value={props.values.email}
        error={props.touched.email ? props.errors.email : ""}
        onChangeText={props.handleChange("email")}
        onLostFocus={() => props.setFieldTouched("email")} />
      <BaseInput
        placeholder="Enter name"
        icon="user"
        value={props.values.name}
        error={props.touched.name ? props.errors.name : ""}
        onChangeText={props.handleChange("name")}
        onLostFocus={() => props.setFieldTouched("name")} />
      <BaseInput

        placeholder="Enter password"
        icon="lock"
        value={props.values.password}
        error={props.touched.password ? props.errors.password : ""}
        onChangeText={props.handleChange("password")}
        onLostFocus={() => props.setFieldTouched("password")} />
      <BaseInput
        placeholder="Enter phone number"
        icon="phone"
        value={props.values.phone}
        error={props.touched.phone ? props.errors.phone : ""}
        onChangeText={props.handleChange("phone")}
        onLostFocus={() => props.setFieldTouched("phone")} />

      <BaseInput
        placeholder="Enter gender"
        icon="phone"
        value={props.values.sex}
        error={props.touched.sex ? props.errors.sex : ""}
        onChangeText={props.handleChange("sex")}
        onLostFocus={() => props.setFieldTouched("sex")} />
    </Container>
  )
}
