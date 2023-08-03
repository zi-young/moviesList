import React from 'react';
import { NavLink} from "react-router-dom";
import styles from "../App.scss";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li className='nav-item logoBox'>
                    <NavLink to=""><img src={require("../img/Untitled-4.png")} alt="이미지1"  className={`${styles.logo1}`}/></NavLink>
                </li>
                <li className='nav-itme rightList'>
                    <NavLink to="">Home</NavLink>
                </li>
                <li className='nav-itme rightList'>
                    <NavLink to="movies">Movies</NavLink>
                </li>
                <li className='nav-itme rightList'>
                    <NavLink to="users">Users</NavLink>
                </li>
                <li className='nav-itme rightList'>
                    <NavLink to="users">Users</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;