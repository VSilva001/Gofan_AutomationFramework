'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var SchoolPageRepo = function SchoolPageRepo() {

    //Universales
    SchoolPageRepo.prototype.EventNameCurrentTeam = element(by.binding(' event.school.shortname '));
    SchoolPageRepo.prototype.EventNameOpponetTeam = element(by.binding(' event.opponent_school.shortname '));
    SchoolPageRepo.prototype.EventHostSchool = element(by.binding('school.name | lowercase'));
    SchoolPageRepo.prototype.Search_Element_QTYBox = element.all(by.model('ticket._source.selected_quantity'));
    SchoolPageRepo.prototype.Search_Element_SubtotalAmount = element.all(by.binding('subTotal() | number : 2'));
    SchoolPageRepo.prototype.Search_Element_BottonBuyTickets_0 = element(by.buttonText('Buy Tickets'));
    SchoolPageRepo.prototype.Search_Element_BottonBuyTickets_1 = element.all(by.buttonText('Buy Tickets'));

    SchoolPageRepo.prototype.SelectEventByTeamName = function SelectEventByTeamName(Team1, Team2) {
        element(by.partialLinkText(Team1 + ' vs ' + Team2)).click();
    };

    SchoolPageRepo.prototype.SelectTicketAmount = function (TicketAmount) {
        return element.all(by.css('option[label="' + TicketAmount + '"]'));
    };
};
module.exports = new SchoolPageRepo();