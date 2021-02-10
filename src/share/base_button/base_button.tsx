import React from "react"
import { Text, Image, Dimensions } from "react-native"

import { Button } from 'react-native-elements';

export interface IButton {
  title: string;
  typeButton: string;
  backgroundColor?: string;
  fontColor?: string;
  onSubmit: () => void;
  disable?: boolean;
}

export const IButton: React.FunctionComponent<IButton> = props => {
  const typeOfButton = React.useCallback(() => {
    switch (props.typeButton) {
      case "solid":
        return "solid";
      case "clear":
        return "clear";
      case "outline":
        return "outline";
      default:
        return undefined;
    }
  }, [])

  return (
    <Button
      title={props.title}
      disabled={props.disable}
      type={typeOfButton()}
      buttonStyle={{ backgroundColor: props.backgroundColor }}
      titleStyle={{ color: props.fontColor }}
      onPress={() => props.onSubmit()}
    />
  )
}
