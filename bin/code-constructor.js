const path = require('path');

const constructImportStr = (optOne, optTwo, strOne, strTwo) => {
  if (!optOne && !optTwo) return '';
  let importStr = '{ ';
  if (optOne && optTwo) return importStr + `${strOne}, ${strTwo}} `;
  if (optOne) importStr = importStr + strOne;
  if (optTwo) importStr = importStr + strTwo;
  importStr = importStr + '} ';
  return importStr;
};

const constructCode = opts => {
  const name = path.basename(opts._[0]);
  const effect = 'useEffect';
  const state = 'useState';
  const dispatch = 'useDispatch';
  const selector = 'useSelector';

  const reactOpts = constructImportStr(opts.effect, opts.state, effect, state);
  let comma = '';
  if (opts.effect || opts.state) comma = ', ';

  const reactImportLine = `import React${comma} ${reactOpts}from 'react';\n`;

  let reduxImportLine = '';
  const reduxOpts = constructImportStr(
    opts.dispatch,
    opts.selector,
    dispatch,
    selector
  );
  if (reduxOpts !== '')
    reduxImportLine = `import ${reduxOpts}from 'react-redux';\n`;

  let stylesheetImportLine = '';
  if (opts.css || opts.scss) {
    stylesheetImportLine = `import './${name}`;
    if (opts.css) {
      stylesheetImportLine = stylesheetImportLine + `.css'\n`;
    } else stylesheetImportLine = stylesheetImportLine + `.scss'\n`;
  }

  let props = '()';
  if (opts.props) props = 'props';
  const declarationLine = `const ${name} = ${props} => {\n`;

  let dispatchLine = '';
  if (opts.dispatch) dispatchLine = '  const dispatch = useDispatch();\n\n';

  let stateLine = '';
  if (opts.state) stateLine = `  const [state, setState] = useState('');\n\n`;

  let selectorLine = '';
  if (opts.selector)
    selectorLine = '  const s = useSelector(state => state);\n\n';

  const returnLine = '  return(\n    <div>\n    </div>\n    )\n';

  const exportLine = `export default ${name};`;

  const code =
    reactImportLine +
    reduxImportLine +
    stylesheetImportLine +
    '\n' +
    declarationLine +
    dispatchLine +
    stateLine +
    selectorLine +
    returnLine +
    '  };\n\n' +
    exportLine;

  return code;
};

module.exports = constructCode;
