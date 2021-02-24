import React from "react"
import { createContainer } from "unstated-next"
import { GlobalStore } from "../../../share/useStore/global_store"

export const useBookingStore = () => {
  const [date, setDate] = React.useState<Date>(new Date(new Date().getTime()));
  const { postPost, deletePost } = GlobalStore.useContainer().usePostAPI;
  const { user } = GlobalStore.useContainer().userStore;
  const [successVisible, setSuccessVisible] = React.useState<boolean>(false);
  const [failedVisible, setFailedVisible] = React.useState<boolean>(false);

  const onChange = React.useCallback((event, selectedDate) => {
    setDate(selectedDate)
    console.log(date)
  }, [date]);

  const booking = React.useCallback((idpost: number) => {
    const bookingValue = { user: user.id, post: idpost, date: date, }
    const result = postPost("booking", bookingValue)
    result.then(result => {
      result.status === 200 ? successBooking(idpost) : setFailedVisible(true);
    })
  }, [failedVisible, successVisible])

  const successBooking = React.useCallback((idpost: number) => {
    const postItem = { data: { id_user: user.id, id_post: idpost } };
    const deleteItem = deletePost(`removebookmark`, postItem);
    deleteItem.then(result => {
      result.status === 200 ? setSuccessVisible(true) : setFailedVisible(true);
    })
  }, [failedVisible, successVisible])

  const toggleMessage = React.useCallback(() => {
    setSuccessVisible(false);
    setFailedVisible(false);
  }, [])

  React.useEffect(() => {
  }, []);

  return { onChange, date, setDate, booking, successVisible, setSuccessVisible, failedVisible, toggleMessage, setFailedVisible };
}

export const BookingStore = createContainer(useBookingStore);