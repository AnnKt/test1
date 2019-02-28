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
    And User clicks "LogIn Button" ".active div.btn-group.center button"
    Then User navigates to the "Vendor" page with url "https://thinkmobiles.com/profile/manage-team/"

  Scenario: 1: send invitation email with *

    When User enters "********@gmail.com" in field "#invitation-email div"
    Then User clicks "button""#invitation-email button"



