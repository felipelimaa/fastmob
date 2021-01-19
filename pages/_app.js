import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { Global } from "@emotion/react"
import fonts from '../theme/font-face'

import theme from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} colorModeManager>
      <Global styles={fonts} />
			<Component {...pageProps}/>
    </ChakraProvider>
  )
}

export default MyApp;