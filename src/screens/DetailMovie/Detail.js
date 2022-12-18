import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import styles from './Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DetailMovie = props => {
  const actionSheetRef = useRef();
  const [dataAction, setdataAction] = useState();

  useEffect(() => {
    props.detail(props.route.params.id);
  }, []);
  console.log(props.dataDetailMovie);

  const ImageLink = 'https://image.tmdb.org/t/p/w500/';
  return (
    <ScrollView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'light-content'}
      />
      <View style={styles.containerHeader}>
        <TouchableOpacity
          style={styles.buttonHeader}
          onPress={() => props.navigation.goBack()}>
          <Ionicons name="arrow-back-circle" size={25} color="white" />
        </TouchableOpacity>
        <Text style={styles.textHeader}>
          {props.dataDetailMovie.original_title}
        </Text>
      </View>
      <Image
        style={styles.imageContainer}
        source={{
          uri: `${ImageLink}${props.dataDetailMovie.poster_path}`,
        }}></Image>
      <Text style={{...styles.textTitle}}>
        Title : {props.dataDetailMovie.original_title}
      </Text>
      <Text style={{...styles.textTitle}}>
        Popularity : {props.dataDetailMovie.popularity}
      </Text>
      <Text style={{...styles.textTitle}}>
        Oeverview : {props.dataDetailMovie.overview}
      </Text>
    </ScrollView>
  );
};

const reduxDispacth = dispatch => ({
  detail: a => dispatch({type: 'GET_MOVIES_DETAIL', movieId: a}),
});
const reduxState = state => ({
  isLoading: state.movies.isLoading,
  dataDetailMovie: state.movies.detailMovie,
});
export default connect(reduxState, reduxDispacth)(DetailMovie);
