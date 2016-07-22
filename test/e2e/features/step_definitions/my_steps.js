'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

// var webdriver = require('selenium-webdriver');
// var protractor = require('protractor');

var searchPage = require('../Page/SearchPage.js');
var sidePanelMenu = require('../Page/SidePanelMenu.js');
var northForsythHighSchoolCumming = require('../Page/NorthForsythHighSchoolCumming.js');
var schoolPage = require('../Page/SchoolPage.js');
var yourCartPage = require('../Page/YourCartPage.js');
var logInPanel = require('../Page/LogInPanel');
var creditCard = require('../Page/CreditCard.js');
//var myclass = require('/Users/victorsilva/WebstormProjects/GoFan/test/e2e/features/main.js');
//require('jasminewd');

//para likear otra clase exemplo
//var confis = require('/Users/victorsilva/WebstormProjects/GoFan/test/protractor-conf.js');

//var ptor = require('protractor');
// var webdriver = require('selenium-webdriver'),
//     By = webdriver.By,
//     until = webdriver.until;

var myGofanSteps = function myGofanSteps() {

    this.Given(/^I am on Gofan website$/, function (callback) {
        //no angular page
        //browser.driver.get('https://www.google.com/?gws_rd=ssl');
        //with Angular
        //browser.get('http://ht.digisci.co/app/search');
        //browser.waitForAngular();
        searchPage.OpenGoFanWebsite();
        callback();
    });

    this.Given(/^I search for my school name of "([^"]*)"$/, function (schoolName, callback) {
        searchPage.SearchForSchool(schoolName);
        callback();
    });

    this.Then(/^I should see my School's Event Page$/, function (callback) {
        northForsythHighSchoolCumming.VerifyMySchoolEventsPage();
        callback();
    });

    this.Given(/^I select Upcoming Event "([^"]*)" vs "([^"]*)"$/, function (Team1, Team2, callback) {
        schoolPage.SelectUpcomingEvent(Team1, Team2);
        callback();
    });

    this.Then(/^I should see Host School's event "([^"]*)"$/, function (HostSchoolName, callback) {
        schoolPage.VerifyHostSchoolName(HostSchoolName);
        callback();
    });

    this.Given(/^I select "([^"]*)" ticket to buy for school event$/, function (TicketAmount, callback) {
        schoolPage.SelectNumberOfTickets(TicketAmount);
        callback();
    });

    this.Then(/^I should see Search Schools$/, function (callback) {
        searchPage.VerifySearchBoxText();
        callback();
    });

    this.Then(/^I should see Qty box display$/, function (callback) {
        schoolPage.VerifyQTYBoxIsDisplayed();
        callback();
    });

    this.Given(/^I click Buy Tickets$/, function (callback) {
        schoolPage.ClickBottonBuyTicket();
        callback();
    });

    this.Given(/^I click Login to Purchase Tickets$/, function (callback) {
        schoolPage.ClickBottonBuyTicket();
        callback();
    });
    
    this.Then(/^I should see Subtotal amount of "([^"]*)"$/, function (SubtotalAmount, callback) {
        schoolPage.VerifySubTotalAmount(SubtotalAmount);
        callback();
    });

    this.Then(/^I should see Your Cart page$/, function (callback) {
        yourCartPage.VerifyYourCartPage();
        callback();
    });

    this.Then(/^I should see Total amount purchase for tickets of "([^"]*)"$/, function (TotalAmount, callback) {
        yourCartPage.VerifySubTotalAmount(TotalAmount);
        callback();
    });

    this.Given(/^I click on hamburger icon$/, function (callback) {
        sidePanelMenu.ClickOnThreeBardIcon();
        callback();
    });

    this.Given(/^I click on LogIn on Side Panel$/, function (callback) {
        sidePanelMenu.ClickOnLogIn();
        callback();
    });

    this.Given(/^I enter my email address$/, function (callback) {
        logInPanel.EnterUserEmailAdress();
        callback();
    });

    this.Given(/^I enter my password$/, function (callback) {
        logInPanel.EnterUserPassword();
        callback();
    });

    this.Given(/^I click login button$/, function (callback) {
        logInPanel.ClickOnLogInButton();
        callback();
    });

    this.Then(/^I should see Log In Panel$/, function (callback) {
        logInPanel.VerifySignInwithEmailPanelisShown();
        callback();
    });

    this.Then(/^I should not see Log In Panel$/, function (callback) {
        logInPanel.VerifySignInwithEmailPanelisNotShown();
        callback();
    });

    this.Given(/^I click on Log out on Side Panel$/, function (callback) {
        sidePanelMenu.ClickOnLogOut();
        callback();
    });

    this.Then(/^I enter my Credit Card number$/, function (callback) {
        creditCard.EnterCreditCardNumber();
        callback();
    });

    this.Then(/^I enter my Credit Card expiration date$/, function (callback) {
        creditCard.EnterCreditCardExpirationDate();
        callback();
    });

    this.Then(/^I enter my Credit Card CVC$/, function (callback) {
        creditCard.EnterCreditCardCVC();
        callback();
    });

    this.Then(/^I click Pay button$/, function (callback) {
        creditCard.ClickPay();
        browser.sleep(10000);
        callback();
    });
};
module.exports = myGofanSteps;

//var ColorEnum = Object.freeze ({RED:0 , GREEN:1, BLUE:2});