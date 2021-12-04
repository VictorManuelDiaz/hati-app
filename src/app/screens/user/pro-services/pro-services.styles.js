import {  StyleSheet } from 'react-native';

const proServStyles = StyleSheet.create({
  container: {
    backgroundColor: '#090c22'
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#212642',
    padding: 10,
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
    borderRadius: 10,
  },
  titleContainer: {
    alignSelf: 'center',
    width: '60%',
    paddingLeft: 30
  },
  title: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
  subTitle: {
    marginLeft: 10,
    fontSize: 16,
    color: '#f8c30c'
  },
  searchContainer: {
    backgroundColor: '#090c22',
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  search: {
    backgroundColor: '#090c22',
    borderWidth: 0
  }
});

export default proServStyles;
