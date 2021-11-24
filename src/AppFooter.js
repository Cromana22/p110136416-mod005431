import React from 'react';

function AppFooter() {
    return (
      <div className="AppFooter">
        <footer className="page-footer">
          <div className="row">
            <div className="container col m4 s12">
              <address>
                <b>Company Name</b>
                <br />Address1
                <br />Address2
                <br />Town
                <br />Postcode
              </address>
            </div>
            <div className="container col m4 s12">
              <address>
                Sales: 01733 123 123
                <br />Support: 01733 123 123
                <br />General Enquiries: 01733 123 123
                <br />Press: pr@getbaking.com
              </address>  
            </div>
            <div className="container col m4 s12">
              Something else here
            </div>
          </div>

          <div className="row footer-copyright hide-on-med-and-up center-align" name="small footer">
            <div className="col s12">
              <br />
              <a className="white-text" href="www.facebook.com"><i className="fa fa-facebook-official"></i>&nbsp;&nbsp;</a>
              <a className="white-text" href="www.pinterest.com"><i className="fa fa-pinterest-p"></i>&nbsp;&nbsp;</a>
              <a className="white-text" href="www.twitter.com"><i className="fa fa-twitter"></i>&nbsp;&nbsp;</a>
              <a className="white-text" href="www.flickr.com"><i className="fa fa-flickr"></i>&nbsp;&nbsp;</a>
              <br />
              <br />
              © 2021 Copyright Text
            </div>
          </div>

          <div className="row footer-copyright hide-on-small-only" name="medium footer">
            <div className="col m4">
              © 2021 Copyright Text
            </div>

            <div className="col m8 right-align">
              <a className="white-text" href="www.facebook.com"><i className="fa fa-facebook-official"></i>&nbsp;&nbsp;Facebook&nbsp;&nbsp;</a>
              <a className="white-text" href="www.pinterest.com"><i className="fa fa-pinterest-p"></i>&nbsp;&nbsp;Pinterest&nbsp;&nbsp;</a>
              <a className="white-text" href="www.twitter.com"><i className="fa fa-twitter"></i>&nbsp;&nbsp;Twitter&nbsp;&nbsp;</a>
              <a className="white-text" href="www.flickr.com"><i className="fa fa-flickr"></i>&nbsp;&nbsp;Flickr&nbsp;&nbsp;</a>
            </div>
          </div>
        </footer>
      </div>
    )
  }
  
  export default AppFooter