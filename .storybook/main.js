module.exports = {
  "stories": process.env.MJML ? [
    "../**/*.stories-mjml.mdx",
    "../**/*.stories-mjml.@(ts|tsx)"
  ] : [
    "../**/*.stories-plain.mdx",
    "../**/*.stories-plain.@(ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
}
