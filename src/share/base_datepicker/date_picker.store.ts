import { isNil } from "lodash";
import React, { useState } from "react";
import { IDateInputProps } from "./date_picker_props";

export const useDateInput = (props: IDateInputProps) => {
  const [date, setDate] = useState<Date>(
    isNil(props.initialValue) ? new Date() : props.initialValue
  );

  const [isShow, setShow] = useState(false);

  const showPicker = React.useCallback(() => {
    setShow(true);
  }, []);

  const hidePicker = React.useCallback(() => {
    setShow(false);
  }, [setShow]);

  const onPressDone = React.useCallback(() => {
    hidePicker();
    props.onDateChanged && props.onDateChanged(date.getTime().toString());
  }, [date, props, hidePicker]);

  const onChangeDateAndroid = React.useCallback(
    (event, selectedDate) => {
      hidePicker();
      if (event["type"] === "set") {
        setDate(selectedDate);
        props.onDateChanged && props.onDateChanged(selectedDate);
      }
    },
    [props, hidePicker]
  );

  const onChange = React.useCallback((event, selectedDate) => {
    setDate(selectedDate);
  }, []);

  return {
    isShow,
    date,
    showPicker,
    hidePicker,
    onPressDone,
    onChangeDateAndroid,
    onChange
  };
};
