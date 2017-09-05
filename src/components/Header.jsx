import React from 'react';

const Header = ({navItems}) => (
  <header className="header">
    <h1 className="header__logo">
      Plutos
    </h1>
    <nav className="header__nav">
      <ul className="header__nav-list">
        {navItems.map((item, index) => (
          <li key={index} className="header__nav-item">
            <a href={item.href} target="_self" className="header__nav-link">{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

module.exports = Header;
