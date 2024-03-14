//webpack.config.js
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const manageImportHtml = require("./manageImportHtml.js");
const MIH = new manageImportHtml();

/* stan plugins */
const StanExport = require("./stanExport.js");

// On récupère la valeur de NODE_ENV
const env = process.env.NODE_ENV;

const devMode = process.env.NODE_ENV !== "production";

const plugins = [];
/**
 * Selectionner le theme à afficher lors de la commande npm run serve.
 */
const CurrentThemeName = "gallery-overlay";

plugins.push(
  new MiniCssExtractPlugin({
    filename: "css/[name].css",
    chunkFilename: "[id].css",
  })
);
plugins.push(
  new HtmlWebpackPlugin({
    templateContent: async () => {
      console.log(" reload HtmlWebpackPlugin ");
      let html = "<html>";
      html += '<head> <meta name="viewport" content="width=device-width, initial-scale=1.0"> </head>';
      html += "<body>";
      html += await MIH.getContents();
      html += "</body>";
      html += "</html>";
      return html;
    },
    title: " Template  " + CurrentThemeName,
  })
);
plugins.push(
  new (class OutputMonitor {
    apply(compiler) {
      compiler.hooks.watchRun.tap("MyPlugin", (context, entry) => {
        //console.log("entry : ", context);
      });
    }
  })()
);

/* stan logic */
// plugins.push(
//   new StanExport({
//     texte: 123,
//     sizeLimit: 10
//   })
// );

// On essaie de ressoudre le probleme de chargement det la merge de html.
// actuelement le processus de merge de html (MIH) a deux principal probleme.
// - il ne respecte pas l'ordre des imports.
// - il ne supprime pas un import lorsqu'on le supprime.
// plugins.push(
//   new (class OutputMonitor {
//     apply(compiler) {
//       compiler.hooks.normalModuleFactory.tap("MyPlugin2", (factory) => {
//         factory.hooks.parser
//           .for("javascript/auto")
//           .tap("MyPlugin2", (parser, options) => {
//             parser.hooks.import.tap("MyPlugin", (statement, source) => {
//               console.log(" source : ", source);
//               //console.log(" parser.state : ", parser.state.module);
//             });
//             // parser.hooks.export.tap("MyPlugin", (node) => {
//             //   const {
//             //     module: { rawRequest },
//             //   } = parser.state;
//             //   //console.log(" parser.state : ", parser.state.module.resource);
//             //   // ..
//             // });
//             // parser.hooks.importSpecifier.tap(
//             //   "MyPlugin2",
//             //   (statement, source, exportName, identifierName) => {
//             //     console.log(
//             //       " parser.state : ",
//             //       statement,
//             //       source,
//             //       exportName,
//             //       identifierName
//             //     );
//             //   }
//             // );
//           });
//       });
//       compiler.hooks.emit.tapAsync("MyPlugin", (compilation, callback) => {
//         var changedChunks = compilation.chunks.filter((chunk) => {
//           console.log(" chunk.name : ", chunk);
//           // var oldVersion = this.chunkVersions[chunk.name];
//           // this.chunkVersions[chunk.name] = chunk.hash;
//           // return chunk.hash !== oldVersion;
//         });
//         callback();
//       });
//     }
//   })()
// );

module.exports = {
  plugins,
  mode: env || "development", // on définit le mode en fonction de la valeur de NODE_ENV
  entry: {
    script: "./src/" + CurrentThemeName + "/" + CurrentThemeName + ".js",
  },
  output: {
    path: path.resolve(__dirname, "dist/" + CurrentThemeName),
    filename: "js/[name].js",
    assetModuleFilename: "images/[name][ext]",
  },
  devtool: devMode ? "inline-source-map" : false,
  module: {
    rules: [
      //règles de compilations pour les fichiers .js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      //règles de compilations pour les fichiers .css
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              //publicPath: "../"
            },
          },

          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "resolve-url-loader", // améliore la résolution des chemins relatifs
            // (utile par exemple quand une librairie tierce fait référence à des images ou des fonts situés dans son propre dossier)
            options: {
              publicPath: "../images",
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true, // il est indispensable d'activer les sourcemaps pour que postcss fonctionne correctement
              implementation: require("sass"),
            },
          },
        ],
      },
      //règles de compilations pour les fonts
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/i,
      //   loader: "file-loader",
      //   options: {
      //     name: "fonts/[name].[ext]"
      //   }
      // },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/i,
      //   type: "asset/resource"
      // },
      // {
      //   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "[name].[ext]",
      //         outputPath: "fonts/",
      //       },
      //     },
      //   ],
      // },
      //règles de compilations pour les images
      /**
       * Le probleme des images est que webpack ne copie pas les images qui sont dans le html.
       * Donc pour le moment, il faut faire :
       * - npm run prod ( cela va creer un repertoire dans /dist/'CurrentThemeName' )
       * - Copie les images dans /dist/'CurrentThemeName'/images
       * Suite de la recherche : "webpack 5 copy image in html to dist" && https://www.learnhowtoprogram.com/intermediate-javascript/test-driven-development-and-environments-with-javascript/managing-images-with-webpack
       */
      {
        test: /\.(gif|png|jpe?g|webp)$/i,
        use: [
          {
            // Using file-loader for these files
            //loader: "file-loader?name=[name].[ext]&outputPath=./images/",
            loader: "file-loader",
            // In options we can set different things like format
            // and directory to save
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
              //  outputPath: (__dirname, "/src/" + CurrentThemeName + "/images"),
            },
          },
          //  { loader: "image-webpack-loader" },
        ],
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
            options: {
              sources: false,
              preprocessor: (content, loaderContext) => {
                try {
                  MIH.addUpdate(loaderContext.resource, content);
                  // var index = htmlDatasKey.indexOf(loaderContext.resource);
                  // if (index !== -1) {
                  //   console.log("MAJ : ", index);
                  //   htmlDatas[index] = content;
                  // } else {
                  //   htmlDatas.push(content);
                  //   htmlDatasKey.push(loaderContext.resource);
                  // }
                  // console.log("htmlDatasKey", htmlDatasKey);
                  // console.log("htmlDatas.length", htmlDatas.length);
                } catch (error) {
                  return content;
                }
                return content;
              },
            },
          },
        ],
      },
    ],
  },
  devServer: {
    // contentBase: path.resolve(__dirname, "./public"),
    // port: 3000,
    // publicPath: "dist/gp",
    // watchContentBase: true,
    hot: true,
    static: {
      directory: path.join(__dirname, "dist/" + CurrentThemeName),
      serveIndex: true,
      publicPath: "/",
    },
    watchFiles: ["src/*" + CurrentThemeName + "/"],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
      new TerserPlugin(),
    ],
  },
};
