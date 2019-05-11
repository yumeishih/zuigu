import { StyleSheet } from 'react-native'
import { color, space, font } from '../../assets/styles/basicStyle'

export default StyleSheet.create({
  container: {
  },
  usrInfoContainer: {
    backgroundColor: color.THEME,
    height: 230,
    padding: space.SPACE_SIZE_LG,
    paddingTop: space.SPACE_SIZE_XXL
  },
  avatar: {

  },
  usrName: {
    fontSize: 32,
    fontWeight: font.FONT_WEIGHT_MEDIUM,
    color: color.WHITE,
    marginTop: space.SPACE_SIZE_XS,
    paddingBottom: space.SPACE_SIZE_MD,
  },
  mithContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mith: {
    borderColor: color.WHITE,
    borderWidth: 1.2,
    borderRadius: 50,
    width: 32,
    height: 32
  },
  balanceContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  balance: {
    color: color.WHITE,
    fontSize: 24,
    paddingLeft: 8
  },
  addCoinContainer: {
    borderColor: color.WHITE,
    borderWidth: 1.4,
    borderRadius: 10,
    padding: space.SPACE_SIZE_XS,
  },
  addCoin: {
    color: color.WHITE,
    fontSize: font.FONT_SIZE_MEDIUM,
    fontWeight: font.FONT_WEIGHT_MEDIUM
  },
  menuContainer: {
    padding:space.SPACE_SIZE_LG
  },
  navContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  navItemStyle: {
    fontSize: font.FONT_SIZE_LARGE,
    fontWeight: '600',
    padding: space.SPACE_SIZE_SM,
    margin: space.SPACE_SIZE_MD,
    alignSelf: 'center',
  },
  line: {
    borderBottomColor: color.LIGHT_THEME,
    borderBottomWidth: 0.8,
    marginHorizontal: space.SPACE_SIZE_MD
  }
})
