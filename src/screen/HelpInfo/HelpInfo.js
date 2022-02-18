import React from 'react';
import { Text, View } from 'react-native';
import styles from '../HelpInfo/styles';

const HelpInfo = ({ navigation }) => {
  return (
    <View style = {styles.BackgroundContainer}>
      <Text style={styles.TextTitle}>
        Help Information
      </Text>
    </View>
  );
}

export default HelpInfo;