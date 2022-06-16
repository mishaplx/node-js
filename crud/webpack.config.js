import path from 'path'
//import { createRequire } from 'module';
import { fileURLToPath } from "node:url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

 const config = {
  mode: 'production',
     entry: './app.js',
     output: {
         path: path.join(__dirname, 'dist'),
         filename: 'bundle.js'
     },
     resolve: {
      fallback: {
          "fs": false,
           "url": false ,
           "querystring": false,
           "http": false,
           "os": false,
           "path": false
      },
  },
     module: {
      rules: [
        {
          test: /\.js$/,
          enforce: 'pre',
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
      ]
    }
 };


      

export default config;
