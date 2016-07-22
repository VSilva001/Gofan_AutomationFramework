/**
 * Created by victorsilva on 6/26/16.
 */
'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var SidePanelMenuRepo = function SidePanelMenuRepo() {

    SidePanelMenuRepo.prototype.Search_Element_LeftButtonMenuToggle = element.all(by.css('button[menu-toggle="left"]'));
    SidePanelMenuRepo.prototype.Search_Element_LogIn = element(by.css('ion-item[ng-if="!currentUser"]'));
    SidePanelMenuRepo.prototype.Search_Element_LogOut = element(by.css('ion-item[ng-click="logout()"]'));
};

module.exports = new SidePanelMenuRepo();