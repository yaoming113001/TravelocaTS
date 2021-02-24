import React from "react"
import styles from "../../../share/styles/global_style"
import bookingStyles from "../booking.style"
import Moment from 'moment';
import { ScrollView, Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { HomeStackParamList } from "../../../navigation/RouteParramList"
import { Header } from "../../../share/header/header"
import { Container } from "../../../share/styles/container"
import { Item } from "../../../share/types/item"
import { Icon } from 'react-native-elements'
import { BookingStore } from "../store/booking_store"
import { TimeBooking } from "./booking_time_booking"
import { BookingInfo } from "./booking_information"

export interface IBooking {
  params: Item;
}

export const BookingScreen: React.FunctionComponent<HomeStackParamList<"Booking">> = props => {
  const params = props.route.params as unknown as IBooking;
  const item = params.params

  const { date, setDate, booking } = BookingStore.useContainer()

  const orderButton = () => {
    return (
      <Container style={bookingStyles.bookingButtonContainer}>
        <TouchableOpacity style={bookingStyles.bookingButton} onPress={() => booking(item.id)}>
          <Container horizontal style={bookingStyles.line1ButtonContainer}>
            <Text style={bookingStyles.orderButtonTitle}>Order</Text>
            <Icon
              name='money'
              type='font-awesome'
              size={24}
              color='white' />
          </Container>
          <Container horizontal style={bookingStyles.line2ButtonContainer}>
            <Text style={bookingStyles.dateTimeButtonTitle}>Date: {Moment(new Date(date).getTime()).format("L")}</Text>
            <Text style={bookingStyles.dateTimeButtonTitle}>Time: {Moment(new Date(date).getTime()).format("LT")}</Text>
          </Container>
        </TouchableOpacity>
      </Container>
    )
  }

  const dateAndTimeSelection = () => {
    return (
      <TimeBooking date={date} setDate={(val: Date) => setDate(val)} onChange={(val: Date) => setDate(val)} />
    )
  }

  return (
    <Container style={styles.container}>
      <Header iconTitle={"arrow-left"} mainScreen={false} onPress={() => props.navigation.goBack()} title={"Booking"} />
      <Container style={bookingStyles.bookingContainer}>
        <ScrollView style={{ marginBottom: "23%" }}>
          <BookingInfo item={item} />
          {dateAndTimeSelection()}
        </ScrollView>
        {orderButton()}
      </Container>
    </Container >
  )
}
