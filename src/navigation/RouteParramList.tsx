import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

export type RouteParramList = {
  SignIn: undefined;
  SignUp: undefined;
  Drawer: undefined;
  Welcome: undefined;
}

export type RouteHomeParamList = {
  Home: undefined;
  Detail: undefined;
  Cart: undefined;
  Category: undefined;
  Comment: undefined;
  Booking: undefined;
}


export type RouteStackParamList<T extends keyof RouteParramList> = {
  navigation: StackNavigationProp<RouteParramList, T>;
  route: RouteProp<RouteParramList, T>;
}

export type HomeStackParamList<T extends keyof RouteHomeParamList> = {
  navigation: StackNavigationProp<RouteHomeParamList, T>;
  route: RouteProp<RouteHomeParamList, T>;
}