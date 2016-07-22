'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var CentralForsythHighSchoolCummingRepo = function CentralForsythHighSchoolCummingRepo() {

    CentralForsythHighSchoolCummingRepo.prototype.Search_Element_CentralForsythHighSchoolCumming = element(by.css('a[href="/app/school/GA5007"]'));
};
module.exports = new CentralForsythHighSchoolCummingRepo();