Feature: Login through Hamburger Icon

  Scenario: click on Login through Hamburger Icon
    Given I am on Gofan website
    And I click on hamburger icon
    And I click on LogIn on Side Panel
    Then I should see Log In Panel
    And I enter my email address
    And I enter my password
    And I click login button
    Then I should not see Log In Panel