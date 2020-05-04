#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);

let componentName;

if (args[0]) {
  componentName = args[0];
} else {
  componentName = 'NewComponent';
}

const fileName = componentName + '.js';

const componentPath = path.join(__dirname, '..', '/', fileName);

if (fs.existsSync(componentPath)) {
  console.log('Component' + fileName + 'already exists');
  process.exit();
}

const componentCode =
  "import React, { useEffect, useState} from 'react';\n\nconst " +
  componentName +
  ' = props => {\n  return (\n      <div></div>\n       )\n };\n\nexport default ' +
  componentName +
  ';';

try {
  fs.appendFileSync(fileName, componentCode);
} catch (err) {
  console.log(err);
}
