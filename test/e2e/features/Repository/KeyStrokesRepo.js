'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var KeyStrokeRepo = function () {

    KeyStrokeRepo.prototype.ENTER = function () {
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    };

    KeyStrokeRepo.prototype.NUMPAD1 = function () {
        browser.actions().sendKeys(protractor.Key.NUMPAD1).perform();
    };
};
module.exports = new KeyStrokeRepo();