import { StyleSheet } from 'react-native';

const membersStyles = StyleSheet.create({
  container: {
    backgroundColor: '#000417',
    width: '100%',
    height: '100%'
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingTop: 20,
    paddingBottom: 20
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 30
  },
  textPrimary: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5
  },
  textSecondary: {
    color: '#9596a1',
    fontSize: 20,
    marginBottom: 5
  },
  textTertiary: {
    color: '#9596a1',
    fontSize: 15,
    marginBottom: 15
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  approve: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 15
  },
});

export default membersStyles;
