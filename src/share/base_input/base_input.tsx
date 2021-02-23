import { Icon, Input } from "react-native-elements"
import React from "react"
import styles from "./base_input_style"
import { Keyboard } from "react-native"
import { isUndefined } from "lodash"

export interface IBaseInputProps {
  isRequired?: boolean;
  error?: string;
  value?: string;
  disable?: string;
  icon?: string;
  placeholder?: string;
  isShowIcon?: boolean;
  color?: string;
  onChangeText?: (text: string) => void;
  onFocus?: () => void;
  onLostFocus?: () => void;
  onPressIcon?: () => void;
  onPress?: () => void;
  dontShowKeyboard?: boolean;
  secure?: boolean
  numOfLine?: number;
  multiLine?: boolean;
  height?: number
}

export const BaseInput: React.FunctionComponent<IBaseInputProps> = props => {
  const disableKeyboard = () => {
    props.dontShowKeyboard ? Keyboard.dismiss() : null
  }

  const heightOfInput = () => {
    if (props.height !== undefined) {
      return props.height;
    } else {
      return 20
    }
  }

  return (
    <>
      <Input
        containerStyle={{ marginBottom: 10, flex: 3, height: 40 }}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
        errorMessage={props.error}
        errorStyle={{ color: 'red' }}
        onFocus={() => { disableKeyboard() }}
        onBlur={props.onLostFocus}
        inputStyle={{ fontSize: 16, height: heightOfInput() }}
        onTouchEnd={props.onPress}
        secureTextEntry={props.secure}
        numberOfLines={props.numOfLine}
        multiline={props.multiLine}
      />
    </>
  )
}