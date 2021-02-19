import React from "react"
import { Text } from "react-native"
import { Container } from "../../../share/styles/container"
import styles from "../information.style"
import Moment from 'moment';
import { IUserForm } from "../../../share/types/user_type"


export interface Iiformation {
  user: IUserForm;
}

export const InformationBoard: React.FunctionComponent<Iiformation> = props => {
  return (

    <Container style={{ flex: 10 }}>
      <Container style={{ marginTop: 50, marginBottom: 10 }}>
        <Text style={styles.titleName}>{props.user?.name}</Text>
      </Container>
      <Container horizontal style={styles.titleInfoContainer}>
        <Text style={styles.title}>Account</Text>
        <Text style={styles.titleInfo}>{props.user?.account}</Text>
      </Container>
      <Container horizontal style={styles.titleInfoContainer}>
        <Text style={styles.title}>Password</Text>
        <Text style={styles.titleInfo}>***********</Text>
      </Container>
      <Container horizontal style={styles.titleInfoContainer}>
        <Text style={styles.title}>Email</Text>
        <Text style={styles.titleInfo}>{props.user?.email}</Text>
      </Container>
      <Container horizontal style={styles.titleInfoContainer}>
        <Text style={styles.title}>Phone</Text>
        <Text style={styles.titleInfo}>{props.user?.phone}</Text>
      </Container>
      <Container horizontal style={styles.titleInfoContainer}>
        <Text style={styles.title}>Birthday</Text>
        <Text style={styles.titleInfo}>{Moment(Number(props.user?.dateBirth)).format("L")}</Text>
      </Container>
      <Container horizontal style={styles.titleInfoContainer}>
        <Text style={styles.title}>Address</Text>
        <Text style={styles.titleInfo}>35/1F Ba Diem Street</Text>
      </Container>
      <Container horizontal style={styles.titleInfoContainer}>
        <Text style={styles.title}>Gender</Text>
        <Text style={styles.titleInfo}>{props.user?.sex}</Text>
      </Container>
    </Container>
  )
}
