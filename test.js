'use strict';

const chai = require('chai');
chai.use(require('chai-as-promised'));
const { expect } = chai;
const main = require('unlink-self');

describe('unlink-self', () => {
  it('module should to be a function', () => {
    expect(main).to.be.a('function');
  });
});
