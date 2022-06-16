import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width >= 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    if (size.width <= 768) {
      setMenuOpen((p) => !p);
    }
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <Link to="/" className={classes.header__content__logo}>
          Home
        </Link>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link to="/todolist" onClick={menuToggleHandler}>
                Todo List
              </Link>
            </li>
            <li>
              <Link to="/progressbar" onClick={menuToggleHandler}>
                Progress Bar
              </Link>
            </li>
            <li>
              <Link to="/mindmaps" onClick={menuToggleHandler}>
                Mindmaps
              </Link>
            </li>
          </ul>
        </nav>
        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
