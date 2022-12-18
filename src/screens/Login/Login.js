import React from 'react';
import {
  View,
  Text,
  Linking,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styles from './Styles';
const Login = props => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        {/* <Text style={styles.textHeader}>Profil</Text> */}
      </View>
      <Image
        style={styles.imageContainer}
        source={require('../../assets/images/Streamee.png')}
      />
      <View style={styles.containerTitle}>
        <Text style={styles.textHeader}>Login</Text>
        <Text style={styles.textHeader2}>Please sign in to continue.</Text>
        <View style={styles.container2}>
          <Text style={styles.textHeader1}>Email</Text>
          <TextInput style={{width: '80%'}}></TextInput>
        </View>
        <View style={styles.container3}>
          <Text style={styles.textHeader1}>Password</Text>
          <TextInput style={{width: '80%'}} secureTextEntry></TextInput>
        </View>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('Main')}
          style={styles.Button}>
          <Text
            style={{
              ...styles.textHeader2,
              color: 'white',
              alignSelf: 'center',
            }}>
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
