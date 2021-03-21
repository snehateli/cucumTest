Feature:User login functionality
#Scenario:
#Given user is navigated to the fb page
#When user enters valid "23snehateli@gmail.com" and "iraashishjaiswal"
#Then user is logged in successfully

Scenario Outline:
Given user is navigated to the gmail page
When user enters valid "<username>" and "<password>"
Then user is logged in successfully
And user name is populated "<uname>"
Examples:
|username|password|uname|
|23snehateli@gmail.com|iraashishjaiswal|sneha|
|ashishank.20097@gmail.com|17@november|ashish|