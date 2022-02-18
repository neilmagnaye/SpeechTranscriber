import React from 'react';
import { SafeAreaView, StatusBar, Image } from 'react-native';
import navigationStrings from '../../constant/navigationStrings';
import Routes from '../../navigation/Routes';


const SplashScreen = ({ navigation }) => {

    setTimeout(() => {
        navigation.replace(navigationStrings.ONBOARD);
    }, 5000)

    return (
        <SafeAreaView
            style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff'
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
