// 'use strict';
//
// var chai = require('chai');
// var expect = chai.expect;
// var chaiAsPromised = require('chai-as-promised');
// chai.use(chaiAsPromised);
//
// var webdriver = require('selenium-webdriver');
// var protractor = require('protractor');
//
// var searchPage =  require('../Page/SearchPage.js');
// var searchPageRepo = require ('../Repository/SearchPageRepo.js');
//
// //var myclass = require('/Users/victorsilva/WebstormProjects/GoFan/test/e2e/features/main.js');
// //require('jasminewd');
//
// //para likear otra clase exemplo
// //var confis = require('/Users/victorsilva/WebstormProjects/GoFan/test/protractor-conf.js');
//
// // var ptor = require('protractor');
// // var webdriver = require('selenium-webdriver'),
// //     By = webdriver.By,
// //     until = webdriver.until;
//
// var myGofanSteps = function () {
//
//     this.Given(/^I am on Gofan website$/, function (callback) {
//         browser.get('https://www.google.com/?gws_rd=ssl');
//         //browser.get('http://ht.digisci.co/app/search');
//         //browser.waitForAngular();
//         //searchPage.OpenGoFanWebsite();
//         callback();
//     });
//
//     this.Given(/^I search for my school name of North Forsyth$/, function (callback) {
//
//         searchPage.ClickOnSearchSchoolBox();
//         //Necesito cambiar esto mas flexible
//         searchPage.TypeKeys(searchPageRepo.Search_String_NorthForsythHighSchool);
//         callback();
//     });
//
//     this.Then(/^I submit my search$/, function (callback) {
//         //probando
//         //var position = element(by.css('ion-item[href="/app/school/GA5199"]'));
//         // browser.executeScript('window.scrollTo(0,50);', position).then(function () {
//         //          position.click();
//         // });
//
//         //real
//         var position = element(by.css('ion-item[href="/app/school/GA5199"]'));
//         position.click();
//         callback();
//     });
//
//     this.Then(/^I should see my School's Event$/, function (callback) {
//         browser.waitForAngular();
//         //experimentando
//         //expect(element(by.css('h1.page-title.u-uppercase')).getText()/*by.binding('school.name | lowercase')).getText()*/).to.eventually.equal('NORTH FORSYTH HIGH SCHOOL');
//         expect(element(by.css('.page-logo-image')).getAttribute('src')).to.eventually.equal('http://ht.digisci.co/uploads/school/logo/GA5199/GA5199.png');
//         callback();
//     });
//
//     this.Given(/^I select Event Forsyth Central Bulldogs vs Forsyth Raiders$/, function (callback) {
//         browser.waitForAngular();
//         var eventNameCurrentTeam =  element(by.binding(' schools[event.school_id].shortname '));
//         //dice que es North Forsyth Raiders
//         //expect (eventNameCurrentTeam.getText()).to.eventually.equal('Forsyth Central Bulldogs');
//         var eventNameOpponetTeam = element(by.binding(' schools[event.opponent_school_id].shortname '));
//         //dice que es Forsyth Central Bulldogs
//         //expect (eventNameOpponetTeam.getText()).to.eventually.equal('North Forsyth Raiders');
//         eventNameCurrentTeam.click();
//         callback();
//     });
//
//     this.Given(/^I select One ticket to buy for school event$/, function (callback) {
//         browser.waitForAngular();
//         var QTY_Box = element(by.model('ticket._source.selected_quantity'));
//         QTY_Box.click();
//         var ticket_Qty = element(by.css('option[label="1"]'));
//
//         //Selecional un 1 ticket
//         ticket_Qty.click();
//         //Aceptar el #1
//         browser.actions().sendKeys(protractor.Key.ENTER).perform();
//         callback();
//     });
//
//     this.Then(/^I should see Host School's event$/, function (callback) {
//
//         var currentDevice='';
//         var currentPlatform = '';
//
//         browser.getCapabilities().then(function (c) {
//
//             currentDevice =  c.get('device');
//             currentPlatform = c.get('platform');
//             //llamar un miebro de la clase solo exemplo
//             //confis.config.multiCapabilities[0].browserName;
//         });
//
//         var eventHostCurrentTeam = element(by.binding('school.name | lowercase'));
//
//         if (currentDevice != 'iPhone 6S' && currentPlatform != 'ANDROID') {
//             console.log(currentDevice);
//             expect(eventHostCurrentTeam.getText()).to.eventually.equal('FORSYTH CENTRAL HIGH SCHOOL');
//         }
//         else
//         {
//             eventHostCurrentTeam = element(by.css('a[href="/app/school/GA5007"]'));
//             expect(eventHostCurrentTeam.isDisplayed()).to.eventually.equal(true);
//         }
//         callback();
//     });
//
//     this.Then(/^I should see Search Schools$/, function (callback) {
//         expect(element(by.model('data.search')).getAttribute('id')).to.eventually.equal('search_box' );
//         callback();
//     });
//
//     this.Then(/^I should see Qty box display$/, function (callback) {
//         expect(element(by.model('ticket._source.selected_quantity')).isDisplayed()).to.eventually.equal(true);
//         callback();
//     });
//
//     this.Given(/^I click Buy Tickets$/, function (callback) {
//
//         browser.waitForAngular();
//
//         var buttonBuyTicket = element(by.buttonText('Buy Tickets'));
//
//         if (browser.getTitle() === "Cart") {
//
//             //ESTO PARA HACER SCROLL al elemento deseado EN TELEFONOS
//             browser.executeScript("document.getElementsByClassName('button-positive')[0].scrollIntoView();");
//         }
//
//         browser.sleep(2000);
//
//         buttonBuyTicket.click();
//         callback();
//     });
//
//     this.Then(/^I should see Subtotal amount$/, function (callback) {
//         expect(element(by.binding('subTotal() | number : 2')).getText()).to.eventually.equal('Subtotal: US $100.00');
//         callback();
//     });
//
//     this.Then(/^I should see Your Cart page$/, function (callback) {
//
//         var namePage = browser.getTitle();
//         expect(namePage).to.be.eventually.equal('Cart');
//         callback();
//     });
//
//     this.Then(/^I should see Total amount purchase for One ticket$/, function (callback) {
//
//         //ESTO PARA HACER SCROLL al elemento deseado EN TELEFONOS
//         browser.executeScript("document.getElementsByClassName('button-positive')[0].scrollIntoView();");
//
//         expect(element(by.binding('grandTotal | number: 2')).getText()).to.eventually.equal('Total: $103.70');
//         callback();
//     });
//
//
//     this.Given(/^Ia am on Gofan website$/, function (callback) {
//         browser.get('https://www.google.com/?gws_rd=ssl');
//         //browser.get('http://ht.digisci.co/app/search');
//         //browser.waitForAngular();
//         //searchPage.OpenGoFanWebsite();
//         callback();
//     });
// };
// module.exports = myGofanSteps;