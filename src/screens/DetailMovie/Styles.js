import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  containerHeader: {
    height: windowHeight * 0.2,
    marginBottom: windowHeight * -0.05,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textHeader: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    marginHorizontal: 10,
  },
  buttonHeader: {
    // marginRight: 50,
  },
  containerTitle: {
    height: windowHeight * 0.2,
  },
  textTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    justifyContent: 'flex-start',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  liniearGradient: {
    width: '100%',
    height: '90%',
    position: 'absolute',
    borderRadius: 10,
  },
  textIndex: {
    color: 'white',
    marginTop: windowHeight * 0.2,
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
    width: windowWidth * 1,
    height: windowHeight * 0.75,
    borderRadius: 7,
    resizeMode: 'contain',
  },
});

export default styles;
