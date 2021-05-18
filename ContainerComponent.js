import React, { useState } from 'react';
import { Component, Node } from 'react';
import {
    StyleSheet,
    Text,

    View,
    TextInput,
    Button,
    FlatList,
    Image,
    YellowBox
} from 'react-native';

export default function ContainerComponent(props) {
    return (<View>
        <Image
            style={styles.containerImage}
            source={{ uri: props.videoThumbnail }} />
        <View style={styles.containerContent}>
            <Text style={{ fontSize: 17, color: 'white' }} numberOfLines={2}>{props.videoTitle} </Text>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }} >{props.videoChannel}</Text>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        elevation: 7,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 1,
        shadowColor:'black',
    },
    containerImage: {
        marginLeft: 32,
        paddingHorizontal: 24,
        shadowColor:'black',
        elevation: 7,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 1,
        width: 330,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        height: 500,
        justifyContent: 'center',
    },
    containerContent: {
        marginLeft: 32,
        marginTop: 12,
        marginBottom: 50,
        width: 330,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        height: 120,

        elevation: 7,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 1,
        shadowColor:'black',

        paddingHorizontal: 24,
        justifyContent: 'center',
        backgroundColor: '#14161a',
        fontSize: 17,
        padding: 10,
        fontWeight: 'bold',
        alignItems: 'center'

    },
});