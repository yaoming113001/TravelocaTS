import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import { RouteHomeList } from "./RouteParramList";
import { Home } from "../screens/home/home";
import { Cart } from "../screens/cart/cart";

export const HomeRoutes: React.FunctionComponent = ({ }) => {
  const Stack = createStackNavigator<RouteHomeList>();
  return (
    <Stack.Navigator initialRouteName="Home" headerMode={"none"}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  )
}