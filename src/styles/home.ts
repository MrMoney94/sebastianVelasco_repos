import {StyleSheet, StatusBar} from 'react-native';
import {wp, hp, colors} from '../utils';

const Home = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    height: hp,
    width: wp,
    backgroundColor: colors.WHITE,
  },
  img: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  imgSprites: {
    width: 120,
    height: 120,
    alignSelf: 'center',
  },
  card: {
    backgroundColor: colors.WHITE,
    width: wp / 2.3,
    marginVertical: 7,
    marginLeft: 17,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  nameFont: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    paddingBottom: 10,
    color: colors.BLUEDARK,
  },
  numberFont: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
  },
  headerContainer: {
    padding: 10,
  },
  mainTitle: {
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.BLUE,
    textAlign: 'center',
  },
  headerTitleFlex: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputContainer: {
    marginVertical: 15,
  },
  inputSearch: {
    borderWidth: 1,
    borderColor: colors.GRAY,
    width: wp - 60,
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  modalViewContainer: {
    height: hp,
    width: wp,
    backgroundColor: colors.WHITE,
    paddingTop: 70,
  },
  titleItem: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: '500',
    paddingLeft: 15,
  },
  spritesView: {
    borderWidth: 1,
    borderRadius: 100,
    height: 80,
    width: 80,
    borderColor: colors.GRAY,
  },
});

export default Home;
