import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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
    <Ionicons
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
  style: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  isHidden: PropTypes.bool,
  size: PropTypes.number,
}

export default BasicIcon
