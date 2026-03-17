

import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

import axios from 'axios';
import { useState, useEffect } from 'react';
import Url from '../constants/Url';


// const itemStyle = StyleSheet.create({
//     image: {
//         width: 300,
//         height: 300,
//     },
// })

const Detail = ({route}) => {

    const [article, setArticle] = useState({});

    const id = route.params.article_id;

    const fetchData = async () =>{
        try {
            const {data: {data}} = await axios.get(Url.GET_ARTICLE_BY_ID + `${id}`)
            console.log(data);
            setArticle(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(
        ()=>{
            fetchData();
        },[1000]
    )

    if(!article){
        return(
            <Text>
                Loading more ...
            </Text>
        )
    }

    return (
        <View style={{alignItems: "center"}} >
            <Text>Detail</Text>
            <Text>{id}</Text>
            <Image
                source={{uri: article.picture?.[0]?.pic1 }}
                style={{ width: 500, height: 500 }}
            />

            <Text>{article.name} </Text>
        </View>
    )
}

export default Detail
