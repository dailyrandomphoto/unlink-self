#!/usr/bin/env node

'use strict';

const { resolve } = require('path');
const del = require('del');

function main() {
  const packageName = process.env.npm_package_name;
  if (packageName) {
    if (process.env.PATH.includes('node_modules/' + packageName)) {
      // skip
      return;
    }

    const dest = resolve(process.cwd(), 'node_modules', packageName);
    console.log('Delete ' + dest);
    del.sync(dest, { force: true });
  }
}

function exit(err) {
  if (err) {
    console.error('\n' + err);

    process.exit(1);
  }

  process.exit();
}

if (require.main === module) {
  // Called directly
  try {
    main();
  } catch (error) {
    exit(error);
  }

  // main(filepath)
  //   .catch(exit);
} else {
  // Required as a module
  module.exports = main;
}
