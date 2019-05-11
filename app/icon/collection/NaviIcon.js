import React from 'react'
import PropTypes from 'prop-types'
import BasicIcon from '../BasicIcon'
import styles from '../style'

const NaviIcon = ({ isHidden, navigation }) => {
  const handleOnPress = () => (navigation.openDrawer())

  return (
    <BasicIcon
      isHidden={isHidden}
      onPress={handleOnPress}
      name="md-menu"
      style={styles.naviIcon}
    />
  )
}

NaviIcon.defaultProps = {
  isHidden: false,
}

NaviIcon.propTypes = {
  navigation: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  isHidden: PropTypes.bool,
}

export default NaviIcon
