import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import { RouteInformationParamList } from "./RouteParramList";
import { Information } from "../screens/information/information";
import { History } from "../screens/history/history";

export const InformationRoutes: React.FunctionComponent = ({ }) => {
  const Stack = createStackNavigator<RouteInformationParamList>();
  return (
    <Stack.Navigator initialRouteName="Information" headerMode={"none"}>
      <Stack.Screen name="Information" component={Information} />
      <Stack.Screen name="History" component={History} />
    </Stack.Navigator>
  )
}