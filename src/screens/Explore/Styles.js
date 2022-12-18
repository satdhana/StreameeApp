import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {
    height: windowHeight * 0.15,
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
  containerTitle: {
    height: windowHeight * 0.26,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  textTitle: {
    color: 'white',
    // marginTop: 30,
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
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
    // justifyContent: 'center',
    alignItems: 'center',
  },
  textTitleIndexName: {
    width: windowHeight * 0.1,
    justifyContent: 'flex-start',
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    bottom: -50,
  },
  imageContainer: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.2,
    borderRadius: 15,
  },
});

export default styles;
