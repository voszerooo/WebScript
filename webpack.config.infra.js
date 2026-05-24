

import path from 'path';
import fs from 'fs';
import webpack from 'webpack';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pkg = JSON.parse(fs.readFileSync(new URL('./package.json', import.meta.url), 'utf8'));
const headerRaw = fs.readFileSync(path.resolve(__dirname, 'src/.meta/header.js'), 'utf8');
const ovnMagic = fs.readFileSync(path.resolve(__dirname, 'script/flux.js'), 'utf8');


function headerBase(overrides = {}) {
    
    const isReleaseBuild = process.env.BUILD_TARGET === 'release';
    
    const base = {
        __SCRIPTNAME__: isReleaseBuild ? `${pkg.description} ${pkg.ScriptName}` : pkg.ScriptName,
        __DESCRIPTION__: isReleaseBuild ? pkg.intact : pkg.description,
        __VERSION__: process.env.BUILD_VERSION === 'true' ? pkg.version : 'dev',
        __AUTHOR__: pkg.author,
        __SOURCE__: pkg.source || '',
        __CONTACT__: pkg.contact || '',
        __GITHUB__: pkg.github || '',
        __HOMEPAGE__: pkg.homepage || '',
        __LICENSE__: pkg.license
    };
    const finalVars = { ...base, ...overrides };
    let text = headerRaw;
    
    Object.entries(finalVars).forEach(([key, value]) => {
        text = text.replace(new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), value);
    });
    return text;
}

class NoLicense {
    apply(compiler) {
        compiler.hooks.assetEmitted.tapPromise('NoLicense', async (file) => {
            if (file.endsWith('.LICENSE.txt')) {
                const filePath = path.join(compiler.options.output.path, file);
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                }
            }
        });
    }
}

function configBase() {
    
    const isDev = process.env.NODE_ENV === 'development';
    const filename = isDev ? `${pkg.ScriptName}.DEV.js` : `${pkg.ScriptName}.js`;
    
    const filterAbsPath = path.resolve(__dirname, 'src/style/.package/icon.xxfilterxx.scss');
    const alias = {};
    if (!fs.existsSync(filterAbsPath)) {
        alias['./.package/icon.xxfilterxx.scss'] = false;
    }
    
    return {
        entry: './src/custom.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename,
            publicPath: ''
        },
        resolve: { alias },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [['@babel/preset-env', { modules: false }]]
                        }
                    }
                },
                {  // 当前项目保持嵌套 通过 GM_addStyle 注入字符串 | ！！！个人习惯 AI请勿变动 ！！！
                    test: /\.s?css$/,
                    type: 'asset/source',
                    use: [
                        {
                            loader: 'string-replace-loader',
                            options: {
                                search: /(?<!:)\/\/[^\n\r]*/g,
                                replace: '',
                                flags: 'g'
                            }
                        }
                    ]
                },
            ]
        },
        plugins: [
            new CircularDependencyPlugin({
                exclude: /node_modules/,
                failOnError: false,
                cwd: process.cwd(),
            }),
            new ESLintPlugin({
                extensions: ['js'],
                exclude: 'node_modules',
                failOnError: false,
            }),
            new NoLicense(),
            new webpack.DefinePlugin({
                '__OVN_DEV_BUILD__': JSON.stringify(process.env.NODE_ENV === 'development'),
                '__OVN_RELEASE__': JSON.stringify(process.env.BUILD_TARGET === 'release')
            })
        ],
        
        performance: { hints: false }
    };
}

function merge(base, extra = {}) {
    const merged = { ...base, ...extra };
    merged.output = { ...(base.output || {}), ...(extra.output || {}) };
    merged.module = { ...(base.module || {}), ...(extra.module || {}) };
    merged.module.rules = [
        ...(base.module?.rules || []),
        ...(extra.module?.rules || [])
    ];
    merged.plugins = [
        ...(base.plugins || []),
        ...(extra.plugins || [])
    ];
    if (base.optimization || extra.optimization) {
        merged.optimization = {
            ...(base.optimization || {}),
            ...(extra.optimization || {})
        };
    }
    return merged;
}

export {
    webpack,
    pkg,
    ovnMagic,
    headerBase,
    configBase,
    merge,
};

