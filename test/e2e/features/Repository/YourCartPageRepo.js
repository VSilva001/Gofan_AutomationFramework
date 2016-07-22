/**
 * Created by victorsilva on 6/29/16.
 */
'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var YourCartPageRepo = function YourCartPageRepo() {

    YourCartPageRepo.prototype.PageNameCart = 'Cart';

    YourCartPageRepo.prototype.Search_Element_SubtotalAmount = element(by.binding('grandTotal | number: 2'));
};
module.exports = new YourCartPageRepo();