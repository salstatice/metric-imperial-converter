/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      let input = req.query.input;
      let initNum = convertHandler.getNum(input);
      let initUnit = convertHandler.getUnit(input);
      let returnNum = convertHandler.convert(initNum, initUnit);
      let returnUnit = convertHandler.getReturnUnit(initUnit);
      let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

      if ((initNum == null) && (initUnit == null)) {
        res.json("invalid number and unit")
      } else if ((initNum == null) || (initUnit == null)) {
        res.json(toString)
      } else {
        res.json({
          initNum,
          initUnit: (initUnit == 'l' ? 'L' : initUnit),
          returnNum,
          returnUnit: (returnUnit == 'l' ? 'L' : returnUnit),
          string: toString,
        })
      }
    });
};
