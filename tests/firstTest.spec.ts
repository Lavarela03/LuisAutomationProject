import {Page,expect,test} from '@playwright/test'
import { beforeEach } from 'node:test'

test.beforeEach(async({page}) => {
    await page.goto("https://www.LendingTree.com")
})

test.only('Testing with argos CI',() => {
    test('First Test',async({page}) => {
       const newButton = await page.locator('ul li').getByRole('button')
       await newButton.getByText('Personal Loans').click()
    })

   
})

test('second Test',async({page})=> {
   
    await page.goto('https://www.lendingtree.com/about/contact-us/')
    await page.locator('div select').selectOption('Technical assistance')
    //await page.waitForSelector('.contact-info contactus-info')
    await page.getByRole('textbox',{name:"First Name"}).click()

   


})