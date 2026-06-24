

process.env.NODE_ENV = 'development';

import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import {
    pkg,
    ovnMagic,
    headerBase,
    configBase,
    merge
} from './webpack.config.infra.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const config = {
    
    port: 9290,
    name: `${pkg.ScriptName}.DEV.js`,
    path: '-/---',
    entry: 'dev.entry.js',
    bundle: 'dev.bundle.js',
    
};

function buildHeader() {
    
    const headerRaw = headerBase({
        __SCRIPTNAME__: `${pkg.ScriptName}.DEV`,
        __DESCRIPTION__: 'dev_loader',
        __VERSION__: pkg.version,
        __CONNECT__: 'localhost'
    });
    const skipRaw = [
        '@resourceXXX',
        '@LOG',
        '@namespace',
        '@homepageURL',
        '@compatible',
        '@license',
        '@copyright',
        '@contact',
        '@supportURL',
        '@contributionURL',
        '@downloadURL',
        '@updateURL'
    ];
    
    const lines = headerRaw.split('\n');
    const headerLines = [];
    for (const line of lines) {
        if (line.includes('@connectXXX')) {
            headerLines.push(`// @connect                   localhost`);
            continue;
        }
        if (line.includes('@requireXXX')) {
            headerLines.push(`// @require                   http://localhost:${config.port}/${config.entry}`);
            continue;
        }
        if (skipRaw.some(token => line.includes(token))) continue;
        headerLines.push(line);
    }
    
    const normalized = [];
    let emptyCount = 0;
    for (const line of headerLines) {
        if (line.trim() === '') {
            emptyCount++;
            if (emptyCount <= 2) normalized.push(line);
        } else {
            normalized.push(line);
            emptyCount = 0;
        }
    }
    return normalized.join('\n');
}

function buildEntry() {
    const runtime = fs.readFileSync(path.resolve(__dirname, 'script', 'runtime.js'), 'utf8');
    return runtime
        .replace(/__PORT__/g, config.port)
        .replace(/__BUNDLE__/g, config.bundle);
}

class headerDEV {
    apply(compiler) {
        compiler.hooks.afterEmit.tap('headerDEV', () => {
            const installPath = path.resolve(__dirname, 'dist', config.name);
            fs.mkdirSync(path.dirname(installPath), { recursive: true });
            fs.writeFileSync(installPath, buildHeader() + ovnMagic, 'utf8');
            
            const entryPath = path.resolve(__dirname, config.path, config.entry);
            fs.mkdirSync(path.dirname(entryPath), { recursive: true });
            fs.writeFileSync(entryPath, buildEntry(), 'utf8');
        });
    }
}

class SSE {
    apply(compiler) {
        compiler.hooks.afterEmit.tap('SSE', () => {
            if (global.__OVN_SSE_CLIENTS__) {
                global.__OVN_SSE_CLIENTS__.forEach(res => res.write('data: update\n\n'));
            }
        });
    }
}


export default merge(configBase(), {
    
    mode: process.env.NODE_ENV,
    
    output: {
        path: path.resolve(__dirname, config.path),
        filename: config.bundle,
        pathinfo: false
    },
    plugins: [
        new headerDEV(),
        new SSE()
    ],
    devServer: {
        
        port: config.port,
        headers: {
            'Cache-Control': 'no-store',
            'Access-Control-Allow-Origin': '*'
        },
        static: [
            { directory: path.resolve(__dirname, config.path), publicPath: '/' },
            { directory: path.resolve(__dirname, 'dist'),   publicPath: '/' }
        ],
        devMiddleware: { writeToDisk: true },
        
        compress: false,
        hot: false,
        liveReload: false,
        client: false,
        
        setupMiddlewares(middlewares, devServer) {
            if (!global.__OVN_SSE_CLIENTS__) global.__OVN_SSE_CLIENTS__ = new Set();
            devServer.app.get('/__OVN_SSE__', (req, res) => {
                res.writeHead(200, {
                    'Content-Type': 'text/event-stream',
                    'Cache-Control': 'no-cache',
                    'Connection': 'keep-alive',
                    'Access-Control-Allow-Origin': '*'
                });
                res.write('\n');
                global.__OVN_SSE_CLIENTS__.add(res);
                req.on('close', () => global.__OVN_SSE_CLIENTS__.delete(res));
            });
            return middlewares;
        }
    },
    
    devtool: false
});

