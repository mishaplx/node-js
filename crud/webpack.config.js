import path from 'path';
import { fileURLToPath } from "node:url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const {
    NODE_ENV = 'production',
} = process.env;
const config = {
    entry: './app.ts',
    mode: NODE_ENV,
    target: 'node',
    module:{
        rules:[
            {
                test: /\.ts$/,
                use: [
                    'ts-loader',
                ]
            }
        ],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
    }
}

export default config