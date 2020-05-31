module.exports = {
    plugins: [
        `gatsby-plugin-typescript`,
        `gatsby-plugin-layout`,
        {
            resolve: `gatsby-plugin-styled-jsx`,
            options: {
                optimizeForSpeed: true,
                sourceMaps: false,
                vendorPrefixes: true,
            },
        },
    ],
};
