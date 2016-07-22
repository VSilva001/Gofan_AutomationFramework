Feature: Buy Event Ticket

  Scenario: Buy Event Ticket
    Given I am on Gofan website
      And I search for my school name of "North Forsyth"
    Then I should see my School's Event Page
      And I select Upcoming Event "Forsyth Central Bulldogs" vs "North Forsyth Raiders"
    Then I should see Host School's event "Forsyth Central High School"
    Then I should see Qty box display
      And I select "1" ticket to buy for school event
    Then I should see Subtotal amount of "$50.00"
      And I click Buy Tickets
    Then I should see Your Cart page
    Then I should see Total amount purchase for tickets of "$50.00"
      And I click Login to Purchase Tickets
    Then I should see Log In Panel
      And I enter my email address
      And I enter my password
      And I click login button
    Then I should not see Log In Panel
      And I click Buy Tickets
      And I enter my Credit Card number
      And I enter my Credit Card expiration date
      And I enter my Credit Card CVC
      And I click Pay button
