import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import 'remixicon/fonts/remixicon.css'


const Navbar = () => {

  const [user, loading, error] = useAuthState(auth);


  const logout=()=>{
    signOut(auth);
  }

  const mneuItems = (
    <>
      <li>
        <Link to="/" href="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/marketplace">Marketplace</Link>
      </li>
      <li>
        <Link to="/seller">Seller</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/create">Create</Link>
      </li>
      <li>
       {user ? <button class="btn btn-ghost" onClick={logout}>SignOut</button>: <Link to="/login">LogIn</Link>}
      </li>
    </>
  );
  return (
    <div class="navbar bg-base-100 sticky  top-0 z-50">
      <div class="navbar-start ">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {mneuItems}
          </ul>
        </div>
        <h2 className=" d-flex gap-2 align-items-center ">
              <span>
                <i class="ri-fire-fill"></i>
              </span>
              000
            </h2>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">{mneuItems}</ul>
      </div>
      <div class="navbar-end">
        <a class="btn">Connect Wallet</a>
      </div>
    </div>
  );
};

export default Navbar;
