import { Icon, Input } from "react-native-elements"
import React from "react"
import styles from "./base_input_style"

export interface IBaseInputProps {
  title: string;
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
}

export const BaseInput: React.FunctionComponent<IBaseInputProps> = props => {
  return (
    <>
      <Input
        containerStyle={{ marginBottom: 5 }}
        label={props.title}
        labelStyle={styles.titleInput}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
        errorMessage={props.error}
        errorStyle={{ color: 'red' }}
        onFocus={props.onFocus}
        onBlur={props.onLostFocus}
        rightIcon={
          <Icon
            name={`${props.icon}`}
            type="font-awesome"
            color='#909090'
            onPress={props.onPressIcon} />
        }
      />
    </>
  )
}