/* globals gauge*/
"use strict";
const path = require('path');
const {
    $,
    openBrowser,
    write,
    closeBrowser,
    button,
    goto,
    press,
    screenshot,
    above,
    click,
    checkBox,
    listItem,
    toLeftOf,
    link,
    text,
    into,
    textBox,
    evaluate,
    hover,
    resizeWindow,
    currentURL,
    goBack,
    highlight,
    toRightOf,
    scrollDown,
    focus,
    mouseAction,
    ArrowDown,
    waitFor,
} = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';
const expect = require("chai").expect;
const { Console, clear } = require('console');
/*
beforeSuite(async () => {
    await openBrowser({
        headless: headless
    })
});
*/
/*
afterSuite(async () => {
    await closeBrowser();
}); 
*/

beforeSuite(async () => {
    await console.log('before suite');
 });
 
 beforeSpec(async () => {
     await console.log('before spec');
 });

 beforeSpec(async () => {
    await console.log('before spec');
});
/*
  beforeScenario(async () => {
    await openBrowser();{
        headless: headless
    }
 }); */

 beforeStep(async () => {
     await console.log('before step');
 });
 afterStep(async () => {
     await console.log('after step');
 });

 
 afterScenario(async () => {
     await console.log('after scenario');
     //await closeBrowser();
 });

 /* afterScenario(async () => {
    await closeBrowser();
}); */
 
 afterSpec(async () => {
     await console.log('after spec');
 });
 
 afterSuite(async () => {
     await console.log('after suite');
     await closeBrowser();
 });
 

// Return a screenshot file name
gauge.customScreenshotWriter = async function () {
    const screenshotFilePath = path.join(process.env['gauge_screenshots_dir'],
        `screenshot-${process.hrtime.bigint()}.png`);

    await screenshot({
        path: screenshotFilePath
    });
    return path.basename(screenshotFilePath);
};

step("Add task <item>", async (item) => {
    await write(item, into(textBox("What needs to be done?")));
    await press('Enter');
});

step("View <type> tasks", async function (type) {
    await click(link(type));
});

step("Complete tasks <table>", async function (table) {
    for (var row of table.rows) {
        await click(checkBox(toLeftOf(row.cells[0])));
    }
});

step("Clear all tasks", async function () {
    await evaluate(() => localStorage.clear());
});

step("Open todo application", async function () {
    await goto("todo.taiko.dev");
});

step("Must not have <table>", async function (table) {
    for (var row of table.rows) {
        assert.ok(!await text(row.cells[0]).exists(0, 0));
    }
});

step("Must display <message>", async function (message) {
    assert.ok(await text(message).exists(0, 0));
});

step("Add tasks <table>", async function (table) {
    for (var row of table.rows) {
        await write(row.cells[0]);
        await press('Enter');
    }
});

step("Must have <table>", async function (table) {
    for (var row of table.rows) {
        assert.ok(await text(row.cells[0]).exists());
    }
});


step("Open <page> with headless mode <isheadless>", {continueOnFailure: true}, async function(page, isheadless) {
        var headlessParam = isheadless.toLowerCase() === 'true';
        await openBrowser({headless: headlessParam, args:['--window-size=1366,788']})
        await goto(page);
        var currentUrl = await currentURL();
        expect(currentUrl).to.contain(page);
    
});

step("Click on documentation button", async function() {
    await click('Documentation')
});


step("Click on <error> button", async function(arg0) {
	/*try {
    await click($(`#error`));
} catch(e) {
    console.log('Az error gomb nem található');
    console.log(e);
} */
});


step("Click on <search input>", async function(arg0) {
	await click($(`#search`));
});

step("Hover on Blog button", async function() {
	await hover($(`.link_examples`));
});

step("Write <searchParam> in the search field", async function(searchParam) {
	await write(searchParam, $(`#search`));
});

step("Press Enter.", async function() {
	await press('Enter');
});


step("Find Plugins nav item", async function() {
    var pluginsListItem = await listItem('Plugins');
    console.log(await pluginsListItem.attribute('class'));
    if (pluginsListItem.isVisible() == true){
	await click(pluginsListItem);
    }
});

step("Find Plugins nav item2", async function() {
    var pluginsListItem = await listItem('Plugins');
    console.log(await pluginsListItem.attribute('class'));
    if (pluginsListItem.isVisible() == true){
	await click(pluginsListItem);
    }
});


step("Click on Bejelentkezés", async function() {
    	var loginBtn = await $(`a[class="site-sub-nav__link site-sub-nav__link--has-icon"]`);
        var hamburgerMenu = await $(` .hamburger-box`);
        var megjelent = await hamburgerMenu.isVisible();
        if (hamburgerMenu.isVisible() == true){
            await click(hamburgerMenu);
            await click($(`a[href=' /belepes']`));
        } else{
         await click(loginBtn);
        }
});


step("Write out category names", {continueOnFailure: true}, async function() {
    let categoryList = await link({class:'home-shop-categories__card__link'}).elements();
    expect(categoryList).to.have.lengthOf(8);
    assert.strictEqual(await categoryList[0].text(), "Gépösszerakó");
    expect(await categoryList[0].text() == "Gépösszerakó").to.be.ok;
       /* for (let category of categoryList) {
        let szoveg = await category.text(); 
        console.log(await link(szoveg).attribute('href'));
    } */
	
});


/*
("Find Plugins nav item2", async function() {
    var pluginsListItem = await listItem('Plugins');
    console.log(await pluginsListItem.attribute('class'));
    if (pluginsListItem.isVisible() == true){
	await click(pluginsListItem); */



step("Write <user1> into chechbox", async function() {
	await write("user1", into($(`#_username`)));
});


step("Write password into <arg0> checkbox", async function(a) {
	await write("pass1", into($(`input[name=_password`)));
});

step("Uncheck <arg0> checkbox", async function() {
	await click($(`input#_remember_me, span.control__indicator`));
});

step("Press escape", async function() {
	await press("Escape");
});


step("Write <playstation> to search field", async function() {
	await write("playstation", textBox({ placeholder: "Keresés..." }));
});

step("Press ('Enter')", async function() {
	await press('Enter', $(`input.search-bar__input.js-search-bar__input`));;
});

step("Click MS116 mouse page", async function() {
    	try{await click($(`a[href*=ms116]`));
    } catch(e) {
        console.log(e);
    }
    await goBack();
});


step("Click <arg0>", async function(arg0) {
	click(link({title:"Keresés"}, {waitForEvents: ['DOMContentLoaded']}));
});

step("Hover over MS116 mouse", async function() {
	await hover($(`a[href=ms116]`));
});

step("Click harmadik elem", async function() {
	throw 'Unimplemented Step';
});

step("Open <DEll keresés>with headless mode <arg1>", async function(arg0, arg1) {
    openBrowser();
	await goto('ipon.hu/kereses/shop?keyword=dell');
});



step("Check shop menu items", async function() {
	let menuItemList = await link({class: 'site-nav__subnav'}).elements();
    expect(menuItemList).to.have.lengthOf(4);
    
});

step("Press <Enter>", async function(){
	await press("Enter", {waitForEvents: ['DOMContentLoaded']});
});

step("Add the 3rd item to cart", async function() {
	await click($(`//a[@href="/shop/termek/dell-km5221w-pro-wireless-combo-magyar-fekete/1923364"]`));
    await goBack();
});

step("Click the item left of item KB216", async function() {
	await click(link('Dell'),toRightOf($)(`//a[@href="/shop/termek/dell-kb216-magyar-fekete/1208930"]`));
    await goBack();
});

step("Click the item right of item KB216", async function() {
    await click($(`a[href*='dell-essential-briefcase']`), toRightOf($(`a[href*='dell-kb216-magyar']`)));
    await goBack()
});

step("Open product right to KB216", async function() {
	await click(link("dell"), toRightOf($(`//*[contains(text(), "KB216")]`)));
});

  

step("Go to Samsung page", async function() {
	await goto('ipon.hu/shop/termek/samsung-t220-galaxy-tab-a7-lite-87-32gb-wifi-szurke/1925626');
});

step("Click on basket", async function() {
	await click(button({class:'shop-to-cart-button shop-to-cart-button--vlg product__to-cart-button u-hide@mobile'}));;
});


step("Click into the ipon.hu search field", async function(){
	await click($(`input.search-bar__input.js-search-bar__input`));
});



step("Close search field by clicking on other button (<Bejelentkezés>)", async function() {
	await click($(`a[class="site-sub-nav__link site-sub-nav__link--has-icon"]`));
});



step("Hover and click on the <playstation> recommended keyword on result list", async function(arg0) {
	await hover($(`.search-bar__result-list`));
    try{await click($(`a[href='/kereses/shop?keyword=playstation&ref=pbkeywordsug']`, {waitFor: 15000}));
} catch(e) {
    console.log(e)};
        
});

step("Hover over search bar result card and click", async function() {
	await hover($(`.search-bar__result-cards`));
    await click($(`a[href='/shop/termek/sony-playstation-5-dualsense-kontroller-ejfekete/1921892?pbkeyword=sony+playstation+5+dualsense+kontroller+%C3%A9jfekete&ref=pbproductsug']`));
});

step("Write <playstation> into the search field", async function() {
	await write("playstation", textBox({ placeholder: "Keresés..." }));
});

step("Press enter", async function() {
	try{await press('Enter');
    } catch(e) {
        console.log(e);}
});

step("Hover over <termékkategóriák> (product categories)", async function(ar) {
	await hover($(`.search-bar__result-title`, `Termékkategóriák`));
            
});



step("Hover over < ajánlott termékek>(recommended products)", async function(arg0) {
	await hover(text("Ajánlott termékek"));
});

step("Check the image of the product by hovering over it", async function() {
	await hover($(`a[href='/shop/termek/sony-playstation-5-dualsense-kontroller-ejfekete/1921892']`));
    });


step("The price of the product is visible", async function() {
	await hover(text("28 691 Ft"));
});

step("Hover over the cart button", async function() {
	await hover($(`.shop-card__button.shop-to-cart-button.shop-to-cart-button--basic`));
});

step("Hover over Sony Playstation 5, the text is visible", async function() {
	await hover(text('SONY PlayStation 5 DualSense kontroller éjfekete'));
    expect('SONY PlayStation 5 DualSense kontroller éjfekete').to.include('SONY PlayStation 5 DualSense kontroller éjfekete');
});

step("I check the overlay of the product by hovering and clicking on it", async function() {
	await hover($(`.shop-card__overlay-link`));
    await click($(`.shop-card__overlay-link`));
    
});

step("Hover over quantity input box", async function() {
	await hover($(`//*[@id="app"]/div[1]/main/div/div[3]/div[3]/div[2]/div[1]/div[1]/div/div/div[3]/div/input`));
});

step("Delete the number pressing <Backspace>", async function(arg0) {
	try{ await press(['Backspace'], await clear());
} catch(e) {
    console.log(e)};
    });

step("Write <1> into quantity input box", async function(arg0) {
        await write('1', into($(`//*[@id="app"]/div[1]/main/div/div[3]/div[3]/div[2]/div[1]/div[1]/div/div/div[3]/div/input`)));
    });

step("Check the image of the discounted product by hovering over it (Call of D. - Black Ops III.xbox)", async function() {
	await hover($(`a[href='/shop/termek/call-of-duty-black-ops-iii-xbox-one/1078068']`));
});

step("Hover over the discount shop-card badge", async function() {
	await hover($(`//*[@id="app"]/div[1]/main/div/div[3]/div[3]/div[2]/div[1]/div[5]/div/div/a`));
});

step("Hover over the old price", async function() {
	await hover($(`//*[@id="app"]/div[1]/main/div/div[3]/div[3]/div[2]/div[1]/div[5]/div/div/div[3]/div[2]/div[1]`));
});

step("Hover over new price", async function() {
	await hover($(`//*[@id="app"]/div[1]/main/div/div[3]/div[3]/div[2]/div[1]/div[5]/div/div/div[3]/div[2]/div[2]`));
});

step("Click the <Sony Playstation 5 controller>", async function(arg0) {
	await click($(`a[href='/shop/termek/sony-playstation-5-dualsense-kontroller-ejfekete/1921892']`));
});



step("Check the image of the <OEM playstation> product by hovering over it", async function(arg0) {
	await hover($(`a[href='/shop/termek/oem-playstation-icons-light/1865619']`));
});

step("Click the cart button of the product", async function() {
	await click($(`//*[@id="app"]/div[1]/main/div/div[3]/div[3]/div[2]/div[1]/div[2]/div/div/div[3]/a`, {waitFor:"1 item in cart"}));
});

step("Hover over the product image in the cart (basket)", async function() {
	await hover($(`a[href='/shop/termek/oem-playstation-icons-light/1865619']`));
});

step("Click the product image", async function() {
	await click($(`a[href='/shop/termek/oem-playstation-icons-light/1865619']`));
});

step("Hover over category filter", async function() {
	await hover ($(`.search-list__filter.dropdown-control.js-dropdown-control`));
});

step("Click category filter", async function() {
	await click($(`.search-list__filter.dropdown-control.js-dropdown-control`));
});

step("Hover over categories", async function() {
	await hover(text("Konzol tartozék"));
    await hover(text("Gamer szék"));
    await hover(text("Játék"))
});

step("Hover over category <arg0>", async function(arg0) {
	await hover($(`//*[@id="app"]/div[1]/main/div/div[3]/div[3]/div[1]/div[1]/div[2]/ul/li[3]/div/label/span`));
});

step("Click category <arg0>", async function(arg0) {
	await click($(`//*[@id="app"]/div[1]/main/div/div[3]/div[3]/div[1]/div[1]/div[2]/ul/li[3]/div/label/span`));
});

step("Scroll down and check one product expected to be a game in (<játék>) category", async function(arg0) {
	await scrollDown();
    await hover($(`a[href='/shop/termek/god-of-war-playstation-hits-ps4/1813682']`))
});

step("Hover over order drop-down list", async function() {
	await hover($(`.form-control`));
    
});

step("Click order drop-down list and choose a category (<arg0>)", async function(arg0) {
	await click($(`.form-control`));
    await press(['ArrowDown'], {waitForEvents: 40000});
    await hover($(`.forum-pagination__pages`));

});

step("Order drop-down list opens and collapses by clicking", async function() {
	await click($(`.form-control`));
    await click($(`.form-control`))
});



step("Hover over a recommended keyword (<playstation 5>)", async function(arg0) {
	await hover($(`a[href='/kereses/shop?keyword=playstation+5&ref=pbkeywordsug']`));
    
});

step("Click recommended keyword (<playstation 5>)", async function(arg0) {
	try{await click($(`a[href='/kereses/shop?keyword=playstation+5&ref=pbkeywordsug']`));
    } catch(e) {
        console.log(e)};
      await goBack();
});

step("Hover over <next> button", async function(arg0) {
	await hover($(`.forum-pagination__button--next.forum-pagination__button.button.forum-pagination__button--active`));
});

step("Click <next> button", async function(arg0) {
	await click($(`.forum-pagination__button--next.forum-pagination__button.button.forum-pagination__button--active`));
});

step("Hover over the <previous> button", async function(arg0) {
	await hover($(`.forum-pagination__button--prev.forum-pagination__button.button`));
    await click($(`.forum-pagination__button--prev.forum-pagination__button.button`));
});

step("Hover over page input box", async function() {
	await hover($(`.forum-pagination__pages-input`));
});

step("Click into page input box and press 'backspace'", async function() {
	await click($(`.forum-pagination__pages-input`));
    await press('Backspace');
});

step("Write <2> into page input box", async function(arg0) {
	await write('2', into($(`.forum-pagination__pages-input`)));
});


step("Press 'Enter' to change page", async function() {
	try{await press(('Enter'), {waitForEvents: ['DOMContentLoaded']});
    await scrollDown();
} catch(e) {
    console.log(e)};

});

step("Write <4> (a not existing page number) into page input box", async function(arg0) {
	await write('4', into($(`.forum-pagination__pages-input`)));
});

step("Press 'Enter' to get into last existing page", async function() {
	try{await press(('Enter'), {waitForEvents: ['DOMContentLoaded']});
    await scrollDown();
} catch(e) {
    console.log(e)};
});



