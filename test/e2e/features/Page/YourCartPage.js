/**
 * Created by victorsilva on 6/29/16.
 */

'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var yourCartPageRepo = require ('../Repository/YourCartPageRepo.js');
var phoneSpeciality = require ('../Page/PhoneSpeciality.js');

var YourCartPage = function YourCartPage() {

    YourCartPage.prototype.VerifyYourCartPage = function () {
        expect(browser.getTitle()).to.be.eventually.equal(yourCartPageRepo.PageNameCart);
    };

    YourCartPage.prototype.VerifySubTotalAmount = function (SubtotalAmount) {
        phoneSpeciality.PhoneScrollToButton();
        expect(yourCartPageRepo.Search_Element_SubtotalAmount.getText()).to.eventually.equal('Total: '+SubtotalAmount);
    };
};
module.exports  = new YourCartPage();