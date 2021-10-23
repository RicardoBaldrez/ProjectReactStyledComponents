import React from 'react'

import ThemeOn from '../../assets/images/themeOn.svg' 
import ThemeOff from '../../assets/images/themeOff.svg' 
import { Icon } from '../UI'

const light = <Icon src={ThemeOn} alt="Light theme" />
const dark = <Icon src={ThemeOff} alt="Dark theme" />

export default (({ theme }) => theme ? dark : light)
