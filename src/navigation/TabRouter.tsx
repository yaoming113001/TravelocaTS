import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Search } from "../screens/search/search";
import { RouteStackParamList } from "./RouteParramList";
import { HomeRoutes } from "./HomeRoutes";
import { InformationRoutes } from "./InformationRoutes";

import FontAwesome from "react-native-vector-icons/FontAwesome"

export const DrawerRoutes: React.FunctionComponent<RouteStackParamList<"SignIn">> = ({ }) => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                labelStyle: {
                    fontSize: 14,
                    paddingBottom: 3,
                    fontWeight: "bold"
                },
                activeTintColor: "red"
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeRoutes}
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome name="home" size={25} color={color} />
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome name="search" size={25} color={color} />
                }} />
            <Tab.Screen
                name="Information"
                component={InformationRoutes}
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome name="user" size={25} color={color} />
                }}
            />
        </Tab.Navigator>
    )
}