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
            primaryShadow: '$green100',
            link: '#4ADE7B',
            selection: '$accents5'
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