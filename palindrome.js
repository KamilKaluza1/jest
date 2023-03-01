const functions = {
  one: (str) => {
    const strRev = str.split("").reverse().join("");
    return str === strRev;
  },

  two: (str) => {
    let strRev = ''
    str.split('').forEach(char => strRev = char + strRev )
    return str === strRev
  }
}


module.exports = functions
