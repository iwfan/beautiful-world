module.exports = {
  reactStrictMode: true,
  // webpack: (config, { webpack }) => {
  //   config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
  //   config.plugins.push(
  //     new CopyPlugin({
  //       patterns: [
  //         {
  //           from: path.resolve(__dirname, 'source/_posts/assets'),
  //           to: path.resolve(__dirname, 'public/post/assets'),
  //           cacheTransform: true
  //         }
  //       ]
  //     })
  //   )
  //   return config
  // }
}
