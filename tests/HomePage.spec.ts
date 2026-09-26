import {test,expect} from '@playwright/test'

import {LoginPage} from '../src/pages/LoginPage'
import {HomePage} from '../src/pages/HomePage'

let loginPage:LoginPage
let homePage:HomePage

test.beforeEach('setup',async({page})=>{
    loginPage = new LoginPage(page)
    await loginPage.goToLoginPage()
    await loginPage.doLogin(process.env.USERNAME!,process.env.PASSWORD!)
    homePage= new HomePage(page)
})

test('verify 1',async({})=>{
    let title:string = await homePage.getHomePageTitle()
    console.log(title)
})

test('verify 2',async({})=>{
    let status:boolean = await homePage.isLogoutLinkPresent()
    expect(status).toBeTruthy()
})

test('verify 3',async({})=>{
     let allHeadings:string[] = await homePage.getPageHeadings()
    console.log(allHeadings)
    expect(allHeadings).toEqual([
        'My Account',
        'My Orders',
        'My Affiliate Account',
        'Newsletter'
    ])
})