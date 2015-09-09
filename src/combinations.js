(function(window, factory) {
  if (typeof define === 'function' && define.amd) {
    define(function() {
      return factory(window);
    });
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory(window);
  } else {
    window.Combinations = factory(window);
  }
}(window, function(window) {
  'use strict';

  function Combinations(data) {
    this.setData(data);
  }
  Combinations.prototype.setData = function(data) {
    this.data = data;
    this.length = data.reduce(function(i, arr) {
      return i * arr.length;
    }, 1);
  };
  Combinations.prototype.generate = function() {
    var combinations = [];
    var dataLength = this.data.length;
    var i, j, combination, k, l, itemLength;

    for (i = 0; i < this.length; ++i) {
      combination = [];

      k = i;
      for (j = 0; j < dataLength; j++) {
        itemLength = this.data[j].length;
        l = k % itemLength;
        k = (k - l) / itemLength;

        combination.push(this.data[j][l]);
      }

      combinations.push(combination)
    }

    return combinations;
  };

  return Combinations;
}));
