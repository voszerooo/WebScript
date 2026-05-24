

process.env.NODE_ENV = 'production';

import prettier from 'prettier';
import TerserPlugin from 'terser-webpack-plugin';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import {
    headerBase,
    configBase,
    merge,
    pkg
} from './webpack.config.infra.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isAnalyzing = process.env.ANALYZE === 'true';

const header = headerBase({
    __VERSION__: pkg.version
});

class format {
    apply(compiler) {
        compiler.hooks.afterEmit.tapPromise('format', async () => {
            const filePath = path.join(
                compiler.options.output.path,
                compiler.options.output.filename
            );
            if (!fs.existsSync(filePath)) return;
            
            const code = fs.readFileSync(filePath, 'utf8');
            const body = code.replace( /^\/\/ ==UserScript==[\s\S]*?\/\/ ==\/UserScript==\n?/, '' );
            const formatted = await prettier.format(body, {
                parser: 'babel',
                printWidth: Infinity,
                tabWidth: 2,
                semi: true,
                singleQuote: true
            });
            const notice = [
                '  //',
                '  // WebScript is free and open source.',
                '  //',
                '  // If you purchased this script from a third party,',
                '  // you may have been misled or overcharged.',
                '  //',
                '  // Official repository:',
                `  // ${pkg.homepage}`,
                '  //',
            ].join('\n');
            fs.writeFileSync(filePath, header + '\n\n' + formatted.replace(/}\)\s*\(\s*\)\s*;/, '$&\n' + notice));
        });
    }
}


export default merge(configBase(), {
    
    mode: process.env.NODE_ENV,
    
    plugins: [
        ...(isAnalyzing ? [new BundleAnalyzerPlugin({
            analyzerHost: 'localhost',
            analyzerPort: 9294,
            openAnalyzer: true
        })] : []),
        new format()
    ],
    optimization: {
        concatenateModules: !isAnalyzing,
        minimize: true,
        minimizer: [
            
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false
                    }
                },
                extractComments: false
            })
        ]
    },
    
    devtool: false
});

