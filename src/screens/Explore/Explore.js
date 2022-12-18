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
import {connect} from 'react-redux';
import styles from './Styles';
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Explore = props => {
  const actionSheetRef = useRef();
  const [dataAction, setdataAction] = useState();

  const moveDetailMovie = id => {
    props.navigation.navigate('Detail', {id: id});
  };

  useEffect(() => {
    props.upComing();
    props.Top();
  }, []);

  const ImageLink = 'https://image.tmdb.org/t/p/w500/';
  // console.log('INI UPCOMING', props.upComing(1));
  return (
    <ScrollView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'light-content'}
      />
      <View style={styles.containerHeader}>
        <Text style={styles.textHeader}>Genre Movies</Text>
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.textTitle}>Popular</Text>
        <FlatList
          horizontal
          data={props.dataPopular}
          renderItem={item => {
            return (
              <TouchableOpacity
                style={{marginHorizontal: 5}}
                onPress={() => moveDetailMovie(item.item.id)}>
                <LinearGradient
                  colors={[
                    'rgba(234, 0, 0, 0)',
                    'rgba(0, 0, 0, 0)',
                    item.index == 1
                      ? 'rgba(243, 0, 0, 0.9)'
                      : item.index == 2
                      ? 'rgba(193, 334, 0, 0.9)'
                      : 'rgba(243, 334, 234, 0.9)',
                  ]}
                  style={styles.liniearGradient}>
                  <View style={styles.row}>
                    <Text style={styles.textIndex}>{item.index + 1}</Text>
                    <Text style={styles.textTitleIndexName}>
                      {item.item.original_title}
                    </Text>
                  </View>
                </LinearGradient>
                <Image
                  style={styles.imageContainer}
                  source={{
                    uri: `${ImageLink}${item.item.poster_path}`,
                  }}
                />
              </TouchableOpacity>
            );
          }}></FlatList>
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.textTitle}>Upcoming</Text>
        <FlatList
          horizontal
          data={props.dataTOp}
          renderItem={item => {
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
              </TouchableOpacity>
            );
          }}></FlatList>
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.textTitle}>Trending</Text>
        <FlatList
          horizontal
          data={props.dataPopular}
          renderItem={item => {
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
              </TouchableOpacity>
            );
          }}></FlatList>
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.textTitle}>Now Playing</Text>
        <FlatList
          horizontal
          data={props.dataPopular}
          renderItem={item => {
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
              </TouchableOpacity>
            );
          }}></FlatList>
      </View>
    </ScrollView>
  );
};

const reduxDispacth = dispatch => ({
  upComing: a => dispatch({type: 'GET_MOVIES_POPULAR', passing: a}),
  Top: a => dispatch({type: 'GET_MOVIES_TOP', passing: a}),
});
const reduxState = state => ({
  isLoading: state.movies.isLoading,
  dataPopular: state.movies.dataPopular,
  dataPhone: state.movies.dataUpcoming,
  dataUpcoming: state.movies.dataNowPlaying,
  dataTOp: state.movies.dataTopRated,
});
export default connect(reduxState, reduxDispacth)(Explore);
