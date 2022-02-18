import { Text, View } from 'react-native';
import styles from '../AppDetails/styles';
import React from 'react';

const AppDetails = ({ navigation }) => {
    return (
        <View style={styles.BackgroundContainer}>
          <Text style = {styles.TextTitle}> Info Screen </Text>
      </View>
  
    );
}

export default AppDetails;