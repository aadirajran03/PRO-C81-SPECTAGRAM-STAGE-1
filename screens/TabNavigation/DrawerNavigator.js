import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './navigation'
import Profile from '../screens/Profile'

const Drawer = createDrawerNavigator()

const DrawerNavigator = ()=>{
  return(
    <Drawer.Navigator>
        <Drawer.screen name="Home" component={TabNavigator}/>
        <Drawer.screen name="Profile" component={Profile}/>
  );
};
 
 export default DrawerNavigator;