import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { rspack } from '@rspack/core';
import TerserPlugin from 'terser-webpack-plugin';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isRunningWebpack = !!process.env.WEBPACK;
const isRunningRspack = !!process.env.RSPACK;
if (!isRunningRspack && !isRunningWebpack) {
  throw new Error('Unknown bundler');
}

/**
 * @type {import('webpack').Configuration | import('@rspack/cli').Configuration}
 */
const config = {
  mode: 'development',
  devtool: false,
  entry: {
    main: './src/index',
  },
  plugins: [new HtmlWebpackPlugin()],
  output: {
    clean: true,
    path: isRunningWebpack
      ? path.resolve(__dirname, 'webpack-dist')
      : path.resolve(__dirname, 'rspack-dist'),
    filename: '[name].js',
  },
  optimization: {
    minimize: true,
    minimizer: isRunningRspack
      ? [
          new rspack.SwcJsMinimizerRspackPlugin({
            mangle: true,
          }),
        ]
      : [
          new TerserPlugin({
            terserOptions: { mangle: true },
          }),
        ],
  },
  experiments: {},
};

if (isRunningRspack) {
  config.experiments.rspackFuture = {
    newTreeshaking: true,
  };
}

export default config;
