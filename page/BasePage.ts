import {Locator, Page, expect} from '@playwright/test'

export class BasePage {

    readonly username: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;


    constructor (protected page: Page){
        this.username = page.locator('[data-test="username"]');
        this.password= page.locator('[data-test="password"]');
        this.loginBtn = page.locator('[data-test="login-button"]');

    }

    async login (username: string, password: string){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
    }

   async goto (url: string){
       await this.page.goto(url);
    }

    async validateURL (url: string){
        await expect (this.page).toHaveURL(url);
    }

    async saveUser (){
          await this.page.context().storageState({
            path: "storageState.json",
          });
    }


}