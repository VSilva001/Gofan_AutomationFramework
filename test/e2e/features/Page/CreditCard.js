'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var creditCardRepo = require ('../Repository/CreditCardRepo.js');

var CreditCard = function () {

    CreditCard.prototype.EnterCreditCardNumber = function () {

        browser.ignoreSynchronization = true;

        browser.switchTo().frame(creditCardRepo.CreditCardFrameName).then (function () {
            creditCardRepo.Select_Element_CreditCardNumber.click();
            creditCardRepo.CreditCardNumber();
        });
    };

    CreditCard.prototype.EnterCreditCardExpirationDate = function () {

        creditCardRepo.CreditCardExpirationDate();
    };

    CreditCard.prototype.EnterCreditCardCVC = function () {
        
        creditCardRepo.CreditCardCVC();
    };

    CreditCard.prototype.ClickPay = function () {

        creditCardRepo.Select_Element_ClickButtonPay.click();
        browser.switchTo().defaultContent();
    };
};

module.exports = new CreditCard();

//switchTo().defaultContent();