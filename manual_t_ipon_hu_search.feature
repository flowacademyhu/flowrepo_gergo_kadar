Feature: ipon.hu search and search result page feature
#browser used: Microsoft Edge

#01
  Scenario Outline: Search field can be made active
    Given I am on the homepage
     When I <click> the search field
     Then The search field is activated
     
    Examples:
        |click                             |
        |type something in                 |
        |click the (search) magnifier icon |

#02
  Scenario: Search field closes properly
    Given I am on the homepage
      And The search field is activeted
     When I click outside of the search field and drop-down menu
     Then The drop-down menu collapses
      And The home page is displayed as default

#03
  Scenario: Parts of search field are visible 
    Given I am on the homepage
     When I <click> the search field
     Then The search field is activated
      And The a drop-down menu is shown with recommended key words
      And Recommended products ("Ajánlott termékek") are shown
      And A list of product categories ("Termékkategóriák") is displayed

    Examples:
        |click                                        |
        |type something in                            |
        |click the (search) magnifier icon in left of |

#04
  Scenario: Recommended products are visible (at search field-drop down menu)
    Given I am on the homepage
     When I activate the search field
     Then The search field drop-down menu should be dropped down
      And contain the recommended products with their image
      And A text should be displayed with prod.name and short description right to the image
      And The price of the product should be dipslayed right to the image and under the the text

#05
  Scenario Outline: Type in the search field is working
    Given I am on the homepage
     When I type the word <playstation>
     Then The a drop-down menu is shown
      And Recommended product list is displayed related to the word <playstation>
      And Recommended keywords are displayed on a list

    Examples:
        |playstation|playstation| 
        |play       |play       | 
        |station    |station    | 

#06 
  Scenario Outline: Getting into search result page is working
    Given I am on the homepage
     When I type the word "playstation" in the search field
      And I <click any of the results>
     Then The search result page is shown

     Examples:
        |click any of the results| 
        |press enter                |

#07
  Scenario: The apperance of the product contains every related parts
    Given I am on "playstation" search result page
     When I check the image of the product
     Then A text (with the prod.name and short description) should be dipslayed under the image
      And The price of the product should be displayed under the a text

#08
  Scenario: Highlighting of a product is working
    Given I am on "playstation" search result page
     When I hover over the image of the product
     Then The product (with the related parts) and its background should be highlighted

#09
  Scenario: The highlighted product contains every related parts
    Given I am on "playstation" search result page
     When I hover over the image of the product
     Then The product and the background should be highlighted
      And A text (with prod. name) should be dipslayed under the image
      And The price of the product should be displayed under the a text
      And A green cart icon should be displayed under the text
      And An input box (for type in the quantity) should be seen left to the cart icon

#10
  Scenario: The product quantity input box can handle when Not a Number is typed in
    Given I am on "playstation" search result page
      And I hovered over the image of the product
     When I type in the product quantity box
      But it is not a number
     Then It should not be displayed
      And A Nan (Not a Number) text should fill the input box

#11
  Scenario: Discounted products are distinctive, have got extra tags
    Given I am on "playstation" search result page
      And There are products with discounted prices in the list
     When I check the image of the discounted product
     Then A red price tag should be seen above the image
      And The amount of the discount (money  or percentage) should be displayed in the tag
      And The older price should be displayed in red, and crossed out (place: below the prod.name)
      And The new price should be displayed below the old price, with the regular colour (dark blue)

#12
  Scenario: Priority discounted products are distinctive, have got extra tags
    Given I am on "playstation" search result page
      And There are products with discounted prices and prioritized ("kiemelt") on the search result list
     When I check the image of the prioritized ("kiemelt") and discounted product
     Then The product image and the sorrounding area should have a purple frame
      And A purple text "kiemelt" should be seen above the image
      And A red price tag should be seen above the (product) image
      And The amount of the discount (money  or percentage) should be displayed in the tag
      And The previous price should be crossed out and displayed in red (place: below the prod.name)
      And The new price should be displayed below the previous price

#13
  Scenario: Getting from search result page to product page is working
    Given I am on "playstation" search result page
     When I click the image of a product
     Then The related product page should be displayed

#14
  Scenario: Adding a product to cart is functioning properly
    Given I am on "playstation" search result page
     When I click the cart icon under the picture of the product
      And I type in the number of the wanted quantity next to the cart icon
     Then A "cart/basket" side menu is floated in with the related content

#15
  Scenario: Filtering - Category drop-down list is displayed
    Given I am on "playstation" search result page
     When I click on "kategória" (category) drop-down list
     Then I drop-down list should be displayed with various categories
      And A check box should be dipslayed next to every category

#16
  Scenario Outline: Filtering - products can be sorted by categories
    Given I am on "playstation" search result page
     When I click on the "kategória" (category) filter
      And I select the <játék> category
     Then The check-box is checked
      And the <játék> products should be displayed only

     Examples:
        |játék          | 
        |konzol tartozék|
        |gamer szék     |

#17
  Scenario: Filtering -  The order/rank drop-down list is displayed
    Given I am on "playstation" search result page
     When I click on the "sorrend" (order) drop-down list
     Then A drop-down list should be displayed (with different categories)

#18
  Scenario Outline: Filtering - products can be sorted in order
    Given I am on "playstation" search result page
      And The order drop-down list is in the default state ("legnépszerűbb elől")
     When I click on the "sorrend" (order) drop-down list
      And I click on the <legnépszerűbb elől> category
     Then Drop-down should be displayed
      And The products should be sorted by <popularity, most popular to the least> 
     
    Examples:
        |legnépszerűbb elől|popularity, most popular to the least                           |
        |legolcsóbb elől   |price, lowest to highest                                        |
        |legdrágább elől   |price, highest to lowest                                        | 
        |legújabb elől     |release, newest to the least new                                |
        |kedvezmény        |having a discount, from those which have to those which haven't |              |


#20
  Scenario: Related searches buttons are visible
    Given I am on the home page
     When I type the word "playstation" in the search field
      And I click any of the results
     Then The search result page is shown
      And The related search words should be displayed below the search field in purple buttons

#21 
  Scenario Outline: Pagination - changing pages by clicking is functioning
    Given I am on "playstation" search result page, <1. page>
     When I click <next page icon>
     Then The <next> page should be dipslayed

    Examples:
        |1.page         | next page icon    | next     |
        |2.page         | previous page icon| previous |

#22
  Scenario: Pagination - changing pages by typing in the page input box is functioning
    Given I am on "playstation" search result page
     When I type in the input box a number of an existing page 
     Then The page number I typed should be dipslayed

#23
  Scenario: Pagination - typing a not existing page number in the page input box
    Given I am on "playstation" search result page
     When I type a number in the input box 
      But This number is higher than the existing highest page number 
     Then The page with highest number available should be dipslayed





