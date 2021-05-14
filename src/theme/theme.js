import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'


const fonts = {

    body: "Source Sans Pro, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
}

// todo - choose the brand colors

const colors = {};

const breakpoints = createBreakpoints({
    sm: '34em',
    md: '40em',
    lg: '48em',
    xl: '60em',
    '2xl': '75em'
})

const theme = extendTheme({
    colors: colors,
    // todo set the focus outline color
    shadows: {
        outline: '0 0 0 3px rgba(66, 153, 225, 0.6);'
    },
    fonts,
    breakpoints,
    styles: {
        global: {
            // todo set the default font color and line height
            "html, body": {
                color: "gray.600",
                lineHeight: "tall",
            },
            a: {
                textDecoration: "none",
            },
            ':focus:not(:focus-visible):not([role="dialog"]):not([role="menu"])': {
                boxShadow: 'none !important'
            }
        }
    }
    // icons: {
    //
    // },
})

export default theme