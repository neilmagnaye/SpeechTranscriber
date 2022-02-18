import React from "react";
import  'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer";
import navigationStrings from "../constant/navigationStrings";
import MenuTab from "./MenuTab";
import ProfileTab from "./ProfileTab";
import DetailsTab from "./DetailsTab";

const Drawer = createDrawerNavigator();

function AppStack({navigation}) {
  return (
      <Drawer.Navigator
        screenOption={{ headerShown: false }}
      >
        <Drawer.Screen component={MenuTab} name = {navigationStrings.MENU}/>
        <Drawer.Screen component={ProfileTab} name = {navigationStrings.PROFILE}/>
        <Drawer.Screen component={DetailsTab} name = {navigationStrings.APPDETAILS}/>
      </Drawer.Navigator>

  );
}

export default AppStack;

