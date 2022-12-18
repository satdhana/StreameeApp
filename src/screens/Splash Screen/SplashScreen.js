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
const SplashScreen = props => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={styles.container}>
      <Image
        style={{
          width: windowWidth * 0.2,
          height: windowHeight * 0.2,
          resizeMode: 'contain',
        }}
        source={require('../../assets/images/Streamee.png')}></Image>
    </View>
  );
};

export default SplashScreen;
