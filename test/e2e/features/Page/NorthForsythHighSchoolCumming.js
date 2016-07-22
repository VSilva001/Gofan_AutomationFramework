'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var northForsythHighSchoolCummingRepo = require ('../Repository/NorthForsythHighSchoolCummingRepo.js');

var NorthForsythHighSchoolCumming_Gofan = function NorthForsythHighSchoolCumming_Gofan() {
    
    NorthForsythHighSchoolCumming_Gofan.prototype.VerifyMySchoolEventsPage = function VerifyInMySchoolEventsPage() {
        expect(northForsythHighSchoolCummingRepo.Search_Element_NorthForsythHighSchoolCumming_LogoImage_GetSRCAttribute()).to.eventually.equal(northForsythHighSchoolCummingRepo.Search_Element_NorthForsythHighSchoolCumming_LogoImage_SRC);
    };
};

module.exports = new NorthForsythHighSchoolCumming_Gofan();
//solo para hacer Exclusive API
// module.exports = {
//     OpenGoFanWebsite: function () {
//         return new Search_Gofan().OpenGoFanWebsite();
//     }
// };


//meter information en memoria
//SearchPageRepo.prototype = {Search_LinkPage : 'ddd'};