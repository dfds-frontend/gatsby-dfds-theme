import React from 'react'
import { Theme } from './GlobalStyle'

export const wrapRootElementWithTheme = ({ element }) => {
  return <Theme>{element}</Theme>
}
