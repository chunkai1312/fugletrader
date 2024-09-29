const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join } = require('path');

module.exports = {
  output: {
    path: join(__dirname, '../../dist/apps/cli'),
  },
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      assets: [
        './src/bin',
        {
          glob: 'README.md',
          input: './',
          output: './'
        },
        {
          glob: 'LICENSE',
          input: '../../',
          output: './'
        }
      ],
      optimization: false,
      outputHashing: 'none',
      generatePackageJson: true,
    }),
  ],
};
