var mainUrl = 'http://www.wetpaint.com/moms/video/virtual-puppy-room-corgi-stampede';
var params = {};

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
    casper.start(mainUrl, function(res) {
        test.assertEquals(this.getCurrentUrl(), mainUrl, 'We are on the right URL');
    });

    casper.on('resource.requested', function(requestData, resource) {
        if(requestData.url.indexOf("__utm.gif") != -1) {
            params = urlParamParser(requestData.url);
        }
    });

    casper.then(function() {
        // this.echo("UTME: " + params.utme); //
        // this.echo("UTMAC: " + params.utmac);
        // this.echo("UTMP: " + params.utmp);
        test.assertEquals(params.utme.toString().indexOf('moms_video') != -1, true, "moms_video located within utme");
        test.assertEquals(params.utme.toString().indexOf('Direct') != -1, true, "Direct located within utme");
        test.assertEquals(params.utmac,"UA-10597003-4", "utmac equals UA-10597003-4");
        test.assertEquals(params.utmp !== null, true, "utmp is present");
    });

    casper.then(function(){
        var authorSelector = 'span.author a'
        test.assertSelectorHasText(authorSelector, 'Daynah Burnett');
        this.click(authorSelector);
    });

    casper.then(function() {
        console.log('clicked ok, new location is ' + this.getCurrentUrl());
    });

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

    casper.run(function() {
        this.test.done();
        this.echo("Done.").exit();
    });
});