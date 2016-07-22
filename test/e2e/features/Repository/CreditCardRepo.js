/**
 * Created by victorsilva on 6/30/16.
 */
'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var CreditCardRepo = function () {
    CreditCardRepo.prototype.CreditCardFrameName = 'stripe_checkout_app';
    CreditCardRepo.prototype.Select_Element_CreditCardNumber = element(by.id('card_number'));
    CreditCardRepo.prototype.Select_Element_CreditCardExpirationDate = element(by.id('cc-exp'));
    CreditCardRepo.prototype.Select_Element_CreditCardCVC =  element(by.id('cc-csc'));
    CreditCardRepo.prototype.Select_Element_ClickButtonPay = element(by.id('submitButton'));


    //since Stripe does not allow input character fast in text box so this became a function
    CreditCardRepo.prototype.CreditCardNumber = function () {
        this.Select_Element_CreditCardNumber.sendKeys('4242');
        browser.sleep(1000);
        this.Select_Element_CreditCardNumber.sendKeys('4242');
        browser.sleep(1000);
        this.Select_Element_CreditCardNumber.sendKeys('4242');
        browser.sleep(1000);
        this.Select_Element_CreditCardNumber.sendKeys('4242');
        browser.sleep(1000);
    };

    CreditCardRepo.prototype.CreditCardExpirationDate = function () {
        //Month
        this.Select_Element_CreditCardExpirationDate.sendKeys('01');
        browser.sleep(1000);
        //Year
        this.Select_Element_CreditCardExpirationDate.sendKeys('20');
        browser.sleep(1000);
    };

    CreditCardRepo.prototype.CreditCardCVC = function () {
        //number in the back of the card
        this.Select_Element_CreditCardCVC.sendKeys('111');
        browser.sleep(1000);
    };
};
module.exports = new CreditCardRepo();