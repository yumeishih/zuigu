
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import {
  ScrollView,
  Text,
  View,
  Image,
} from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import IcMith from '../svgIcons/IcMith'
import MenuIcon from './MenuIcon'
import styles from './style'

const mainMenu = [
  { screen: 'Home', wording: 'Home'},
  { screen: 'ShareFile', wording: 'Share a file'},
  { screen: 'ShareService', wording: 'Share a Service'},
  { screen: 'VerifyFile', wording: 'Verify file'},
]

// Fake Data
const fakeUsrInfo = {
  usrName: 'Kiyumi',
  avatar: '../../assets/images/fake/avatar.png',
  balance: 1200
}

const subMenu = [
  { screen: 'Settings', wording: 'Settings'},
]

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  renderUsrInfo = (userInfo) => {
    return (
      <>
        <Avatar
          rounded
          size="large"
          source={require('../../assets/images/fake/avatar.jpg')}
          title={userInfo.usrName}
        />
        <Text style={styles.usrName}>{userInfo.usrName}</Text>
        <View style={styles.mithContainer}>
          <View style={styles.balanceContainer}>
            <View style={styles.mith}><IcMith width={28} height={28}/></View>
            <Text style={styles.balance}>{userInfo.balance}</Text>
          </View>
          <Button
            title="Add Coin"
            type="outline"
            buttonStyle={styles.addCoinContainer}
            titleStyle={styles.addCoin}
          />
        </View>
      </>
    )
  }

  renderNavItem = (navItem) => {
    return (
      <View key={navItem.screen} style={styles.navContainer}>
        <MenuIcon type={navItem.screen}/>
        <Text style={styles.navItemStyle} onPress={this.navigateToScreen(navItem.screen)}>
          {navItem.wording}
        </Text>
      </View>
    )

  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.usrInfoContainer}>{this.renderUsrInfo(fakeUsrInfo)}</View>
        <View style={styles.menuContainer}>
          <ScrollView>
            {mainMenu.map(this.renderNavItem)}
          </ScrollView>
        </View>
        <View style={styles.line} />
        <View style={styles.menuContainer}>
          <ScrollView>
            {subMenu.map(this.renderNavItem)}
          </ScrollView>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;
