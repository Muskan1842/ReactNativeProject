import React, { useState } from 'react';
import { Component, Node } from 'react';
import ContainerComponent from './ContainerComponent';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  FlatList,
  Image
} from 'react-native';

export default function App() {

  const [textInputValue, setTextInputValue] = useState('');
  const [cardData, setCardData] = useState([]);
  const [nextPgToken, setNextPgToken] = useState('');

  const nextPageData = () => {
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&pageToken=${nextPgToken}&q=${textInputValue}&type=video&key=AIzaSyBLb7paIYHUcVnoxaVul3i1vFHAYwnYZ4I`)
      .then(response => response.json()).then(data => {
        setCardData([...cardData, ...data.items])
        setNextPgToken(data.nextPageToken)
        console.log(nextPgToken)
      })
  }
  const fetchQuery = () => {
    console.log('Check Log')
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&pageToken=&q=${textInputValue}&type=video&key=AIzaSyBLb7paIYHUcVnoxaVul3i1vFHAYwnYZ4I`)
      .then(response => response.json()).then(data => {

        setCardData(data.items)
        setNextPgToken(data.nextPageToken)


      })
    console.log(nextPgToken)
  }
  return (
    <View style={styles.whole} >
      <TextInput
        style={styles.textInput}
        onChangeText={(val) => setTextInputValue(val)} />
      <View style={styles.searchButton}>
        <Button color='#14161a'
          title='Search'
          onPress={() => fetchQuery()} />
      </View>

      <FlatList
        horizontal
        data={cardData}
        keyExtractor={(item) => item.id.videoId}
        renderItem={({ item }) => {
          return <ContainerComponent
            videoId={item.id.videoId}
            videoTitle={item.snippet.title}
            videoThumbnail={item.snippet.thumbnails.high.url}
            videoChannel={item.snippet.channelTitle}
          ></ContainerComponent>
        }}
        onEndReached={() => nextPageData()}
        onEndReachedThreshold={0}
      />
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
  flatlist: {
    marginHorizontal: 32,
  },
  whole: {
    flex: 1,
    backgroundColor: '#4a4c50',

    alignItems: 'center'
  },

  searchbar: {
    flex: 1,
    flexDirection: 'row',
    width: '97%'
  },

  searchButton: {
    height: 45,
    padding: 5,
    borderBottomLeftRadius: 13,
    borderTopLeftRadius: 13,
    borderBottomRightRadius: 13,
    borderTopRightRadius: 13,
    marginTop: '3%',
    marginRight: '5%',
  },

  textInput: {
    backgroundColor: 'aliceblue',
    fontWeight: '700',
    width: '83%',
    height: 45,
    marginTop: '3%',
    padding:5,
    borderBottomRightRadius: 13,
    borderBottomLeftRadius: 13,
    borderTopRightRadius: 13,
    borderTopLeftRadius: 13,
  }

});


