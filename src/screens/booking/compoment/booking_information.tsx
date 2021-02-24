import React from "react"
import { Image, ScrollView, Text } from "react-native"
import { Rating } from "react-native-elements"
import NumberFormat from "react-number-format"
import { ipconfig } from "../../../share/config/config"
import { Container } from "../../../share/styles/container"
import { Item } from "../../../share/types/item"
import bookingStyles from "../booking.style"

export interface IBookingInfo {
  item: Item;
}

export const BookingInfo: React.FunctionComponent<IBookingInfo> = props => {

  const titleAndPrice = () => {
    return (
      <>
        <Image
          source={{ uri: `${ipconfig}/${props.item.image.replace("public", "")}` }}
          style={bookingStyles.imageItem}
        />
        <Container style={bookingStyles.containerInfor}>
          <Text style={bookingStyles.title}>{props.item.title}</Text>

        </Container>
        <Container horizontal style={bookingStyles.containerInfor}>
          <NumberFormat value={props.item.price} displayType={'text'} thousandSeparator={true} prefix={''} renderText={value =>
            <Text style={bookingStyles.price}>{value} VND</Text>
          } />
          <Rating
            type='heart'
            startingValue={props.item.vote}
            imageSize={24}
            readonly={true}
          />
        </Container>
      </>
    )
  }

  const emailAndPhone = () => {
    return (
      <>
        <Container style={bookingStyles.containerInfor}>
          <Text style={bookingStyles.email}>{props.item.email}</Text>
        </Container>
        <Container horizontal style={[bookingStyles.containerInfor, { justifyContent: "flex-start" }]}>
          <Text style={bookingStyles.phoneTitle}>Phone number: </Text>
          <Text style={bookingStyles.phone}>{props.item.phoneNumber}</Text>

        </Container>
      </>
    )
  }

  return (
    <>
      { titleAndPrice()}
      { emailAndPhone()}
    </>
  )
}
