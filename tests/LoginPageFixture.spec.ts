import {test, expect} from '../src/fixtures/pagefixtures'
import {CsvHelper} from '../src/utils/csvutils'


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

test('verify 3',async({loginPage,testData})=>{
    for(let row of testData)
    {
        await loginPage.doLogin(row.username,row.password)
        expect(await loginPage.isLoginErrorDisplayed()).toBeTruthy()
    }
})

let testData = CsvHelper.readCSV('src/data/testdata.csv')
 for(let row of testData)
    {
        test(`Verify test ${row.username} and ${row.password} from`,async({loginPage})=>{
            await loginPage.doLogin(row.username,row.password)
            expect(await loginPage.isLoginErrorDisplayed()).toBeTruthy()
        })
    }



