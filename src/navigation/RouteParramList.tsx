import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

export type RouteParramList = {
  SignIn: undefined;
  SignUp: undefined;
  Drawer: undefined;
}

export type RouteHomeParamList = {
  Home: undefined;
  Detail: undefined;
  Cart: undefined;
}


export type RouteStackParamList<T extends keyof RouteParramList> = {
  navigation: StackNavigationProp<RouteParramList, T>;
  route: RouteProp<RouteParramList, T>;
}