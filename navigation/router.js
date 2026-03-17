
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";

//stacks
import ArticleStack from "./ArticleStack";

const Tabs = createBottomTabNavigator();

export default function AppNavigation(){
    return(
        <NavigationContainer>
            <Tabs.Navigator>
                <Tabs.Screen
                    name="Home"
                    component={ArticleStack}
                />
            </Tabs.Navigator>
        </NavigationContainer>
    )
}

