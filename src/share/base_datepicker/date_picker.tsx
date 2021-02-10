import React from "react"
import { Text } from "react-native"
import { Container } from "../styles/container"
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment';
import { BaseInput } from "../base_input/base_input";
import { Overlay, Button } from "react-native-elements";
import { IDateInputProps } from "./date_picker_props";
import { useDateInput } from "./date_picker.store";
import { isNil } from "lodash";
import styles from "./date_picker.style"

export const DatePicker: React.FunctionComponent<IDateInputProps> = props => {
  const {
    isShow,
    date,
    showPicker,
    hidePicker,
    onPressDone,
    onChange
  } = useDateInput(props);

  const datePicker = () => {
    return (
      <DateTimePicker
        testID="dateTimePicker"
        minimumDate={props.minDate}
        maximumDate={props.maxDate}
        value={date}
        mode="date"
        display="inline"
        onChange={onChange}
        style={{ width: 250, height: 250 }}
      />
    )
  }

  return (
    <>
      <BaseInput
        value={isNil(date) ? "" : Moment(date).format("MM / DD / YYYY")}
        onPress={showPicker}
        dontShowKeyboard={true}
      />
      <Overlay isVisible={isShow}
        onBackdropPress={hidePicker}
        overlayStyle={styles.overPlay}
        animationType="fade">
        <Container style={styles.container}>
          <Text style={styles.title}>{props.title}</Text>
          <Container style={styles.calender}>
            {datePicker()}
          </Container>
          <Button title="Done" onPress={onPressDone} type="outline" buttonStyle={styles.button} />
        </Container>
      </Overlay>
    </>
  );
}
