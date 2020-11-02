const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options ) {
  let res = '';
  let arr=[];
  let repeatTimes=options.repeatTimes;
  let separator=options.separator;
  let additionRepeatTimes = options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator;
  let addition = options.addition;

  arr = str.split(''); // перевел в массив
  arr.splice(str.length,0,additionSeparator);
  arr.splice(str.length,0,addition);// добавил в конец слово и разделитель в обратном порядке
  str = arr.join(''); // перевел в строку
  res=str.repeat(additionRepeatTimes); // поваторил n раз
  arr = res.split(''); //снова массив
  arr.splice(-additionSeparator.length); //удалил последний разделитель
  str=arr.join(''); //внешний цикл

  arr = str.split(''); // перевел в массив
  arr.splice(str.length,0,separator);
  str = arr.join('');
  res=str.repeat(additionRepeatTimes)
  arr = res.split(''); //снова массив
  arr.splice(-separator.length); //удалил последний разделитель
  res=arr.join(''); //res
  
  return res;
};
  