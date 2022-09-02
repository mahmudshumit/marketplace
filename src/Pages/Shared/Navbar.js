import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
        <Link to="/login">LogIn</Link>
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
        <a href="/" class="btn btn-ghost normal-case text-xl">
          CosMos
        </a>
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
