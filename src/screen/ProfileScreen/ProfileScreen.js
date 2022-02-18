import { Text, View } from 'react-native';
import styles from '../ProfileScreen/styles';
import React, { useContext } from 'react';
import { AuthContext } from '../../navigation/AuthProvider';


const ProfileScreen = ({ navigation }) => {
  const { user, logout } = useContext(AuthContext);
  return (
    <View style={styles.BackgroundContainer}>
    <Text style={styles.TextTitle}>HomeScreen</Text>
    <Text style={styles.TextTitle}>{user.uid}</Text>
</View>
  );
}

export default ProfileScreen;