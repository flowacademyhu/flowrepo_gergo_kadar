szukits.hu features, high priority test cases (for smoke test)


Feature: Login
  Scenario: Successful login, writing credentials into input box
    Given I am on the homepage
     When I write an e-mail address into the e-mail input box
     And I write the password into the password input box
     Then The proper logged in status and user page should be seen


Feature: Search field 
  Scenario: Write in product name and search are working
    Given I am on the homepage
     When I write the "star wars" product name into the search field
     And I click "OK" button
     Then The list of the desired products should be seen



Feature: Menu categories 
  Scenario Outline: Category menu items can be chosen
    Given I am on the homepage
     When I click the <Akció> menu category
     Then The <Akció> subpage should be loaded

     Examples:
       | Akció         |
       | Előrendelhető |
       | Újdonság      |
       | Szállítás     |
       | Garancia      |
       | Vevőszolgálat | 


Feature: Cart
  Scenario: Add to cart is working
    Given I am on the page where the "Star Wars" searched products are seen(after search)
     When I click the "Kosárba" (add to cart) button under a product
     Then It should be added to cart (visually:with a floating to the cart)
     And The product should be seen at the cart, right side of the page


Feature: Cart
  Scenario: Remove product from cart is working
    Given I am on the cart page 
    And I added a product to cart
     When I press delete ("X") button under the products
     Then The product should be removed
     And An empty cart should be seen
     And a text should be seen with and empty cart message: "Az Ön kosara üres!"




Feature: Side menu categories
  Scenario Outline: Side menu items can be chosen
    Given I am on the homepage
     When I click the <Bestseller> side menu category
     Then The <Bestseller> subpage should be loaded

     Examples:
       | Bestseller        |
       | Szukits könyvek   |
       | Életrajz, interjú |
       | Science fiction   |
       | Fantasy           |

Feature: Homepage       
  Scenario: Getting into homepage is working
    Given I am on the "akció" category subpage
     When I click the "szukits.hu" logo on the top
     Then The homepage should be seen



Feature: Pagination
  Scenario: Pagination - Click the next page is working
    Given I am on the subpage where the "Star Wars" searched products are seen
     When I click the next page "Következő oldal" button
     Then The next page with product should be seen

Feature: Sorting
  Scenario: Sorting by given categories
    Given I am on the subpage where the "Star Wars" searched products are seen
     When I click on the sort ("Rendezés") drop-down
     And I choose the price ("ár") category
     Then The product should be sorted in order by price

Feature: Contact with the shop
  Scenario: A can send  message to costumer service ("Vevőszolgálat")
    Given I am on "Vevőszolgálat" subpage
    And I have filled all of the input fields with my message to the shop in it
     When I press the send ("Elküld button")
     Then A message with "Vevőszolgálat" header should be seen with the proper information


















