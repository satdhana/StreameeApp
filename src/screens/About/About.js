import React from 'react';
import {
  View,
  Text,
  Linking,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const About = props => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.textHeader}>Profil</Text>
        <Ionicons
          name="enter-outline"
          size={25}
          color="white"
          onPress={() => props.navigation.navigate('Login')}
        />
      </View>
      <Image
        style={styles.imageContainer}
        source={require('../../assets/images/pp.png')}
      />
      <View style={styles.containerTitle}>
        <Text style={styles.textHeader}>Satria Dafa Putra Wardhana</Text>
        <Text
          style={{...styles.textHeader, fontSize: 12, textAlign: 'justify'}}>
          My name is Satria Dafa Putra Wardhana, 23 years old, i was born in
          Semarang. Im graduated since 2017 in automotive engineering vocational
          high school. And i just resigned last year because i want to skill up
          my passion about design and technology. Especially mobile device, i
          have learn little bit about UI/UX so now im excited to learn about
          mobile developer. I learn React Native in Glints Academy, I learn UIUX
          from Build with Angga Bootcamp. And now I work as a UIUX Engineer in
          PT NUsantara Bina Artha to design and develop project with the team.
        </Text>
        <Text
          style={styles.textTitle}
          onPress={() =>
            Linking.openURL(
              'https://www.linkedin.com/in/satria-dafa-putra-wardhana-b60b3b203/',
            )
          }>
          LINKEDIN
        </Text>
      </View>
    </View>
  );
};

export default About;
