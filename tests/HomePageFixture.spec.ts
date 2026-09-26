import {test, expect} from '../src/fixtures/pagefixtures'

test.beforeEach('setup',async({loginPage,homePage})=>{
    await loginPage.goToLoginPage()
    await loginPage.doLogin('rapanomik@gmail.com','vicky123')
})

test('verify 1',async({homePage})=>{
    let title:string = await homePage.getHomePageTitle()
    console.log(title)
})

test('verify 2',async({homePage})=>{
    let status:boolean = await homePage.isLogoutLinkPresent()
    expect(status).toBeTruthy()
})

test('verify 3',async({homePage})=>{
     let allHeadings:string[] = await homePage.getPageHeadings()
    console.log(allHeadings)
    expect(allHeadings).toEqual([
        'My Account',
        'My Orders',
        'My Affiliate Account',
        'Newsletter'
    ])
})