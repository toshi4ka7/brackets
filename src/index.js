module.exports = function check(str, bracketsConfig) {
  let strReg = '';

  for (let i = 0; i < bracketsConfig.length; i++) {

    if (bracketsConfig[i][0] === '(' ||
        bracketsConfig[i][0] === ')' ||
        bracketsConfig[i][0] === '[' ||
        bracketsConfig[i][0] === ']' ||
        bracketsConfig[i][0] === '|') {
      strReg += "(\\" + bracketsConfig[i][0];
    } else {
      strReg +=  '(' + bracketsConfig[i][0];
    }

    if (bracketsConfig[i][1] === '(' ||
        bracketsConfig[i][1] === ')' ||
        bracketsConfig[i][1] === '[' ||
        bracketsConfig[i][1] === ']' ||
        bracketsConfig[i][1] === '|') {
      strReg += "\\" + bracketsConfig[i][1] + ')|';
    } else {
      strReg +=  bracketsConfig[i][1] + ')|';
    }

  }


  strReg = strReg.substring(0, strReg.length - 1);
  
 
  strReg = new RegExp(strReg, 'g');


  while (str.match(strReg) !== null) {
      str = str.replace(strReg, '');
  }

  if (str.length !== 0) {
    return false;
  } else {
    return true;
  }
}
