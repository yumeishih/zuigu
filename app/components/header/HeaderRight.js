import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { withNavigation } from 'react-navigation'
import styles from './style'
import BtnSearchWhite from '../svgIcons/BtnSearchWhite';

const hiddenBluetoothIconInScreens = ['Home']
const hiddenSettingInScreens = ['ProtocolDetail']
// const { BluetoothIcon, SettingIcon } = Icon

const HeaderRight = ({ navigation }) => {
  const { routeName } = navigation.state
  return (
    <View style={styles.headerRightContainer}>
     <BtnSearchWhite />
    </View>
  )
}

HeaderRight.propTypes = {
  navigation: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
}

export default withNavigation(HeaderRight)
