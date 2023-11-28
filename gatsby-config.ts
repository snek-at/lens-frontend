import type { GatsbyConfig } from "gatsby"

require("dotenv").config({
  path: `.env.public`,
})

const config: GatsbyConfig = {
  plugins: [
    {
      resolve: `gatsby-jaen-lens`,
      options: {
        roles: ["005559cd-c204-4919-80a9-0059f213eafc"],
      },
    },
    {
      resolve: `gatsby-plugin-jaen`,
      options: {
        // The folder where the page templates are located
        pageTemplateFolder: `src/templates`,
        snekResourceId: `a58477a4-6e2a-4dca-80a9-e59d86bcac10`,
      },
    },
  ],
}

export default config
