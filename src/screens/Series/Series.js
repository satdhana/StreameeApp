import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  FlatList,
  Dimensions,
  ScrollView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import styles from './Styles';
import {connect} from 'react-redux';
const Series = props => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  useEffect(() => {
    props.latest();
  }, []);
  const ImageLink = 'https://image.tmdb.org/t/p/w500/';
  console.log('ini latest', props.dataLatest);
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.textHeader}>TV</Text>
      </View>
      <Text
        style={{
          color: 'red',
          alignSelf: 'center',
          marginTop: windowHeight * 0.35,
        }}>
        Sorry, we are under maintenance
      </Text>
      {/* <Text style={{color: 'red'}}>{props.dataLatest.name}</Text> */}

      {/* <FlatList
        // horizontal
        data={props.dataLatest}
        renderItem={item => {
          console.log(item);
          return (
            <TouchableOpacity
              style={{marginHorizontal: 5}}
              onPress={() => moveDetailMovie(item.item.id)}>
              <Image
                style={styles.imageContainer}
                source={{
                  uri: `${ImageLink}${item.item.poster_path}`,
                }}
              />
              <Text>{item.item.name}</Text>
            </TouchableOpacity>
          );
        }}></FlatList> */}
    </View>
  );
};

const reduxDispacth = dispatch => ({
  latest: () => dispatch({type: 'GET_MOVIES_LATEST'}),
});
const reduxState = state => ({
  isLoading: state.movies.isLoading,
  dataLatest: state.movies.dataLatest,
});
export default connect(reduxState, reduxDispacth)(Series);
