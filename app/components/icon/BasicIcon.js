import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome';
import { flatten } from 'lodash'
import styles from './style'

const BasicIcon = ({
  name, onPress, style, isHidden, size,
}) => {
  const basicIconStyle = flatten([
    styles.basicIcon,
    style,
    isHidden && styles.basicIconHidden,
  ])

  return (
    <Icon
      style={basicIconStyle}
      onPress={onPress}
      name={name}
      size={size}
    />
  )
}

BasicIcon.defaultProps = {
  isHidden: false,
  style: null,
  onPress: null,
  size: 24,
}

BasicIcon.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  style: PropTypes.any,
  isHidden: PropTypes.bool,
  size: PropTypes.number,
}

export default BasicIcon
