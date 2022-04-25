import { url } from 'inspector'
import { styled, globalCss } from '../../stitches.config'
export const globalStyles = globalCss({
  '@font-face': {
    fontFamily: 'Nunito',
    src: 'url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap")'
  },
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    color: '$loContrast'
  },
  body: {
    background: '#121214',
    fontFamily: '$nunito',
    color: '#e1e1e6'
  }
})
