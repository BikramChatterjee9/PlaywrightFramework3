import {test,expect} from '@playwright/test'

import {LoginPage} from '../src/pages/LoginPage'

let loginPage:LoginPage

test.beforeEach('setup',async({page})=>{
    loginPage = new LoginPage(page)
    await loginPage.goToLoginPage()
})

test('verify 1',async({})=>{

    let actualTitle = await loginPage.getPageTitle()
    console.log(actualTitle)

})

test('verify 2',async({})=>{

    let status = await loginPage.isForgotPassword()
    expect(status).toBeTruthy()
})