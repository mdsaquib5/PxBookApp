import Cta from "../items/Cta";
import { MdCall } from "react-icons/md";
import { Link } from "react-router-dom";
import { LuMail } from "react-icons/lu";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoLogoApple } from "react-icons/io";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import BackToTop from "../ui/BacktoTop";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <Cta />
                    <div className="footerItems">
                        <div className="itemColumn-1">
                            <div className="logo">
                                <Link to={'/'}>
                                    <img src="/assets/images/footer-logo.webp" alt="Footer Logo" />
                                </Link>
                            </div>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui praesentium deleniti.</p>
                            <div className="callMail">
                                <div><MdCall /></div>
                                <Link to={'callto: +8801799999999'}>+8801799999999</Link>
                            </div>
                            <div className="callMail">
                                <div><LuMail /></div>
                                <Link to={'mailto: info@example.com'}>info@example.com</Link>
                            </div>
                        </div>
                        <div className="itemColumn-2">
                            <div className="footerTitles">Navigations</div>
                            <ul>
                                <li><Link to={'/'}>About us</Link></li>
                                <li><Link to={'/'}>FAQs Page</Link></li>
                                <li><Link to={'/'}>Checkout</Link></li>
                                <li><Link to={'/'}>Contact</Link></li>
                                <li><Link to={'/'}>Blog</Link></li>
                            </ul>
                        </div>
                        <div className="itemColumn-3">
                            <div className="footerTitles">New Categories</div>
                            <ul>
                                <li><Link to={'/'}>Adventure</Link></li>
                                <li><Link to={'/'}>Fiction</Link></li>
                                <li><Link to={'/'}>Mystery</Link></li>
                                <li><Link to={'/'}>Romance</Link></li>
                                <li><Link to={'/'}>Science Fiction</Link></li>
                            </ul>
                        </div>
                        <div className="itemColumn-4">
                            <div className="footerTitles">Help & Support</div>
                            <ul>
                                <li><Link to={'/'}>Live Chat</Link></li>
                                <li><Link to={'/'}>Shipping Policy</Link></li>
                                <li><Link to={'/'}>Return Policy</Link></li>
                                <li><Link to={'/'}>Privacy Policy</Link></li>
                                <li><Link to={'/'}>Terms & Conditions</Link></li>
                            </ul>
                        </div>
                        <div className="itemColumn-4">
                            <div className="footerTitles">Download Apps</div>
                            <div className="downapps">
                                <Link to={'/'}>
                                    <div><IoLogoGooglePlaystore fill="#000" /></div>
                                    <div className="appName">
                                        <div>Google Play</div>
                                        <p>Get it now</p>
                                    </div>
                                </Link>
                                <Link to={'/'}>
                                    <div><IoLogoApple fill="#000" /></div>
                                    <div className="appName">
                                        <div>Google Play</div>
                                        <p>Get it now</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="footerBottom">
                        <p>© 2025 All rights reserved by Px</p>
                        <div className="socialIcons">
                            <Link to={'/'}><FaFacebook /></Link>
                            <Link to={'/'}><FaTwitter /></Link>
                            <Link to={'/'}><FaInstagram /></Link>
                            <Link to={'/'}><FaYoutube /></Link>
                        </div>
                    </div>
                </div>
                <BackToTop />
            </footer>
        </>
    )
}

export default Footer;