@Regression
Feature: test-feature

  Background:
    Given User prints comment "User navigates to the ThinkMobiles page"
    When User navigates to the "ThinkMobiles" page with url "https://thinkmobiles.com/profile/manage-team/"
    And Page title is equal to "ThinkMobiles"
    And User clicks "e-mail field" "#urlTabsWrap .active div:nth-child(2) input"
    And User enters "admin@ilead.io" in "e-mail field" ".active [name='email']"
    And User clicks "password field" ".active [name='password']"
    And User enters "12345678" in "password field" ".active [name='password']"
    When User waits 4000 seconds
    And User clicks "LogIn Button" ".active div.btn-group.center button"
    When User waits 4000 seconds
    Then User navigates to the "Vendor" page with url "https://thinkmobiles.com/profile/manage-team/"
    When User waits 4000 seconds

  Scenario: 1: send invitation email with *

    When User enters "text@gmail.com" in "field" "#invitation-email > div > input"
    Then User clicks "button" "#invitation-email button"



