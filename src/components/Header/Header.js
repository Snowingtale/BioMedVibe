import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";

const Header = ({ setCurrentSection }) => {
  const [menuActive, setMenuActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle Menu for Small Screens
  const toggleMenu = () => setMenuActive(!menuActive);

  return (
    <>
      {/* Desktop Header (Above 700px) */}
      <header
        className={`hidden sm:flex items-center justify-between bg-white shadow-md p-1 fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Medical Agency Logo" className="w-[150px] mr-6" />
        </div>

        {/* Navigation Buttons */}
        <nav className="space-x-4 flex justify-center">
  {["home", "services", "treatments", "about", "contact", "schedule"].map((section, index) => (
    <button
      key={index}
      onClick={() => setCurrentSection(section)}
      className="relative px-5 py-2 text-lg font-bold uppercase transition duration-300 transform bg-gradient-to-r from-primary to-primary-light text-white rounded-lg shadow-lg hover:shadow-xl hover:from-green-700 hover:to-green-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
    >
      {section === "home" && "Acasa"}
      {section === "services" && "Servicii"}
      {section === "treatments" && "Tratamente"}
      {section === "about" && "Despre noi"}
      {section === "contact" && "Contact"}
      {section === "schedule" && "Programeaza-te"}
    </button>
  ))}
</nav>

      </header>

      {/* Mobile Header (Under 700px) */}
      <div
  className={`sm:hidden fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-transform duration-300 ${
    isScrolled ? "shadow-lg" : ""
  }`}
>  
<div className="flex flex-row items-center justify-between w-full px-4 py-2 bg-white shadow-md">
  {/* Menu Button */}
  <button
    className={`${
      menuActive ? "bg-primary text-white" : "bg-primary text-white"
    } border border-green-700 px-4 py-2 rounded transition-all duration-300`}
    onClick={toggleMenu}
  >
    {menuActive ? "Close" : "Menu"}
  </button>

  {/* Logo */}
  <img
    src={logo}
    alt="Logo"
    className="w-20 h-auto object-contain" // Ensures the logo maintains its aspect ratio and adjusts well on mobile
  />
</div>


  {menuActive && (
    <nav className="bg-white shadow-md rounded-lg p-5 absolute top-14 left-4 right-10">
      <ul className="space-y-4">
        <li>
          <button
            onClick={() => {
              setCurrentSection("home");
              setMenuActive(false);
            }}
            className="bg-green-50 text-green-700 block w-full text-left px-5 py-2 rounded-lg shadow-md hover:bg-green-100 transition-all duration-300"
          >
            Acasa
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setCurrentSection("services");
              setMenuActive(false);
            }}
            className="bg-green-50 text-green-700 block w-full text-left px-5 py-2 rounded-lg shadow-md hover:bg-green-100 transition-all duration-300"
          >
            Servicii
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setCurrentSection("treatments");
              setMenuActive(false);
            }}
            className="bg-green-50 text-green-700 block w-full text-left px-5 py-2 rounded-lg shadow-md hover:bg-green-100 transition-all duration-300"
          >
            Tratamente
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setCurrentSection("about");
              setMenuActive(false);
            }}
            className="bg-green-50 text-green-700 block w-full text-left px-5 py-2 rounded-lg shadow-md hover:bg-green-100 transition-all duration-300"
          >
            Despre noi
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setCurrentSection("contact");
              setMenuActive(false);
            }}
            className="bg-green-50 text-green-700 block w-full text-left px-5 py-2 rounded-lg shadow-md hover:bg-green-100 transition-all duration-300"
          >
            Contact
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setCurrentSection("schedule");
              setMenuActive(false);
            }}
            className="bg-green-50 text-green-700 block w-full text-left px-5 py-2 rounded-lg shadow-md hover:bg-green-100 transition-all duration-300"
          >
            Programeaza-te
          </button>
        </li>
      </ul>
    </nav>
  )}
</div>

    </>
  );
};

export default Header;
