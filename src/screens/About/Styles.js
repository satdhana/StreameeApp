import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
  containerHeader: {
    marginTop: 20,
    height: windowHeight * 0.15,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  textHeader: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 10,
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
    borderRadius: windowWidth * 0.5,
    alignSelf: 'center',
  },
});

export default styles;
