import React from "react"
import { Text } from "react-native"
import { Container } from "../../../share/styles/container"
import bookingStyles from "../booking.style"
import { DatePicker } from "../../../share/base_datepicker/date_picker"
import DateTimePicker from '@react-native-community/datetimepicker';

export interface ITimeBooking {
  date: Date;
  setDate: (date: Date) => void;
  onChange: (date: Date) => void;
}

export const TimeBooking: React.FunctionComponent<ITimeBooking> = props => {
  return (
    <Container style={{ marginBottom: 20 }}>
      <Text style={{ textAlign: "center", marginTop: 15, fontWeight: "bold", fontSize: 24 }}>Time booking</Text>
      <Container horizontal style={{ justifyContent: "space-between" }}>
        <Container style={[bookingStyles.containerInfor, { width: "48%", padding: 0 }]}>
          <DatePicker
            title="Pick a date"
            initialValue={props.date}
            minDate={new Date()}
            onDateChanged={(val) => props.setDate(new Date(Number(val)))}
          />
        </Container>
        <Container style={[bookingStyles.containerInfor, bookingStyles.timepickerContainer]}>
          <DateTimePicker
            value={props.date}
            mode={"time"}
            display="inline"
            onChange={(event, selectedDate) => props.setDate(new Date(Number(selectedDate)))}
            style={{ margin: 0, width: "50%" }}
          />
        </Container>
      </Container>
    </Container>
  )
}
