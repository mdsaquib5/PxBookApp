import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";
import { PiShoppingCart } from "react-icons/pi";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <>
            <header className={`${scrolled ? "scrollto" : ""}`}>
                <div className="container">
                    <div className="headerContainer">
                        <div className="logo">
                            <Link to={'/'}>
                                <img src="/assets/images/header-logo.webp" alt="Header Logo" />
                            </Link>
                        </div>
                        <div className="searchMenu">
                            <div className="menu">
                                <div className="menu-btn" onClick={() => setShowMenu(!showMenu)}>
                                    <span>Menu</span> <FaChevronDown />
                                    {showMenu && (
                                        <ul className="menuItems">
                                            <li><Link to={'/'}>Home</Link></li>
                                            <li><Link to={'/'}>About</Link></li>
                                            <li><Link to={'/'}>Contact</Link></li>
                                            <li><Link to={'/'}>Login</Link></li>
                                            <li><Link to={'/'}>Register</Link></li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                            <div className="search">
                                <form action="">
                                    <input type="text" placeholder="Find books here..." />
                                    <button><CiSearch /></button>
                                </form>
                            </div>
                        </div>
                        <div className="headerBtns">
                            <div className="header-right">
                                <div className="cartIcon"><PiShoppingCart /></div>
                                <Link className="btn signInBtn" to={'/'}>Sign In</Link>
                                <button className="btn ctaBtn">Create Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar;