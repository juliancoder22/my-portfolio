import { useState } from 'react';
import './Header.scss';
import LanguageIcon from '@mui/icons-material/Language';
import { Menu, MenuItem } from '@mui/material';
import ArrowRight from "../../assets/svg/lila-arrow-right.svg";
import Logo from "../../assets/LogoA_celestemedio.png";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [language, setLanguage] = useState('EN');

  const handleLanguageClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    handleLanguageClose();
  };

  return (
    <div className='header'>
      <img src={Logo} alt="Julian Aquino Logo" />

      <ul className='header__nav'>
        <li><span className='header__bar'>/ </span>Home</li>
        <li><span className='header__bar'>/ </span>Skills</li>
        <li><span className='header__bar'>/ </span>Experience</li>
        <li><span className='header__bar'>/ </span>About</li>
        <li onClick={handleLanguageClick}><LanguageIcon /> {language}</li>
        <li>Contact <img src={ArrowRight} alt="arrow right" /></li>
      </ul>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleLanguageClose}
        className='header__language-menu'
      >
        <MenuItem onClick={() => handleLanguageChange('EN')}>English</MenuItem>
        <MenuItem onClick={() => handleLanguageChange('ES')}>Español</MenuItem>
      </Menu>
    </div>
  );
};
