import { TestPage } from "../page/test.page";
//import { Home } from "../page/home.page";
//import { expect } from 'chai';

const testPage = new TestPage();

describe('Load Frame', () => {
    it('Frame Check', () => {
        //console.time("Test 'Frame Check' took");
        testPage.open();
        testPage.clickButton();
        testPage.expectFrame();
    });
})
