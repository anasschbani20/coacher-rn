import { Dimensions, Platform } from 'react-native'
import icons from '../assets/icons'
import images from '../assets/images'
function isIPhoneX() {
  return Platform.OS === 'ios' && Dimensions.get('window').height === 812
}

const padding = 20
const safeTop = isIPhoneX() ? 34 : 22
const safeBottom = isIPhoneX() ? 34 : 0
const { width } = Dimensions.get('window')
export const Images = images
export const Icons = icons
export const ScreenOffsets = {
  top: safeTop,
  left: 0,
  bottom: safeBottom,
  right: 0,
}

export default {
  backgroundColor: '#3B7FC9',
  mainColor: '#3B7FC9',
  lightBlue: '#CBD1DC',

  milkcoffee: '#A58153',
  yellow: '#F9D001',
  red: '#EE162A',
  blue: '#00519D',
  green: '#009E56',
  lightgray: '#f5f5f5',

  grey: '#333745',
  linkColor: '#4b87a7',
  border: '#d3d8db',
  padding:20,
  cloudHeight:200,
  white:(percent)=>`rgba(255,255,255,${percent / 100})`,
  black:(percent)=>`rgba(0,0,0,${percent / 100})`,
  shadow:{
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    backgroundColor: '#f1f4f7',
  },
}