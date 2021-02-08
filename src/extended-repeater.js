const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
  // let res = '';
  // let arr=[];
  // let repeatTimes=options.repeatTimes;
  // let separator=options.separator;
  // let additionRepeatTimes = options.additionRepeatTimes;
  // let additionSeparator = options.additionSeparator;
  // let addition = options.addition;

  // arr = str.split(''); // перевел в массив
  // arr.splice(str.length,0,additionSeparator);
  // arr.splice(str.length,0,addition);// добавил в конец слово и разделитель в обратном порядке
  // str = arr.join(''); // перевел в строку
  // res=str.repeat(additionRepeatTimes); // поваторил n раз
  // arr = res.split(''); //снова массив
  // arr.splice(-additionSeparator.length); //удалил последний разделитель
  // str=arr.join(''); //внешний цикл

  // arr = str.split(''); // перевел в массив
  // arr.splice(str.length,0,separator);
  // str = arr.join('');
  // res=str.repeat(additionRepeatTimes)
  // arr = res.split(''); //снова массив
  // arr.splice(-separator.length); //удалил последний разделитель
  // res=arr.join(''); //res

  // return res;
  // throw new CustomError('Not implemented');
  let result = '';
  result = getString(str, options.repeatTimes);
  return result;

  function getString(string, repeat) {
    if (repeat === undefined) {
      repeat = 1;
    }

    let res = '';

    for (let i = 1; i <= repeat; i++) {
      res +=
        str +
        getAdditionStr(
          options.addition,
          options.additionRepeatTimes,
          options.additionSeparator
        );
      if (i < repeat) {
        res += getSeparator(options.separator);
      }
    }
    return res;
  }

  function getAdditionStr(
    addition,
    additionRepeatTimes,
    additionSeparator = '|'
  ) {
    if (addition === undefined) {
      return '';
    }
    if (additionRepeatTimes === undefined) {
      additionRepeatTimes = 1;
    }

    let res = '';

    for (let i = 1; i <= additionRepeatTimes; i++) {
      res += addition;
      if (i < additionRepeatTimes) {
        res += additionSeparator;
      }
    }
    return res;
  }

  function getSeparator(separator = '+') {
    return separator;
  }
};
