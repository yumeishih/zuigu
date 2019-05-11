import { StyleSheet } from 'react-native'
import { color, space } from '../../assets/styles/basicStyle'


export default StyleSheet.create({
  basicIcon: {
    color: color.GRAY,
    paddingHorizontal: space.SPACE_SIZE_XS,
  },
  basicIconHidden: {
    display: 'none',
  },
  bluetoothIcon: {
  },
  bluetoothIconConnected: {
    color: color.INDIGO,
  },
  naviIcon: {
    color: color.WHITE,
  },
  settingIcon: {
  },
  plusIcon: {
    color: color.WHITE,
  },
  resultIcon: {
    paddingLeft: space.SPACE_SIZE_SM,
  },
  resultIconUntested: {
  },
  resultIconSuccess: {
    color: color.LIGHT_GREEN,
  },
  resultIconFail: {
    color: color.RED,
  },
})
