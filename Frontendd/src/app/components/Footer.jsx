import React from "react";
import Logo from "../../../public/logo/logo.jpg";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="flex items-center flex-col justify-center bg-[#333] pt-16 pb-9 mt-28">
        <div className="w-11/12">
          {/* footer basic links  */}
          <div className="grid grid-cols-1 md:grid-cols-2  justify-between">
            <div className="items flex flex-col">
              <p className="text-5xl text-white w-[200px] font-bold">
                <img src="/logo/logo-square.png" alt="" />
              </p>
            </div>
            {/* <div className="items flex flex-col">
              <p className="text-white font-bold text-lg">Scholarships</p>
              <Link
                href="/study-in-uk"
                className="mt-3 text-sm text-white transition ease-in-out duration-150 font-bold hover:text-[#b45053]"
              >
                Student Visa in Uk
              </Link>

              <Link
                href="/study-in-dubai"
                className="mt-1 text-sm text-white transition ease-in-out duration-150 font-bold hover:text-[#b45053]"
              >
                Student Visa in Dubai
              </Link>
              <Link
                href="/study-in-usa"
                className="mt-1 text-sm text-white transition ease-in-out duration-150 font-bold hover:text-[#b45053]"
              >
                Student Visa in USA
              </Link>
              <Link
                href="/study-in-malta"
                className="mt-1 text-sm text-white transition ease-in-out duration-150 font-bold hover:text-[#b45053]"
              >
                Student Visa in Malta
              </Link>
            </div>
            <div className="items flex flex-col">
              <p className="text-white font-bold text-lg">Support</p>
              <Link
                href="/study-in-uk"
                className="mt-3 text-sm text-white transition ease-in-out duration-150 font-bold hover:text-[#b45053]"
              >
                Student Visa in Uk
              </Link>

              <Link
                href="/study-in-dubai"
                className="mt-1 text-sm text-white transition ease-in-out duration-150 font-bold hover:text-[#b45053]"
              >
                Student Visa in Dubai
              </Link>
              <Link
                href="/study-in-usa"
                className="mt-1 text-sm text-white transition ease-in-out duration-150 font-bold hover:text-[#b45053]"
              >
                Student Visa in USA
              </Link>
              <Link
                href="/study-in-malta"
                className="mt-1 text-sm text-white transition ease-in-out duration-150 font-bold hover:text-[#b45053]"
              >
                Student Visa in Malta
              </Link>
            </div> */}
            <div className="items flex flex-col ml-auto">
              <p className="text-white font-bold text-lg">Contact Details</p>
              <a
                href="tel:9802374775"
                className="mt-3 text-sm text-white transition ease-in-out duration-150 font-bold hover:text-[#b45053]"
              >
                Call : 9802374775
              </a>

              <a
                href="tel:9802374774"
                className="mt-1 text-sm text-white transition ease-in-out duration-150 font-bold hover:text-[#b45053]"
              >
                Call : 9802374774
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=971552061758"
                className="mt-1 text-sm text-white transition ease-in-out duration-150 font-bold hover:text-[#b45053]"
              >
                Whatsapp : +971552061758
              </a>
              <a
                href="https://www.tiktok.com/@aspire.global.edu"
                className="mt-1 text-sm text-white transition ease-in-out duration-150 font-bold hover:text-[#b45053]"
              >
                Tiktok : @aspire.global.edu
              </a>
            </div>
          </div>
          {/* footer locations  */}
          {/* developer credit  */}
        </div>
      </footer>
      <div className="css-bg-primary text-white flex justify-between px-3 py-2 text-xs">
        <div>
          <a className="font-bold">Privacy Policy </a> Designed and Developer by
          <a href=""> BlueFox Pvt Ltd</a>
        </div>

        <div>
          <p>Study Abroad © All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
