import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import ContentLoader from 'react-content-loader'

const clientSideQuery = gql`
  {
    urlSlugCollection(locale: "it-IT", where: { slug_exists: true }) {
      items {
        sys {
          id
        }
      }
    }
  }
`

const Test = () => (
  <Query query={clientSideQuery}>
    {({ data, loading, error }) => {
      if (loading)
        return (
          <ul>
            {Array(10)
              .fill('')
              .map((e, i) => {
                console.log(e)
                return (
                  <li
                    key={i}
                    style={{
                      boxShadow:
                        '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
                      padding: '16px 24px',
                      listStyle: 'none',
                    }}
                  >
                    <ContentLoader
                      height={7}
                      speed={2}
                      primaryColor="#f3f3f3"
                      secondaryColor="#ecebeb"
                    >
                      <rect
                        x="0"
                        y="0"
                        rx="3"
                        ry="3"
                        width="350"
                        height="6.4"
                      />
                    </ContentLoader>
                  </li>
                )
              })}
          </ul>
        )
      if (error) return <p>Error: ${error.message}</p>
      const { items } = data.urlSlugCollection
      return (
        <ul>
          {items.map(item => (
            <li
              key={item.sys.id}
              style={{
                boxShadow:
                  '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
                padding: '16px 24px',
                listStyle: 'none',
              }}
            >
              {item.sys.id}
            </li>
          ))}
        </ul>
      )
    }}
  </Query>
)

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <br />
    <Test />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
