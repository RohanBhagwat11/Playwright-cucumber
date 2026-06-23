@login

Feature: Verify Login functionality

    Scenario: Successful login with valid credentials
        Given user navigate to login page
        When user enters valid username
        And user enters valid password
        And clicks on login button
        Then user should be navigated to SecureArea

    Scenario: Invalid login attempt
        Given user navigate to login page
        When user enters invalid username
        And user enters invalid password
        And clicks on login button
        Then error message should be displayed and url contains login

    Scenario: Verify error Message visibility
        Given user navigate to login page
        When user enters valid username
        And user enters invalid password
        And clicks on login button
        Then error message should be displayed

    Scenario: Verify logout functionality
        Given user navigate to login page
        When user enters valid username
        And user enters valid password
        And clicks on login button
        Then user should be navigated to SecureArea
        When user click on logout button
        Then user navigate back to login page

    Scenario Outline: Login with multiple credentials
        Given user navigate to login page
        When user enters username "<username>"
        And user enters password "<password>"
        And clicks on login button
        Then login result should be "<result>"

        Examples:
            | username   | password             | result        |
            | tomsmith   | SuperSecretPassword! | success       |
            | rahulgupta | notSecurePassword    | failure       |