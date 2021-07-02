import React from 'react'
import "./Header.css";
import {Link} from "react-router-dom";
import {Search} from "react-bootstrap-icons";

function Header() {
    return (
        <nav className = "header">
            {/*logo(img), Search box, 3 Links, Basket icon with number*/}
            <Link to = "/">
            <img 
              className = "header_logo" 
              alt = "amazon-logo" 
              src = "https://i2.wp.com/www.jitsvinger.co.za/wp-content/uploads/2018/04/Amazon-Logo-1024x373.png" 
            />
            </Link>
            <div className = "header_search">
                <input type = "text" className = "header_searchInput" />
                <Search className = "header_searchIcon" />
            </div>
            
        </nav>
    )
}

export default Header
