"use client";

import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";
import axios from "axios";

const navItems = [
  { path: "/about", text: "About" },
  { path: "/contact", text: "Contact" },
  { path: "/pricing", text: "Pricing" },
];

const Navbar = () => {


  const handleClick = async () => {
    axios
      .get("https://betaasistencia.uao.edu.co/")
      .then(function (response) {
        // manejar respuesta exitosa
        console.log(response);
      })
      .catch(function (error) {
        // manejar error
        console.log(error);
      });
  };
  return (
    <nav className="flex bg-blue-800 bg opacity-3 p-2 m-2 rounded">
      <Link href={"/"} className="flex items-center">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>

      <button onClick={handleClick}>Peticion</button>

      <div className="flex flex-1"></div>
      {navItems.map((navItem) => (
        <ActiveLink key={navItem.path} {...navItem} />
      ))}
    </nav>
  );
};

export default Navbar;
