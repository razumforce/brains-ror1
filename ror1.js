// Generated by CoffeeScript 2.0.1
(function() {
  //ЗАДАНИЕ 3
  var a, checkprime, i, j, m, n, ref, result;

  checkprime = function(number) {
    var i, j, ref, ref1, ref2, results;
    if (a[number] !== 0) {
      results = [];
      for (i = j = ref = number * 2, ref1 = n, ref2 = number; ref2 > 0 ? j <= ref1 : j >= ref1; i = j += ref2) {
        results.push(a[i] = 0);
      }
      return results;
    }
  };

  n = +prompt("Введите число, до которого надо найти простые:");

  a = (function() {
    var j, ref, results;
    results = [];
    for (i = j = 0, ref = n; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
      results.push(i);
    }
    return results;
  })();

  for (m = j = 2, ref = n; 2 <= ref ? j <= ref : j >= ref; m = 2 <= ref ? ++j : --j) {
    checkprime(m);
  }

  result = (function() {
    var k, ref1, results;
    results = [];
    for (i = k = 2, ref1 = n; 2 <= ref1 ? k <= ref1 : k >= ref1; i = 2 <= ref1 ? ++k : --k) {
      if (a[i] !== 0) {
        results.push(a[i]);
      }
    }
    return results;
  })();

  alert(`Список простых чисел от 2 до ${n}: ${result}`);

}).call(this);
