

import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnBoarding, Login, SignUp, SplashScreen } from '../screen'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import navigationStrings from '../constant/navigationStrings';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  const gotoLog = () => {
    navigation.navigate(navigationStrings.LOGIN)
  }

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
      } else {
        setIsFirstLaunch(false);
      }
    });

    GoogleSignin.configure({
      webClientId: '690775934065-qhkjrkq5t38cb96c4e4gm5drvrs6j8qg.apps.googleusercontent.com',
    });


  }, []);

  // if (isFirstLaunch === null) {
  //   return null;
  // } else if (isFirstLaunch == true) {
  //   routeName = navigationStrings.ONBOARD;
  // } else {
  //   routeName = navigationStrings.SPLASH;
  // }

  return (
    <Stack.Navigator initialRouteName={routeName}>
            <Stack.Screen
        name={navigationStrings.SPLASH}
        component={SplashScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name={navigationStrings.ONBOARD}
        component={OnBoarding}
        options={{ header: () => null }}
      />

      <Stack.Screen
        name={navigationStrings.LOGIN}
        component={Login}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name={navigationStrings.SIGNUP}
        component={SignUp}
        options={({ navigation }) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <FontAwesome.Button
                name="long-arrow-left"
                size={25}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => navigation.navigate(navigationStrings.LOGIN)}
              />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;