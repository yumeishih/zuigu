import React from 'react'
import {
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import ShareFileScreen from '../screens/ShareFileScreen'
import ShareServiceScreen from '../screens/ShareServiceScreen'
import VerifyFileScreen from '../screens/VerifyFileScreen'
import SettingsScreen from '../screens/SettingsScreen'
import Header from '../components/header'
import { color } from '../assets/styles/basicStyle'
import SideMenu from '../components/SideMenu'

const defaultNavigationOptions = () => {
  const { HeaderLeft, HeaderRight } = Header
  return ({
    headerLeft: (<HeaderLeft />),
    headerRight: (<HeaderRight />),
    headerStyle: {
      backgroundColor: color.THEME,
    },
    headerTintColor:  color.WHITE,
  })
}

const HomeStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
      },
    },
  }, { defaultNavigationOptions, },
)

const ShareFileStackNavigator = createStackNavigator(
  {
    ShareFile: {
      screen: ShareFileScreen,
      navigationOptions: {
        title: 'Share File',
      },
    },
  }, { defaultNavigationOptions, },
)

const ShareServiceStackNavigator = createStackNavigator(
  {
    ShareService: {
      screen: ShareServiceScreen,
      navigationOptions: {
        title: 'Share Service',
      },
    },
  }, { defaultNavigationOptions, },
)

const VerifyFileStackNavigator = createStackNavigator(
  {
    VerifyFile: {
      screen: VerifyFileScreen,
      navigationOptions: {
        title: 'Verify File',
      },
    },
  }, { defaultNavigationOptions, },
)

const SettingsStackNavigator = createStackNavigator(
  {
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        title: 'Settings',
      },
    },
  }, { defaultNavigationOptions, },
)

const MainDrawerNavigator = createDrawerNavigator({
  Home: { screen: HomeStackNavigator },
  ShareFile: { screen: ShareFileStackNavigator },
  ShareService: { screen: ShareServiceStackNavigator },
  VerifyFile: { screen: VerifyFileStackNavigator },
  Settings: { screen: SettingsStackNavigator },
}, {
  contentComponent: SideMenu,
  drawerWidth: 300
})


export default MainDrawerNavigator