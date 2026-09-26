import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage{

    private readonly emailId:Locator
    private readonly password:Locator
    private readonly loginButton:Locator
    private readonly forgotPasswordLink:Locator
    private readonly logoImage:Locator

    constructor(page:Page)
    {
        super(page)
        this.emailId=page.getByRole('textbox',{name:'E-Mail Address'})
        this.password=page.getByRole('textbox',{name:'Password'})
        this.loginButton=page.getByRole('button',{name:'Login'})
        this.forgotPasswordLink=page.getByRole('link',{name:'Forgotten Password'}).first()
        this.logoImage = page.getByAltText('naveenopencart')
    }

    async goToLoginPage():Promise<void>
    {
        await this.page.goto('/opencart/index.php?route=account/login')
    }

    async isForgotPassword():Promise<Boolean>
    {
        return await this.forgotPasswordLink.isVisible()
    }

    async doLogin(username:string,password:string):Promise<void>
    {
        await this.emailId.fill(username)
        await this.password.fill(password)
        await this.loginButton.click()
    }

    async getPageTitle():Promise<string>
    {
        return await this.page.title()
    }



}