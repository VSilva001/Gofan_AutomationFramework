/**
 * Created by victorsilva on 6/30/16.
 */
'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var logInPanelRepo = require ('../Repository/LogInPanelRepo.js');

var LogInPanel = function LogInPanel() {
    LogInPanel.prototype.EnterUserEmailAdress = function () {
        logInPanelRepo.Select_Element_EmailAdress.click();
        logInPanelRepo.Select_Element_EmailAdress.sendKeys(logInPanelRepo.EmailAdress);
    };

    LogInPanel.prototype.EnterUserPassword  = function () {
        logInPanelRepo.Select_Element_Password.click();
        logInPanelRepo.Select_Element_Password.sendKeys(logInPanelRepo.Password);
    };

    LogInPanel.prototype.ClickOnLogInButton = function () {
        logInPanelRepo.Select_Element_ButtonLogIn.click();
    };

    LogInPanel.prototype.VerifySignInwithEmailPanelisShown = function () {
        browser.sleep(2000);
        expect(logInPanelRepo.Select_Element_Sign_In_with_Email.isDisplayed()).to.eventually.equal(true);
    };

    LogInPanel.prototype.VerifySignInwithEmailPanelisNotShown = function () {
        browser.sleep(2000);
        expect(logInPanelRepo.Select_Element_EmailAdress.isDisplayed()).to.eventually.equal(false);
    };
};
module.exports = new LogInPanel();