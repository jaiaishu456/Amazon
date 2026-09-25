//    // // import {test} from'@playwright/test' ;
//    // // test('Launch browser',async({page})=>{
//    // //  await page.goto("https://demoqa.com/text-box")
//    // //  await page.locator('#userName').fill('Jai')
//    // //  await page.locator('#userEmail').fill('jaismarter@gmail.com')
//    // //  await page.locator('#currentAddress').fill('1/7A, 2nd main road,porur')

//    // //  await page.waitForTimeout(2000)
//    // // })


//    // // function paragraph(words){
//    // //    console.log(words)
//    // // }
//    // // paragraph("")


//    // import {test} from  '@playwright/test'
//    // test("Alerts",async({page})=>{
//    //    await page.goto("https://demoqa.com/alerts")
//    //    page.on('dialog',(Dialog)=>{
//    //       console.log(Dialog.message())
//    //       console.log(Dialog.type())

//    //       if(Dialog.type() == 'alert'){
//    //          Dialog.accept()
//    //       }
//    //         else if(Dialog.type() == 'confirm'){
//    //          Dialog.dismiss()
//    //         }
//    //           else{
//    //             Dialog.accept('Jai')
//    //           }
//    //    })

//    //    await page.locator('#alertButton').click()
//    //    await page.locator('#timerAlertButton').click()
//    //    await page.locator('#confirmButton').click()
//    //    await page.locator('#"promtButton').click



//    // })


// // import {test} from '@playwright/test'
// // test('Uploads',async({page})=>{
// // await page.goto("https://www.file.io/")
// // page.setInputFiles('#select-files-input','')
// // })


// import {test} from '@playwright/test'
// test ('Frames',async({page})=>{

//    await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame")
//    const frame= page.frameLocator('[name="globalSqa"]')
//    await frame.locator('//h3[text()="JMeter Training"]').click()
//    await frame.locator(' //h3[text()="Mobile Application Testing Training"]').click()
//    await page.locator(' //span[text()="Sortable"]').click()

// })

// import { test } from '@playwright/test'
// test('Frame Testing', async ({ page }) => {
//     await page.goto("https://www.tutorialspoint.com/selenium/practice/frames.php")
//     const frame1 = page.frameLocator('[width="100%"]')
//     await frame1.locator('[href="https://www.tutorialspoint.com"]').click()
//     await page.waitForTimeout(3000)
//     const frame2 =page.frameLocator('[width="30%"]')
//     await frame2.locator('[class="logo-desktop"]').click()
//     await page.waitForTimeout(3000)

// })

import {test} from '@playwright/test'
test('Frame Testing 2',async({page})=>{
    await page.goto("https://www.hyrtutorials.com/p/frames-practice.html")
    const frame1 = page.frameLocator('[id="frm2"]')
    await frame1.locator('#firstName').fill('Jai')
    await frame1.locator('#lastName').fill('Smarter')
    await frame1.locator('#malerb').click()
    await frame1.locator('#englishchbx').click()
    await frame1.locator('#email').fill('jai.smarter@example.com')

})


// frame 3_2


// import { test } from '@playwright/test'
// test('Frame 3 Testing', async ({ page }) => {
//     await page.goto("https://www.hyrtutorials.com/p/frames-practice.html")
//     const frame3_2 = page.frameLocator('')

// })














