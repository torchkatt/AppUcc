import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image, icon } from 'react-native';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation'
import Inicio from './Inicio'
import Menu from './Menu'
import Emisora from './Emisora'

const AppNavigator = createStackNavigator ({
  Inicio: {screen: Inicio},
  Menu: {screen: Menu}, 
  Emisora: {screen: Emisora},
})

const icons = {
  inicio: require('./assets/home.png'),
  inicioFocus: require('./assets/home-focus.png'),
  menu: require('./assets/menu.png'),
  menuFocus: require('./assets/menu-focus.png'),
}

const BottomNavigator = createBottomTabNavigator({
  Inicio: {screen: Inicio},
  Menu: {screen: Menu},
  Emisora: {screen: Emisora},
},
{
navigationOptions: ({navigation})=>({
  tabBarIcon: ({focused}) => {
    const {routeName} = navigation.state
    let icon;
    if(routeName === 'Inicio') {
      icon = focused ? icons.inicioFocus : icons.inicio
    }
    else if (routeName === 'Menu') {
      icon = focused ? icons.menuFocus : icons.menu
    }
    return  < Image source = {icon} style = {{width: 20, height: 20}} />
  }
})
})

//const AppContainer = createAppContainer(AppNavigator);
const AppContainer = createAppContainer(BottomNavigator);

export default AppContainer;

const styles = StyleSheet.create({

});


