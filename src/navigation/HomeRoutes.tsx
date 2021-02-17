import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SignIn } from "../screens/signin/sign_in";
import { SignUp } from "../screens/signup/sign_up";
import { RouteParramList, RouteHomeParamList } from "./RouteParramList";
import { DrawerRoutes } from "./TabRouter"
import { Home } from "../screens/home/home";
import { Details } from "../screens/details/details";
import { Cart } from "../screens/cart/cart";
import { Categories } from "../screens/categories/categories";

export const HomeRoutes: React.FunctionComponent = ({ }) => {
  const Stack = createStackNavigator<RouteHomeParamList>();
  return (
    <Stack.Navigator initialRouteName="Home" headerMode={"none"}>
      <Stack.Screen name="Detail" component={Details} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Category" component={Categories} />

    </Stack.Navigator>
  )
}