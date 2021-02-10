import { Icon, Input } from "react-native-elements"
import React from "react"
import styles from "./base_input_style"
import { Keyboard } from "react-native"

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
}

export const BaseInput: React.FunctionComponent<IBaseInputProps> = props => {
  const disableKeyboard = () => {
    props.dontShowKeyboard ? Keyboard.dismiss() : null
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
        inputStyle={{ fontSize: 14 }}
        onTouchEnd={props.onPress}
      />
    </>
  )
}