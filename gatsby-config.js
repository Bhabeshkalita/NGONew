module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Pragati Nagar Udyami NGO",
    description: `Strength Trust Sincerity Faith Growth Confidence.`,
    author: `ManishBoro`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/LOGO.png",
      },
    },
  ],
};
