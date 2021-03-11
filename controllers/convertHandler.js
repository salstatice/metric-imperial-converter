/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    let search = input.match(/^([0-9\.\/]*)([a-zA-Z]*)$/)
    let numberString  = search ? search[1] : ""
    
    if (numberString=="") return 1;
    if (numberString.match(/\/.*\//)) return null;
    try {
    	result = eval(numberString);
    }	catch (e) {
    	result = null;
    }
    if (result==Infinity) return null;
    
    return result;
  };
  
  this.getUnit = function(input) {
    let result = null;
    let unit = input.match(/[a-zA-Z]+$/);
    let regex = /^(gal|l|mi|km|lbs|kg)$/i;
    if (regex.test(unit)) {
      result = unit[0].toLowerCase();
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    let inputUnit = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
    let outputUnit = ['L', 'gal', 'km', 'mi', 'kg', 'lbs'];
    let n = inputUnit.indexOf(initUnit);
    if (n != -1) {
      result = outputUnit[n];
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    let inputUnit = ['L','l','gal','km','mi','kg','lbs'];
    let outputUnit = ['liters','liters','gallons','kilometers','miles','kilograms','pounds'];
    let n = inputUnit.indexOf(unit);
    if (n != -1) {
  	  result = outputUnit[n];
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    switch(initUnit) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      default:
        result = null;
    }
    result = ( result ? parseFloat(result.toFixed(5)) : null );
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    if (initNum == null) {
      result = 'invalid number'
    } else if (initUnit == null) {
      result = 'invalid unit'
    } else {
      result = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to '
        + returnNum + ' ' + this.spellOutUnit(returnUnit);
    }
    
    return result;
  };
  
}

module.exports = ConvertHandler;
