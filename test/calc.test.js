var Y = require('yuitest'),
    Assert = Y.Assert,
    calc,
    src = '../src/calc';

Y.TestRunner.add(new Y.TestCase({
    name: 'Calculator',

    setUp: function () {
        calc = require(src);
    },

    'can add numbers': function () {
        Assert.areEqual(10, calc.add(3, 7), 'Can add normal numbers');
        Assert.areEqual(-2, calc.add(-5, 3), 'Can add negative numbers');
    },

    'can subtract numbers': function () {
        Assert.areEqual(3, calc.subtract(7, 4), 'Can subtract normal numbers');
        Assert.areEqual(5, calc.subtract(2, -3), 'Can subtract negative numbers');
    }
}));