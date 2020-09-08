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

      const simpleValues = [
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

    it.optional('Formats a number of seconds that exactly matches a specific number of minutes', () => {

      expect(formatTime(60)).to.be.equal('1 min');
      expect(formatTime(120)).to.be.equal('2 min');
      expect(formatTime(300)).to.be.equal('5 min');
      expect(formatTime(360)).to.be.equal('6 min');
    });

    it.optional('Formats a number of seconds that doesn\'t match a specific number of minutes', () => {

      expect(formatTime(78)).to.be.equal('1 min 18 sec');
      expect(formatTime(982)).to.be.equal('16 min 22 sec');
      expect(formatTime(400)).to.be.equal('6 min 40 sec');
      expect(formatTime(1111)).to.be.equal('18 min 31 sec');
    });

    it.optional('Throws an Error in case of wrong values', function() {
      let res = null;
      try {
        formatTime('If I could save time in a bottle...');
        formatTime(-10);
        formatTime([10, 300, 100]);
        formatTime({'java': 'script'});
      } catch(err) {
          if (err._validationProp === 'NA') {
              this.skip();
            } else {
              res = 'THROWN';
            }
      }
      
      assert.equal(res, 'THROWN');
      
      /* Simpliest case
      expect(formatTime(wrongValue)).to.throw();
      */

  });
  })
});