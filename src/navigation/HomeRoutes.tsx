import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import { RouteHomeParamList } from "./RouteParramList";
import { Home } from "../screens/home/home";
import { Details } from "../screens/details/details";
import { Cart } from "../screens/cart/cart";
import { Categories } from "../screens/categories/categories";
import { Comment } from "../screens/comment/comment";

export const HomeRoutes: React.FunctionComponent = ({ }) => {
  const Stack = createStackNavigator<RouteHomeParamList>();
  return (
    <Stack.Navigator initialRouteName="Home" headerMode={"none"}>
      <Stack.Screen name="Detail" component={Details} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Category" component={Categories} />
      <Stack.Screen name="Comment" component={Comment} />

    </Stack.Navigator>
  )
}