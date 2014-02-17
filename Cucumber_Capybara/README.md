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