'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var SearchPageRepo = function SearchPageRepo() {

    //Strings
    SearchPageRepo.prototype.Search_LinkPage = 'http://ht.digisci.co/app/search';
    SearchPageRepo.prototype.Searh_String_searchbox_IDAttribute = 'search_box';

    //Component
    //SEARCH SCHOOL TEXT BOX
    SearchPageRepo.prototype.Search_Element_DataSearch = element(by.model('data.search'));
    SearchPageRepo.prototype.Search_Element_DataSearch_GetIdAttribute = function () {
        return this.Search_Element_DataSearch.getAttribute('id');
    };
};

module.exports = new SearchPageRepo();

//meter information en memoria
//SearchPageRepo.prototype = {Search_LinkPage : 'ddd'};

