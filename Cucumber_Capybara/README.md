Setup
=====
I am using the [poltergeist](https://github.com/jonleighton/poltergeist), a headless driver for [Capybara](https://github.com/jnicklas/capybara), so PhantomJs will need to be installed.

* [PhantomJs v 1.9](http://phantomjs.org/)

Run the bundler insall command, inorder to get all the `gem` dependancies.
```no-highlight
$ bundle install
```
This will install the following `gems`:
* capybara
* cucumber
* rspec
* poltergeist

Layout
======
`.` - Root directory. Where you will find this README and the Gemfile.

`./features` - Location of [Gherkins](https://github.com/cucumber/cucumber/wiki/Gherkin) syntax .feature files.

`./features/step_definitions` - This is where the definitions for each step belong

`./features/support` - Helper functions and setting up driver enviroments/configurations

Usage
=====
To run my feature after installing dependancies via the command line
```no-highlight
$ cucumber
```
or more specific
```no-highlight
$ cucumber features/wetpaint.feature
```

If all goes to plan you should see the following in `stdout`:

```no-light
Feature: Google Analytic GET response
  In order to verify Google Analytics is getting proper params
  As a user
  I want to see what is in the __utm.gif

  Background:                                                                            # features/wetpaint.feature:6
    Given I am on "http://www.wetpaint.com/moms/video/virtual-puppy-room-corgi-stampede" # features/step_definitions/wetpaint_steps.rb:8
      {"status"=>"success"}

  Scenario: Verify google analytic request                                               # features/wetpaint.feature:9
    When I recieve a Google Analytics request                                            # features/step_definitions/wetpaint_steps.rb:12
    Then I should see the following parameter value pair:                                # features/step_definitions/wetpaint_steps.rb:22
      [{"param"=>"utme", "value"=>"moms_video"}, {"param"=>"utme", "value"=>"Direct"}, {"param"=>"utmac", "value"=>"UA-10597003-4"}]
      | param | value         |
      | utme  | moms_video    |
      | utme  | Direct        |
      | utmac | UA-10597003-4 |
    And parameter "utmp" exists                                                          # features/step_definitions/wetpaint_steps.rb:34

  Scenario: Click Author link and google analytic request                                # features/wetpaint.feature:18
    Then I click author "Daynah Burnett"                                                 # features/step_definitions/wetpaint_steps.rb:38
      {"status"=>"success"}
    When I recieve a Google Analytics request                                            # features/step_definitions/wetpaint_steps.rb:12
    Then I should see the following parameter value pair:                                # features/step_definitions/wetpaint_steps.rb:22
      [{"param"=>"utme", "value"=>"none_publishable_rollup"}, {"param"=>"utme", "value"=>"Direct"}, {"param"=>"utmac", "value"=>"UA-10597003-4"}]
      | param | value                   |
      | utme  | none_publishable_rollup |
      | utme  | Direct                  |
      | utmac | UA-10597003-4           |
    And I should not see the following parameter value pair:                             # features/step_definitions/wetpaint_steps.rb:22
      [{"param"=>"utme", "value"=>"moms"}]
      | param | value |
      | utme  | moms  |

2 scenarios (2 passed)
9 steps (9 passed)
0m25.437s
```