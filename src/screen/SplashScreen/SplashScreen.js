import React from 'react';
import { SafeAreaView, StatusBar, Image } from 'react-native';
import navigationStrings from '../../constant/navigationStrings';
import Providers from '../../navigation/index';
import LoginScreen from '../LoginScreen/LoginScreen';


const SplashScreen = ({ navigation }) => {

    const gotoTrans = () => {
        navigation.navigate(Providers)
      }

    setTimeout(() => {
        navigation.navigate(Providers)
    }, 2000)

    return (
        <SafeAreaView
            style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#30B2EA'
            }}>
            <StatusBar
                barStyle="light-content"
                hidden={false}
            />

            <Image
                source={require('../../assets/Icons/logo_text.png')}
                style={{ width: 190, height: 220 }}
            />

        </SafeAreaView>
    );
};

export default SplashScreen;
