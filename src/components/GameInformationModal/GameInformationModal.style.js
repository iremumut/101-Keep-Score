import {StyleSheet, Dimensions} from 'react-native';
import AppStyles from '../../constants/AppStyles';

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: width,
    height: height,
  },
  container: {
    flex: 1,
    width: '90%',
    height: 230,
    position: 'absolute',
    alignSelf: 'center',
    top: '30%',
    borderRadius: 20.47,
  },
  backgroundImage: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  text: {
    color: AppStyles.color.white,
    fontFamily: 'ReadexPro-Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 18,
  },
  playerCountInput: {
    borderBottomColor: AppStyles.color.white,
    borderBottomWidth: 1,
    width: 35,
    textAlign: 'center',
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  upDownButtons: {
    //backgroundColor: 'pink',
  },
});
