/**
 * Created by victorsilva on 6/30/16.
 */
'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var LogInPanelRepo = function LogInPanelRepo() {

    LogInPanelRepo.prototype.EmailAdress = 'victor.silva@digitalscientists.com';
    LogInPanelRepo.prototype.Password = 'scientists';
    LogInPanelRepo.prototype.Select_Element_EmailAdress = element(by.model('loginData.email'));
    LogInPanelRepo.prototype.Select_Element_Password = element(by.model('loginData.password'));
    LogInPanelRepo.prototype.Select_Element_ButtonLogIn = element(by.css('button[type="submit"]'));
    LogInPanelRepo.prototype.Select_Element_Sign_In_with_Email = element(by.css('div.list.list-inset.text-center'));
};
module.exports = new LogInPanelRepo();