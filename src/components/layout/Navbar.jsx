import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";
import { PiShoppingCart } from "react-icons/pi";
import { useMediaQuery } from "react-responsive";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";

const Navbar = () => {

    const isTablet = useMediaQuery({ query: "(min-width: 1240px)" });

    const [showMenu, setShowMenu] = useState(false);
    const [showPanel, setShowPanel] = useState(false);
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
                        {isTablet && (
                            <div className="searchMenu">
                                <div className="menu">
                                    <div
                                        className={`menu-btn ${showMenu && 'open-menu'}`}
                                        onClick={() => setShowMenu(!showMenu)}
                                    >
                                        <span>Categories</span> <FaChevronDown />

                                        {showMenu && (
                                            <ul className="menuItems">
                                                <li><Link to="/">Home</Link></li>
                                                <li><Link to="/">About</Link></li>
                                                <li><Link to="/">Contact</Link></li>
                                                <li><Link to="/">Login</Link></li>
                                                <li><Link to="/">Register</Link></li>
                                            </ul>
                                        )}
                                    </div>
                                </div>

                                <div className="search">
                                    <form>
                                        <input type="text" placeholder="Find books here..." required />
                                        <button type="submit">
                                            <CiSearch />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}
                        <div className="headerBtns">
                            <div className="headerRight">
                                <Link className="cartIcon" to={'/'}><PiShoppingCart /></Link>
                                {isTablet && (
                                    <>
                                        <Link className="btn signInBtn" to={'/'}>Sign In</Link>
                                        <button className="btn ctaBtn">Create Account</button>
                                    </>
                                )}
                                {
                                    !isTablet && (
                                        <div className="mobileDrawer">
                                            {/* Drawer Toggle Button */}
                                            <button
                                                className="drawerToggle"
                                                onClick={() => setShowPanel(!showPanel)}
                                            >
                                                <RxHamburgerMenu />
                                            </button>

                                            {/* Drawer Panel */}
                                            <div className={`drawerPanel ${showPanel ? "open" : ""}`}>
                                                <button
                                                    className="drawerClose"
                                                    onClick={() => setShowPanel(false)}
                                                >
                                                    <CgClose />
                                                </button>
                                                <div className="panel">
                                                    <div className="search">
                                                        <form action="">
                                                            <input type="text" placeholder="Find books here..." required />
                                                            <button type="sumit"><CiSearch /></button>
                                                        </form>
                                                    </div>
                                                    <div className="menu">
                                                        <div className={`menu-btn ${showMenu && 'open-menu'}`} onClick={() => setShowMenu(!showMenu)}>
                                                            <span>Menu</span> <FaChevronDown />
                                                        </div>
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
                                                    <div className="navItems">
                                                        <Link className="btn signInBtn" to={'/'}>Sign In</Link>
                                                        <button className="btn ctaBtn">Create Account</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar;