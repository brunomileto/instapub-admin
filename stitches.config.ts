import { createStitches } from '@stitches/react'
import {
  teal,
  crimson,
  gray,
  indigo,
  red,
  tomato,
  cyan
} from '@radix-ui/colors'

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    fonts: {
      nunito: 'Nunito'
    },

    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '24px',
      5: '32px'
    },

    colors: {
      hiContrast: 'hsl(206,10%,5%)',
      loContrast: 'white',
      ...indigo,
      ...crimson,
      ...teal,
      ...cyan,
      ...gray,
      ...tomato,

      primary: '$indigo9',
      primaryHover: '$indigo10',
      secondary: '$indigo3',
      secondaryHover: '$indigo4',
      tertiary: '$crimso7',
      tertiaryHover: '$crimson8',

      success: '$teal7',
      successHover: '$teal8',
      warning: '$tomato7',
      warningHover: '$tomato8',
      error: '$red8',
      errorHover: '$red9',
      info: '$cyan7',
      infoHover: '$cyan8'
    },

    radii: {
      square: '0px',
      small: '4px',
      large: '8px',
      xl: '12px',
      xxl: '16px',
      pill: '100px'
    },

    fontWeights: {
      bold: '700',
      semiBold: '600',
      regular: '400'
    },

    fontSizes: {
      display1: '80px',
      display2: '72px',
      display3: '64px',
      display4: '56px',
      display5: '48px',
      display6: '40px',

      heading1: '36px',
      heading2: '28px',
      heading3: '20px',
      heading4: '18px',
      heading5: '16px',
      heading6: '14px',

      btnLarge: '14px',
      btnMedium: '12px',
      btnSmall: '10px'
    }
  }
})
