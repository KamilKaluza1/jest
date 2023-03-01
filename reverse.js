const reverse = {
  one: (str) => {
    return str.split("").reverse().join("");
  },

  two: (str) => {
  let revString = '';
  for(let i = str.length - 1; i >= 0; i--) {
    revString = revString + str[i];
  }
  return revString;
  },

  three: (str) => {
  let revString = '';
  for(let i = 0; i <= str.length - 1; i++) {
    revString = str[i] + revString;
  }
  return revString;
  },

  four: (str) => {
    let revString = ''
    for(let char of str){
      revString = char  + revString
    }
    return revString
  }
};




(module.exports = reverse)
