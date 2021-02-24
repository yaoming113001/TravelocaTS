import React from "react"
import { HomeStackParamList } from "../../navigation/RouteParramList"
import { BookingScreen } from "./compoment/booking_screen"
import { BookingStore } from "./store/booking_store"



export const Booking: React.FunctionComponent<HomeStackParamList<"Booking">> = props => {
  return (
    <BookingStore.Provider>
      <BookingScreen {...props} />
    </BookingStore.Provider>
  )
}