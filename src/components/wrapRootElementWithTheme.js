import React from 'react'
import { Theme } from './GlobalStyle'

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

export const wrapRootElementWithTheme = ({ element }) => {
  return <Theme>{element}</Theme>
}
