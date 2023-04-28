const { defineConfig } = require('@vue/cli-service');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = defineConfig({
  publicPath: '',
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: 'src/assets/img', to: 'img' },
          // { from: 'src/assets/fonts', to: 'fonts' },
        ],
      }),
    ],
  },
});
