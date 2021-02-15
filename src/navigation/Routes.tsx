import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SignIn } from "../screens/signin/sign_in";
import { SignUp } from "../screens/signup/sign_up";
import { RouteParramList } from "./RouteParramList";
import { DrawerRoutes } from "./TabRouter"

export const Routes: React.FunctionComponent = ({ }) => {
  const Stack = createStackNavigator<RouteParramList>();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn" headerMode={"none"}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Drawer" component={DrawerRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}