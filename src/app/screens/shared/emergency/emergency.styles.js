import { StyleSheet } from 'react-native';

const emergencyStyles = StyleSheet.create({
  container: {
    backgroundColor: '#000417',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#212642',
    height: 150,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    margin: 10
  },
  image: {
    width: 95,
    height: 95,
    resizeMode: 'cover',
    borderRadius: 10
  },
  title: {
    width: '50%',
    fontSize: 18,
    color: '#ffffff',
    marginLeft: 40
  },
  button: {
    alignSelf: 'center',
    elevation: 0,
    backgroundColor: 'transparent'
  },
  icon: {
    color: "#ffffff",
    fontSize: 14
  }
});

export default emergencyStyles;
