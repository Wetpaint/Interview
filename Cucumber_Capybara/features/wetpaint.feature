Feature: Google Analytic GET response
  In order to verify Google Analytics is getting proper params
  As a user
  I want to see what is in the __utm.gif

Background:
  Given I am on "http://www.wetpaint.com/moms/video/virtual-puppy-room-corgi-stampede"

Scenario: Verify google analytic request
  When I recieve a Google Analytics request
  Then I should see the following parameter value pair:
  | param  | value         |  
  | utme   | moms_video    |
  | utme   | Direct        |
  | utmac  | UA-10597003-4 |
  And parameter "utmp" exists

Scenario: Click Author link and google analytic request
  Then I click author "Daynah Burnett"
  When I recieve a Google Analytics request
  Then I should see the following parameter value pair:
  | param  | value                      |
  | utme   | none_publishable_rollup    |
  | utme   | Direct                     |
  | utmac  | UA-10597003-4              |
  And I should not see the following parameter value pair:
  | param  | value   |
  | utme   | moms    |