import React from "react"
import { Image, Text } from "react-native"
import { Button, Rating } from "react-native-elements"
import { Header } from "../../../share/header/header"
import { HomeStackParamList } from "../../../navigation/RouteParramList"
import { Container } from "../../../share/styles/container"
import styles from "../../../share/styles/global_style"
import { DetailsStore } from "../store/details_store"
import { useNavigation } from "@react-navigation/native"
import { Item } from "../../../share/types/item"
import detailStyle from "./details_style"
import { ScrollView } from "react-native-gesture-handler"
import { Message } from "../../../share/message/message"
import { ipconfig } from "../../../share/config/config"
import { IButton } from "../../../share/base_button/base_button"
import Icon from 'react-native-vector-icons/FontAwesome';


interface IItem {
  params: Item;
}

// export interface IDetail extends HomeStackParamList<"Detail"> {
//   onAddCart: () => void;
// }

export const DetailsScreen: React.FunctionComponent<HomeStackParamList<"Detail">> = props => {
  const { addToCart, isVisible, toggle, moveToComment } = DetailsStore.useContainer()
  const params = props.route.params as unknown as IItem;
  const item = params.params;

  const image = () => {
    return (
      <>
        <Image
          source={{ uri: `${ipconfig}/${item.image.replace("public", "")}` }}
          style={detailStyle.imageDetail}
        />
      </>
    )
  }

  const inforItem = () => {
    return (
      <>
        <Container style={detailStyle.whiteContainerDetail}>
          <Text style={detailStyle.titleDetail}>{item.title}</Text>
        </Container>

        <Container horizontal style={detailStyle.whiteContainerDetail}>
          <Rating
            type='heart'
            startingValue={item.vote}
            imageSize={30}
            readonly
          />
          <Text style={detailStyle.ratingDetail}>{item.vote}</Text>
        </Container>

        <Container horizontal style={detailStyle.whiteContainerDetail}>
          <Text style={detailStyle.emailDetail}>{item.email}</Text>
        </Container>

        <Container horizontal style={[detailStyle.whiteContainerDetail]}>
          <Text style={detailStyle.contentlDetail}>{item.content}</Text>
        </Container>

        {commentButton()}
      </>
    )
  }

  const button = () => {
    return (
      <>
        <IButton
          title={item.phoneNumber.toString()}
          typeButton={"solid"}
          backgroundColor="#337ab7"
          icon={"phone"}
          addStyle={true}
          fontColor="white"
          iconSize={30}
          titleSize={20}
          onSubmit={() => { }}
          borderRadius={10} />

        <IButton
          title={"Add to "}
          typeButton={"solid"}
          backgroundColor="#d9534f"
          icon={"heart"}
          addStyle={true}
          fontColor="white"
          iconSize={30}
          titleSize={20}
          iconRight
          onSubmit={() => { addToCart(item), toggle() }}
          borderRadius={10} />
      </>
    )
  }

  const message = () => {
    return (
      <>
        <Message
          type={"Add"}
          title={"Add item successfully"}
          isVisible={isVisible}
          messageContent={"You have added item successfully!"}
          onBackdropPress={() => { toggle() }}
          yesButton={true}
          noButton={false}
          submit={() => { toggle() }}
          onCancelPress={() => toggle()}
        />
      </>
    )
  }

  const commentButton = () => {
    return (
      <Container >
        <IButton
          title={"Create comment"}
          typeButton={"outline"}
          backgroundColor="#434567"
          icon={"comments"}
          addStyle={true}
          fontColor="white"
          iconSize={25}
          titleSize={18}
          iconRight
          onSubmit={() => { moveToComment(item.id) }}
          borderRadius={10}
          width={100} />
      </Container>

    )
  }

  return (
    <Container style={styles.container}>
      <Container>
        <Header iconTitle="arrow-left" title="Detail" mainScreen={false} onPress={() => props.navigation.goBack()} />
      </Container>
      <Container>
        {image()}
        <ScrollView style={{ height: "48%" }} showsVerticalScrollIndicator={false}>
          {inforItem()}
        </ScrollView>
      </Container>
      <Container horizontal style={detailStyle.buttonDetailContainer}>
        {button()}
      </Container>
      {message()}
    </Container>

  )
}
