

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pkgPath = path.resolve(__dirname, '../package.json');

try {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    const newVersion = pkg.version;
    
    execSync('git add .');
    execSync(`git commit -m "release: ver.${newVersion}"`);
    execSync(`git tag -a ver.${newVersion} -m ""`);
    console.log(` 👽 | Git TAG - ver.${newVersion}`);
    
    execSync('git push origin main --follow-tags');
    console.log(' 🛸 | 已推送至 GitHub');
    
} catch (error) {
    console.error(' 👾 | ', error.message);
    process.exit(1);
}

