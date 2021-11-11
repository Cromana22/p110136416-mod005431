import React from 'react';

function AppFooter() {
    return (
      <div className="AppFooter">
        <footer class="page-footer">
          <div class="row">
            <div class="container col m4 s12">
              <address>
                <b>Company Name</b>
                <br />Address1
                <br />Address2
                <br />Town
                <br />Postcode
              </address>
            </div>
            <div class="container col m4 s12">
              <address>
                Sales: 01733 123 123
                <br />Support: 01733 123 123
                <br />General Enquiries: 01733 123 123
                <br />Press: pr@getbaking.com
              </address>  
            </div>
            <div class="container col m4 s12">
              Something else here
            </div>
          </div>

          <div class="row footer-copyright hide-on-med-and-up center-align">
            <div class="col s12">
              <br />
              <a class="white-text" href="www.facebook.com"><i class="fa fa-facebook-official"></i>&nbsp;&nbsp;</a>
              <a class="white-text" href="www.pinterest.com"><i class="fa fa-pinterest-p"></i>&nbsp;&nbsp;</a>
              <a class="white-text" href="www.twitter.com"><i class="fa fa-twitter"></i>&nbsp;&nbsp;</a>
              <a class="white-text" href="www.flickr.com"><i class="fa fa-flickr"></i>&nbsp;&nbsp;</a>
              <br />
              <br />
              © 2021 Copyright Text
            </div>
          </div>

          <div class="row footer-copyright hide-on-small-only">
            <div class="col m4">
              © 2021 Copyright Text
            </div>

            <div class="col m8 right-align">
              <a class="white-text" href="www.facebook.com"><i class="fa fa-facebook-official"></i>&nbsp;&nbsp;Facebook&nbsp;&nbsp;</a>
              <a class="white-text" href="www.pinterest.com"><i class="fa fa-pinterest-p"></i>&nbsp;&nbsp;Pinterest&nbsp;&nbsp;</a>
              <a class="white-text" href="www.twitter.com"><i class="fa fa-twitter"></i>&nbsp;&nbsp;Twitter&nbsp;&nbsp;</a>
              <a class="white-text" href="www.flickr.com"><i class="fa fa-flickr"></i>&nbsp;&nbsp;Flickr&nbsp;&nbsp;</a>
            </div>
          </div>
        </footer>
      </div>
    )
  }
  
  export default AppFooter