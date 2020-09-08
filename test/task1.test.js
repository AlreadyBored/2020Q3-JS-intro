const chai = require('chai');
const { expect, assert } = chai;
it.optional = require('../extensions/it-optional');

Object.freeze(assert);

const solution1 = require('../src/task1.js');

describe('Task1', () => {
  // Presence requirement
  describe ('variable presence', () => {
      it.optional('function solution1 exists', () => {
        expect(solution1).exist;
        expect(solution1).to.be.instanceOf(Function);
      });
  });

  //Specific requirements

  describe('base requirements', () => {
    it.optional('base requirement1', () => {

    });

  })
});