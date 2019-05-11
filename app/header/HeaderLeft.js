import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { withNavigation } from 'react-navigation'
import Icon from '../icon'
import styles from './style'

const hiddenNaviIconInScreens = []
const { NaviIcon } = Icon

const HeaderLeft = ({ navigation }) => {
  const { routeName } = navigation.state

  return (
    <View style={styles.headerLeftContainer}>
      <NaviIcon isHidden={hiddenNaviIconInScreens.includes(routeName)} navigation={navigation} />
    </View>
  )
}

HeaderLeft.propTypes = {
  navigation: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
}

export default withNavigation(HeaderLeft)
