import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage
{
    private readonly logoutLink:Locator
    private readonly allHeadings:Locator

    constructor(page:Page)
    {
        super(page)
        this.logoutLink = page.getByRole('link',{name:'Logout'})
        this.allHeadings = page.getByRole('heading',{level:2})
    }

    async getHomePageTitle():Promise<string>
    {
        return this.page.title()
    }

    async isLogoutLinkPresent():Promise<boolean>
    {
        return this.logoutLink.isVisible()
    }

    async getPageHeadings():Promise<string[]>
    {
        return this.allHeadings.allInnerTexts()
    }

}