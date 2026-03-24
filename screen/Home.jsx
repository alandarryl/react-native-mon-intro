
import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native'
import React from 'react';

import axios from 'axios';

import Url from '../constants/Url';

import { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';


const itemStyle = StyleSheet.create({
    image: {
        width: 300,
        height: 300,
    },
})

export default function Home({navigation}) {

    const [article, setArticle] = useState([])

    const fetchData = async ()=>{
        try {
            const {data: {data}} = await axios.get(Url.GET_ARTICLE);
            setArticle(data);
            console.log(Url.GET_ARTICLE);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(
        ()=>{
            fetchData();
        },[]
    )

    useFocusEffect(
        React.useCallback(()=>{
            fetchData();
        },[])
    )

    const renderItem = ({item}) =>{
        return(
        <Pressable
            onPress={()=>{
                navigation.navigate('Detail', {article_id: item.id} )
            }}
        >
        
            <Image
                source={{uri: item.picture[0]?.pic1}}
                style={itemStyle.image}
            />
            <Text>
                {item.name}
            </Text>
        </Pressable>
        )
    }

    return (
        <View 
            style={{flex: 1, alignItems: "center"}} 
            
        >
        <Text>Home</Text>
            <FlatList
                data={article}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                numColumns={2}
            />
        </View>
    )
}


