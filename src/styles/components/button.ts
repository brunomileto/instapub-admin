import { styled } from '../../../stitches.config'

export const Button = styled('button', {
  borderRadius: '$large',
  variants: {
    color: {
      primarySolid: {
        backgroundColor: '$primary',
        color: 'White',
        '&:hover': {
          backgroundColor: '$primaryHover'
        }
      },
      primaryOutline: {
        backgroundColor: 'transparent',
        color: '$primary',
        '&:hover': {
          backgroundColor: '$primaryHover'
        }
      }
    },
    size: {
      large: {
        fontSize: '$btnLarge',
        width: '162px',
        height: '40px',
        fontWeight: '$semiBold'
      },
      medium: {
        fontSize: '$btnMedium',
        width: '100px',
        height: '30px',
        fontWeight: '$regular'
      },
      small: {
        fontSize: '$btnSmall',
        width: '75px',
        height: '25px',
        fontWeight: '$regular'
      }
    }
  }
})
