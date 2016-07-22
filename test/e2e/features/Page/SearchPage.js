'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var searchPageRepo = require ('../Repository/SearchPageRepo.js');
var northForsythHighSchoolCummingRepo = require ('../Repository/NorthForsythHighSchoolCummingRepo.js');

var Search_Gofan = function Search_Gofan()
{
    Search_Gofan.prototype.OpenGoFanWebsite = function OpenGoFanWebsite() {
        browser.sleep(2000);
       // browser.get(searchPageRepo.Search_LinkPage); 
        browser.driver.get(searchPageRepo.Search_LinkPage);
        browser.sleep(2000);
         var currentDevice = '';
        var currentPlatform = '';

        browser.getCapabilities().then(function (capability) {

            currentDevice =  capability.get('device');
            currentPlatform = capability.get('platform');
        });

        if (currentDevice != 'iPhone 6S Plus' && currentPlatform != 'ANDROID')
        {
            browser.manage().window().maximize();
        }

        browser.sleep(2000);
        browser.waitForAngular();
        this.VerifySearchBoxText();
    };

    Search_Gofan.prototype.SearchForSchool = function SearchForSchool(schoolname) {
        searchPageRepo.Search_Element_DataSearch.click();
        searchPageRepo.Search_Element_DataSearch.sendKeys(schoolname);
        northForsythHighSchoolCummingRepo.Search_Element_NorthForsythHighSchoolCumming.click();
        browser.waitForAngular();
    };

    Search_Gofan.prototype.VerifySearchBoxText = function VerifySearchBoxText() {
        browser.sleep(2000);
        expect(searchPageRepo.Search_Element_DataSearch_GetIdAttribute()).to.eventually.equal(searchPageRepo.Searh_String_searchbox_IDAttribute);
    };
};

module.exports = new Search_Gofan();

//solo para hacer Exclusive API
// module.exports = {
//     OpenGoFanWebsite: function () {
//         return new Search_Gofan().OpenGoFanWebsite();
//     }
// };


//meter information en memoria
//SearchPageRepo.prototype = {Search_LinkPage : 'ddd'};