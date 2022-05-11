import { extendTheme } from '@chakra-ui/react'

export default extendTheme({
    styles: {
        global: {
            "html, body": {
                fontFamily:"'Poppins', sans-serif"
            }
        }
    },
    colors: {
        primary:"#29C7C7",
        secondary:"#3B3054",
        statis:"#eff1f7",
        foot:"#232127"
    },
    components: {
        Button: {
            variants: {
                primary: {
                    bg:"primary",
                    color:"white",
                    _hover: {
                        bgColor:"cyan.300"
                    }
                }
            }
        },
        Link: {
            baseStyle: {
                opacity:0.5,
                _hover: {
                    opacity:1,
                    textDecoration:"none",
                    color:"primary"
                }
            }
        }
    }
    
})