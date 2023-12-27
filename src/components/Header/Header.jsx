import React, { useEffect, useState } from "react";
import Classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import MobileMenu from "../MobileMenu/MobileMenu";
import BurgerIcon from "../Icons/BurgerIcon";
import CartIcon from "../Icons/CartIcon";

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(null);

  useEffect(() => {
    // Cleanup function
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const showMobileMenuHandler = () => {
    document.body.style.overflow = "hidden";
    setShowMobileMenu((state) => !state);
  };

  const hideMobileMenuHandler = () => {
    document.body.style.overflow = "unset";
    setShowMobileMenu((state) => !state);
  };

  const scrollToElement = (id) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        if (showMobileMenu) {
          hideMobileMenuHandler();
        }
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, [1]);
  };

  return (
    <header className={Classes.full__container}>
      {showMobileMenu && (
        <MobileMenu
          onClick={hideMobileMenuHandler}
          scrollToElement={scrollToElement}
        />
      )}
      <div className={`container ${Classes.big__screen__main}`}>
        <div className={Classes.menuBtn}>
          <BurgerIcon onClick={showMobileMenuHandler} />
        </div>
        <Logo />
        <div className={Classes.sections}>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/shop" onClick={scrollToElement.bind(this, "shop")}>
            Shop
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink
            to="/contact"
            onClick={scrollToElement.bind(this, "contact")}
          >
            Contact
          </NavLink>
        </div>

        <CartIcon />
      </div>
    </header>
  );
}

export default Header;
