require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `GC Starter Theme`,
    description: `Groundcrew Starter Theme 2024`,
    author: `@groundcrew`,
    siteUrl: `https://groundcrew.com.au`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GATSBY_GOOGLE_GTAG],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
          send_page_view: true,
        },
        pluginConfig: {
          head: true,
          respectDNT: false,
        },
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `47244b367354d9df68bc03a796cf21`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        once: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
}
