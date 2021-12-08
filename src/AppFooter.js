import React from 'react';
import { Link } from 'react-router-dom';

function AppFooter() {
    return (
      <div className="AppFooter" id="no-print">
        <footer className="page-footer pink accent-1 yellow-text text-accent-1">
          <div className="row">
            <div className="container col m4 s12">
              <address>
                <b>Get Baking</b>
                <br />University Centre Peterborough
                <br />Park Crescent
                <br />Peterborough
                <br />PE1 4DZ
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
            <div className="container col m4 hide-on-small-only">
              <b>Site Links</b>
              <br /><Link to="/home" className="yellow-text text-accent-1">Home</Link>
              <br /><Link to="/blog" className="yellow-text text-accent-1">Blog</Link>
              <br /><Link to="/recipes" className="yellow-text text-accent-1">Recipes</Link>
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
              <a className="white-text" href="https://www.facebook.com"><i className="fa fa-facebook-official"></i>&nbsp;&nbsp;Facebook&nbsp;&nbsp;</a>
              <a className="white-text" href="https://www.pinterest.com"><i className="fa fa-pinterest-p"></i>&nbsp;&nbsp;Pinterest&nbsp;&nbsp;</a>
              <a className="white-text" href="https://www.twitter.com"><i className="fa fa-twitter"></i>&nbsp;&nbsp;Twitter&nbsp;&nbsp;</a>
              <a className="white-text" href="https://www.flickr.com"><i className="fa fa-flickr"></i>&nbsp;&nbsp;Flickr&nbsp;&nbsp;</a>
            </div>
          </div>
        </footer>
      </div>
    )
  }
  
  export default AppFooter