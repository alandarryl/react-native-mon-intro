
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screen/Home";
import Post from "../screen/Post";
import Detail from "../screen/Detail";

const Stack = createNativeStackNavigator();


export default function ArticleStack(){

    return(
        <Stack.Navigator>

            <Stack.Screen name="Home" component={Home}  />
            <Stack.Screen name="Post" component={Post}  />
            <Stack.Screen name="Detail" component={Detail}  />

        </Stack.Navigator>
    )

}

