import {
  PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import Voice from '@react-native-voice/voice'
import styles from './styles'

const Transcription = () => {
  const [isListening, setIsListening] = useState(false)
  const [results, setResults] = useState()
  const [partialResults, setPartialResults] = useState()
  const [error, setError] = useState()

  const requestRecordAudioPermission = async () => {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
    )
  }

  const onStart = () => {
    setIsListening(true)
  }

  const onEnd = () => {
    setIsListening(false)
  }

  const onError = (error) => {
    setError(error.message)
    setIsListening(false)
  }

  const onResults = (results) => {
    setResults(results.value)
    stopTranscription()
  }

  const onPartialResults = (partialResults) => {
    setPartialResults(partialResults.value[0])
  }

  useEffect(() => {
    Voice.onSpeechStart = onStart
    Voice.onSpeechEnd = onEnd
    Voice.onSpeechError = onError
    Voice.onSpeechResults = onResults
    Voice.onSpeechPartialResults = onPartialResults

    return () => {
      Voice.destroy().then(Voice.removeAllListeners)
    }
  }, [])

  const startTranscription = async () => {
    await Voice.start()
  }

  const stopTranscription = async () => {
    await Voice.stop()
  }

  useEffect(() => {
    requestRecordAudioPermission()
  }, [])

  const speechButtonStyle = useMemo(
    () => ({
      ...styles.btnSpeech,
      ...(isListening ? styles.btnStop : styles.btnStart),
    }),
    [styles, isListening]
  )

  const speechButtonText = useMemo(
    () => (isListening ? 'Stop' : 'Start'),
    [isListening]
  )

  const onSpeechButtonPress = useCallback(() => {
    isListening ? stopTranscription() : startTranscription()
  }, [isListening])

  return (
    <View style={styles.container}>
      <View style={styles.resultTextContainer}>
        <Text style={styles.resultText}>
          {partialResults}
        </Text>
        <Text style={styles.errorText}>{error}</Text>
      </View>
      <TouchableOpacity
        style={speechButtonStyle}
        onPress={onSpeechButtonPress}
      >
        <Text style={styles.btnText}>
          {speechButtonText}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Transcription;

