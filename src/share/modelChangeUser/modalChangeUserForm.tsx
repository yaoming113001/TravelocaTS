import React from "react"
import { Text } from "react-native"
import { Container } from "../styles/container"
import styles from "./modelChangeUser.style"
import { BaseInput } from "../base_input/base_input"
import { IBaseForm } from "../form/withForm";
import { IUserForm } from "../types/user_type";
import { ScrollView } from "react-native-gesture-handler";
import { DatePicker } from "../base_datepicker/date_picker";
import { BaseSelect } from "../base_select/base_select";
import { genderOption } from "../helper/userHelper"
import { isEmpty } from "lodash";

export const ModalChangeUserForm: React.FunctionComponent<IBaseForm<IUserForm>> = props => {
  return (
    <Container style={styles.container}>
      <ScrollView>
        <Container style={{ marginBottom: 20 }}>
          <Container horizontal style={styles.changeInfoContainer}>
            <Text style={styles.titleInfo}>Fullname</Text>
            <BaseInput
              value={props.values.name}
              error={props.touched.name ? props.errors.name : ""}
              onChangeText={props.handleChange("name")}
              onLostFocus={() => props.setFieldTouched("name")}
            />
          </Container>
          <Container horizontal style={styles.changeInfoContainer}>
            <Text style={styles.titleInfo}>Password</Text>
            <BaseInput
              value={props.values.password}
              error={props.touched.password ? props.errors.password : ""}
              onChangeText={props.handleChange("password")}
              onLostFocus={() => props.setFieldTouched("password")}
              secure={true}
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
            <Text style={styles.titleInfo}>Birthday</Text>
            <DatePicker
              title="Pick a date"
              initialValue={new Date(Number(props.values.dateBirth))}
              onDateChanged={(val) => props.handleChange("dateBirth")(val)}
            />
          </Container>
          <Container horizontal style={styles.changeInfoContainer}>
            <Text style={styles.titleInfo}>Gender</Text>
            <BaseSelect
              data={genderOption}
              title={"Select gender"}
              value={props.values.sex}
              placeholder={isEmpty(props.values.sex) ? "Select an option" : ""}
              onSelect={(val: string) => props.handleChange("sex")(val)}
              error={props.touched.sex ? props.errors.sex : ""}
            />
          </Container>
        </Container>
      </ScrollView>
    </Container>
  )
}
