import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
  containerHeader: {
    height: windowHeight * 0.1,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    justifyContent: 'center',
  },
  textHeader: {
    color: 'white',
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  textHeader1: {
    width: windowHeight * 0.1,
    color: '#817D7D',
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  textHeader2: {
    color: '#817D7D',
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  containerTitle: {
    height: windowHeight * 0.26,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 10,
  },
  textTitle: {
    color: 'white',
    // marginTop: 30,
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  liniearGradient: {
    width: '100%',
    height: '90%',
    position: 'absolute',
    zIndex: 10000,
    borderRadius: 10,
    bottom: windowWidth * -0,
  },
  textIndex: {
    color: 'white',
    marginTop: windowHeight * 0.12,
    marginHorizontal: 5,
    fontSize: 35,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
  },
  textTitleIndexName: {
    color: 'white',
    marginTop: windowHeight * 0.14,
    fontSize: 15,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: windowWidth * 0.5,
    height: windowWidth * 0.5,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  container2: {
    backgroundColor: '#5A5555',
    borderRadius: 10,
    height: windowHeight * 0.05,
    width: windowWidth * 0.9,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container3: {
    backgroundColor: '#5A5555',
    borderRadius: 10,
    height: windowHeight * 0.05,
    width: windowWidth * 0.9,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  Button: {
    backgroundColor: '#3BAF93',
    borderRadius: 10,
    height: windowHeight * 0.05,
    width: windowWidth * 0.9,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '15%',
    justifyContent: 'center',
  },
});

export default styles;
