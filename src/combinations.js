(function() {
  function Combinations(data) {
    if (this === window) {
      return new Combinations(data);
    }
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

  module.exports = Combinations;
})();
