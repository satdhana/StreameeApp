import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center',
  },
  LiniearGradiend: {
    width: '100%',
    height: '10%',
    position: 'absolute',
    zIndex: 10000,

    top: windowWidth * 0,
  },
  containerImage: {
    flexDirection: 'row',
    position: 'absolute',
    top: 40,
    zIndex: 5000,
    marginHorizontal: 20,
    width: '100%',
  },
  containerMota: {
    backgroundColor: 'rgba(240, 240, 240, 0.3)',
    flex: 0.8,
    borderRadius: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    borderColor: 'rgba(240, 240, 240, 0.4)',
  },
  cotainerMotaView: {
    width: 1,
    height: '70%',
    backgroundColor: 'rgba(240, 240, 240, 0.4)',
  },
  imageFlatlist5: {
    width: windowWidth * 1,
    height: windowHeight * 0.6,
    resizeMode: 'cover',
  },
  textBig: {
    position: 'absolute',
    top: 430,
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 0},
    textShadowRadius: 10,
  },
  LiniearGradiend2: {
    width: '100%',
    height: '10%',
    position: 'absolute',
    top: windowWidth * 0.568,
  },
  containerImageBottom: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 7,
    marginTop: 20,
  },
  imageBottom: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.3,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  containerTextTitileBottom: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
  },
  containerActionSheet: {
    height: 360,
    flexDirection: 'column',
  },
  ImageActionSheet: {
    width: windowHeight * 0.6,
    height: windowHeight * 0.35,
    resizeMode: 'contain',
  },
  LiniearGradiend3: {
    width: '100%',
    height: '10%',
    position: 'absolute',
    top: windowWidth * 0.568,
  },
  Actiontitlesheet: {
    alignSelf: 'center',
    width: '100%',
    height: '10%',
    position: 'absolute',
    top: windowWidth * 0.568,
    left: windowWidth * 0.4,
  },
  textAction: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  ActionOverView: {
    color: '#767E7E',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
