import React from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

const CONTENTFUL_SPACE = process.env.GATSBY_CONTENTFUL_SPACE // eslint-disable-line
const CONTENTFUL_ACCESS_TOKEN = process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN // eslint-disable-line
const CONTENTFUL_ENV = process.env.GATSBY_CONTENTFUL_ENV // eslint-disable-line

if (!CONTENTFUL_SPACE || !CONTENTFUL_ACCESS_TOKEN || !CONTENTFUL_ENV) {
  throw new Error(
    'Contentful spaceId, env and the delivery token need to be provided.'
  )
}
const CONTENTFUL_API_URL = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE}/environments/${CONTENTFUL_ENV}?access_token=${CONTENTFUL_ACCESS_TOKEN}`

const client = new ApolloClient({
  uri: CONTENTFUL_API_URL,
  fetch,
})

export const wrapRootElementWithApollo = ({ element }) => {
  return <ApolloProvider client={client}>{element}</ApolloProvider>
}
