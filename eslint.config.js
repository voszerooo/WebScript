

import pluginImport from 'eslint-plugin-import';
import babelParser from '@babel/eslint-parser';


const browserGlobals = {
    window: 'readonly', document: 'readonly', navigator: 'readonly',
    location: 'readonly', history: 'readonly', localStorage: 'readonly',
    sessionStorage: 'readonly', console: 'readonly', alert: 'readonly',
    confirm: 'readonly', prompt: 'readonly', setTimeout: 'readonly',
    clearTimeout: 'readonly', setInterval: 'readonly', clearInterval: 'readonly',
    requestAnimationFrame: 'readonly', cancelAnimationFrame: 'readonly',
    fetch: 'readonly', XMLHttpRequest: 'readonly', FormData: 'readonly',
    Blob: 'readonly', File: 'readonly', FileReader: 'readonly',
    Image: 'readonly', Audio: 'readonly', URL: 'readonly',
    URLSearchParams: 'readonly', HTMLElement: 'readonly', Element: 'readonly',
    Node: 'readonly', Event: 'readonly', CustomEvent: 'readonly',
    MouseEvent: 'readonly', KeyboardEvent: 'readonly', TouchEvent: 'readonly',
    DOMException: 'readonly', unsafeWindow: 'readonly',
    GM_addStyle: 'readonly', GM_getValue: 'readonly', GM_setValue: 'readonly',
    GM_xmlhttpRequest: 'readonly', GM_info: 'readonly',
    GM_notification: 'readonly', GM_openInTab: 'readonly',
    GM_registerMenuCommand: 'readonly', GM_deleteValue: 'readonly',
    GM_listValues: 'readonly',
};

async function flatify(config) {
    const newConfig = { ...config };
    if (Array.isArray(newConfig.plugins)) {
        const pluginsObj = {};
        for (const name of newConfig.plugins) {
            try {
                pluginsObj[name] = (await import(`eslint-plugin-${name}`)).default;
            } catch {}
        }
        newConfig.plugins = pluginsObj;
    }
    if (newConfig.parserOptions) {
        newConfig.languageOptions = {
            ...(newConfig.languageOptions || {}),
            parserOptions: newConfig.parserOptions,
        };
        delete newConfig.parserOptions;
    }
    delete newConfig.env;
    delete newConfig.parser;
    return newConfig;
}

export default [
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: browserGlobals,
            parser: babelParser,
            parserOptions: {
                requireConfigFile: false,
                babelOptions: {
                    presets: ['@babel/preset-env'],
                },
            },
        },
    },
    await flatify(pluginImport.configs.recommended),
    {
        files: ['src/store/derive.js', 'src/execute/.ionic/.rocket.js'],
        rules: { 'import/no-duplicates': 'off' }
    },
    {
        files: ['src/style/injector.js'],
        rules: { 'import/no-unresolved': 'off' }
    }
];

