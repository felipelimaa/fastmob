import { extendTheme } from "@chakra-ui/react"

import styles from "./styles"
import theme from "./theme"

const config = {
    initialColorMode: "light",
    useSystemColorMode: false
}

const overrides = {
    styles,
    theme,
    config
}

export default extendTheme(overrides)