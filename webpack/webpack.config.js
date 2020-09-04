const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const loader = require('sass-loader');

module.exports = {
  entry:'./src/app.js',

  output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'js/bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        // test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
        'css-loader', 
        'sass-loader'
        ],
      },
      // {
      //   test: /\.(woff|woff2|eot|ttf|svg)$/,
      //   exclude: /node_modules/,
      //   loader: 'url-loader',
      //   options: {
      //     publicPath: './fonts/',
      //     name: '../fonts/[name].[ext]',
      //     limit: 1000
      //   }
      // },
      {
        test: /\.(gif|png|jpeg|svg|jpg)$/i,
        use: [
          {
            loader: 'file-loader',
            options:{
              name: '[name].[ext]',
              outputPath: 'static/img/',
              useRelativePath: true,
            }
          }
        ]
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader"
      },
      {
        loader: 'image-webpack-loader',
        options: {
          mozjpeg: {
            progressive: true,
            quality: 65
          },
          // optipng.enabled: false will disable optipng
          optipng: {
            enabled: true,
          },
          pngquant: {
            quality: [0.65, 0.90],
            speed: 4
          },
          gifsicle: {
            interlaced: false,
          },
          // the webp option will enable WEBP
          webp: {
            quality: 75
          }
        },
      }
    ]
  },

  plugins:[
/*     new CopyPlugin({
      patterns: Assets.map(asset => {
        return {
          from: path.resolve(__dirname, `./node_modules/${asset}`), 
          to: path.resolve(__dirname, 'libs')
        }
      })
    }), */
    new HtmlWebpackPlugin ({
        template: './src/index.hbs',
        minify: {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true
          }
    }),
    new MiniCssExtractPlugin({
        filename: 'css/main.css',
    })
  ]
}