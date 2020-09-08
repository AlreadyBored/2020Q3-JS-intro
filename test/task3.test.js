const chai = require('chai');
const { expect, assert } = chai;
it.optional = require('../extensions/it-optional');

Object.freeze(assert);

const solution3 = require('../src/task3.js');

describe('Task3', () => {
  // Presence requirement
  describe ('variable presence', () => {
      it.optional('function solution3 exists', () => {
        expect(solution3).exist;
        expect(solution3).to.be.instanceOf(Function);
      });
  });

  //Specific requirements

  describe('base requirements', () => {
    it.optional('base requirement1', () => {

    });

  })
});