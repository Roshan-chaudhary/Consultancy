"use client";

import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Facebooklogo from "../../../public/logo/fblogo.png";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import Nav from "./home/Nav";

const NavBar = () => {
  return (
    <>
      <header className="px-10 pt-2 pb-2 css-bg-primary w-100 css-font-1 text-xs ">
        <div className="top_bar text-white grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="top_left_bar_info flex flex-row gap-2  justify-center md:justify-center lg:justify-start text-center">
            <span>
              <a href="mailto:info@aspireglobal.education">
                info@aspireglobal.education
              </a>
            </span>
            <span>
              <a href="">+977-9703184300</a>
            </span>
          </div>

          <div className="top_right_bar_info flex flex-row  justify-center lg:justify-end gap-6">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=971552061758"
            >
              <span>
                <FaWhatsapp
                  style={{
                    backgroundColor: "green",
                    borderRadius: "50%",
                    color: "white",
                    width: "25px",
                    height: "25px",
                  }}
                />
              </span>
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61556941803933"
            >
              <span>
                <CiFacebook
                  style={{
                    backgroundColor: "#316FF6",
                    borderRadius: "50%",
                    color: "white",
                    width: "25px",
                    height: "25px",
                  }}
                />
              </span>
            </a>

            <a
              target="_blank"
              href="https://www.instagram.com/aspire_glob_education/"
            >
              <span>
                <FaInstagram
                  className="instagram"
                  style={{
                    backgroundColor: "#316FF6",
                    borderRadius: "50%",
                    color: "white",
                    width: "25px",
                    height: "25px",
                  }}
                />
              </span>
            </a>
          </div>
        </div>
      </header>

      <>
        <Nav />
      </>
    </>
  );
};

export default NavBar;
