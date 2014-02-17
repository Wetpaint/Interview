var mainUrl = 'http://www.wetpaint.com/moms/video/virtual-puppy-room-corgi-stampede'; //maint URl we are testing
var params = {}; // object to hold the seperated query string

// helper function to break up the query string and return an object
function urlParamParser(url) {
    var paramslist = url.split("?")[1].split("&");
    for (var i = 0; i < paramslist.length; i++) {
        var element = paramslist[i].split("=");
        // console.log("adding " + element);
        params[element[0]] = element[1];
    }
    return params;
}

casper.test.begin('Test Google Analytic request', 11, function suite(test) {
    // simple assert to verify we are on the right page
    casper.start(mainUrl, function(res) {
        test.assertEquals(this.getCurrentUrl(), mainUrl, 'We are on the right URL');
    });

    // on load of a new page, find the __utm.gif file create the params object
    casper.on('resource.requested', function(requestData, resource) {
        if(requestData.url.indexOf("__utm.gif") != -1) {
            params = urlParamParser(requestData.url);
        }
    });

    // Assert values are correct in the query string
    casper.then(function() {
        // this.echo("UTME: " + params.utme); //
        // this.echo("UTMAC: " + params.utmac);
        // this.echo("UTMP: " + params.utmp);
        test.assertEquals(params.utme.toString().indexOf('moms_video') != -1, true, "moms_video located within utme");
        test.assertEquals(params.utme.toString().indexOf('Direct') != -1, true, "Direct located within utme");
        test.assertEquals(params.utmac,"UA-10597003-4", "utmac equals UA-10597003-4");
        test.assertEquals(params.utmp !== null, true, "utmp is present");
    });

    // find the author link and click it
    casper.then(function(){
        var authorSelector = 'span.author a'
        test.assertSelectorHasText(authorSelector, 'Daynah Burnett');
        this.click(authorSelector);
    });

    // Just debug msg to make sure we clicked and went to the new urls
    casper.then(function() {
        console.log('clicked ok, new location is ' + this.getCurrentUrl());
    });

    // Assert values are correct in the query string, on a new url
    casper.then(function() {
        // this.echo("UTME: " + params.utme);
        // this.echo("UTMAC: " + params.utmac);
        // this.echo("UTMP: " + params.utmp);
        test.assertEquals(params.utme.toString().indexOf('none_publishable_rollup') != -1, true, "moms_video located within utme");
        test.assertEquals(params.utme.toString().indexOf('Direct') != -1, true, "Direct located within utme");
        test.assertEquals(params.utme.toString().indexOf('moms') == -1, true, "moms not located within utme");
        test.assertEquals(params.utmac,"UA-10597003-4", "utmac equals UA-10597003-4");
        test.assertEquals(params.utmp !== null, true, "utmp is present");
    });

    // Start running the test
    casper.run(function() {
        this.test.done();
        this.echo("Done.").exit();
    });
});