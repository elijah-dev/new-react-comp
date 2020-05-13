#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const args = require('./args');
const constructCode = require('./code-constructor');

const absPath = path.join(process.cwd(), args._[0]);
const parsedPath = path.parse(absPath);
let filePath = absPath;

fs.mkdirSync(parsedPath.dir, { recursive: true });

if (args.folder) {
  fs.mkdirSync(absPath);
  filePath = path.join(absPath, parsedPath.name);
}

if (args.css || args.scss) {
  let ext = '.css';
  if (args.scss) ext = '.scss';
  try {
    fs.appendFileSync(filePath + ext, '');
  } catch (err) {
    console.log(err);
    process.exit();
  }
}

if (fs.existsSync(filePath + '.js')) {
  console.log(`Component ${parsedPath.name} already exists`);
  process.exit();
}

const code = constructCode(args);

try {
  fs.appendFileSync(filePath + '.js', code);
} catch (err) {
  console.log(err);
}
