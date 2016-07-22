'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var schoolPageRepo = require ('../Repository/SchoolPageRepo.js');
var centralForsythHighSchoolCummingRepo = require ('../Repository/CentralForsythHighSchoolCummingRepo.js');
var phoneSpeciality = require ('../Page/PhoneSpeciality.js');
var keyStrokesRepo = require ('../Repository/KeyStrokesRepo.js');

//config File
var ProtractorConfig = require ('/Users/victorsilva/WebstormProjects/GoFan/test/protractor-conf.js');

var SchoolPage = function SchoolPage() {

    //Universales
    SchoolPage.prototype.SelectUpcomingEvent = function SelectUpcomingEvent(Team1, Team2) {

        if ((expect(schoolPageRepo.EventNameCurrentTeam.getText()).to.eventually.equal(Team1)) && expect(schoolPageRepo.EventNameOpponetTeam.getText()).to.eventually.equal(Team2))
        {
            schoolPageRepo.SelectEventByTeamName(Team1, Team2);
            browser.waitForAngular();
        }
    };

    SchoolPage.prototype.VerifyHostSchoolName = function VerifyHostSchoolName (HostSchoolName) {
        var currentDevice = '';
        var currentPlatform = '';

        browser.getCapabilities().then(function (capability) {

             currentDevice =  capability.get('device');
             currentPlatform = capability.get('platform');
        });

        if (currentDevice != 'iPhone 6S' && currentPlatform != 'ANDROID') {
            //console.log(currentDevice); //normal tira Null bebe de estar en promise para sacar la information y solo sale info en Mobile

            var hostSchool = schoolPageRepo.EventHostSchool.getText().then(function (Schoolname) {
                //console.log(Schoolname);
                return Schoolname.toLowerCase();
            });

            expect(hostSchool).to.eventually.equal(HostSchoolName.toLowerCase());
        }
        else
        {
            expect(centralForsythHighSchoolCummingRepo.Search_Element_CentralForsythHighSchoolCumming.isDisplayed()).to.eventually.equal(true);
        }
    };

    SchoolPage.prototype.VerifyQTYBoxIsDisplayed = function () {
        expect(schoolPageRepo.Search_Element_QTYBox.get(1).isDisplayed()).to.eventually.equal(true);
    };

    SchoolPage.prototype.ClickBottonBuyTicket = function () {

        browser.waitForAngular();

        browser.getTitle().then(function (tittle) {
            //console.log(tittle);

            if (tittle === 'Cart')
            {
                phoneSpeciality.PhoneScrollToButton();
                element(by.binding('buyTicketsLabel')).click();
                //schoolPageRepo.Search_Element_BottonBuyTickets_0.click();
                browser.sleep(2000);
            }
            else {
                schoolPageRepo.Search_Element_BottonBuyTickets_1.get(1).click();
            }
        });
    };

    SchoolPage.prototype.SelectNumberOfTickets = function (TicketAmount) {

        browser.waitForAngular();
        browser.sleep(4000);
        //selectiona la caja de QTY
        schoolPageRepo.Search_Element_QTYBox.get(1).click(); //Chrome

       //browser.wait(conditions.presenceOfElementLocated(webdriver.By.xpath("//div[2]/ul/li/div/label/select")));
       //  phoneSpeciality.PhoneScrollToButton();
       //  browser.findElement(by.xpath("//div[2]/ul/li/div/label/select")).click();
       //  browser.findElement(by.xpath("//div[2]/ul/li/div/label/select")).sendKeys(protractor.Key.ENTER, protractor.Key.RETURN);
       //  browser.findElement(by.xpath("(//option[@value='number:1'])[2]")).click();
       //   //Selecional un 1 ticket
        schoolPageRepo.SelectTicketAmount(TicketAmount).get(1).click();//chrome
        
        //AQUI PONER SI NECESITAN poner if ( el address de selelenium)

        if (ProtractorConfig.config.seleniumAddress === 'http://hub.browserstack.com/wd/hub' )
        {
            keyStrokesRepo.NUMPAD1();
        }

        //Aceptar el #1 con teclado "ENTER"
        keyStrokesRepo.ENTER();
    };

    SchoolPage.prototype.VerifySubTotalAmount = function (SubtotalAmount) {
        expect(schoolPageRepo.Search_Element_SubtotalAmount.get(1).getText()).to.eventually.equal('Subtotal: US '+SubtotalAmount);
    };
};
module.exports = new SchoolPage();