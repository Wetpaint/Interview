Setup
=====
In order to properly run [wetpaint_casper.js], you will need to install the following dependancies

* [PhantomJs v 1.9](http://phantomjs.org/)
* [CasperJs v 1.1-beta3](http://casperjs.org/)

Usage
=====
To run the script we will use the `casperjs` command with the `test` subcommand. 

```no-highlight
$ casperjs test wetpaint_casper.js
```
If all goes to plan you should see the following in `stdout`:

```no-highlight
# Test Google Analytic request
PASS We are on the right URL
PASS moms_video located within utme
PASS Direct located within utme
PASS utmac equals UA-10597003-4
PASS utmp is present
PASS Find "Daynah Burnett" within the selector "span.author a"
clicked ok, new location is http://www.wetpaint.com/author/daynah-burnett
PASS moms_video located within utme
PASS Direct located within utme
PASS moms not located within utme
PASS utmac equals UA-10597003-4
PASS utmp is present
Done.
```
