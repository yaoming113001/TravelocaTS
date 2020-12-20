import React from "react"
import { View, ViewProps, Text, StyleProp, ViewStyle, SafeAreaView } from "react-native"

export interface IContainerProps extends ViewProps {
  horizontal?: boolean;
  fullScreen?: boolean;
  reverse?: boolean;
  verticalAlign?: "flex-start" | "flex-end" | "center";
  horizontalAlign?: "flex-start" | "flex-end" | "center";
  safe?: boolean;
  overlay?: boolean;
}

export const Container: React.FC<IContainerProps> = props => {
  const fullScreenStyle = props.fullScreen ? { flex: 1 } : {};

  const directionStyle: StyleProp<ViewStyle> = props.horizontal
    ?
    {
      flexDirection: props.reverse ? "row-reverse" : "row",
      justifyContent: props.horizontalAlign,
      alignItems: props.verticalAlign
    }
    :
    {
      flexDirection: props.reverse ? "column-reverse" : "column",
      justifyContent: props.verticalAlign,
      alignItems: props.horizontalAlign
    };
  const overlayStyle = props.overlay
    ? {
      flex: 1,
      position: "absolute",
      left: 0,
      top: 0,
      opacity: 0.5,
      backgroundColor: "black",
      zIndex: 10
    }
    : {};
  return props.safe ? (
    <SafeAreaView
      style={[fullScreenStyle, directionStyle, overlayStyle, props.style]}
    >
      {props.children}
    </SafeAreaView>
  ) : (
      <View style={[fullScreenStyle, directionStyle, overlayStyle, props.style]}>
        {props.children}
      </View>
    );
}