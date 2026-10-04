import {test as baseTest} from '@playwright/test'
import {HomePage} from '../pages/HomePage'
import {LoginPage} from '../pages/LoginPage'
import{CsvHelper} from '../utils/csvutils'

type pageFixtures={
    loginPage:LoginPage,
    homePage:HomePage,
    testData: Record<string, string>[];
}

export let test = baseTest.extend<pageFixtures>({

    loginPage:async({page},use)=>{
        let loginPage = new LoginPage(page)
        await use(loginPage)
    },
    homePage:async({page},use)=>{
        let homePage = new HomePage(page)
        await use(homePage)
    },
    testData:async({},use)=>{
        let testdata=CsvHelper.readCSV('src/data/testdata.csv')
        await use(testdata)
    }
})

export {expect} from '@playwright/test'