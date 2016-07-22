'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var NorthForsythHighSchoolCummingRepo = function NorthForsythHighSchoolCummingRepo() {

    //String
    NorthForsythHighSchoolCummingRepo.prototype.Search_Element_NorthForsythHighSchoolCumming_LogoImage_SRC = 'https://ht.digisci.co/uploads/school/logo/GA5199/GA5199.png';
    NorthForsythHighSchoolCummingRepo.prototype.Search_Element_NorthForsythHighSchoolCumming = element(by.css('ion-item[href="/app/school/GA5199"]'));

    //Components
    //LOGO ON PAGE
    NorthForsythHighSchoolCummingRepo.prototype.Search_Element_NorthForsythHighSchoolCumming_LogoImage = element(by.css('.page-logo-image'));
    NorthForsythHighSchoolCummingRepo.prototype.Search_Element_NorthForsythHighSchoolCumming_LogoImage_GetSRCAttribute = function () {
        return this.Search_Element_NorthForsythHighSchoolCumming_LogoImage.getAttribute('src');
    };
};

module.exports = new NorthForsythHighSchoolCummingRepo();

//meter information en memoria
//SearchPageRepo.prototype = {Search_LinkPage : 'ddd'};

//hacer inheritance
