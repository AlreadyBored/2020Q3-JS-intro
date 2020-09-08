const chai = require('chai');
const { expect, assert } = chai;
it.optional = require('../extensions/it-optional');

Object.freeze(assert);

const solution2 = require('../src/task2.js');

describe('Task2', () => {
  // Presence requirement
  describe ('variable presence', () => {
      it.optional('function solution2 exists', () => {
        expect(solution2).exist;
        expect(solution2).to.be.instanceOf(Function);
      });
  });

  //Specific requirements

  describe('base requirements', () => {
    it.optional('base requirement1', () => {

    });

  })
});
