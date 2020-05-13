const yargs = require('yargs');

const args = yargs
  .usage('Usage: $0 <path> <options>')
  .nargs('_', 2)
  .option('f', {
    alias: 'folder',
    describe: 'Creates js file in the directory with the same name',
  })
  .option('p', {
    alias: 'props',
    describe: 'Sets component to recieve props argument',
  })
  .option('e', { alias: 'effect', describe: 'Imports useEffect hook' })
  .option('s', { alias: 'state', describe: 'Imports useState hook' })
  .option('d', {
    alias: 'dispatch',
    describe: 'Imports useDispatch hook from react-redux',
  })
  .option('l', {
    alias: 'selector',
    describe: 'Imports useSelector hook from react-redux',
  })
  .option('css')
  .describe(
    'css',
    'Creates .css file in the same directory as the component and imports it'
  )
  .option('scss')
  .describe('scss', 'Same as --css but for .scss')
  .conflicts('css', 'scss')
  .group(['folder'], 'Folder option:')
  .group(['effect', 'state'], 'React hooks options:')
  .group(['dispatch', 'selector'], 'Redux hooks options:')
  .group(['props'], 'Props option:')
  .group(['css', 'scss'], 'Stylesheet options:')
  .scriptName('new-react-comp')
  .showHelpOnFail(true)
  .check((args, options) => {
    if (args._.length < 1) {
      throw new Error('No component name provided');
    }
    if (args._.length > 2) {
      throw new Error('To many arguments');
    }
    return true;
  })
  .version()
  .help().argv;

module.exports = args;
