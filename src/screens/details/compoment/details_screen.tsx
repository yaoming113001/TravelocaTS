import React from "react"
import { Image, Text, TouchableOpacity } from "react-native"
import { Button, Icon, Rating } from "react-native-elements"
import { Header } from "../../../share/header/header"
import { HomeStackParamList, RouteStackParamList } from "../../../navigation/RouteParramList"
import { BaseInput } from "../../../share/base_input/base_input"
import { Container } from "../../../share/styles/container"
import styles from "../../../share/styles/global_style"
import { DetailsStore } from "../store/details_store"
import { useNavigation } from "@react-navigation/native"
import { Item } from "../../../share/types/item"
import detailStyle from "./details_style"
import { ScrollView } from "react-native-gesture-handler"

interface IItem {
  params: Item;
}

export const DetailsScreen: React.FunctionComponent<HomeStackParamList<"Detail">> = props => {
  const { title, info } = DetailsStore.useContainer()
  const navigation = useNavigation()
  const params = props.route.params as unknown as IItem;
  const item = params.params;

  return (
    <Container style={styles.container}>
      <Container>
        <Header iconTitle="arrow-left" title="Detail" mainScreen={false} onPress={() => navigation.goBack()} />
      </Container>
      <Container>
        <Image
          source={{ uri: `${item.image}` }}
          style={detailStyle.imageDetail}
        />
        <ScrollView style={{ height: "49%" }} showsVerticalScrollIndicator={false}>

          <Container style={detailStyle.whiteContainerDetail}>
            <Text style={detailStyle.titleDetail}>{item.title}</Text>
          </Container>

          <Container horizontal style={detailStyle.whiteContainerDetail}>
            <Rating
              type='heart'
              startingValue={item.rating}
              imageSize={30}
            />
            <Text style={detailStyle.ratingDetail}>{item.rating}</Text>
          </Container>

          <Container horizontal style={detailStyle.whiteContainerDetail}>
            <Text style={detailStyle.emailDetail}>{item.email}</Text>
          </Container>

          <Container horizontal style={[detailStyle.whiteContainerDetail]}>
            <Text style={detailStyle.contentlDetail}>{item.content}</Text>
          </Container>
        </ScrollView>
      </Container>

      <Container horizontal style={detailStyle.buttonDetailContainer}>
        <TouchableOpacity>
          <Container horizontal style={detailStyle.buttonDetails}>
            <Icon
              name='phone'
              type='font-awesome'
              iconStyle={detailStyle.phoneIconDetail} />
            <Text style={detailStyle.phoneDetail}>{item.phone}</Text>
          </Container>
        </TouchableOpacity>
        <TouchableOpacity>
          <Container horizontal style={[detailStyle.buttonDetails, { backgroundColor: "#d9534f" }]}>
            <Text style={[detailStyle.phoneDetail, { fontSize: 22 }]}>Add to </Text>
            <Icon
              name='heart'
              type='font-awesome'
              iconStyle={detailStyle.phoneIconDetail} />
          </Container>
        </TouchableOpacity>
      </Container>
    </Container>

  )
}
