import { extendTheme } from '@chakra-ui/react'



const config = {
    initialColorMode: 'system',
    useSystemColorMode: true,
}

const colors = {
    pallete: {
        black: "#000",
        white: "#fff",
        gray: {
            100: "#A0AEC0",
            200: '#718096',
            300: "#2D3748"
        },
        cyan: {
            100: "#0BC5EA",
            200: "#00A3C4",
            300: "#086F83"
        }
    }
}


export const theme = extendTheme({ config, colors, })