import { Page } from "puppeteer";

export interface Credentials {
    username: string;
    password: string;
  }

export default class LoginPage{

    private static readonly LOGIN_URL = 'https://profile.w3schools.com/';
  
    private static readonly username:string = 'input[name="email"]';
    private static readonly password:string = 'input[type="password"]';
    private static readonly submit:string = 'button[class="_1VfsI _OD95i _3_H0V"]';
    
    constructor(private readonly page: Page) {
        this.page = page;
    }

    /** Get page title */
    public async getTitle() {
        return await this.page.title();
    }
   
    public async browserLoginHandler(config: Credentials,){
        await this.goToLoginPageAndLogin(config.username, config.password);
        console.log("this.page.title ", this.page.title())
        
    }
     /** Redirecting to login page */
    public async goToLoginPageAndLogin(
        username: string,
        password: string,
      ): Promise<void> {

        await this.page.goto(LoginPage.LOGIN_URL);
        await this.fillLoginFormAndSubmit(username, password);
      }
      
      /** Fill login form and submit */
    public async fillLoginFormAndSubmit(
        username: string,
        password: string,
    ): Promise<void> {
        const inputField = await this.page.waitForSelector(LoginPage.username);
        await this.page.type(LoginPage.username, username);
        await this.page.type(LoginPage.password, password);
    
        await this.page.click(LoginPage.submit);
        await this.page.waitFor(10000);
       
    }

    
}