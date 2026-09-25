// import {test} from '@playwright/test'

// //.First task -- Total count of kids t-shirts

// test('T-shirts count',async({page})=>{
//     await page.goto("https://www.myntra.com/boy-tshirts")
//     const tshirts = page.locator('//li[@class="product-base"]');

//     const count = await tshirts.count();

//     console.log("Total Kids T-shirts:", count);


// //.Second task -- Minimum price of kids t-shirts

// // test('Minimum price',async({page})=>{ 
// //     await page.goto("https://www.myntra.com/boy-tshirts")
//     const totalPrice = page.locator('//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"]')
//     const discountPrice = await totalPrice.allTextContents()
//     const price = discountPrice.map(priceValue=> Number(priceValue.replace(/[^0-9]/g, "")))
//     const minimumPrice = Math.min(...price)
//     console.log('Minimum Price', minimumPrice)

// //.Third task -- product name of minimum price

// // Function
// async function getMinimumPriceProduct(page) {

//     const products = page.locator('//li[@class="product-base"]');

//     const prices = await products.locator(
//         '//span[@class="product-discountedPrice"]'
//     ).allTextContents();

//     const priceNumbers = prices.map(
//         price => Number(price.replace(/[^0-9]/g, ""))
//     );

//     const minimumPrice = Math.min(...priceNumbers);

//     const name = await page.locator(`//li[@class="product-base"][.//span[@class="product-discountedPrice"and contains(.,'${minimumPrice}')]]
//         //h3`
//     ).first().textContent();

//     return name;


// }
//         const productName = await getMinimumPriceProduct(page);

//     console.log("Minimum Price Product:", productName);
// })


// import { test } from '@playwright/test'
// test('Myntra', async ({ page }) => {
//     await page.goto("https://www.myntra.com/boy-tshirts")

//     //function to get minimumPrice

//     const minimumPrice = await getMinimumPrice(page)
//     console.log("Minimum Price", minimumPrice)

//     //function to get productName

//     const productName = await getProductName(page,minimumPrice)
//     console.log("Product Name", productName)

// })

// // funtion 1

// async function getMinimumPrice(page) {
//     const prices = await page.locator('//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"]'
//     ).allTextContents();

//     const priceNumbers = prices.map(
//         price => Number(price.replace(/[^0-9]/g, ""))
//     );

//     const minimumPrice = Math.min(...priceNumbers);
    
//     return minimumPrice

// }

// async function getProductName(page, minimumPrice) {

//     const productName = await page.locator(
//         `//li[@class="product-base"][.//span[@class="product-discountedPrice" and contains(.,'${minimumPrice}')]]//h3`
//     ).first().textContent();

//     return productName;
// }


// import { test } from '@playwright/test'
// test('Myntra', async ({ page }) => {
//     await page.goto("https://www.myntra.com/boy-tshirts")

// async function getMinimumPrice(){
//     const prices = await page.locator('//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"]'
//     ).allTextContents();

//     const priceNumbers = prices.map(
//         price => Number(price.replace(/[^0-9]/g, ""))
//     );

//     const minimumPrice = Math.min(...priceNumbers);
//     const productName = await getProductName(minimumPrice)
//     console.log(productName)
//     return minimumPrice
// }
// async function  getProductName(minimumPriceValue){
//     const productName = await page.locator(
//         `//li[@class="product-base"][.//span[@class="product-discountedPrice" and contains(.,'${minimumPriceValue}')]]//h3`
//     ).first() 

//     return await productName.textContent() ;

// }

//  const minimumPrice = await getMinimumPrice() 
//  console.log(minimumPrice)

// })



// import { test } from '@playwright/test'
// test('Myntra', async ({ page }) => {
//     await page.goto("https://www.myntra.com/boy-tshirts")

// async function getMinimumPrice(){
//     const prices = await page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/descendant::span[@class="product-discountedPrice"or(text() and not (@class))]'
//     ).allTextContents();

//     const priceNumbers = prices.map(
//         price => Number(price.replace(/[^0-9]/g, ""))
//     );

//     const minimumPrice = Math.min(...priceNumbers);
//     const productName = await getProductName(page,minimumPrice)
//     console.log(productName)
//     return minimumPrice
// }
// async function  getProductName(page,minimumPriceValue){
//     const productName = await page.locator(`//span[@class="product-discountPercentage"or text() and (@notclass)][text() =${"minimumPriceValue"}]/ancestor::li[@class="product-base"]//h3[@class="product-brand"]`
//     ).first()
                 
                                             
//     return await productName.textContent() ;

// }

//  const minimumPrice = await getMinimumPrice() 
//  console.log(minimumPrice)

// })



// import {test} from '@playwright/test'
// test('Amazon test',async({page})=>{
//     await page.goto("https://www.amazon.in/")
//     await page.getByRole('searchbox',{name: 'Search Amazon.in'}).fill('Iphone 17')
//     const firstSuggestion =  page.locator('//div[@class="left-pane-results-container"]//div[@id]').first()
//     await firstSuggestion.click()
//     await page.waitForTimeout(2000)
//     const iPhone17Rating =  page.locator ('//div[@data-cy="reviews-block"]//span[normalize-space()="4.6"] /ancestor::div[@role="listitem"][1] [.//div[@data-cy="title-recipe"][contains(.,"iPhone 17")]]')
    
//     const productName =await iPhone17Rating.count()

     

//     console.log("iPhone 17 Rating :",productName)

// })



import {test} from ''


































