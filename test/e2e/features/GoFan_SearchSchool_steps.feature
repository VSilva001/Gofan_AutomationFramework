Feature: Open GoFan Search Page

  Scenario: User search for a School
    Given I am on Gofan website
    And I search for my school name of "North Forsyth High School"
    Then I should see my School's Event Page