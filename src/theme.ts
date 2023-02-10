import { createTheme } from "@nextui-org/react"


const theme = createTheme({
    type: 'light',
    theme: {
        colors: {
            primaryLight: '$green200',
            primaryLightHover: '$green300',
            primaryLightActive: '$green400',
            primaryLightContrast: '$green600',
            primary: '#4ADE7B',
            primaryBorder: '$green500',
            primaryBorderHover: '$green600',
            primarySolidHover: '$green700',
            primarySolidContrast: '$white',
            primaryShadow: '$green500',
            link: '#4ADE7B',
            selection: '$accents5',

            secondaryLight: '$gray200',
            secondaryLightHover: '$gray300',
            secondaryLightActive: '$gray400',
            secondaryLightContrast: '$gray600',
            secondary: 'black',
            secondaryBorder: '$gray500',
            secondaryBorderHover: '$gray600',
            secondarySolidHover: '$gray700',
            secondarySolidContrast: '$white',
            secondaryShadow: '$gray500',
          },
        //   fonts: {
        //     sans: 'Quicksand',
        //     mono: 'Josefin Sans'
        //   }
        fonts: {
            sans: 'Poppins',
            mono: 'Quicksand'
          }
    }
})


export default theme