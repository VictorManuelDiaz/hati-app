import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get("window");
const height = width * 0.6; //60%

const sliderStyles = StyleSheet.create({
  container: {
    marginTop: 50,
    width,
    height
  },
  scroll: {
    width,
    height
  },
  image: {
    width,
    height,
    resizeMode: 'cover'
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center'
  },
  imageBotton: {
    fontSize: (width / 30),
    color: '#888',
    margin: 3
  },
  imageActiveBotton: {
    fontSize: (width / 30),
    color: '#fff',
    margin: 3
  }
});

export default sliderStyles;
