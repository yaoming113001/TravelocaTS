import React from "react"
import { Text, Image, Dimensions } from "react-native"
import { RouteStackParamList } from "../../../navigation/RouteParramList"
import { Container } from "../../../share/styles/container"
import { InformationStore, useInformationStore } from "../store/information_store"
import { Button } from 'react-native-elements';
import styles from "../information.style"
import { ModalChangeUser } from "../../../share/modelChangeUser/modalChangeUser"
import Moment from 'moment';
import { IUserForm } from "../../../share/types/user_type"

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const InformationScreen: React.FunctionComponent<RouteStackParamList<"SignIn">> = props => {
  const { accountImage, coverImage, toggleOverlay, visible, editUserSubmit, isMessage, toggleMessage } = InformationStore.useContainer()
  const { user } = InformationStore.useContainer()
  return (
    <Container style={{ flex: 1 }}>
      <Image
        source={{ uri: `${coverImage}` }}
        style={{ flex: 1 }}
      />
      <Container style={styles.informationContainer}>
        <Container style={{ flex: 2 }}>
          <Container style={{ marginTop: 50, marginBottom: 10 }}>
            <Text style={styles.titleName}>{user?.name}</Text>
          </Container>
          <Container horizontal style={styles.titleInfoContainer}>
            <Text style={styles.title}>Account</Text>
            <Text style={styles.titleInfo}>{user?.account}</Text>
          </Container>
          <Container horizontal style={styles.titleInfoContainer}>
            <Text style={styles.title}>Password</Text>
            <Text style={styles.titleInfo}>***********</Text>
          </Container>
          <Container horizontal style={styles.titleInfoContainer}>
            <Text style={styles.title}>Email</Text>
            <Text style={styles.titleInfo}>{user?.email}</Text>
          </Container>
          <Container horizontal style={styles.titleInfoContainer}>
            <Text style={styles.title}>Phone</Text>
            <Text style={styles.titleInfo}>{user?.phone}</Text>
          </Container>
          <Container horizontal style={styles.titleInfoContainer}>
            <Text style={styles.title}>Birthday</Text>
            <Text style={styles.titleInfo}>{Moment(Number(user?.dateBirth)).format("L")}</Text>
          </Container>
          <Container horizontal style={styles.titleInfoContainer}>
            <Text style={styles.title}>Address</Text>
            <Text style={styles.titleInfo}>35/1F Ba Diem Street</Text>
          </Container>
          <Container horizontal style={styles.titleInfoContainer}>
            <Text style={styles.title}>Gender</Text>
            <Text style={styles.titleInfo}>Male</Text>
          </Container>

        </Container>
        <Container horizontal style={{ flex: 1, position: "relative", justifyContent: "center" }}>
          <Button
            title="Edit user"
            onPress={() => toggleOverlay()}
          />
        </Container>
      </Container>
      <ModalChangeUser title={"Chage user's information"} isVisible={visible}
        onBackdropPress={() => { toggleOverlay() }}
        submit={(val: IUserForm) => editUserSubmit(val)}
        message={isMessage}
        onToggleMessage={() => toggleMessage()}
      ></ModalChangeUser>

      <Image
        source={{ uri: `${accountImage}` }}
        style={{
          position: "absolute", width: 100, height: 100, left: width / 2, top: 50, borderRadius: 50,
          transform: [{ translateX: -50 }]
        }}
      />
    </Container>
  )
}
