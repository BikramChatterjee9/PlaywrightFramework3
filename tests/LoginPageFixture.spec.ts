import {test, expect} from '../src/fixtures/pagefixtures'


test.beforeEach('setup',async({loginPage})=>{
    await loginPage.goToLoginPage()
})

test('verify 1',async({loginPage})=>{

    let actualTitle = await loginPage.getPageTitle()
    console.log(actualTitle)

})

test('verify 2',async({loginPage})=>{

    let status = await loginPage.isForgotPassword()
    expect(status).toBeTruthy()
})