const path = require("path");

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(ttf|otf|eot|woff|woff2)$/,
          use: {
            loader: "file-loader",
            options: {
              name: "fonts/[name].[ext]",
            },
          },
        }
      ],
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src'),
      },
      extensions: ['.js', 'ts', 'json', 'vue']
    },
  }
}
