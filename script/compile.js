

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync, spawn } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const matrixDir = path.resolve(projectRoot, 'src/execute');
const outputDir = path.resolve(projectRoot, '-/---');


if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

function compileWaveFile(filePath) {
    try {
        const fileName = path.basename(filePath, '.scss');
        const outputFile = path.resolve(outputDir, `${fileName}.css`);
        execSync(`pnpm exec sass --no-source-map "${filePath}" "${outputFile}"`, { 
            stdio: 'pipe',
            cwd: projectRoot
        });
    } catch (error) {
        console.error(`✗ Error compiling ${filePath}:`);
        console.error(error.stderr?.toString() || error.message);
    }
}

function compileAllWaveFiles() {
    function walkDir(dir) {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);
            if (stat.isDirectory()) {
                walkDir(filePath);
            } else if (file.endsWith('.wave.scss')) {
                compileWaveFile(filePath);
            }
        }
    }
    walkDir(matrixDir);
}

function startSassWatch() {
    console.log(' 👀 | src/style/scss...');
    const sassProcess = spawn('pnpm', ['exec', 'sass', '--watch', '--no-source-map', 'src/style/scss:-/---'], {
        cwd: projectRoot,
        stdio: 'inherit',
        shell: true
    });
    sassProcess.on('error', (error) => {
        console.error('❌ Sass watch process error:', error.message);
    });
    return sassProcess;
}

compileAllWaveFiles();
startSassWatch();

console.log(` 👀 | ${path.relative(projectRoot, matrixDir).replace(/\\/g, '/')} .wave.scss...`);
fs.watch(matrixDir, { recursive: true }, (eventType, filename) => {
    if (filename && filename.endsWith('.wave.scss')) {
        const filePath = path.resolve(matrixDir, filename);
        if (fs.existsSync(filePath)) {
            compileWaveFile(filePath);
        }
    }
});

