import React from 'react'
import IcHome from '../svgIcons/IcHome'
import IcService from '../svgIcons/IcService'
import IcShareFile from '../svgIcons/IcShareFile'
import IcSetting from '../svgIcons/IcSetting'
import IcVerify from '../svgIcons/IcVerify'

const MenuIcon = ({ type }) => {
  switch(type) {
    case 'Home': return <IcHome width={36} height={36} />
    case 'ShareService': return <IcService width={36} height={36} />
    case 'ShareFile': return <IcShareFile width={36} height={36} />
    case 'VerifyFile': return <IcVerify width={36} height={36} />
    case 'Settings': return <IcSetting width={36} height={36} />
  }
}

export default MenuIcon
