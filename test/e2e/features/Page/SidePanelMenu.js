/**
 * Created by victorsilva on 6/26/16.
 */
'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var sidePanelMenuRepo = require ('../Repository/SidePanelMenuRepo.js');

var SidePanelMenu = function SidePanelMenu() {
    
    SidePanelMenu.prototype.ClickOnThreeBardIcon = function () {
        sidePanelMenuRepo.Search_Element_LeftButtonMenuToggle.get(1).click();
        browser.waitForAngular();
        browser.sleep(1000);
    };

    SidePanelMenu.prototype.ClickOnLogIn  = function () {
        sidePanelMenuRepo.Search_Element_LogIn.click();
        browser.sleep(1000);
    };

    SidePanelMenu.prototype.ClickOnLogOut = function () {
        sidePanelMenuRepo.Search_Element_LogOut.click();
        browser.sleep(1000);
    };
};

module.exports = new SidePanelMenu();