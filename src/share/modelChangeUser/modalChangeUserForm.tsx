import React from "react"
import { Button, KeyboardAvoidingView, Platform, Text, View } from "react-native"
import { Container } from "../styles/container"
import styles from "./modelChangeUser.style"
import Moment from 'moment';
import * as Yup from "yup"
import { BaseInput } from "../base_input/base_input"
import { IBaseForm } from "../form/withForm";
import { IUser } from "../types/user";
import { ScrollView } from "react-native-gesture-handler";
import DateTimePicker from '@react-native-community/datetimepicker';
import { DatePicker } from "../base_datepicker/date_picker";


export const ModalChangeUserForm: React.FunctionComponent<IBaseForm<IUser>> = props => {

  return (
    <Container style={{ position: "relative" }}>
      <ScrollView>

        <Container horizontal style={styles.changeInfoContainer}>
          <Text style={styles.titleInfo}>Username</Text>
          <BaseInput
            value={props.values.account}
            error={props.touched.account ? props.errors.account : ""}
            onChangeText={props.handleChange("account")}
            onLostFocus={() => props.setFieldTouched("account")}
          />
        </Container>
        <Container horizontal style={styles.changeInfoContainer}>
          <Text style={styles.titleInfo}>Fullname</Text>
          <BaseInput
            value={props.values.fullname}
            error={props.touched.fullname ? props.errors.fullname : ""}
            onChangeText={props.handleChange("fullname")}
            onLostFocus={() => props.setFieldTouched("fullname")}
          />
        </Container>
        <Container horizontal style={styles.changeInfoContainer}>
          <Text style={styles.titleInfo}>Password</Text>
          <BaseInput
            value={props.values.password}
            error={props.touched.password ? props.errors.password : ""}
            onChangeText={props.handleChange("password")}
            onLostFocus={() => props.setFieldTouched("password")}
          />
        </Container>
        <Container horizontal style={styles.changeInfoContainer}>
          <Text style={styles.titleInfo}>Email</Text>
          <BaseInput
            value={props.values.email}
            error={props.touched.email ? props.errors.email : ""}
            onChangeText={props.handleChange("email")}
            onLostFocus={() => props.setFieldTouched("email")}
          />
        </Container>
        <Container horizontal style={styles.changeInfoContainer}>
          <Text style={styles.titleInfo}>Phone</Text>

          <BaseInput
            value={props.values.phone}
            error={props.touched.phone ? props.errors.phone : ""}
            onChangeText={props.handleChange("phone")}
            onLostFocus={() => props.setFieldTouched("phone")}
          />
        </Container>
        <Container horizontal style={styles.changeInfoContainer}>
          <Text style={styles.titleInfo}>Address</Text>
          <BaseInput
            value={props.values.address}
            error={props.touched.address ? props.errors.address : ""}
            onChangeText={props.handleChange("address")}
            onLostFocus={() => props.setFieldTouched("address")}
          />
        </Container>
        <Container horizontal style={styles.changeInfoContainer}>
          <Text style={styles.titleInfo}>Birthday</Text>
          <DatePicker
            title="Pick a date"
            initialValue={new Date(props.values.dateOfBirth)}
            onChangeText={() => props.handleChange("dateOfBirth")}
          />
        </Container>
        <Container horizontal style={styles.changeInfoContainer}>
          <Text style={styles.titleInfo}>Gender</Text>
          <BaseInput
            value={props.values.gender ? "Male" : "Female"}
            error={props.touched.gender ? props.errors.gender : ""}
            onChangeText={props.handleChange("gender")}
            onLostFocus={() => props.setFieldTouched("gender")}
          />
        </Container>
      </ScrollView>
    </Container>
  )
}
