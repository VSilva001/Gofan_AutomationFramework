'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var PhoneSpeciality = function PhoneSpeciality() {

    PhoneSpeciality.prototype.PhoneScrollToButton = function () {
        //ESTO PARA HACER SCROLL al elemento deseado EN TELEFONOS
        browser.executeScript("document.getElementsByClassName('button-positive')[0].scrollIntoView();");
        browser.sleep(2000);
    }
};
module.exports = new PhoneSpeciality();