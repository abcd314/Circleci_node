import puppeteer,{ Browser, Page } from "puppeteer";
import { describe, expect, it,beforeAll,afterAll } from "@jest/globals";
import LoginPage, { Credentials } from "../src/LoginPage";
// import TablePage from "../src/pages/TablePage";

export let browser: Browser;
describe("Login Tests",()=>{
    
    let cred : Credentials;
    const pageTitle :string = "Log in - W3Schools";
    const url: string ='https://profile.w3schools.com/';
    let browser: Browser;
    let page: Page;
    // let tablePage: TablePage;
    jest.setTimeout(3000000);
    
    beforeAll(async()=>{
        cred = {
            username: 'kalyani.pagare@afourtech.com',
            password: 'Afour@2812'
        }
        browser=await puppeteer.launch({
            headless:false,devtools:false,slowMo:200
        });
        page = await browser.newPage();
        await page.setViewport({ width: 1440, height: 1024 });
        await page.goto(url);
    });
    
    afterAll(async () => {
        await browser.close();
    });

    it("should be able to login",async ()=>{
        const loginPage = new LoginPage(page);
        await loginPage.browserLoginHandler(cred);
        // const title = await loginPage.getTitle();
        // expect(title).toMatch(pageTitle);
        
    })
    // it("should be able to scrape table data",async ()=>{
    //     tablePage =new TablePage(page,browser);
    //     tablePage.goToTablePage();
    //     const data = await tablePage.getTableData();
    //     console.log(data)
    //     await page.waitFor(3000);
        
    // })
});
  


