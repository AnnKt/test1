const {Then} = require('cucumber');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

Then('Page title is equal to {string}', (title) => {
    return expect(browser.getTitle()).to.eventually.equal(title);
});

Then('History {string} is equal to {int}', (locator, result) => {
    return expect(element.all(by.repeater(locator)).count()).to.eventually.equal(result);
});

Then('{string} {string} is displayed', (_, locator) => {
    const elem = element(by.css(locator));
    return expect (elem.isDisplayed()).to.eventually.equal(true);
});

Then('{string} {string} with text {string} is displayed', (_, locator, text) => {
    const elem = element(by.cssContainingText(locator, text));
    return expect (elem.isDisplayed()).to.eventually.equal(true);
});