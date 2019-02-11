import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import DFDSBold from './../assets/fonts/DFDS-Bold.woff'
import DFDSLight from './../assets/fonts/DFDS-Light.woff'
import DFDSRegular from './../assets/fonts/DFDS-Regular.woff'

const GlobalStyles = createGlobalStyle`
	${({ theme: { fonts } }) =>
    fonts.map(
      ({ fontFamily, src, fontWeight }) =>
        `
          @font-face {
            font-family: ${fontFamily};
            src: url(${src});
            font-weight: ${fontWeight}
          }
			  `
    )}
`

const theme = {
  fonts: [
    { fontFamily: 'DFDSRegular', src: DFDSRegular, fontWeight: 'normal' },
    { fontFamily: 'DFDSBold', src: DFDSBold, fontWeight: 'bold' },
    { fontFamily: 'DFDSLight', src: DFDSLight, fontWeight: 'lighter' },
  ],
}

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      {children}
    </>
  </ThemeProvider>
)

export default GlobalStyles
