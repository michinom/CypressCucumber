Feature: Actions
  #The below scenario is just to check the Cucumber integration; it's not a valid scenario
  Scenario: 01. Dummy Cucumber Test Scenario
    Given I'm on the homepage
    When I type in "slow.typing@email.com" slowly
    Then the following email address should be in the field:
      | Email                 |
      | slow.typing@email.com |