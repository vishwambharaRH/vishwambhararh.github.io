#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Read the generated dist/index.html
const distIndexPath = path.join(process.cwd(), 'dist', 'index.html');
let distIndex = fs.readFileSync(distIndexPath, 'utf-8');

// Update paths to point to /dist/assets from root
distIndex = distIndex.replace(/src="\/assets\//g, 'src="/dist/assets/')
                     .replace(/href="\/assets\//g, 'href="/dist/assets/');

// Write to root index.html
const rootIndexPath = path.join(process.cwd(), 'index.html');
fs.writeFileSync(rootIndexPath, distIndex, 'utf-8');

console.log('✓ Root index.html updated with correct asset paths');
