# ipon.hu search and search result page feature

From scenario #01 to #07 are the search (bar) feature tests, 
from #08 to #20 are the search result page feature tests.
At scenario #11 there are no discounted product with keyword 'playstation',
so I have used keyword "Call of Duty".

 

##01 - Search field can be made active and can be closed
* Open "ipon.hu" with headless mode "false"
* Click into the ipon.hu search field
* Close search field by clicking on other button ("Bejelentkezés")

##02 - Search bar result list is visible (after typing "playstation")
* Open "ipon.hu" with headless mode "false"
* Click into the ipon.hu search field
* Write "playstation" to search field
* Hover and click on the "dell" recommended keyword on result list

##03 - Search bar result cards are visible (after typing "playstation")
* Open "ipon.hu" with headless mode "false"
* Click into the ipon.hu search field
* Write "playstation" to search field
* Hover over search bar result card and click

##04 - Search bar results contains "ajánlott termékek" 
* Open "ipon.hu" with headless mode "false"
* Click into the ipon.hu search field
* Hover over "ajánlott termékek"(recommended products)

##05 - Search bar results contains "termékkategóriák"
* Open "ipon.hu" with headless mode "false"
* Click into the ipon.hu search field
* Hover over "termékkategóriák" (product categories)

##06 - Search bar results contains recommended keywords that can be chosen
* Open "ipon.hu" with headless mode "false"
* Click into the ipon.hu search field
* Write "playstation" to search field
* Hover over a recommended keyword ("playstation 5") 
* Click recommended keyword ("playstation 5")


##07  - Typing in the search field and getting into search result page is working
* Open "ipon.hu" with headless mode "false"
* Click into the ipon.hu search field
* Write "playstation" into the search field
* Press enter


##08 - The apperance of the product contains every related parts
* Open "ipon.hu/kereses/shop?keyword=playstation" with headless mode "false" 
* Check the image of the product by hovering over it
* Hover over Sony Playstation 5, the text is visible
* The price of the product is visible
* Hover over the cart button

##09 - Highlighting of product/Overlay link working
* Open "ipon.hu/kereses/shop?keyword=playstation" with headless mode "false"
* I check the overlay of the product by hovering and clicking on it

##10 - Writing into product quantity input box is working
* Open "ipon.hu/kereses/shop?keyword=playstation" with headless mode "false"
* Check the image of the product by hovering over it
* Hover over quantity input box
* Delete the number pressing "Backspace"
* Write "1" into quantity input box

##11 - Discounted products are distinctive, have got extra tags (badge, old price)
* Open "https://ipon.hu/kereses/shop?keyword=call%20of%20duty" with headless mode "false"
* Check the image of the discounted product by hovering over it (Call of D. - Black Ops III.xbox)
* Hover over the discount shop-card badge
* Hover over the old price
* Hover over new price

##12 -  Getting from search result page to product page is working
* Open "ipon.hu/kereses/shop?keyword=playstation" with headless mode "false"
* Check the image of the product by hovering over it
* Click the "Sony Playstation 5 controller" 


##13 - Adding a product to cart is functioning properly
* Open "ipon.hu/kereses/shop?keyword=playstation" with headless mode "false"
* Check the image of the "OEM playstation" product by hovering over it
* Click the cart button of the product
* Hover over the product image in the cart (basket) 
* Click the product image

##14 - Filtering - Category drop-down list is displayed
* Open "ipon.hu/kereses/shop?keyword=playstation" with headless mode "false"
* Hover over category filter
* Click category filter
* Hover over categories

##15 - Filtering - products can be sorted by categories
* Open "ipon.hu/kereses/shop?keyword=playstation" with headless mode "false"
* Hover over category filter
* Click category filter
* Hover over category "Játék"
* Click category "Játék"
* Scroll down and check one product expected to be a game in ("Játék") category

##16 - Filtering - The order drop-down list is displayed
* Open "ipon.hu/kereses/shop?keyword=playstation" with headless mode "false"
* Hover over order drop-down list
* Order drop-down list opens and collapses by clicking

##17 - Filtering -  Products can be sorted in order
* Open "ipon.hu/kereses/shop?keyword=playstation" with headless mode "false"
* Hover over order drop-down list
* Click order drop-down list and choose a category ("Legolcsóbb elől")

##18 - Pagination - changing pages by clicking is functioning
* Open "ipon.hu/kereses/shop?keyword=playstation" with headless mode "false"
* Hover over "next" button
* Click "next" button
* Hover over the "previous" button


##19 - Pagination - changing pages by typing in the page input box is functioning
* Open "ipon.hu/kereses/shop?keyword=playstation" with headless mode "false"
* Hover over page input box
* Click into page input box and press 'backspace'
* Write "2" into page input box
* Press 'Enter' to change page

##20 - Pagination - typing a not existing page number in the page input box
* Open "ipon.hu/kereses/shop?keyword=playstation" with headless mode "false"
* Hover over page input box
* Click into page input box and press 'backspace'
* Write "4" (a not existing page number) into page input box
* Press 'Enter' to get into last existing page




