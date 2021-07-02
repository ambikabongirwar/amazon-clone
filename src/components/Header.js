import React from 'react'
import "./Header.css";
import {Link} from "react-router-dom";
import {Search} from "react-bootstrap-icons";

function Header() {
    return (
        <nav className = "header">
            {/*logo(img), Basket icon with number*/}
            <Link to = "/">
            <img 
              className = "header_logo" 
              alt = "amazon-logo" 
              src = "https://i2.wp.com/www.jitsvinger.co.za/wp-content/uploads/2018/04/Amazon-Logo-1024x373.png" 
            />
            </Link>
            {/*Search box*/}
            <div className = "header_search">
                <input type = "text" className = "header_searchInput" />
                <Search className = "header_searchIcon" />
            </div>
            {/*3 Links */}
            <div className = "header_nav">
                <Link to = "/login" className = "header_link">
                    <div className = "header_option">
                        <span className = "header_optionLineOne">Hello Ambika</span>
                        <span className = "header_optionLineTwo">Sign In</span>
                    </div>
                </Link>

                <Link to = "/" className = "header_link">
                    <div className = "header_option">
                        <span className = "header_optionLineOne">Returns</span>
                        <span className = "header_optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <Link to = "/" className = "header_link">
                    <div className = "header_option">
                        <span className = "header_optionLineOne">Your</span>
                        <span className = "header_optionLineTwo">Prime</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
