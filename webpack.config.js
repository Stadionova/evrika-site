module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: 'style-loader', // creates style nodes from JS strings
            },
            {
              loader: 'css-loader', // translates CSS into CommonJS
            },
            {
              loader: 'less-loader', // compiles Less to CSS
            },
          ],
        },
        {
            test: /\.(png|jpe?g|jpg|gif|svg|eot|ttf|woff|woff2)$/i,
            loader: 'url-loader',
            options: {
            // limit: 8192000,
            },
        },
      ],
    },
  };