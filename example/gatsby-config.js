require('dotenv').config({
  path: `.env.development`,
})

module.exports = {
  siteMetadata: {
    title: `DFDS`,
    description: `Kick off your next, great Gatsby project with this DFDS starter. This barebones starter ships with the main Gatsby and DFDS configuration files you might need.`,
    author: `@DFDS`,
  },
  __experimentalThemes: [
    {
      resolve: require.resolve('../'),
      options: {
        root: __dirname,
      },
    },
  ],
  plugins: [],
}
