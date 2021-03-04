import React from 'react';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Sign Up</a></li>
                            <li><a href="#">Auctions</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/nellisauction/?hl=en"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/NellisAuction/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/nellisauction?lang=en"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="https://www.youtube.com/channel/UCYL1IGBBnfRthWdmkurgBkA/featured"><i className="fa fa-youtube" /></a> 
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;