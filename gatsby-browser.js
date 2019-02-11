import React from 'react'
import { Theme } from './src/components/GlobalStyle'

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

export const wrapRootElement = ({ element }) => {
  return <Theme>{element}</Theme>
}
