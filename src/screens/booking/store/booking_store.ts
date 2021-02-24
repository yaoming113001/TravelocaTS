import React from "react"
import { createContainer } from "unstated-next"

export const useBookingStore = () => {

  React.useEffect(() => {
  }, []);

  return {};
}

export const BookingStore = createContainer(useBookingStore);