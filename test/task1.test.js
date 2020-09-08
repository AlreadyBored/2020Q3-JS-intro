const chai = require('chai');
const { expect, assert } = chai;
it.optional = require('../extensions/it-optional');

Object.freeze(assert);

const formatTime = require('../src/timeFormatter.js');

describe('Task1', () => {
  // Presence requirement
  describe ('variable presence', () => {
      it.optional('function formatTime exists', () => {
        expect(formatTime).exist;
        expect(formatTime).to.be.instanceOf(Function);
      });
  });

  //Specific requirements

  describe('base requirements', () => {
    it.optional('Format values below 1 minute', () => {

      simpleValues = [
        5, 10, 30, 45
      ];

      // Simple syntax

      expect(formatTime(5)).to.be.equal('5 sec');
      expect(formatTime(10)).to.be.equal('10 sec');
      expect(formatTime(30)).to.be.equal('30 sec');
      expect(formatTime(45)).to.be.equal('45 sec');

      // Alternative variant

      simpleValues.forEach(item => {
        const itemStringified = `${String(item)} sec`;
        expect(formatTime(item)).to.be.equal(itemStringified);
      });
    });

  })
});