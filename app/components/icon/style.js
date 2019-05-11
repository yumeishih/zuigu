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
  naviIcon: {
    color: color.WHITE,
  }
})
