require('dotenv').config()

module.exports = {
    plugins: [
        {
            resolve: 'gatsby-plugin-favicon',
            options: {
                logo: './static/favicon.png',
                injectHTML: true,
                icons: {
                    android: true,
                    appleIcon: true,
                    appleStartup: true,
                    coast: false,
                    favicons: true,
                    firefox: true,
                    twitter: false,
                    yandex: false,
                    windows: false
                }
            }
        },
        {
            resolve: 'gatsby-plugin-gtag',
            options: {
                trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
                anonymize: true
            }
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-resolve-src',
        'gatsby-plugin-styled-components',
        {
            resolve: `gatsby-source-airtable`,
            options: {
                apiKey: process.env.AIRTABLE_API_KEY,
                tables: [
                    {
                        baseId: process.env.AIRTABLE_BASE_ID,
                        tableName: 'Events',
                        tableView: 'Grid view'
                    },
                    {
                        baseId: process.env.AIRTABLE_BASE_ID,
                        tableName: 'Projects',
                        tableView: 'Grid view'
                    }
                ]
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'projects',
                path: `${__dirname}/data/projects`
            }
        },
        {
            resolve: 'gatsby-source-ghost',
            options: {
                apiUrl: 'https://cms.ifvictr.com',
                contentApiKey: '865ddc4a0575e2adb5735966b5'
            }
        },
        'gatsby-transformer-remark'
    ]
}