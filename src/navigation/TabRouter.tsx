import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from "../screens/home/home";
import { Categories } from "../screens/categories/categories";
import { Search } from "../screens/search/search";
import { Information } from "../screens/information/information";
import { RouteStackParamList } from "./RouteParramList";

export const DrawerRoutes: React.FunctionComponent<RouteStackParamList<"SignIn">> = ({ }) => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator initialRouteName="Home" >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Categories" component={Categories} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Information" component={Information} />
        </Tab.Navigator>
    )
}