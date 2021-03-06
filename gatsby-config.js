module.exports = {
  siteMetadata: {
    title: 'Tensiq technology spaceport',
    content:
      'We master the bridge between cutting-edge technology and secure, resilient, performant solutions.',
    url: 'https://tensiq.com',
  },
  plugins: [
    'gatsby-plugin-react-native-web',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        analyzerMode: 'static',
        openAnalyzer: false,
        production: false,
        generateStatsFile: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-124392276-1',
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'snippets',
        path: `${__dirname}/src/snippets/`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-emoji-unicode',
          {
            resolve: 'gatsby-remark-smartypants',
            options: {
              dashes: 'oldschool',
            },
          },
          'gatsby-remark-smarttypo',
          {
            resolve: 'gatsby-remark-generic-extensions',
            options: {
              elements: {
                Icon: {
                  html: {
                    tagName: 'icon',
                    properties: {
                      name: '::content::',
                      element: '::argument::',
                    },
                  },
                },
                Button: {
                  html: {
                    tagName: 'button',
                    properties: {
                      text: '::content::',
                      element: '::argument::',
                    },
                  },
                },
                Youtube: {
                  html: {
                    tagName: 'c-youtube',
                    properties: {
                      title: '::content::',
                    },
                    children: [
                      {
                        type: 'element',
                        tagName: 'iframe',
                        properties: {
                          width: '100%',
                          height: '100%',
                          frameborder: '0',
                          src: 'https://www.youtube.com/embed/::argument::',
                        },
                      },
                    ],
                  },
                },
              },
            },
          },
          {
            resolve: 'gatsby-remark-custom-blocks',
            options: {
              blocks: {
                testtable: 'custom-block-testtable eins zwei drei',
              },
            },
          },
          {
            resolve: 'gatsby-plugin-manifest',
            options: {
              name: 'Tensiq',
              short_name: 'Tensiq',
              start_url: '/',
              background_color: '#3a3a3aff',
              theme_color: '#3a3a3aff',
              display: 'minimal-ui',
              icon: 'src/images/icon.png', // This path is relative to the root of the site.
            },
          },
          'gatsby-plugin-offline',
          {
            resolve: `gatsby-plugin-nprogress`,
            options: {
              color: `#48c4d9ff`,
              showSpinner: false,
            },
          },
          {
            resolve: `gatsby-plugin-netlify`,
            options: {
              allPageHeaders: [
                'Link: </static/OpenSans-Bold.ttf>; rel=preload; as=font',
                'Link: </static/OpenSans-Regular.ttf>; rel=preload; as=font',
                'Link: </static/Tensiq.ttf>; rel=preload; as=font',
                'Link: </static/fa-brands-400.ttf>; rel=preload; as=font',
                'Link: </static/fa-regular-400.ttf>; rel=preload; as=font',
                'Link: </static/fa-solid-900.ttf>; rel=preload; as=font',
              ],
            },
          },
        ],
      },
    },
  ],
};
