import { 
  lightContent, 
  lightBackground, 
  textLightBackground, 
  darkContent, 
  darkBackground, 
  textDarkBackground 
} from './variables'

export const lightTheme = {
  body: lightBackground,
  inside: lightContent,
  text: textLightBackground,
  filter: '',
}

export const darkTheme = {
  body: darkBackground,
  inside: darkContent,
  text: textDarkBackground,
  filter: "invert(100%)",
}