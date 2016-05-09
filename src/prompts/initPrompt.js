import chalk from 'chalk';

const schema = {
  properties: {
    sourceBase: {
      description: chalk.blue('Path to your source code? (relative from root)'),
      type: 'string',
      required: true
    }
  }
};

export default schema;