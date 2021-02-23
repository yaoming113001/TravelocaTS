import React from "react"
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { isNil, isUndefined } from "lodash";

export interface IButton {
  title: string;
  titleSize?: number;
  titleWeight?: number;
  backgroundColor?: string;
  fontColor?: string;
  onSubmit: () => void;
  typeButton?: string;
  disable?: boolean;
  disableIcon?: boolean;
  icon?: string;
  addStyle?: boolean;
  iconSize?: number;
  iconRight?: boolean;
  borderRadius?: number;
  width?: number;
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
      buttonStyle={props.addStyle ? {
        backgroundColor: props.backgroundColor,
        borderRadius: props.borderRadius,
        width: props.width === 100 ? "100%" : props.width
      } : {}}
      titleStyle={props.addStyle ? {
        color: props.fontColor,
        fontSize: props.titleSize, fontWeight: "bold", margin: 5
      } : {}}
      onPress={() => props.onSubmit()}

      icon={
        <Icon
          name={props.icon?.length ? props.icon : ""}
          size={!isUndefined(props.iconSize) ? props.iconSize : 15}
          color="white"
          style={{ marginLeft: 5, marginRight: 5 }}
        />
      }
      iconRight={props.iconRight}
    />
  )
}
