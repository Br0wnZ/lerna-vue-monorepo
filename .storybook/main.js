const path = require('path');

module.exports = {
  "stories": [
    "../*.stories.mdx",
    "../src/**/*.stories.@(js|mdx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss"
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            additionalData: `
            @import "@/libs/ui/styles/variables.scss";
            @import "@/libs/ui/styles/global.scss";
            `,
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
      resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
      },
    },
    });

    config.resolve.alias = {
      '@': path.resolve(__dirname, "../"),
      vue: "vue/dist/vue.esm-bundler.js"
    }

    return config;
  },
}