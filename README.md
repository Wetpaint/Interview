Test Problem
============

1. Open the URL [http://www.wetpaint.com/moms/video/virtual-puppy-room-corgi-stampede](http://www.wetpaint.com/moms/video/virtual-puppy-room-corgi-stampede)
2.  Verifies that a GET request was sent to [www.google-analytics.com](www.google-analytics.com) with the following parameters:
  * utme contains: “moms_video”, “Direct”
  * utmac equals:  “UA-10597003-4”
  * utmp exists (no specific content checks, only that it is present)
3. licks the “Daynah Burnett” link leading to the following URL: [http://www.wetpaint.com/author/daynah-burnett](http://www.wetpaint.com/author/daynah-burnett)
4. Repeating the verification from step 2 with these changes:
  * utme contains: "none_publishable_rollup", "Direct"
  * utme does NOT contain: “moms”
  * utmac equals:  “UA-10597003-4”


