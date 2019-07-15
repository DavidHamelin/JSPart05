var languagesArrayCreation = function () {
  var languages = ['Html','CSS','Java','PHP']
  return languages;
}

var numbersArrayCreation = function () {
    var numbers = [0,1,2,3,4,5];
    return numbers;
}

var ElementReplacement = function (languages) {
  languages.splice(2, 1, 'Javascript');
  return languages;
}

var AddElementToLanguagesArray = function (languages) {
  languages.push('Ruby','Python');
  return languages;
}

var AddElementToNumbersArray = function (numbers) {
  numbers.unshift(-2,-1);
  return numbers;
}

var deleteArrayFirstElement = function (languages) {
  languages.shift();
  return languages;
}

var deleteArrayLastElement = function (languages) {
  languages.pop();
  return languages;
}

var stringToArray = function (socialMediaInString) {
  array = socialMediaInString.split(',');
  return array;
}

var arrayToString = function (languages) {
  string = languages.join();
  return string;
}

var arraySort = function (socialMedia) {
  return socialMedia.sort();
}

var arrayInvert = function (languages){
  return languages.reverse();
}
