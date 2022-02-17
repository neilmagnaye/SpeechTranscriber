import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  resultTextContainer: {
    flex: 1,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 32,
    color: 'black',
    textTransform: 'capitalize',
    justifyContent: 'center',
  },
  errorText: {
    fontSize: 24,
    color: 'red',
  },
  btnText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  btnSpeech: {
    marginTop: 20,
    width: 250,
    height: 250,
    borderRadius: 250,
    display: 'flex',
    justifyContent: 'center',
  },
  btnStart: {
    backgroundColor: 'green',
  },
  btnStop: {
    backgroundColor: 'red',
  },
})


export default styles;